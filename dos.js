const fs = {
    "C:": {
        type: "dir",
        content: {
            "README.TXT": {
                type: "file",
                content: "MS-DOS Version 3.30\n(C) Copyright Microsoft Corp 1981-1987.\n\nWelcome to www.johanhattingh.za.org!\nType HELP for a list of available commands and instructions.\nUse DIR to explore files and CD to navigate folders."
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
                    },
                    "STROKE.TXT": {
                        type: "file",
                        content: "Date: September 24, 2026\nSubject: The Physics of Stroke Recovery\n\nLiesl brought in a mug of tea while I was looking over a note from Sue about stroke recovery and the strange, altered way the world feels afterward.\n\nMedicine calls it functional healing, but the physics of it is entirely different. When blood flow stops, neurons lose their membrane potential in seconds, dumping calcium and glutamate into the tissue. The brain is not just resting; it undergoes a rapid thermodynamic collapse in the infarct core, while the surrounding penumbra hangs in silence.\n\nThen comes diaschisis—the sudden loss of electrical signals across connected networks that makes the whole brain feel shifted and strange. But beneath that shock, a remarkable recovery engine fires up. Surrounding tissue surges with BDNF, opening a window of childhood-level plasticity where the cortex literally redraws its own map millimeter by millimeter.\n\nEvery frustrating attempt to move or speak is not just exercise; it is Hebbian physics at work, reinforcing synapses through sheer demand. The altered state isn't a complication—it is the exact feeling of a brain rebuilding its own map from the inside out."
                    },
                    "APPETITE.TXT": {
                        type: "file",
                        content: "Date: September 24, 2026\nSubject: The Chemistry of Appetite\n\nLiesl brought in a fresh loaf of soda bread this morning while I was marking lab reports, slicing off a wedge and leaving the rest on the butcher block. Years ago, that loaf would have vanished piece by piece before I even noticed the crumbs on my sleeves. Now, the old background hum of appetite—that constant little radio playing in the back of the mind—just seems to have switched off.\n\nIt turns out our bodies have been whispering the same chemical message for decades through molecules like GLP-1, releasing them from the gut for barely two minutes before enzymes wipe them clean. Modern science didn't invent a new signal; it just engineered a stubborn copy that refuses to take down the sign.\n\nWhen a whisper is made to last for days, the nervous system adapts to the constant noise. But biology always collects its interest in the end, whether on the bathroom scale or in the quiet hours when the chemistry finally fades."
                    },
                    "SUN.TXT": {
                        type: "file",
                        content: "Date: September 24, 2026\nSubject: The Sun and the Screen Door\n\nI was out behind the garage yesterday, scraping a rusty old spade with a wire brush while the midday sun hit the brick wall, when Liesl brought me a mug of black coffee and just stood there watching me squint against the glare. People spend half their lives indoors now, sweating over every ray of light like it's radioactive, when the whole panic started from missing the simple difference between a steady, moderate dose and getting scorched on a weekend beach trip.\n\nOutdoor workers get less melanoma than office folks because their skin builds up its own repair crews through daily contact. But somewhere along the line, public health took a sledgehammer to common sense and turned a timing problem into a total ban. A light box or a red-light panel on the nightstand might sell you one isolated frequency for a hefty price tag, but it can't touch what you get for free by stepping past the door frame for ten minutes with your sleeves rolled up.\n\nThe sun isn't an enemy lying in wait; it's the main circuit the whole machine was wired into. The full spectrum is waiting right outside the screen door. All it takes is sitting on the back step instead of the kitchen chair."
                    },
                    "BOREHOLE.TXT": {
                        type: "file",
                        content: "Date: September 24, 2026\nSubject: The Borehole and the Event Horizon\n\nWian dropped a shiny ten-cent coin down the borehole pipe at the back of the garage last year, then knelt on the concrete with his ear pressed to the casing, waiting for the clink that never came. He stayed there so long Liesl eventually had to haul him up by the belt of his shorts. He wanted to know where the coin was right now.\n\nI told him it was still falling.\n\nIf you fall into a supermassive black hole, the strange part is how ordinary the crossing is. You don't hit a wall. You don't trip a wire. The event horizon is just a boundary where gravity bends every path inward, but locally, your watch ticks one second every second and your coffee stays in the mug. You pass the point of no return without feeling a bump.\n\nSomeone watching you from a deck chair in the Karoo sees a completely different afternoon. To them, the light climbing out of that gravity well stretches and redshifts. Your watch slows down. You crawl toward the edge, getting dimmer and redder, until you appear frozen at the rim forever.\n\nBoth versions are true. Inside the horizon, space and time swap jobs: the center isn't a location in space you can steer around, it is a Tuesday in your calendar you cannot prevent from arriving.\n\nHonest caveat: if the black hole is small, tidal forces stretch you into spaghetti before you even reach the threshold. I prefer the big ones. At least with a giant, you get to cross in peace before the mathematics runs out of answers.\n\nWian still checks that pipe when he walks past. The coin is gone, but the mystery stays right at the lip."
                    },
                    "CLOCK.TXT": {
                        type: "file",
                        content: "Date: September 24, 2026\nSubject: The Kitchen Clock\n\nLiesl watched me butter a thick slice of sourdough at eight on a Tuesday night. She didn’t slap the knife out of my hand. She just tapped the kitchen clock on the wall above the kettle. \"Your pancreas thinks you’re fast asleep, Dawie.\"\n\nA physio lives by biomechanics, but she has a ruthless knack for chemistry when it touches the house. What felt like an innocent bedtime snack was arriving at a closed factory.\n\nEvery dietary conversation we have ever had focuses obsessively on what goes on the plate: calories, carbohydrates, fat, glycemic index. Almost nobody talks about when. Yet your metabolic response to identical food swings across twelve hours by margins that dwarf most dietary tweaks. A plate of starch eaten at midday produces a crisp, efficient clearance. That exact same plate eaten at nine in the evening lands like a metabolic train smash.\n\nYour pancreas is not an open tap waiting on demand. The beta cells in the islets of Langerhans run on their own autonomous clock genes, completely independent of your meal habits. Insulin sensitivity and secretion capacity peak under morning sun and steadily decline as dusk settles. In the evening, the master clock in the hypothalamus signals the onset of melatonin, and the beta cells begin powering down for the night.\n\nIn 2018, researchers led by Sutton ran a trial in Cell Metabolism where every variable was welded down: identical meals, identical calories, identical activity, identical sleep. The only difference was the feeding window. Eating earlier in the day dramatically improved insulin sensitivity and slashed blood glucose excursions. The food hadn't changed by a single grain; the recipient body had. When glucose arrives after dark, your muscle and liver transporters have already clocked off. The sugar lingers in your blood, the pancreas strains sluggishly against its own rest cycle, and the spike climbs twenty to forty percent higher.\n\nHonest caveat: shifting dinner to late afternoon isn't always practical when you're driving children between rugby practices and marking physics tests until dark. Biology doesn't hand out gold stars for busy schedules, but knowing the clock lets you play the odds.\n\nFood is not just chemistry. It is a meeting between calories and an internal watch.\n\nThe kitchen clock always eats first."
                    },
                    "WIRE.TXT": {
                        type: "file",
                        content: "Date: September 24, 2026\nSubject: The Morning Wire\n\nAt thirty my body forgave the morning. Coffee on an empty stomach, no breakfast, and nothing asked anything back.\n\nThat forgiveness was never a virtue. It was margin. The vagus nerve carried the signals, and a glass of cold water on an empty stomach produced a reflex that ran itself before I was properly awake. The cold receptor doing the sensing rebuilds itself every few days. It works as well at sixty-five as it did at thirty. The nerve underneath it does not. Vagal tone slips about one percent a year after thirty, and the reflex fades with it.\n\nThe same arrangement sits behind your eyes. Buried in the retina, behind the rods and cones, another set of cells reads blue morning light and sets every clock in the body. Those cells don't age either. The lens in front of them does. It yellows slowly across decades, filtering out the exact wavelength those cells are built to catch. Perfect sensor, fogged window.\n\nThe old Isuzu's starter has caught on the second try for years, worn rather than broken.\n\nLiesl hands me cold water before the coffee now, and I take it to the front step while the kettle boils.\n\nThe morning never changed. The wire did."
                    },
                    "BARNABAS.TXT": {
                        type: "file",
                        content: "Date: September 24, 2026\nSubject: Barnabas Frequency\n\nOld Barnabas curled up on the workshop stool yesterday afternoon while I was grading third-term physics papers, vibrating away at something close to thirty hertz. Most folks just hear a cozy sound when a cat stretches out across their lap, but that steady little hum is operating right inside the exact frequency band NASA tested for bone density stimulation and fracture repair.\n\nWe spend our lives chasing expensive clinical hardware, while half the mammals walking around our homes are carrying built-in vibrational generators running on autopilot. Barnabas doesn’t know a blessed thing about mammalian laryngeal muscles or glottis modulation during inhalation and exhalation. He just knows his job is to sit there and keep vibrating.\n\nPhysics isn't locked away in some university laboratory with high-voltage warning signs plastered on the doors. Sometimes it’s just sleeping soundly on your old jacket, putting in an eight-hour shift of low-frequency healing while you figure out where your red pen went."
                    },
                    "KETTLE.TXT": {
                        type: "file",
                        content: "Date: September 24, 2026\nSubject: The Copper Kettle\n\nWhen you’re carrying a tight coil in your shoulders that never quite unwinds, even on a quiet Sunday afternoon when nothing is wrong, it’s easy to think that’s just how you’re wired. Medicine has fancy words for it—functional healing, autonomic tone—but the physics underneath are remarkably straightforward.\n\nDecades ago, Vincent Felitti and Robert Anda looked at thousands of adults and discovered that physical symptoms like chronic fatigue, high blood pressure, and persistent inflammation weren't just random bad luck. They were the body continuing to run a threat-detection program calibrated during early life. The thermostat was set high when the environment demanded vigilance, and no one ever sent the reset signal.\n\nYesterday morning, while marking lab reports at the kitchen table, I noticed Liesl had left an old copper kettle on the warm stove long after it boiled dry. The whistle had stopped, but the metal was still holding the heat. Our bodies do much the same.\n\nThe good news is that these biological settings aren't permanent. Just as the system adapted to stress, it responds to sustained safety—slow breathing, morning sunlight, steady routines, and the simple grounding of a quiet kitchen. The physics permits healing."
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
                    "HACK.COM": { type: "exec", cmd: "hack" },
                    "HOBBIT.BAT": { type: "exec", cmd: "hobbit", date: "11-01-82  12:00p" },
                    "WALKTHRU.TXT": {
                        type: "file",
                        content: "THE HOBBIT - OFFICIAL WALKTHROUGH & SOLUTION GUIDE\n\n1. Bag End: TAKE RING, TAKE LETTER, EAST, TAKE WALKING STICK, EAST, TAKE PIE, WEST, WEST, OUT (Hobbiton).\n2. Hobbiton: TAKE MAP, NORTH (Road), EAST (Trollshaws).\n3. Trollshaws: TAKE KEY, TAKE PURSE, EAST (Rivendell).\n4. Rivendell: TAKE BLADE, TAKE SHIELD, EAST (Misty Mountains), DOWN (Goblin Tunnels).\n5. Goblin Tunnels: EAST (Mirkwood), TAKE BOW, EAST (Lake-town), TAKE SPEAR.\n6. Lake-town: NORTH (Lonely Mountain), TAKE ARKENSTONE, ENTER (Smaug's Lair), TAKE GOLDEN CUP.\n\nVictory!"
                    }
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

let currentGameState = "DOS"; // "DOS" or "HOBBIT"
let hobbitState = null;
let isRunningProgram = false;

function setPromptVisible(visible) {
    let promptLine = document.getElementById("prompt-line");
    if (visible) {
        promptLine.classList.remove("hidden");
        isRunningProgram = false;
        inputEl.focus();
    } else {
        promptLine.classList.add("hidden");
        isRunningProgram = true;
    }
}

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

async function initFilesystem() {
    init();
}

document.addEventListener("click", () => {
    if (!isRunningProgram) {
        inputEl.focus();
    }
});

document.addEventListener("keydown", (e) => {
    if (isRunningProgram) {
        e.preventDefault();
        return;
    }
    if (e.key === "Enter") {
        e.preventDefault();
        let cmd = inputEl.textContent.trim();
        inputEl.textContent = "";

        if (currentGameState === "DOS") {
            printOutput(promptTextEl.textContent + cmd);
            processCommand(cmd);
        } else if (currentGameState === "HOBBIT") {
            printOutput("> " + cmd);
            processHobbitCommand(cmd);
        }
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
            printOutput("\nMS-DOS Version 3.30\n");
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
        case "MEM":
            let memArg = argStr.toUpperCase();
            if (memArg.includes("/C")) {
                printOutput("\nMODULE NAME     CONVENTIONAL       UPPER MEMORY");
                printOutput("-----------     ------------       ------------");
                printOutput("MSDOS             15,320   (15K)          0     (0K)");
                printOutput("HIMEM              1,168    (1K)          0     (0K)");
                printOutput("COMMAND            3,240    (3K)          0     (0K)");
                printOutput("BROWSER           45,120   (44K)          0     (0K)");
                printOutput("FREE              575,696  (562K)         0     (0K)");
                printOutput("\nTotal conventional memory:   640,000");
                printOutput("Total free conventional memory:  575,696\n");
            } else if (memArg.includes("/D")) {
                printOutput("\nPerform Debug memory analysis...");
                printOutput("Conventional Memory starts at paragraph 0000");
                printOutput("System BIOS length: 64KB, Interrupt Vector Table allocated.\n");
            } else if (memArg.includes("/P")) {
                printOutput("\nMemory Type       Total       Used       Free");
                printOutput("-----------       -----       ----       ----");
                printOutput("Conventional        640K        64K       576K");
                printOutput("Upper                 0K         0K         0K");
                printOutput("Reserved             384K       384K         0K");
                printOutput("Extended (XMS)     15,872K     1,024K    14,848K");
                printOutput("----------------  -------    -------    -------");
                printOutput("Total memory       16,896K     1,472K    15,424K\n");
            } else {
                printOutput("\n655360 bytes total conventional memory");
                printOutput("655360 bytes available to MS-DOS");
                printOutput("589824 largest executable program size\n");
                printOutput("16777216 bytes total XMS memory");
                printOutput("15728640 bytes free XMS memory\n");
            }
            break;
        case "CHKDSK":
            let chkArg = argStr.toUpperCase();
            printOutput("\nVolume JOHAN_DOS created 09-23-2026 12:00 AM");
            printOutput("Volume Serial Number is 1994-0622");
            printOutput("  1,457,664 bytes total disk space");
            printOutput("      4,096 bytes in 3 hidden files");
            printOutput("     16,384 bytes in 5 directories");
            printOutput("    450,560 bytes in 12 user files");
            printOutput("    986,624 bytes available on disk");
            printOutput("\n      1,024 bytes in each allocation unit.");
            printOutput("      1,424 total allocation units on disk.");
            printOutput("        963 available allocation units on disk.\n");
            printOutput("  655,360 total bytes memory.");
            printOutput("  575,696 bytes free memory.\n");
            if (chkArg.includes("/F")) {
                printOutput("Errors found, F-parameter not supported on virtual read-only volume.\n");
            }
            if (chkArg.includes("/V")) {
                printOutput("C:\\README.TXT");
                printOutput("C:\\HELP.TXT");
                printOutput("C:\\BLOG\\TODAY.TXT");
                printOutput("C:\\BLOG\\ARCHIVES.TXT");
                printOutput("C:\\SYSTEM\\STATUS.BAT");
                printOutput("C:\\SYSTEM\\CONFIG.SYS");
                printOutput("C:\\GAMES\\MATRIX.EXE");
                printOutput("C:\\GAMES\\DOOM.BAT");
                printOutput("C:\\GAMES\\HACK.COM\n");
            }
            break;
        case "DIR":
            printOutput("\n Directory of " + currentPath.join("\\") + (currentPath.length === 1 ? "\\" : ""));
            let count = 0;
            let bytes = 0;
            for (let name in dir) {
                let item = dir[name];
                let dateStr = item.date || "09-24-26  12:00p";
                if (item.type === "dir") {
                    printOutput(name.padEnd(12, ' ') + String("<DIR>").padStart(8, ' ') + "  " + dateStr);
                } else {
                    let size = item.content ? item.content.length : 128;
                    bytes += size;
                    printOutput(name.padEnd(12, ' ') + String(size).padStart(8, ' ') + "  " + dateStr);
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
            if (argStr.toUpperCase().startsWith("C:\\")) {
                let subPath = argStr.toUpperCase().replace("C:\\", "").split("\\").filter(Boolean);
                let valid = true;
                let curr = fs["C:"];
                for (let p of subPath) {
                    if (curr[p] && curr[p].type === "dir") {
                        curr = curr[p].content;
                    } else {
                        valid = false;
                        break;
                    }
                }
                if (valid) {
                    currentPath = ["C:"].concat(subPath);
                    updatePrompt();
                } else {
                    printOutput("\nInvalid directory path.\n");
                }
                break;
            }
            let target = argStr.toUpperCase();
            let currDir = getCurrentDir();
            if (currDir[target] && currDir[target].type === "dir") {
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
        case "DOOM.BAT":
        case "DOOM":
        case "HACK.COM":
        case "HACK":
        case "HOBBIT.BAT":
        case "HOBBIT":
            let isGamesDir = currentPath.length === 2 && currentPath[1] === "GAMES";
            if (isGamesDir) {
                if (cmd.includes("MATRIX")) runMatrix();
                else if (cmd.includes("DOOM")) runDoom();
                else if (cmd.includes("HACK")) runHack();
                else if (cmd.includes("HOBBIT")) runHobbit();
            } else {
                printOutput("\nBad command or filename\n");
            }
            break;
        default:
            // Check if file can be executed or typed (e.g. STATUS.BAT or STATUS)
            let rawUpper = rawCmd.toUpperCase();
            let baseName = rawUpper.replace(/\.(BAT|EXE|COM|TXT)$/, "");
            if (dir[rawUpper] || dir[baseName]) {
                let fileKey = dir[rawUpper] ? rawUpper : baseName;
                let item = dir[fileKey];
                if (item.type === "exec") {
                    let isGamesDir = currentPath.length === 2 && currentPath[1] === "GAMES";
                    if (isGamesDir) {
                        if (item.cmd === "matrix") runMatrix();
                        if (item.cmd === "doom") runDoom();
                        if (item.cmd === "hack") runHack();
                        if (item.cmd === "hobbit") runHobbit();
                    } else {
                        printOutput("\nBad command or filename\n");
                    }
                } else if (item.type === "file") {
                    printOutput("\n" + item.content + "\n");
                }
            } else {
                printOutput("\nBad command or filename: " + rawCmd + "\n");
            }
            break;
    }
}

function runMatrix() {
    let bezel = document.querySelector(".monitor-bezel");
    let div = document.createElement("div");
    div.className = "matrix-screen";
    let canvas = document.createElement("canvas");
    canvas.className = "matrix-canvas";
    div.appendChild(canvas);
    bezel.appendChild(div);

    let ctx = canvas.getContext("2d");
    canvas.width = bezel.clientWidth;
    canvas.height = bezel.clientHeight;

    let letters = "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾎﾇﾔﾚﾛｦﾙﾎﾓﾘｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*+<>:-";
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

    let stopMatrix = () => {
        clearInterval(interval);
        div.remove();
        document.removeEventListener("keydown", keyHandler);
        inputEl.focus();
    };

    let keyHandler = (e) => {
        e.preventDefault();
        stopMatrix();
    };

    div.addEventListener("click", () => {
        stopMatrix();
    });

    document.addEventListener("keydown", keyHandler);
}

function runDoom() {
    setPromptVisible(false);
    printOutput("\n[DOOM.BAT] Loading Retro Text Arena...");
    setTimeout(() => {
        printOutput("=> Demon spotted! You fire your shotgun...");
        setTimeout(() => {
            printOutput("=> Imp defeated! Victory!");
            printOutput("Press any key to continue . . .");
            
            let keyHandler = (e) => {
                e.preventDefault();
                document.removeEventListener("keydown", keyHandler);
                printOutput("");
                setPromptVisible(true);
            };
            document.addEventListener("keydown", keyHandler);
        }, 1000);
    }, 1000);
}

function runHack() {
    setPromptVisible(false);
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
            printOutput("\nPress any key to continue . . .");
            
            let keyHandler = (e) => {
                e.preventDefault();
                document.removeEventListener("keydown", keyHandler);
                printOutput("");
                setPromptVisible(true);
            };
            document.addEventListener("keydown", keyHandler);
        }
    }, 800);
}

function runHobbit() {
    printOutput("\nTHE HOBBIT - Melbourne House (1982 / MS-DOS Edition)");
    printOutput("Inspired by J.R.R. Tolkien. Powered by INGRID Parser.");
    printOutput("Type commands like 'GO NORTH', 'EXAMINE HOLE', 'TAKE RING', 'ASK THORIN ABOUT KEY', or 'QUIT'.\n");

    const world = {
        bagend: {
            title: "Bag End - Bilbo's Comfortable Hole",
            desc: "You are in a comfortable round hall like a tunnel, painted green, with polished doors and chairs. A brass peg is for hats and coats. Gandalf stands here smoking his pipe.",
            exits: { east: "hallway", out: "hobbiton" },
            items: ["RING", "LETTER"]
        },
        hallway: {
            title: "Hallway at Bag End",
            desc: "A long tunnel-like hallway leading deeper into the smial.",
            exits: { west: "bagend", east: "larder" },
            items: ["WALKING STICK"]
        },
        larder: {
            title: "The Larder",
            desc: "Shelves are laden with provisions, jars of honey, and bottled wine.",
            exits: { west: "hallway" },
            items: ["WINE", "PIE"]
        },
        hobbiton: {
            title: "Hobbiton Across the Water",
            desc: "Green grass, sunny skies, and the Hill rising behind you. Thorin Oakenshield is waiting here with his dwarf companions.",
            exits: { west: "bagend", north: "road", east: "wild" },
            items: ["MAP"]
        },
        road: {
            title: "The Dusty Road",
            desc: "The road winds away eastward toward the Misty Mountains and adventure.",
            exits: { south: "hobbiton", east: "trollshaws" },
            items: []
        },
        trollshaws: {
            title: "The Trollshaws",
            desc: "Dark, gloomy woods. Three massive stone statues loom nearby. A cold campfire smells of burnt mutton.",
            exits: { west: "road", east: "rivendell" },
            items: ["KEY", "PURSE"]
        },
        rivendell: {
            title: "Rivendell - The Last Homely House",
            desc: "Elven songs fill the air. Elrond sits in council. The air is sweet and cool.",
            exits: { west: "trollshaws", east: "mistymountains" },
            items: ["BLADE", "SHIELD"]
        },
        mistymountains: {
            title: "Misty Mountains Pass",
            desc: "Wind howls across freezing crags. Goblin tunnels gape darkly into the rock face.",
            exits: { west: "rivendell", down: "goblintunnels" },
            items: []
        },
        goblintunnels: {
            title: "Goblin Tunnels",
            desc: "Pitch black. Dripping water echoes. A strange creature named Gollum lurks near a subterranean lake.",
            exits: { up: "mistymountains" },
            items: ["RING"]
        }
    };

    hobbitState = {
        world: world,
        playerLoc: "bagend",
        inventory: [],
        score: 0,
        describeCurrentLoc: function() {
            let loc = this.world[this.playerLoc];
            printOutput("\n--- " + loc.title + " ---");
            printOutput(loc.desc);
            if (loc.items.length > 0) {
                printOutput("You see here: " + loc.items.join(", "));
            }
            let exitList = Object.keys(loc.exits).join(", ");
            printOutput("Exits: [" + exitList + "]");
        }
    };

    hobbitState.describeCurrentLoc();
    currentGameState = "HOBBIT";
    promptTextEl.textContent = "HOBBIT>";
    printOutput("");
}

function processHobbitCommand(raw) {
    let cmd = raw.toUpperCase().trim();
    if (!cmd) return;
    let parts = cmd.split(/\s+/);
    let verb = parts[0];
    let obj = parts.slice(1).join(" ");

    if (verb === "QUIT" || verb === "EXIT") {
        printOutput("\nYou abandon your quest and return to your armchair. Game Over.\n");
        currentGameState = "DOS";
        updatePrompt();
        return;
    }

    if (verb === "INVENTORY" || verb === "I") {
        printOutput(hobbitState.inventory.length > 0 ? "You are carrying: " + hobbitState.inventory.join(", ") : "You are carrying nothing.");
        return;
    }

    if (verb === "LOOK" || verb === "L") {
        hobbitState.describeCurrentLoc();
        return;
    }

    let loc = hobbitState.world[hobbitState.playerLoc];

    // Navigation
    let directions = { "NORTH": "north", "SOUTH": "south", "EAST": "east", "WEST": "west", "UP": "up", "DOWN": "down", "OUT": "out", "N": "north", "S": "south", "E": "east", "W": "west", "U": "up", "D": "down" };
    if (directions[verb] || (verb === "GO" && directions[parts[1]])) {
        let dirKey = directions[verb] || directions[parts[1]];
        if (loc.exits[dirKey]) {
            hobbitState.playerLoc = loc.exits[dirKey];
            hobbitState.score += 5;
            hobbitState.describeCurrentLoc();
            if (hobbitState.playerLoc === "hobbiton") {
                printOutput("\nThorin Oakenshield steps forward, adjusting his hood: 'Master Baggins! At last! We have long awaited our burglar for the journey to Erebor!'");
            }
        } else {
            printOutput("You cannot go that way.");
        }
        return;
    }

    // Take item
    if (verb === "TAKE" || verb === "GET") {
        let idx = loc.items.indexOf(obj);
        if (idx !== -1) {
            loc.items.splice(idx, 1);
            hobbitState.inventory.push(obj);
            hobbitState.score += 10;
            printOutput("Taken.");
            if (obj === "RING") {
                printOutput("The One Ring slips onto your finger. You vanish from sight! Gandalf smiles knowingly from across the room.");
            } else if (obj === "MAP") {
                printOutput("You unfold Thror's Map. Secret moon-runes gleam: 'Stand by the grey stone when the thrush knocks...'");
            }
        } else {
            printOutput("You don't see that here.");
        }
        return;
    }

    // Drop item
    if (verb === "DROP") {
        let idx = hobbitState.inventory.indexOf(obj);
        if (idx !== -1) {
            hobbitState.inventory.splice(idx, 1);
            loc.items.push(obj);
            printOutput("Dropped.");
        } else {
            printOutput("You aren't carrying that.");
        }
        return;
    }

    // INGRID Parser
    if (verb === "EXAMINE" || verb === "LOOK" || verb === "X") {
        printOutput("It looks quite interesting and peculiarly useful for an adventurous hobbit.");
        return;
    }

    if (verb === "ASK" || verb === "TALK") {
        if (cmd.includes("GANDALF")) {
            printOutput("Gandalf puffs his pipe and mutters: 'Courage is found in unlikely places, Bilbo.'");
        } else if (cmd.includes("THORIN")) {
            printOutput("Thorin Oakenshield grunts: 'To the Mountain we must go! Find the secret door!'");
        } else {
            printOutput("They have nothing to say about that.");
        }
        return;
    }

    printOutput("The INGRID parser does not understand '" + raw + "'. Try directions (NORTH, SOUTH...), TAKE <item>, INVENTORY, or ASK THORIN ABOUT KEY.");
}

function init() {
    printOutput("MS-DOS Version 3.30");
    printOutput("(C) Copyright Microsoft Corp 1981-1987.\n");
    printOutput("Type HELP for instructions or DIR to view files.\n");
    updatePrompt();
    inputEl.focus();
}

window.onload = initFilesystem;
