const fs = {
    "C:": {
        type: "dir",
        content: {
            "README.TXT": {
                type: "file",
                content: "MS-DOS Version 6.22\n(C) Copyright Microsoft Corp 1981-1994.\n\nWelcome to www.johanhattingh.za.org!\nType HELP for a list of available commands and instructions.\nUse DIR to explore files and CD to navigate folders."
            },
            "HELP.TXT": {
                type: "file",
                content: "AVAILABLE COMMANDS:\n  DIR              List directory contents\n  CD <dir>         Change directory (e.g. CD BLOG)\n  CD \\             Return to root directory\n  TYPE <file>      Display contents of a text file (e.g. TYPE TODAY.TXT)\n  CLS              Clear screen\n  MODE CO80        Switch to standard color 80-column mode\n  MODE CO40        Switch to wide 40-column text mode\n  MODE MONO        Switch to monochrome green phosphor mode\n  MODE AMBER       Switch to amber phosphor mode\n  DATE             Display current system date\n  TIME             Display current system time\n  VER              Display MS-DOS version\n  MATRIX.EXE       Run digital rain screensaver\n  DOOM.BAT         Play classic retro text battle\n  HACK.COM         Launch mainframe penetration tool"
            },
            "BLOG": {
                type: "dir",
                content: {
                    "TODAY.TXT": {
                        type: "file",
                        content: "Date: September 2026\nSubject: The Beauty of Command Lines\n\nThere is something profoundly liberating about pure text. No heavy DOMs, no bloated frameworks, just raw bytes and precise keystrokes. This site runs entirely on static HTML, CSS, and vanilla JS hosted on GitHub Pages.\n\nSimplicity is the ultimate sophistication."
                    },
                    "ARCHIVES.TXT": {
                        type: "file",
                        content: "BLOG ARCHIVES:\n- 2026-08-15: Setting up Cloudflare DNS with GitHub Pages\n- 2026-07-01: Why Retro Computing Inspires Modern Engineering\n- 2026-06-10: Hello World from www.johanhattingh.za.org"
                    }
                }
            },
            "SYSTEM": {
                type: "dir",
                content: {
                    "STATUS.BAT": {
                        type: "file",
                        content: "SYSTEM STATUS REPORT:\nHost: www.johanhattingh.za.org\nOS: MS-DOS 6.22 Emulator\nMemory: 640K Conventional / 16MB Extended\nNetwork: Online (Cloudflare Proxy / GitHub Pages)\nStatus: All systems nominal."
                    },
                    "CONFIG.SYS": {
                        type: "file",
                        content: "DEVICE=C:\\DOS\\HIMEM.SYS\nDEVICE=C:\\DOS\\EMM386.EXE NOEMS\nDOS=HIGH,UMB\nFILES=40\nBUFFERS=20\nSTACKS=9,256\nLASTDRIVE=Z\nSHELL=C:\\DOS\\COMMAND.COM /P /E:512\nCOUNTRY=001,437,C:\\DOS\\COUNTRY.SYS\nUSER=ID10T"
                    }
                }
            },
            "GAMES": {
                type: "dir",
                content: {
                    "MATRIX.EXE": { type: "exec", cmd: "matrix" },
                    "DOOM.BAT": { type: "exec", cmd: "doom" },
                    "HACK.COM": { type: "exec", cmd: "hack" }
                }
            }
        }
    }
};

let currentPath = ["C:"];
let inputEl = document.getElementById("command-input");
let outputEl = document.getElementById("output");
let promptTextEl = document.getElementById("prompt-text");
let terminalEl = document.getElementById("terminal");

function getDirByPath(pathArr) {
    let curr = fs;
    for (let p of pathArr) {
        if (curr[p] && curr[p].type === "dir") {
            curr = curr[p].content;
        } else {
            return null;
        }
    }
    return curr;
}

function getCurrentDir() {
    return getDirByPath(currentPath);
}

function updatePrompt() {
    let pathStr = currentPath.join("\\");
    if (pathStr.length > 2 && !pathStr.endsWith("\\")) {
        pathStr += "\\";
    }
    promptTextEl.textContent = pathStr + ">";
}

function printOutput(text) {
    outputEl.textContent += text + "\n";
    terminalEl.scrollTop = terminalEl.scrollHeight;
}

function init() {
    printOutput("MS-DOS Version 6.22");
    printOutput("(C) Copyright Microsoft Corp 1981-1994.\n");
    printOutput("Type HELP for instructions or DIR to view files.\n");
    updatePrompt();
    inputEl.focus();
}

document.addEventListener("click", () => {
    inputEl.focus();
});

inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        let cmd = inputEl.textContent.trim();
        printOutput(promptTextEl.textContent + " " + cmd);
        inputEl.textContent = "";
        processCommand(cmd);
        terminalEl.scrollTop = terminalEl.scrollHeight;
    }
});

