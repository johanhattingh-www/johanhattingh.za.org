const fs = {
    "C:": {
        type: "dir",
        content: {
            "README.TXT": {
                type: "file",
                date: "06-10-87  10:00a",
                content: "MS-DOS Version 3.30\n(C) Copyright Microsoft Corp 1981-1987.\n\nWelcome to www.johanhattingh.za.org!\nType HELP for a list of available commands and instructions.\nUse DIR to explore files and CD to navigate folders."
            },
            "HELP.TXT": {
                type: "file",
                date: "06-10-87  10:00a",
                content: "AVAILABLE COMMANDS:\n  DIR              List directory contents\n  CD <dir>         Change directory (e.g. CD BLOG)\n  CD \\             Return to root directory\n  TYPE <file>      Display contents of a text file (e.g. TYPE TODAY.TXT)\n  CLS              Clear screen\n  MODE CO80        Switch to standard color 80-column mode\n  MODE CO40        Switch to wide 40-column text mode\n  MODE MONO        Switch to monochrome green phosphor mode\n  MODE AMBER       Switch to amber phosphor mode\\n  MODE HERC        Switch to Hercules graphics card mode\\n  DATE             Display current system date\n  TIME             Display current system time\n  VER              Display MS-DOS version\n  MATRIX.EXE       Run digital rain screensaver\n  DOOM.BAT         Play classic retro text battle\n  HACK.COM         Launch mainframe penetration tool"
            },
            "BLOG": {
                type: "dir",
                date: "09-27-26   9:30a",
                content: {
                    "TODAY.TXT": {
                        type: "file",
                        date: "09-27-26   9:15a",
                        content: "Date: September 27, 2026\nSubject: The Beauty of Command Lines\n\nThere is something profoundly liberating about pure text. No heavy DOMs, no bloated frameworks, just raw bytes and precise keystrokes. This site runs entirely on static HTML, CSS, and vanilla JS hosted on GitHub Pages.\n\nSimplicity is the ultimate sophistication."
                    },
                    "ARCHIVES.TXT": {
                        type: "file",
                        date: "09-29-26  12:30p",
                        content: "BLOG ARCHIVES:\n- 2026-09-29: The Octopus Pot (OCTOPUS.TXT)\n- 2026-09-29: The Horseshoe Magnet (MAGNET.TXT)\n- 2026-09-29: Blue Exam Pads (PADS.TXT)\n- 2026-09-29: The Copper Sprayer (SPRAYER.TXT)\n- 2026-09-28: The Helmet (HELMET.TXT)\n- 2026-09-28: The Mainspring (SPRING.TXT)\n- 2026-09-28: The Gate (GATE.TXT)\n- 2026-09-28: Same Pattern, New Sand (RUST.TXT)\n- 2026-09-27: Sleep Inertia and the Ninth Hour (SLEEP.TXT)\n- 2026-09-26: The Rusted Vice (VICE.TXT)\n- 2026-09-25: The Copper Kettle (KETTLE.TXT)\n- 2026-09-23: Barnabas Frequency (BARNABAS.TXT)\n- 2026-09-22: The Morning Wire (WIRE.TXT)\n- 2026-09-15: The Kitchen Clock (CLOCK.TXT)\n- 2026-09-12: The Borehole and the Event Horizon (BOREHOLE.TXT)\n- 2026-09-08: The Sun and the Screen Door (SUN.TXT)\n- 2026-09-04: The Chemistry of Appetite (APPETITE.TXT)\n- 2026-09-01: The Physics of Stroke Recovery (STROKE.TXT)\n- 2026-08-15: Setting up Cloudflare DNS with GitHub Pages\n- 2026-07-01: Why Retro Computing Inspires Modern Engineering\n- 2026-06-10: Hello World from www.johanhattingh.za.org"
                    },
                    "STROKE.TXT": {
                        type: "file",
                        date: "09-01-26   7:50a",
                        content: "Date: September 01, 2026\nSubject: The Physics of Stroke Recovery\n\nLiesl brought in a mug of tea while I was looking over a note from Sue about stroke recovery and the strange, altered way the world feels afterward.\n\nMedicine calls it functional healing, but the physics of it is entirely different. When blood flow stops, neurons lose their membrane potential in seconds, dumping calcium and glutamate into the tissue. The brain is not just resting; it undergoes a rapid thermodynamic collapse in the infarct core, while the surrounding penumbra hangs in silence.\n\nThen comes diaschisis—the sudden loss of electrical signals across connected networks that makes the whole brain feel shifted and strange. But beneath that shock, a remarkable recovery engine fires up. Surrounding tissue surges with BDNF, opening a window of childhood-level plasticity where the cortex literally redraws its own map millimeter by millimeter.\n\nEvery frustrating attempt to move or speak is not just exercise; it is Hebbian physics at work, reinforcing synapses through sheer demand. The altered state isn't a complication—it is the exact feeling of a brain rebuilding its own map from the inside out."
                    },
                    "APPETITE.TXT": {
                        type: "file",
                        date: "09-04-26  10:15a",
                        content: "Date: September 04, 2026\nSubject: The Chemistry of Appetite\n\nLiesl brought in a fresh loaf of soda bread this morning while I was marking lab reports, slicing off a wedge and leaving the rest on the butcher block. Years ago, that loaf would have vanished piece by piece before I even noticed the crumbs on my sleeves. Now, the old background hum of appetite—that constant little radio playing in the back of the mind—just seems to have switched off.\n\nIt turns out our bodies have been whispering the same chemical message for decades through molecules like GLP-1, releasing them from the gut for barely two minutes before enzymes wipe them clean. Modern science didn't invent a new signal; it just engineered a stubborn copy that refuses to take down the sign.\n\nWhen a whisper is made to last for days, the nervous system adapts to the constant noise. But biology always collects its interest in the end, whether on the bathroom scale or in the quiet hours when the chemistry finally fades."
                    },
                    "SUN.TXT": {
                        type: "file",
                        date: "09-08-26  12:30p",
                        content: "Date: September 08, 2026\nSubject: The Sun and the Screen Door\n\nI was out behind the garage yesterday, scraping a rusty old spade with a wire brush while the midday sun hit the brick wall, when Liesl brought me a mug of black coffee and just stood there watching me squint against the glare. People spend half their lives indoors now, sweating over every ray of light like it's radioactive, when the whole panic started from missing the simple difference between a steady, moderate dose and getting scorched on a weekend beach trip.\n\nOutdoor workers get less melanoma than office folks because their skin builds up its own repair crews through daily contact. But somewhere along the line, public health took a sledgehammer to common sense and turned a timing problem into a total ban. A light box or a red-light panel on the nightstand might sell you one isolated frequency for a hefty price tag, but it can't touch what you get for free by stepping past the door frame for ten minutes with your sleeves rolled up.\n\nThe sun isn't an enemy lying in wait; it's the main circuit the whole machine was wired into. The full spectrum is waiting right outside the screen door. All it takes is sitting on the back step instead of the kitchen chair."
                    },
                    "BOREHOLE.TXT": {
                        type: "file",
                        date: "09-12-26   2:15p",
                        content: "Date: September 12, 2026\nSubject: The Borehole and the Event Horizon\n\nWian dropped a shiny ten-cent coin down the borehole pipe at the back of the garage last year, then knelt on the concrete with his ear pressed to the casing, waiting for the clink that never came. He stayed there so long Liesl eventually had to haul him up by the belt of his shorts. He wanted to know where the coin was right now.\n\nI told him it was still falling.\n\nIf you fall into a supermassive black hole, the strange part is how ordinary the crossing is. You don't hit a wall. You don't trip a wire. The event horizon is just a boundary where gravity bends every path inward, but locally, your watch ticks one second every second and your coffee stays in the mug. You pass the point of no return without feeling a bump.\n\nSomeone watching you from a deck chair in the Karoo sees a completely different afternoon. To them, the light climbing out of that gravity well stretches and redshifts. Your watch slows down. You crawl toward the edge, getting dimmer and redder, until you appear frozen at the rim forever.\n\nBoth versions are true. Inside the horizon, space and time swap jobs: the center isn't a location in space you can steer around, it is a Tuesday in your calendar you cannot prevent from arriving.\n\nHonest caveat: if the black hole is small, tidal forces stretch you into spaghetti before you even reach the threshold. I prefer the big ones. At least with a giant, you get to cross in peace before the mathematics runs out of answers.\n\nWian still checks that pipe when he walks past. The coin is gone, but the mystery stays right at the lip."
                    },
                    "CLOCK.TXT": {
                        type: "file",
                        date: "09-15-26   8:35p",
                        content: "Date: September 15, 2026\nSubject: The Kitchen Clock\n\nLiesl watched me butter a thick slice of sourdough at eight on a Tuesday night. She didn’t slap the knife out of my hand. She just tapped the kitchen clock on the wall above the kettle. \"Your pancreas thinks you’re fast asleep, Dawie.\"\n\nA physio lives by biomechanics, but she has a ruthless knack for chemistry when it touches the house. What felt like an innocent bedtime snack was arriving at a closed factory.\n\nEvery dietary conversation we have ever had focuses obsessively on what goes on the plate: calories, carbohydrates, fat, glycemic index. Almost nobody talks about when. Yet your metabolic response to identical food swings across twelve hours by margins that dwarf most dietary tweaks. A plate of starch eaten at midday produces a crisp, efficient clearance. That exact same plate eaten at nine in the evening lands like a metabolic train smash.\n\nYour pancreas is not an open tap waiting on demand. The beta cells in the islets of Langerhans run on their own autonomous clock genes, completely independent of your meal habits. Insulin sensitivity and secretion capacity peak under morning sun and steadily decline as dusk settles. In the evening, the master clock in the hypothalamus signals the onset of melatonin, and the beta cells begin powering down for the night.\n\nIn 2018, researchers led by Sutton ran a trial in Cell Metabolism where every variable was welded down: identical meals, identical calories, identical activity, identical sleep. The only difference was the feeding window. Eating earlier in the day dramatically improved insulin sensitivity and slashed blood glucose excursions. The food hadn't changed by a single grain; the recipient body had. When glucose arrives after dark, your muscle and liver transporters have already clocked off. The sugar lingers in your blood, the pancreas strains sluggishly against its own rest cycle, and the spike climbs twenty to forty percent higher.\n\nHonest caveat: shifting dinner to late afternoon isn't always practical when you're driving children between rugby practices and marking physics tests until dark. Biology doesn't hand out gold stars for busy schedules, but knowing the clock lets you play the odds.\n\nFood is not just chemistry. It is a meeting between calories and an internal watch.\n\nThe kitchen clock always eats first."
                    },
                    "WIRE.TXT": {
                        type: "file",
                        date: "09-22-26   6:40a",
                        content: "Date: September 22, 2026\nSubject: The Morning Wire\n\nAt thirty my body forgave the morning. Coffee on an empty stomach, no breakfast, and nothing asked anything back.\n\nThat forgiveness was never a virtue. It was margin. The vagus nerve carried the signals, and a glass of cold water on an empty stomach produced a reflex that ran itself before I was properly awake. The cold receptor doing the sensing rebuilds itself every few days. It works as well at sixty-five as it did at thirty. The nerve underneath it does not. Vagal tone slips about one percent a year after thirty, and the reflex fades with it.\n\nThe same arrangement sits behind your eyes. Buried in the retina, behind the rods and cones, another set of cells reads blue morning light and sets every clock in the body. Those cells don't age either. The lens in front of them does. It yellows slowly across decades, filtering out the exact wavelength those cells are built to catch. Perfect sensor, fogged window.\n\nThe old Isuzu's starter has caught on the second try for years, worn rather than broken.\n\nLiesl hands me cold water before the coffee now, and I take it to the front step while the kettle boils.\n\nThe morning never changed. The wire did."
                    },
                    "BARNABAS.TXT": {
                        type: "file",
                        date: "09-23-26   3:10p",
                        content: "Date: September 23, 2026\nSubject: Barnabas Frequency\n\nOld Barnabas curled up on the workshop stool yesterday afternoon while I was grading third-term physics papers, vibrating away at something close to thirty hertz. Most folks just hear a cozy sound when a cat stretches out across their lap, but that steady little hum is operating right inside the exact frequency band NASA tested for bone density stimulation and fracture repair.\n\nWe spend our lives chasing expensive clinical hardware, while half the mammals walking around our homes are carrying built-in vibrational generators running on autopilot. Barnabas doesn’t know a blessed thing about mammalian laryngeal muscles or glottis modulation during inhalation and exhalation. He just knows his job is to sit there and keep vibrating.\n\nPhysics isn't locked away in some university laboratory with high-voltage warning signs plastered on the doors. Sometimes it’s just sleeping soundly on your old jacket, putting in an eight-hour shift of low-frequency healing while you figure out where your red pen went."
                    },
                    "KETTLE.TXT": {
                        type: "file",
                        date: "09-25-26   8:20a",
                        content: "Date: September 25, 2026\nSubject: The Copper Kettle\n\nWhen you’re carrying a tight coil in your shoulders that never quite unwinds, even on a quiet Sunday afternoon when nothing is wrong, it’s easy to think that’s just how you’re wired. Medicine has fancy words for it—functional healing, autonomic tone—but the physics underneath are remarkably straightforward.\n\nDecades ago, Vincent Felitti and Robert Anda looked at thousands of adults and discovered that physical symptoms like chronic fatigue, high blood pressure, and persistent inflammation weren't just random bad luck. They were the body continuing to run a threat-detection program calibrated during early life. The thermostat was set high when the environment demanded vigilance, and no one ever sent the reset signal.\n\nYesterday morning, while marking lab reports at the kitchen table, I noticed Liesl had left an old copper kettle on the warm stove long after it boiled dry. The whistle had stopped, but the metal was still holding the heat. Our bodies do much the same.\n\nThe good news is that these biological settings aren't permanent. Just as the system adapted to stress, it responds to sustained safety—slow breathing, morning sunlight, steady routines, and the simple grounding of a quiet kitchen. The physics permits healing."
                    },
                    "VICE.TXT": {
                        type: "file",
                        date: "09-26-26   4:45p",
                        content: "Date: September 26, 2026\nSubject: The Rusted Vice\n\nMy late father kept a rusted vice on his workbench with a crank handle jammed permanently tight. He used to say that forcing steel to hold tension it was never built for just ruins the threads.\n\nMost people treat forgiveness like a lofty moral chore. But put the body under an instrument, and it turns out to be pure physics. Holding a grudge is not just a stubborn attitude; it is a metabolic bill you pay every single second.\n\nWhen you replay an old grievance, your hypothalamus cannot tell the difference between a past betrayal and an active predator in the room. It floods your bloodstream with cortisol, spikes your blood pressure, and sends inflammatory signals rattling through the endothelium of every blood vessel you own. You are burning expensive biological fuel to fight a ghost.\n\nForgiveness is simply cutting the throttle. The vagus nerve fires, heart rate drops, and the vascular wall finally relaxes. You do not let someone off the hook to give them a gift. You do it because maintaining an emergency circuit on cold memories is a terrible way to run an engine."
                    },
                    "SLEEP.TXT": {
                        type: "file",
                        date: "09-27-26   7:10a",
                        content: "Date: September 27, 2026\nSubject: Sleep Inertia and the Ninth Hour\n\nLiesl caught me staring into a cold mug on the back step on Saturday. I had slept nine hours, no alarm, and woke up feeling like someone had replaced my kneecaps with dry gravel. On five hours I can teach three double periods of electrostatics and referee under-eleven rugby without noticing my shins. On nine, my boots felt heavy before I even tied the laces.\n\nMost folks assume sleep works like filling an empty petrol tank: more litres poured in should simply mean more distance down the road. Biology does not care for that picture. Sleep cycles run in ninety-minute waves, climbing from light drifting down into deep slow-wave repair and back up again. When you sleep seven hours, you generally surface near the top of a wave. Stretch it out to nine, and the odds shift. You rip yourself out from the dark, heavy trough at the bottom.\n\nClinicians call that leaden fog sleep inertia. It is not exhaustion. It is a phase error. Your brain is trying to strike a match while the chemical taps for waking are still half-closed.\n\nLiesl did not look up from her tea. \"You didn't need rest,\" she said. \"You were just hiding.\""
                    },
                    "RUST.TXT": {
                        type: "file",
                        date: "09-28-26   8:00a",
                        content: "Date: September 28, 2026\nSubject: Same Pattern, New Sand\n\nEvery atom in your body gets swapped out over the years. You are not a fixed object. You are a pattern, a shape maintained in a river of atoms. Think of a sandcastle where every grain is replaced by a fresh one, grain by grain; the structure remains, but the material is entirely new.\n\nThe trouble is that every time the information is copied, little errors creep in. It is just the second law of thermodynamics—disorder is always more probable than order. Your body has incredible Maxwell's demons, tiny repair enzymes that proofread and patch the damage, but they are made of the same stuff they are protecting. They rust, they slow, they miss a patch.\n\nMy father used to say that forcing a vice to hold tension it wasn't built for just ruins the threads. We are all holding a bit more tension than we were built for. That rust isn't a malfunction; it is just the price of being a pattern instead of a rock.\n\nSame pattern, new sand."
                    },
                    "GATE.TXT": {
                        type: "file",
                        date: "09-28-26   7:30p",
                        content: "Date: September 28, 2026\nSubject: The Gate\n\nMy belt sits a notch tighter at six in the evening than it did at breakfast, and I haven't eaten anything strange.\n\nMost people start auditing the food. Out goes the bread, then the milk, then the sugar, and the pressure keeps its schedule anyway. There is a better explanation. Between your small intestine and your large one sits a muscular gate about the size of your thumb. It opens one way. Past it live a hundred billion bacteria per drop of fluid, fermenting fibre around the clock. Upstream, a corridor built to stay nearly sterile and fast. Absorption is quick chemistry; fermentation is slow. The body takes what its own enzymes can grab, then hands the leftovers across the border to contractors who pay in usable molecules.\n\nWhen the gate stops sealing, the city moves upstream. Bacteria ferment partially digested starch in a tube with no room for the gas. That evening bloat is fermentation at the wrong address.\n\nHonest caveat: one valve is not the whole story. Motility, meal timing, and a stressed nervous system all pull on it.\n\nWian asked why my stomach talks after supper. Better answer now: something crossed a border it shouldn't have.\n\nYour dinner wasn't the problem. Your gate was."
                    },
                    "SPRING.TXT": {
                        type: "file",
                        date: "09-28-26   9:15p",
                        content: "Date: September 28, 2026\nSubject: The Mainspring\n\nMy uncle Albert used to tinker with old wind-up mantel clocks on our back porch, swearing that if you just understood the tension of the mainspring, you could cheat time itself. Of course, the spring always won in the end.\n\nWe learn in school that electrons orbit atomic nuclei like tiny planets, but classical physics says that acceleration means losing energy. By every rule Maxwell wrote, every atom in your body should have collapsed inward in less than a trillionth of a second. The math was airtight, and for fourteen years the brightest minds on Earth had zero answers for why we didn't all instantly wink out of existence.\n\nReality isn't built on the neat little rules we memorize for exams. Down at the quantum level, nature draws a hard line and says you cannot squeeze things infinitely. Certain properties are quantized, meaning they come in fixed packets and refuse to slide down the slope. That stubborn restriction is the only reason matter stays put, and why you and I are sitting here today breathing instead of dissolving into a puff of radiation."
                    },
                    "HELMET.TXT": {
                        type: "file",
                        date: "09-28-26  10:30p",
                        content: "Date: September 28, 2026\nSubject: The Helmet\n\nI caught myself checking the mirror above the basin this morning, running a hand over the temples where the hair has been playing a slow game of retreat for a decade now. We tend to blame the mirror, or our father’s side of the family, as if genetics is some kind of curse handed down in the blood.\n\nTurns out the scalp isn't just sitting there. Underneath the skin, a tight sheet of connective tissue called the galea stretches like a biological helmet right across the crown. When we carry tension or frown over our books, that fascia stays taut, compressing the tiny blood vessels trying to feed the follicles underneath. Less blood flow means less clearance, local hormones accumulate, and the follicle shrinks cycle by cycle into fine peach fuzz. It’s not dying off—it’s being strangled by its own mechanical environment.\n\nThe good news is that tissue isn't set in stone. A few minutes of daily mobilization, just pressing and shifting the scalp over the bone, actually stretches those dermal papilla cells and wakes up the mechanotransduction pathways. You cannot stop time, but sometimes you just need to loosen up the helmet."
                    },
                    "SPRAYER.TXT": {
                        type: "file",
                        date: "09-29-26   8:30a",
                        content: "Date: September 29, 2026\nSubject: The Copper Sprayer\n\nMy bathroom breaks have started dictating the rhythm of my mornings, and not in a funny way. I was out in the garage yesterday, staring at an old copper garden sprayer that's been sitting on the workbench since my dad passed, and it struck me how much we blame a single part when an entire system wears down.\n\nWe love pinning every nocturnal trip on the prostate like it’s the sole culprit, as if aging is just one clumsy gear jamming up. But physiology doesn't work that simple. It’s a convergence: the bladder wall stiffening from decades of microscopic protein cross-linking until it loses its stretch, a narrowed outflow channel, and the fading midnight surge of the hormone that's supposed to slow down kidney production while we sleep.\n\nThree modest shifts, quietly multiplying against each other until a night's rest gets chopped into ninety-minute slices. It’s frustrating how neatly the math explains the fatigue. Standing there in the cool morning air, watching dust motes dance in the light through the dusty window, I realized my body is just another weathered machine keeping its own honest score."
                    },
                    "PADS.TXT": {
                        type: "file",
                        date: "09-29-26   9:45a",
                        content: "Date: September 29, 2026\nSubject: Blue Exam Pads\n\nI found an old stack of blue exam pads in the bottom of the school storeroom yesterday while looking for spare protractors. Flipping through them brought back the cramp in my right index finger from grading fifty papers in one sitting.\n\nWe forget that learning isn't just a mental exercise floating in the clouds. When we write by hand, our fingers command nearly a third of the brain's motor strip, mapping curves and angles into memory with physical precision. Every letter is a tiny physical path.\n\nTyping on a glass screen or a plastic keyboard is efficient, sure, but it flattens all that rich motor territory down to identical little taps of four millimeters. We save time, but we starve the circuit.\n\nSometimes I make my matric science class write out their derivations on paper instead of punching buttons, and you can practically watch the gears lock into place in their heads. The hand remembers what the screen scrolls right past."
                    },
                    "MAGNET.TXT": {
                        type: "file",
                        date: "09-29-26  11:15a",
                        content: "Date: September 29, 2026\nSubject: The Horseshoe Magnet\n\nI was looking at the old horseshoe magnet we keep in the back of the prep room cupboard—the one with the chipped red paint where some eager matric pupil dropped it back in nineteen-ninety-something. We treat magnets like kitchen-drawer furniture. You stick a shopping list or a pizza coupon to the fridge door with a little plastic disk, and you never give it a second thought.\n\nClassical physics tells us that shouldn't even happen. If you rely purely on Newton and old Maxwell, every material in the room should be entirely non-magnetic. Zero. The fact that iron sticks is actually proof of something much stranger hiding right in plain sight: the Pauli exclusion principle and electron spin.\n\nIn ordinary copper or wood, electrons pair up with opposite spins and cancel each other out. But in iron, uncoupled electrons line up in a parallel cascade because lowering their quantum energy feels like finding the right groove. Every time you slap a grocery list onto the fridge, you are feeling quantum mechanics operating right at the scale of your fingertips. The universe doesn't run on billiard balls. It runs on rules that defy our everyday intuition, sitting right there on the kitchen door."
                    },
                    "OCTOPUS.TXT": {
                        type: "file",
                        date: "09-29-26  12:30p",
                        content: "Date: September 29, 2026\nSubject: The Octopus Pot\n\nAn emotion can change the physical shape of a heart. Cardiologists see it on an echography screen—the left ventricle ballooning at the tip while the base keeps squeezing, taking the exact shape of a Japanese clay pot used for catching octopuses.\n\nCoronary arteries are wide open. No clot, no block, no heart attack. Just a catecholamine surge so violent from an emotional shock that it outpaces what a tumor produces. The apex reaches its desensitization threshold first and shuts down while the base keeps firing. Over ninety percent of cases happen in women, mostly postmenopausal, because the hormonal buffer that kept the threshold safe for decades has withdrawn.\n\nIt happens during extreme grief, but also during sudden joy—a surprise party or winning money. The sympathoadrenal axis does not read the emotional sign; it only measures the volume of the signal.\n\nMy mother keeps a thick fleece cardigan on even when the sun is baking the roof tiles, saying her thermostat is stuck in winter. Sometimes the body's internal limits shift quietly while you are just sitting in a chair, waiting for the news to finish."
                    }
                }
            },
            "SYSTEM": {
                type: "dir",
                date: "06-10-87  10:00a",
                content: {
                    "STATUS.BAT": {
                        type: "file",
                        date: "09-27-26   9:00a",
                        content: "SYSTEM STATUS REPORT:\nHost: www.johanhattingh.za.org\nOS: MS-DOS 3.30 Emulator\nMemory: 640K Conventional / 16MB Extended\nNetwork: Online (Cloudflare Proxy / GitHub Pages)\nStatus: All systems nominal."
                    },
                    "CONFIG.SYS": {
                        type: "file",
                        date: "06-10-87  10:00a",
                        content: "DEVICE=C:\\DOS\\HIMEM.SYS\nDEVICE=C:\\DOS\\EMM386.EXE NOEMS\nDOS=HIGH,UMB\nFILES=40\nBUFFERS=20\nSTACKS=9,256\nLASTDRIVE=Z\nSHELL=C:\\DOS\\COMMAND.COM /P /E:512\nCOUNTRY=001,437,C:\\DOS\\COUNTRY.SYS\nUSER=ID10T"
                    }
                }
            },
            "GAMES": {
                type: "dir",
                date: "11-01-82  12:00p",
                content: {
                    "MATRIX.EXE": { type: "exec", cmd: "matrix", date: "03-31-99  11:59p" },
                    "DOOM.BAT": { type: "exec", cmd: "doom", date: "12-10-93   4:00p" },
                    "HACK.COM": { type: "exec", cmd: "hack", date: "09-15-95   2:15a" },
                    "HOBBIT.BAT": { type: "exec", cmd: "hobbit", date: "11-01-82  12:00p" },
                    "HITCH.BAT": { type: "exec", cmd: "hitch", date: "11-01-84  12:00p" },
                    "WALKTHRU.TXT": {
                        type: "file",
                        date: "11-05-82   3:00p",
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

let currentGameState = "DOS"; // "DOS", "HOBBIT", or "HITCH"
let hobbitState = null;
let hitchState = null;
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

function printOutput(text, autoScroll = true) {
    outputEl.textContent += text + "\n";
    if (autoScroll) {
        terminalEl.scrollTop = terminalEl.scrollHeight;
    }
}

async function initFilesystem() {
    init();
    const urlParams = new URLSearchParams(window.location.search);
    let cmd = urlParams.get("cmd");
    if (cmd) {
        let decoded = cmd.replace(/\+/g, " ");
        let parts = decoded.split(/(?:\s*&&\s*|\s*;\s*|\s+TYPE\s+)/i);
        if (decoded.toUpperCase().includes(" TYPE ")) {
            let idx = decoded.toUpperCase().indexOf(" TYPE ");
            let first = decoded.substring(0, idx).trim();
            let second = decoded.substring(idx).trim();
            printOutput(promptTextEl.textContent + first);
            processCommand(first);
            printOutput(promptTextEl.textContent + second);
            processCommand(second);
        } else {
            printOutput(promptTextEl.textContent + decoded);
            processCommand(decoded);
        }
    }
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
        } else if (currentGameState === "HITCH") {
            printOutput("> " + cmd);
            processHitchhikerCommand(cmd);
        }
        terminalEl.scrollTop = terminalEl.scrollHeight;
    }
});

function processCommand(rawCmd) {
    if (!rawCmd) return;
    
    // Support chaining commands with '+' or '&&' or ';'
    let subCommands = rawCmd.split(/\s*(\+|&&|;)\s*/);
    if (subCommands.length > 1) {
        for (let i = 0; i < subCommands.length; i++) {
            let sc = subCommands[i].trim();
            if (sc && sc !== "+" && sc !== "&&" && sc !== ";") {
                processSingleCommand(sc);
            }
        }
        return;
    }
    processSingleCommand(rawCmd);
}

function processSingleCommand(rawCmd) {
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
                let dateStr = item.date || "09-27-26  12:00p";
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
                printOutput("\n" + dir[filename].content + "\n", false);
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
            } else if (argStr.toUpperCase() === "HERC") {
                document.body.className = "mode-herc";
                printOutput("\nDisplay mode set to Hercules green.\n");
            } else {
                printOutput("\nInvalid MODE parameter. Use CO80, CO40, MONO, AMBER, or HERC.\n");
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
        case "HITCH.BAT":
        case "HITCH":
            let isGamesDir = currentPath.length === 2 && currentPath[1] === "GAMES";
            if (isGamesDir) {
                if (cmd.includes("MATRIX")) runMatrix();
                else if (cmd.includes("DOOM")) runDoom();
                else if (cmd.includes("HACK")) runHack();
                else if (cmd.includes("HOBBIT")) runHobbit();
                else if (cmd.includes("HITCH")) runHitchhiker();
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
                    printOutput("\n" + item.content + "\n", false);
                }
            } else {
                printOutput("\nBad command or filename: " + rawCmd + "\n");
            }
            break;
    }
}

let inactivityTimer = null;

function resetInactivityTimer() {
    if (inactivityTimer) clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        if (currentGameState === "DOS" && !document.querySelector(".matrix-screen")) {
            runMatrix();
        }
    }, 5 * 60 * 1000); // 5 minutes
}

document.addEventListener("mousemove", resetInactivityTimer);
document.addEventListener("keydown", resetInactivityTimer);
document.addEventListener("click", resetInactivityTimer);

function runMatrix() {
    if (inactivityTimer) clearTimeout(inactivityTimer);
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
        resetInactivityTimer();
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
            exits: { west: "bagend", north: "road" },
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
            exits: { up: "mistymountains", east: "mirkwood" },
            items: ["RING"]
        },
        mirkwood: {
            title: "Mirkwood Forest",
            desc: "Gloomy, twisting paths beneath a suffocating canopy of ancient trees.",
            exits: { west: "goblintunnels", east: "laketown" },
            items: ["BOW"]
        },
        laketown: {
            title: "Lake-town (Esgaroth)",
            desc: "A town built on wooden piles over the dark waters of Long Lake.",
            exits: { west: "mirkwood", north: "lonelymountain" },
            items: ["SPEAR"]
        },
        lonelymountain: {
            title: "Lonely Mountain (Erebor)",
            desc: "The imposing stone gateway into the mountain kingdom. Smaug's Lair lies within.",
            exits: { south: "laketown", enter: "smauglair" },
            items: ["ARKENSTONE"]
        },
        smauglair: {
            title: "Smaug's Lair",
            desc: "A vast cavern glittering with mountains of stolen gold and ancient treasure.",
            exits: { out: "lonelymountain" },
            items: ["GOLDEN CUP"]
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
    let directions = { "NORTH": "north", "SOUTH": "south", "EAST": "east", "WEST": "west", "UP": "up", "DOWN": "down", "OUT": "out", "ENTER": "enter", "N": "north", "S": "south", "E": "east", "W": "west", "U": "up", "D": "down" };
    if (directions[verb] || (verb === "GO" && directions[parts[1]])) {
        let dirKey = directions[verb] || directions[parts[1]];
        if (loc.exits[dirKey]) {
            if (loc.exits[dirKey] === "smauglair") {
                if (!hobbitState.inventory.includes("ARKENSTONE") && !hobbitState.inventory.includes("RING")) {
                    printOutput("You approach the dark inner cavern, but the terrifying roar of Smaug drives you back! You need the Arkenstone or the magical Ring to brave the dragon's lair safely.");
                    return;
                }
            }
            hobbitState.playerLoc = loc.exits[dirKey];
            hobbitState.score += 5;
            hobbitState.describeCurrentLoc();
            if (hobbitState.playerLoc === "hobbiton") {
                printOutput("\nThorin Oakenshield steps forward, adjusting his hood: 'Master Baggins! At last! We have long awaited our burglar for the journey to Erebor!'");
            } else if (hobbitState.playerLoc === "smauglair") {
                printOutput("\nSmaug the Golden stirs upon his mountain of treasure, breathing embers into the dark! With your stealth and courage, you slip past him unnoticed.");
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
            } else if (obj === "GOLDEN CUP") {
                printOutput("\n*** VICTORY! ***\nYou have successfully looted Smaug's hoard, outwitted the dragon, and completed your epic quest. You return to your comfortable armchair at Bag End as a wealthy and legendary hobbit!\nType QUIT or EXIT to return to MS-DOS.");
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

    // Examine / Look at item
    if (verb === "EXAMINE" || verb === "LOOK" || verb === "X" || verb === "INSPECT") {
        let target = obj;
        if (!target && parts[1] === "AT") {
            target = parts.slice(2).join(" ");
        }
        if (!target) {
            hobbitState.describeCurrentLoc();
            return;
        }
        // Check inventory first
        if (hobbitState.inventory.includes(target)) {
            let descriptions = {
                "RING": "A plain golden ring that seems to shimmer with an inner light.",
                "LETTER": "A parchment note from Gandalf bearing runes of guidance and warning.",
                "WALKINGS STICK": "A sturdy wooden staff, well-polished from years of walking the Shire.",
                "WINE": "A bottle of fine vintage wine from the Westfold.",
                "PIE": "A delicious pork pie wrapped in a crisp pastry crust.",
                "MAP": "Thror's Map of the Lonely Mountain with secret moon-runes.",
                "KEY": "An ancient iron key of dwarven make, heavy and cold.",
                "PURSE": "A leather pouch containing three silver pennies.",
                "BLADE": "Orcrist, the Goblin-cleaver, glowing with a faint blue wrath.",
                "SHIELD": "A light dwarf-wrought shield emblazoned with a sigil of Erebor.",
                "BOW": "A flexible yew bow carved with fine elven tracery.",
                "SPEAR": "A long iron-tipped spear forged in the armories of Lake-town.",
                "ARKENSTONE": "The Heart of the Mountain, glowing with its own pale inner radiance.",
                "GOLDEN CUP": "A magnificent two-handled cup encrusted with precious gems."
            };
            printOutput(descriptions[target] || "It looks quite interesting and peculiarly useful for an adventurous hobbit.");
            return;
        }
        // Check room items
        if (loc.items.includes(target)) {
            printOutput("It is lying here in the location.");
            return;
        }
        printOutput("You don't see that here or in your inventory.");
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

function runHitchhiker() {
    printOutput("\nTHE HITCHHIKER'S GUIDE TO THE GALAXY - Infocom (1984 / MS-DOS Edition)");
    printOutput("The lights in your bedroom seem to be far too bright. Or is it just the hangover?");
    printOutput("Type directions (NORTH, SOUTH, EAST, WEST), EXAMINE, TAKE <item>, INVENTORY, or QUIT.\n");

    const world = {
        bedroom: {
            title: "Bedroom",
            desc: "The room is spinning very gently round your head. Or at least it would be if you could see it which you can't.",
            exits: { east: "hallway", downstairs: "kitchen" },
            items: ["BATHROBE", "SPACESHIP_BULLDOZER_NOTICE"]
        },
        hallway: {
            title: "Hallway",
            desc: "A dingy hallway with peeling wallpaper and a door leading outside.",
            exits: { west: "bedroom", out: "garden" },
            items: ["TOWEL"]
        },
        kitchen: {
            title: "Kitchen",
            desc: "Smells of stale beer and linoleum. There is a fridge here humming menacingly.",
            exits: { upstairs: "bedroom" },
            items: ["PEANUT_PACKET", "BEER"]
        },
        garden: {
            title: "Garden / Front Yard",
            desc: "A yellow bulldozer is parked right outside your front door. Mr. Prosser is looking cold and miserable.",
            exits: { in: "hallway", south: "pub" },
            items: ["MUD"]
        },
        pub: {
            title: "The Horse and Groom Pub",
            desc: "Smoky, warm, and smelling of mild ale. Landlord suggests drinking heavily before the world ends.",
            exits: { north: "garden" },
            items: ["PINT_OF_BITTER", "BAG_OF_CHIPS"]
        }
    };

    hitchState = {
        world: world,
        playerLoc: "bedroom",
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

    hitchState.describeCurrentLoc();
    currentGameState = "HITCH";
    promptTextEl.textContent = "HITCH>";
    printOutput("");
}

function processHitchhikerCommand(raw) {
    let cmd = raw.toUpperCase().trim();
    if (!cmd) return;
    let parts = cmd.split(/\s+/);
    let verb = parts[0];
    let obj = parts.slice(1).join(" ");

    if (verb === "QUIT" || verb === "EXIT") {
        currentGameState = "DOS";
        currentPath = ["C:", "GAMES"];
        updatePrompt();
        printOutput("\nLeaving Hitchhiker's Guide. Don't Panic!\n");
        return;
    }

    if (verb === "INVENTORY" || verb === "INV" || verb === "I") {
        printOutput(hitchState.inventory.length > 0 ? "You are carrying: " + hitchState.inventory.join(", ") : "You are carrying nothing. (Always know where your towel is!)");
        return;
    }

    let loc = hitchState.world[hitchState.playerLoc];

    let dirMap = {
        "NORTH": "north", "N": "north",
        "SOUTH": "south", "S": "south",
        "EAST": "east", "E": "east",
        "WEST": "west", "W": "west",
        "UP": "upstairs", "U": "upstairs",
        "DOWN": "downstairs", "D": "downstairs",
        "IN": "in", "OUT": "out"
    };

    if (dirMap[verb]) {
        let direction = dirMap[verb];
        if (loc.exits[direction]) {
            hitchState.playerLoc = loc.exits[direction];
            hitchState.describeCurrentLoc();
        } else {
            printOutput("You can't go that way.");
        }
        return;
    }

    if (verb === "TAKE" || verb === "GET") {
        let target = obj;
        if (loc.items.includes(target)) {
            loc.items = loc.items.filter(i => i !== target);
            hitchState.inventory.push(target);
            printOutput("Taken.");
            if (target === "TOWEL") {
                printOutput("The Hitchhiker's Guide to the Galaxy notes: 'A towel is about the most massively useful thing an interstellar hitchhiker can have.'");
            }
        } else {
            printOutput("You don't see that here.");
        }
        return;
    }

    if (verb === "DRINK" || verb === "EAT" || verb === "CONSUME") {
        let target = obj;
        if (hitchState.inventory.includes(target)) {
            hitchState.inventory = hitchState.inventory.filter(i => i !== target);
            printOutput("Down the hatch! You feel slightly more prepared to face the end of the world.");
        } else {
            printOutput("You aren't carrying that.");
        }
        return;
    }
        let target = obj;
        if (!target) {
            hitchState.describeCurrentLoc();
            return;
        }
        if (hitchState.inventory.includes(target) || loc.items.includes(target)) {
            let descriptions = {
                "BATHROBE": "A slightly tatty flannel bathrobe. Pocket contains a packet of peanuts and a bruised hitchhiker's thumb.",
                "TOWEL": "Frayed, damp, but immensely versatile.",
                "PEANUT_PACKET": "Fluffy green peanuts. Probably harmless.",
                "BEER": "Warm bitter in a pint glass.",
                "PINT_OF_BITTER": "The best drink in the universe before the Vogons arrive.",
                "BAG_OF_CHIPS": "Salty potato snacks.",
                "MUD": "Heavy Gloucestershire earth.",
                "SPACESHIP_BULLDOZER_NOTICE": "Demolition notice for your house to make way for a bypass."
            };
            printOutput(descriptions[target] || "It looks wonderfully ordinary, right before hyperspace bypass construction.");
        } else {
            printOutput("You don't see that here or in your inventory.");
        }
        return;
    }

    printOutput("The Infocom parser is bewildered by '" + raw + "'. Remember: DON'T PANIC and always carry your towel!");
}
function init() {
    printOutput("MS-DOS Version 3.30");
    printOutput("(C) Copyright Microsoft Corp 1981-1987.\n");
    printOutput("Type HELP for instructions or DIR to view files.\n");
    updatePrompt();
    inputEl.focus();
}

window.onload = initFilesystem;