function processCommand(rawCmd) {
    if (!rawCmd) return;
    let parts = rawCmd.split(/\s+/);
    let cmd = parts[0].toUpperCase();
    let args = parts.slice(1);
    let argStr = args.join(" ");

    let dir = getCurrentDir();

    switch(cmd) {
        case "CLS":
            outputEl.textContent = "";
            break;
        case "VER":
            printOutput("\nMS-DOS Version 6.22\n");
            break;
        case "DATE":
            printOutput("\nCurrent date is " + new Date().toDateString() + "\n");
            break;
        case "TIME":
            printOutput("\nCurrent time is " + new Date().toTimeString().split(' ')[0] + "\n");
            break;
        case "HELP":
            if (dir["HELP.TXT"]) {
                printOutput("\n" + dir["HELP.TXT"].content + "\n");
            } else {
                let rootDir = fs["C:"];
                printOutput("\n" + rootDir["HELP.TXT"].content + "\n");
            }
            break;
        case "DIR":
            printOutput("\n Directory of " + currentPath.join("\\") + (currentPath.length === 1 ? "\\" : ""));
            let count = 0;
            let bytes = 0;
            for (let name in dir) {
                let item = dir[name];
                if (item.type === "dir") {
                    printOutput(String("       <DIR>").padStart(14, ' ') + "   " + name);
                } else {
                    let size = item.content ? item.content.length : 128;
                    bytes += size;
                    printOutput(String(size).padStart(14, ' ') + "   " + name);
                }
                count++;
            }
            printOutput(String(count).padStart(6, ' ') + " File(s)       " + bytes + " bytes");
            printOutput("       0 Dir(s)  1,457,664 bytes free\n");
            break;
        case "CD":
            if (!argStr || argStr === ".") {
                break;
            }
            if (argStr === "..") {
                if (currentPath.length > 1) {
                    currentPath.pop();
                }
                updatePrompt();
                break;
            }
            if (argStr === "\\" || argStr === "C:\\") {
                currentPath = ["C:"];
                updatePrompt();
                break;
            }
            let target = argStr.toUpperCase();
            if (dir[target] && dir[target].type === "dir") {
                currentPath.push(target);
                updatePrompt();
            } else {
                printOutput("\nInvalid directory path.\n");
            }
            break;
        case "TYPE":
            if (!argStr) {
                printOutput("\nRequired parameter missing.\n");
                break;
            }
            let filename = argStr.toUpperCase();
            if (dir[filename] && dir[filename].type === "file") {
                printOutput("\n" + dir[filename].content + "\n");
            } else {
                printOutput("\nFile not found - " + filename + "\n");
            }
            break;
        case "MODE":
            if (argStr.toUpperCase() === "CO80") {
                document.body.className = "mode-co80";
                printOutput("\nDisplay mode set to 80-column color.\n");
            } else if (argStr.toUpperCase() === "CO40") {
                document.body.className = "mode-co40";
                printOutput("\nDisplay mode set to 40-column wide.\n");
            } else if (argStr.toUpperCase() === "MONO") {
                document.body.className = "mode-mono";
                printOutput("\nDisplay mode set to monochrome green.\n");
            } else if (argStr.toUpperCase() === "AMBER") {
                document.body.className = "mode-amber";
                printOutput("\nDisplay mode set to amber phosphor.\n");
            } else {
                printOutput("\nInvalid MODE parameter. Use CO80, CO40, MONO, or AMBER.\n");
            }
            break;
        case "MATRIX.EXE":
        case "MATRIX":
            runMatrix();
            break;
        case "DOOM.BAT":
        case "DOOM":
            runDoom();
            break;
        case "HACK.COM":
        case "HACK":
            runHack();
            break;
        default:
            if (dir[cmd] && dir[cmd].type === "exec") {
                if (dir[cmd].cmd === "matrix") runMatrix();
                if (dir[cmd].cmd === "doom") runDoom();
                if (dir[cmd].cmd === "hack") runHack();
            } else {
                printOutput("\nBad command or filename: " + rawCmd + "\n");
            }
            break;
    }
}

function runMatrix() {
    let div = document.createElement("div");
    div.className = "matrix-screen";
    let canvas = document.createElement("canvas");
    canvas.className = "matrix-canvas";
    div.appendChild(canvas);
    document.body.appendChild(div);

    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    let fontSize = 16;
    let columns = canvas.width / fontSize;
    let drops = [];
    for (let i = 0; i < columns; i++) drops[i] = 1;

    let interval = setInterval(() => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px monospace";
        for (let i = 0; i < drops.length; i++) {
            let text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }, 33);

    div.addEventListener("click", () => {
        clearInterval(interval);
        div.remove();
        inputEl.focus();
    });
}

function runDoom() {
    printOutput("\n[DOOM.BAT] Loading Retro Text Arena...");
    setTimeout(() => {
        printOutput("=> Demon spotted! You fire your shotgun...");
        setTimeout(() => {
            printOutput("=> Imp defeated! Victory! Press any key or type to return.");
        }, 1000);
    }, 1000);
}

function runHack() {
    printOutput("\n[HACK.COM] Initializing mainframe penetration sequence...");
    let steps = [
        "Bypassing firewall on www.johanhattingh.za.org...",
        "Injecting packet stream...",
        "Access granted. Welcome, root user."
    ];
    let idx = 0;
    let interval = setInterval(() => {
        if (idx < steps.length) {
            printOutput(steps[idx]);
            idx++;
        } else {
            clearInterval(interval);
            printOutput("");
        }
    }, 800);
}

window.onload = init;
