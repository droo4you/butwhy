import type { PresetCard } from "@/types";

/**
 * Hand-written follow-ups so every starter question goes four whys deep
 * with no model key and no invented "fallback" card.
 * Level n asks why the previous card's But-sentence is true.
 */
export const PRESET_DEPTH = 4;

export const PRESETS: Record<string, readonly PresetCard[]> = {
  s1: [
    {
      topic: "Why were early Earth's oceans nearly fresh?",
      answer: "The first oceans filled with water steamed out of volcanoes and delivered by icy rocks. The young seafloor had not had long to leak salt into that water, so the early oceans were nearly fresh.",
      hook: "But salt does not stay in the ocean forever — the seafloor locks much of it into rock.",
    },
    {
      topic: "Why does the seafloor lock salt into rock?",
      answer: "Seawater seeps into cracks, heats up near hot rock, and drops minerals as it cools. Those minerals take salt out of the ocean and leave it behind in the seafloor.",
      hook: "But the saltiness of the ocean has stayed roughly steady for a very long time.",
    },
    {
      topic: "Why has the saltiness of the ocean stayed steady?",
      answer: "Rivers keep adding salt, and the seafloor keeps removing it, at close to the same pace. The ocean is not getting saltier every year the way a boiling pot of soup would.",
      hook: "But that steady balance can break, and whole seas have dried into salt flats.",
    },
    {
      topic: "Why have whole seas dried into salt flats?",
      answer: "When a sea is cut off from the ocean and the air is dry, water leaves faster than it arrives. About six million years ago the Mediterranean nearly dried up and left enormous salt flats behind.",
      hook: "But the salt from those dried seas is still buried, and miners dig it up today.",
    },
  ],
  s2: [
    {
      topic: "Why might some people never remember dreams?",
      answer: "Almost everyone tested in a sleep lab still has REM sleep, the stage of the most vivid dreams. What differs is memory: some brains wake without saving the dream, so it feels like nothing happened.",
      hook: "But a few people report no dream even when woken straight out of REM sleep.",
    },
    {
      topic: "Why do some people report no dream when woken from sleep?",
      answer: "Dream memories are fragile and fade in seconds unless you wake at the right moment. Some brains seem to file those moments as unimportant and drop them immediately.",
      hook: "But you can train yourself to remember more dreams, sometimes within a single week.",
    },
    {
      topic: "Why can you train yourself to remember more dreams?",
      answer: "A notebook by the bed tells the brain that dreams are worth keeping. People who write down whatever they recall often start remembering several dreams a week.",
      hook: "But some of those dream memories may be stories the brain invents the moment you wake.",
    },
    {
      topic: "Why would the brain invent a dream memory when you wake?",
      answer: "Waking memory is a reconstruction, not a recording. If the real dream faded, the brain may stitch a plausible story from the last feeling you had, and that story feels like a dream you lived.",
      hook: "But that same stitchwork is why two people can swear they remember one event differently.",
    },
  ],
  s3: [
    {
      topic: "Why does lightning shoot upward from the ground?",
      answer: "A faint channel first zigzags down from the cloud. When it gets close, charge from the ground leaps up to meet it, and the bright flash races back up that path.",
      hook: "But the bright flash lasts less than a blink, and the thunder comes later.",
    },
    {
      topic: "Why does the thunder come later than the flash?",
      answer: "Light reaches you almost instantly, while sound travels about one mile every five seconds. The gap between flash and thunder is the sound's travel time.",
      hook: "But some lightning is silent, and you never hear thunder at all.",
    },
    {
      topic: "Why is some lightning silent?",
      answer: "Very distant bolts make thunder that fades before it reaches you. Warm, layered air can also bend the sound upward and away from the ground.",
      hook: "But lightning also crackles on radios before you ever see the flash.",
    },
    {
      topic: "Why do radios crackle when lightning is near?",
      answer: "A lightning bolt is a huge electric spark, and sparks spray radio waves. A radio turns those waves into pops and crackles.",
      hook: "But those radio crackles let scientists track lightning across the whole planet.",
    },
  ],
  s4: [
    {
      topic: "Why can a high fever damage your brain?",
      answer: "Brain cells are sensitive to heat. If body temperature climbs toward about 106°F (41°C) and stays there, the brain can swell and cells can be hurt.",
      hook: "But most fevers never get that high, because the body has a thermostat.",
    },
    {
      topic: "Why does the body have a fever thermostat?",
      answer: "A small region called the hypothalamus sets your temperature the way a home thermostat sets a room. During an infection it turns the set point up on purpose, then brings it back down.",
      hook: "But you feel freezing while the fever is rising, and sweaty when it breaks.",
    },
    {
      topic: "Why do you feel freezing while a fever is rising?",
      answer: "Shivering is your muscles making heat on purpose, because the new set point is higher than your blood. You feel cold under the blankets until your body catches up.",
      hook: "But once the set point drops, those same blankets feel unbearable and you sweat.",
    },
    {
      topic: "Why do you sweat when a fever breaks?",
      answer: "Sweat evaporates and carries heat off your skin, which is the fastest way the body has to cool down. The fever breaking is the thermostat returning to normal while you are still too warm.",
      hook: "But sweat only cools you when it can evaporate — in soggy air it just sits on the skin.",
    },
  ],
  s5: [
    {
      topic: "Why can we photograph a black hole's shadow?",
      answer: "We do not photograph the hole itself. We photograph the hot glowing gas around it, which has a dark middle where light has fallen in or been bent away — that dark middle is the shadow.",
      hook: "But the shadow is bigger than the black hole, and its size is how we weigh it.",
    },
    {
      topic: "Why does the shadow's size tell the black hole's weight?",
      answer: "A heavier black hole bends light from farther away, so the dark patch grows in a way Einstein's math predicts. Measuring that shadow is like reading a scale from across the galaxy.",
      hook: "But the first picture needed a telescope the size of Earth.",
    },
    {
      topic: "Why did the first picture need a telescope the size of Earth?",
      answer: "The black hole in galaxy M87 is enormous, but it is also about 55 million light-years away, so it looks tiny. Radio dishes spread across the planet were combined into one telescope sharp enough to see the shadow.",
      hook: "But each dish only recorded signals — the picture was assembled months later by computers.",
    },
    {
      topic: "Why was the picture assembled months later by computers?",
      answer: "The dishes stored mountains of raw signals on hard drives, and the internet was not fast enough to ship them. Computers could line the signals up only after the drives were flown to one place.",
      hook: "But clouds nearly hid the target from some of those dishes.",
    },
  ],
  s6: [
    {
      topic: "Why do bigger brains require so much energy?",
      answer: "Brain tissue burns fuel faster than almost any other tissue, even while you sit still. A huge animal with a huge brain would need a mountain of extra food every day.",
      hook: "But birds are living dinosaurs, and some are startlingly clever with tiny brains.",
    },
    {
      topic: "Why are birds so clever with such tiny brains?",
      answer: "Bird brains pack neurons more tightly than mammal brains do. A crow can hold a huge number of thinking cells in a skull much smaller than a monkey's.",
      hook: "But the giant dinosaurs were not built like crows — their brains were small even for their heads.",
    },
    {
      topic: "Why were giant dinosaur brains small even for their heads?",
      answer: "A long neck and a huge skull already cost a lot of bone and muscle. Adding a heavy, hungry brain on the end of that neck would have made eating, and holding the head up, even harder.",
      hook: "But some smaller dinosaurs had brains large enough that they may have hunted in groups.",
    },
    {
      topic: "Why would bigger brains help dinosaurs hunt in groups?",
      answer: "Hunting in a group takes memory, timing, and a guess about what a partner will do next. Animals with more brain for their body size were better equipped for that kind of teamwork.",
      hook: "But fossil footprints that look like a group hunt can also be animals walking the same trail.",
    },
  ],
  h1: [
    {
      topic: "Why do historians say Rome transformed instead of fell?",
      answer: "The eastern half of the empire kept going as Byzantium for about a thousand years. In the west, Roman laws, Latin, and cities became the kingdoms of medieval Europe rather than vanishing overnight.",
      hook: "But the city of Rome itself did empty out, and its great buildings fell into disrepair.",
    },
    {
      topic: "Why did the city of Rome empty out?",
      answer: "Trade routes broke, aqueducts were cut, and the government that fed the city moved away. Without grain ships and running water, the population collapsed.",
      hook: "But people kept living among the ruins, and built houses inside ancient theaters.",
    },
    {
      topic: "Why did people build houses inside ancient theaters?",
      answer: "The stone was already stacked, and a curved outer wall makes a strong shell for rooms. Taking apart a whole monument was harder than moving into one.",
      hook: "But marble from old monuments was later burned in kilns to make lime.",
    },
    {
      topic: "Why was marble from old monuments burned to make lime?",
      answer: "Medieval builders needed lime, a key ingredient in mortar, more than they needed another statue. Marble can be baked into that ingredient, so statues and columns went into the fire.",
      hook: "But some statues survived only because they were buried in mud or lost underwater.",
    },
  ],
  h2: [
    {
      topic: "Why did bribing the gatekeepers open the Wall?",
      answer: "The Wall was a line of forts with gates, not one locked door. A commander offered gold, or already unpaid by the court, could open a gate without a siege.",
      hook: "But the Mongol armies also simply rode around the ends of the Wall.",
    },
    {
      topic: "Why did Mongol armies ride around the ends of the Wall?",
      answer: "No wall can cover every desert track and mountain pass on a frontier that long. Fast riders who knew the land could swing past the last fort and into the farmland behind it.",
      hook: "But walls still slowed raids, and they funneled traders through gates.",
    },
    {
      topic: "Why did the walls still slow raids?",
      answer: "Even a wall you can sneak around forces a raid to bunch up at gates, where soldiers and tax collectors are waiting. That delay was often enough to save a town.",
      hook: "But many sections were rammed earth, not stone, and they crumble back into hills.",
    },
    {
      topic: "Why were many sections rammed earth instead of stone?",
      answer: "Stone is expensive to cut and haul, and the northern frontier is vast. Packed earth, pounded between wooden frames, was fast to raise and, while crews maintained it, surprisingly tough.",
      hook: "But once the crews stopped repairing them, rain turned those earth walls back into mud.",
    },
  ],
  h3: [
    {
      topic: "Why was Columbus's math completely wrong?",
      answer: "He mixed up the length of a mile and trusted a guess that made Earth about a quarter smaller than it is. The real ocean between Europe and Asia was far too wide for the ships and supplies he planned.",
      hook: "But Columbus never admitted the land he found was not Asia.",
    },
    {
      topic: "Why did Columbus never admit the land was not Asia?",
      answer: "His whole voyage had been sold as a route to the riches of Asia. Calling the islands a new continent would have made the mission look like a failure, and he did not have a map that could prove otherwise.",
      hook: "But a later crew under Magellan did circle the planet and prove the scholars right.",
    },
    {
      topic: "Why did Magellan's crew prove the scholars right?",
      answer: "They kept sailing west and, years later, a few survivors returned from the east. That loop showed the ocean was as huge as the doubters had said, with a whole continent in the way.",
      hook: "But Magellan himself did not finish the circle — he was killed in the Philippines.",
    },
    {
      topic: "Why did Magellan not finish the circle he started?",
      answer: "He died in a fight in the Philippines in 1521, partway through the voyage. The ship Victoria, under another captain, carried the remaining sailors home.",
      hook: "But the survivors brought back more than a story — the spices in the hold paid for the trip.",
    },
  ],
  h4: [
    {
      topic: "Why would the Black Death reshuffle European wealth?",
      answer: "So many workers died that labor became scarce, and wages for the people who remained often rose. Land and coin piled up in fewer hands, which changed who could pay for art, ships, and schools.",
      hook: "But plenty of historians say the Renaissance had already started before the plague.",
    },
    {
      topic: "Why do historians say the Renaissance started before the plague?",
      answer: "Italian cities were trading, painting, and rereading old Greek books decades before 1347. The plague was a terrible break in that story, not the spark that began it.",
      hook: "But the plague did change daily life, because there were suddenly not enough people to farm.",
    },
    {
      topic: "Why did the plague leave not enough people to farm?",
      answer: "In some villages half the neighbors were gone within a year. Fields went fallow, and the survivors could demand better pay or walk away to a town.",
      hook: "But the germ itself was not a human invention — it lived in fleas on rodents.",
    },
    {
      topic: "Why did the plague live in fleas on rodents?",
      answer: "The bacterium Yersinia pestis can infect certain fleas, and those fleas bite rats and people. When the rats die, hungry fleas jump to whoever is nearby, which is how a shipboard outbreak walked into a city.",
      hook: "But the flea that spreads it best struggles to survive in very cold weather.",
    },
  ],
  h5: [
    {
      topic: "Why did NASA think the Moon landing was a coin flip?",
      answer: "No one had flown a crew that far, landed, and come back, and hundreds of new machines had to work on the first real try. Engineers added up the ways rockets, computers, and life support could fail and got uneasy odds.",
      hook: "But the landing still happened, and the computer on board was weaker than a modern watch.",
    },
    {
      topic: "Why was the Apollo computer weaker than a modern watch?",
      answer: "The Apollo guidance computer had only a few dozen kilobytes of memory, less than one photo on a phone. It was fast enough because the whole machine was built to do a few jobs and nothing else.",
      hook: "But that small computer nearly aborted the landing when its alarms went off.",
    },
    {
      topic: "Why did the Apollo computer nearly abort the landing?",
      answer: "During the descent, extra radar data flooded the computer and it flashed alarms. A controller in Houston knew those alarms meant the machine was busy but still flying, and told the crew to continue.",
      hook: "But the crew still had to fly the last stretch by hand, with almost no fuel left.",
    },
    {
      topic: "Why did the crew fly the last stretch by hand?",
      answer: "The planned landing spot was a field of boulders. Neil Armstrong took manual control, flew past the rocks, and set down with about 25 seconds of fuel remaining.",
      hook: "But the flight home depended on a single engine that had no backup.",
    },
  ],
  h6: [
    {
      topic: "Why did most ancient texts rot or get recycled?",
      answer: "Papyrus and paper decay in damp air, and a book that is not copied by hand simply disappears. Scribes also scraped old pages to reuse them, because blank writing material was expensive.",
      hook: "But a scraped page sometimes still holds the older writing underneath.",
    },
    {
      topic: "Why can a scraped page still hold older writing?",
      answer: "Ink soaks into the fibers. Even after someone washes or scrapes the surface, faint traces of the first words can remain, and special cameras can pull them back into view.",
      hook: "But many of those hidden texts are palimpsests, and scholars are still reading them.",
    },
    {
      topic: "Why are scholars still reading palimpsests?",
      answer: "A palimpsest is one physical book with two lives, and the buried text may be a work with no complete copy left. Reading one can restore a play, a letter, or a scientific idea thought to be gone.",
      hook: "But the famous library in Alexandria was only one shelf in a much wider loss.",
    },
    {
      topic: "Why was the library in Alexandria only part of a wider loss?",
      answer: "Cities across the Mediterranean had libraries and private book chests, and most of them faded the same slow way. What we have now is the small pile that was copied often enough to outrun decay.",
      hook: "But the works that were copied were the ones teachers kept assigning.",
    },
  ],
  n1: [
    {
      topic: "Why might a cat's purr help heal bones?",
      answer: "Cats purr at a low frequency, roughly the range some therapists use when they vibrate bone. The healing idea is promising, and it is still a hypothesis, not proven medicine.",
      hook: "But cats also purr when they are hurt or afraid, not only when they are happy.",
    },
    {
      topic: "Why do cats purr when they are hurt or afraid?",
      answer: "The same muscles that make a contented purr can run when a cat is in pain or giving birth. Some researchers think the vibration soothes the cat, or calls a companion closer.",
      hook: "But the sound is made on both the inhale and the exhale, which is unusual.",
    },
    {
      topic: "Why can cats purr on both the inhale and the exhale?",
      answer: "Most animal calls happen while breathing one way. A cat's throat muscles twitch very fast, fluttering the vocal cords while air moves in and while it moves out.",
      hook: "But house cats can purr, and the big roaring cats mostly cannot.",
    },
    {
      topic: "Why can house cats purr when lions mostly cannot?",
      answer: "The throat bones of a roaring cat are built to make a roar, and that arrangement gets in the way of a steady purr. House cats have a stiffer setup that lets the flutter run for as long as they like.",
      hook: "But a lion can still make a soft sound on the exhale only.",
    },
  ],
  n2: [
    {
      topic: "Why do trees actively produce red colors in autumn?",
      answer: "The red comes from pigments called anthocyanins, which the leaf builds in fall rather than uncovering from underneath. The tree spends energy to make them just as it is about to drop the leaf.",
      hook: "But scientists still argue about what the red pigment is for.",
    },
    {
      topic: "Why do scientists still argue about the red pigment?",
      answer: "One idea is that red acts like sunscreen while a leaf moves nutrients back into the branch. Another is that red warns insects away. The experiments do not all agree.",
      hook: "But the yellows and oranges really were hidden under the green all summer.",
    },
    {
      topic: "Why were the yellows and oranges hidden under the green?",
      answer: "Chlorophyll, the green pigment that catches sunlight, is so abundant in summer that it masks the yellow and orange already in the leaf. When short days break the chlorophyll down, those colors show through.",
      hook: "But chlorophyll is not thrown away — the tree pulls it apart and stores the pieces.",
    },
    {
      topic: "Why does the tree pull chlorophyll apart and store the pieces?",
      answer: "Nitrogen in the green pigment is valuable, and the soil may not hand it back quickly. The tree breaks chlorophyll down and ships useful parts into twigs and roots before the leaf falls.",
      hook: "But a hard early frost can kill the leaf before that moving is finished, and the colors stay dull.",
    },
  ],
  n3: [
    {
      topic: "Why can honey sit in a tomb for thousands of years?",
      answer: "Honey has very little water, and it is acidic. Bacteria and molds that would spoil jam cannot live in it, so a sealed jar can stay edible for a very long time.",
      hook: "But honey can still spoil if it is left open and watery.",
    },
    {
      topic: "Why can honey spoil if it is left watery?",
      answer: "If honey absorbs moisture from damp air, the water level rises enough for yeast to wake up. Those yeasts ferment the sugars, and an open jar can turn sour.",
      hook: "But that same low water is why a spoon of honey can outlast the kitchen around it.",
    },
    {
      topic: "Why does low water let honey outlast the kitchen?",
      answer: "Microbes need free water to grow, and honey holds its water too tightly for them. Sugar grabs the moisture, the acid adds a barrier, and a little hydrogen peroxide from an enzyme adds another.",
      hook: "But that enzyme comes from the bees, not from the flowers.",
    },
    {
      topic: "Why does the protective enzyme in honey come from bees?",
      answer: "Bees add an enzyme called glucose oxidase while they ripen nectar into honey. It slowly makes tiny amounts of hydrogen peroxide, one reason honey has been used on wounds.",
      hook: "But the peroxide fades as the honey ages, even when the honey itself stays edible.",
    },
  ],
  n4: [
    {
      topic: "Why is the seventh wave a myth?",
      answer: "Waves arrive in groups because of how they travel, not because the ocean counts to seven. Any wave in the set can be the tallest, and people who swear by seven remember the hits and forget the misses.",
      hook: "But wave sets really do have a rhythm a patient watcher can learn.",
    },
    {
      topic: "Why do wave sets have a rhythm?",
      answer: "Storm winds make waves of many sizes and speeds. As they cross the ocean, similar waves bunch together and travel as a pack, with calmer water between packs.",
      hook: "But the biggest wave in a set is not always the middle one.",
    },
    {
      topic: "Why is the biggest wave in a set not always the middle?",
      answer: "The pack is a mix, and the tallest member can sit anywhere in it. What repeats is the group itself — a burst of larger waves, then a lull — not a magic slot inside the burst.",
      hook: "But the seafloor also changes a wave's height as it nears the shore.",
    },
    {
      topic: "Why does the seafloor change a wave's height near the shore?",
      answer: "When the water gets shallow, the bottom drags on the wave and slows it. The energy piles up, so the wave grows taller and steeper until it breaks.",
      hook: "But a gentle beach makes a spilling wave, while a sudden drop makes a dumping one.",
    },
  ],
  n5: [
    {
      topic: "Why is the Moon stealing Earth's rotational energy?",
      answer: "The Moon's gravity raises tides, and those tides rub against the seafloor. That friction steals a little spin from Earth and hands energy to the Moon's orbit.",
      hook: "But the Moon is also drifting away, about as fast as fingernails grow.",
    },
    {
      topic: "Why is the Moon drifting away as fast as fingernails grow?",
      answer: "The energy Earth loses to the tides has to go somewhere, and it lifts the Moon into a slightly higher orbit. Lasers bounced off mirrors left on the Moon measure about 3.8 centimeters a year.",
      hook: "But a higher Moon means weaker tides far in the future.",
    },
    {
      topic: "Why would a higher Moon make weaker tides?",
      answer: "Gravity weakens with distance. A more distant Moon tugs less on the oceans, so the bulges it raises get smaller.",
      hook: "But the tides will not vanish, because the Sun raises tides of its own.",
    },
    {
      topic: "Why does the Sun raise tides of its own?",
      answer: "The Sun is vastly heavier than the Moon, and it is also much farther away. Its pull on the oceans is real and smaller than the Moon's, and when the two line up the tides run extra high.",
      hook: "But those extra-high spring tides happen twice a month, not only in spring.",
    },
  ],
  n6: [
    {
      topic: "Why can a memory of a smell survive from caterpillar to butterfly?",
      answer: "Inside the chrysalis most of the body is rebuilt, but some nerve cells seem to make the trip. Tobacco hornworms trained to avoid a smell as caterpillars still avoided it after they emerged.",
      hook: "But the caterpillar does not dissolve every neuron — a few memory cells persist.",
    },
    {
      topic: "Why do some memory cells persist through the chrysalis?",
      answer: "Certain neurons in the memory centers are not fully broken down. They give a learned smell a bridge so it does not have to be learned again from scratch.",
      hook: "But most of the old body really is broken down into a kind of soup.",
    },
    {
      topic: "Why is most of the caterpillar broken down into soup?",
      answer: "The chrysalis reuses the caterpillar's proteins to build wings, long legs, and a new gut. Enzymes take unneeded tissues apart, while small packets of waiting cells grow into the adult parts.",
      hook: "But those imaginal discs were already growing inside the caterpillar, hidden.",
    },
    {
      topic: "Why were imaginal discs already growing inside the caterpillar?",
      answer: "Long before the chrysalis forms, small clusters of cells are set aside and dividing quietly. The change looks sudden, but the adult body plan was under construction for days.",
      hook: "But an injury in the wrong spot can cost the future wing before it ever unfolds.",
    },
  ],
  p1: [
    {
      topic: "Why would consciousness be fundamental, like mass?",
      answer: "A view called panpsychism says experience is not something brains invent from nothing. On that view it is basic, the way mass is basic, and brains organize it rather than create it.",
      hook: "But most neuroscientists still think consciousness is something brains do.",
    },
    {
      topic: "Why do most neuroscientists think consciousness is something brains do?",
      answer: "Change the brain and the experience changes: anesthesia, injury, and sleep all alter what it is like to be you. That link makes many scientists treat consciousness as a process the brain runs.",
      hook: "But nobody can yet explain why that processing feels like something.",
    },
    {
      topic: "Why does brain processing feel like something?",
      answer: "We can map which neurons fire when you see a color or feel pain. What we cannot yet say is why those firings come with an inner experience at all.",
      hook: "But a feeling might be the brain's own summary of its activity, not a second secret thing.",
    },
    {
      topic: "Why might a feeling be the brain's summary of itself?",
      answer: "Some theories say the experience is a pattern of information, seen from the inside. If that is right, there is no extra ghost behind the summary — from within, the summary is the feeling.",
      hook: "But that idea is still argued, and no experiment has settled it.",
    },
  ],
  p2: [
    {
      topic: "Why would a low-entropy Big Bang make time's arrow an accident?",
      answer: "Nearly all the laws of physics run fine in reverse. Time gets a direction from entropy, the drift toward disorder, and that drift points only if the universe began unusually tidy.",
      hook: "But calling that tidy start a coincidence is something physicists still debate.",
    },
    {
      topic: "Why do physicists still debate that tidy start?",
      answer: "A smooth beginning might be required by a deeper law we have not found, rather than a lucky roll. Until that law is known, both stories stay open.",
      hook: "But entropy is not the same thing as a mess on your desk.",
    },
    {
      topic: "Why is entropy not the same thing as a messy desk?",
      answer: "Entropy counts how many ways the tiny parts can be arranged while looking the same from outside. Melted ice has higher entropy than a frozen cube because the water molecules have far more arrangements.",
      hook: "But an ice cube only melts in a world that already had a tidy past.",
    },
    {
      topic: "Why does a melting ice cube need a tidy past?",
      answer: "If the past were as jumbled as the future, there would be no reason for ice to melt rather than unmelt. The cube goes one way because the universe around it started orderly and is still spending that order.",
      hook: "But nobody watched the Big Bang's entropy the way we watch an ice cube.",
    },
  ],
  p3: [
    {
      topic: "Why are the rules of physics the specific way they are?",
      answer: "We can measure the rules, including how strong gravity is and how heavy an electron is. Nothing inside those rules explains why the numbers are these numbers and not others.",
      hook: "But some physicists hope a deeper theory will leave no numbers left to choose.",
    },
    {
      topic: "Why would a deeper theory leave no numbers left to choose?",
      answer: "The hope is that every constant falls out of the math, the way pi falls out of a circle. Then the rules would not look chosen at all.",
      hook: "But so far every deep theory still has at least one dial you can turn.",
    },
    {
      topic: "Why does every deep theory still have a dial you can turn?",
      answer: "Even elegant equations usually hide a strength or a mass that experiment has to fill in. Turning that dial changes the predictions, so the theory alone did not finish the job.",
      hook: "But a universe that allows observers may be the only kind anyone could find.",
    },
    {
      topic: "Why might a universe that allows observers be the only kind we find?",
      answer: "If the rules had ruled out atoms or stars, no one would be here asking. That hint does not explain the rules. It only says we should expect to find ourselves where asking is possible.",
      hook: "But the hint can excuse almost any number, which is why many scientists want a real explanation.",
    },
  ],
  p4: [
    {
      topic: "Why did cultures develop the same core moral rules?",
      answer: "Groups that limited casual harm, cheating, and betrayal could trust strangers enough to trade and to defend themselves. Groups that could not agree on those basics tended to fall apart.",
      hook: "But what counts as rude or kind still changes from one table to the next.",
    },
    {
      topic: "Why do rude and kind change from one table to the next?",
      answer: "The core — do not casually harm your partners, share fairly, keep a promise — travels well. Details like how close to stand, or whether a loud laugh is warmth, are local.",
      hook: "But babies seem to prefer helpful puppets over mean ones, before anyone teaches them.",
    },
    {
      topic: "Why do babies prefer helpful puppets over mean ones?",
      answer: "In looking-time studies, infants watch a helper and a hinderer and then reach for the helper. That is not a full moral code, but it suggests a bias toward helpers shows up very early.",
      hook: "But a bias toward helpers is not the same thing as fairness.",
    },
    {
      topic: "Why is a bias toward helpers not the same as fairness?",
      answer: "Fairness weighs shares, effort, and need, which takes reasoning babies do not have yet. The early reach is closer to liking the one who helped than to judging a fair split.",
      hook: "But children start protesting an unfair share surprisingly early.",
    },
  ],
  f1: [
    {
      topic: "Why can a sourdough starter stay alive for 150 years?",
      answer: "A starter is a living crowd of yeasts and bacteria, and bakers keep it going by feeding it flour and water. As long as someone feeds it, the crowd keeps reproducing, even if no original cell remains.",
      hook: "But a starter is not one creature — the mix of microbes can change over the years.",
    },
    {
      topic: "Why can the mix of microbes in a starter change?",
      answer: "Different flours, kitchens, and seasons favor different yeasts and bacteria. The starter you inherit may share a name with its ancestor and little of its original population.",
      hook: "But the bacteria are why sourdough tastes sour, not the yeast alone.",
    },
    {
      topic: "Why do bacteria make sourdough sour instead of the yeast alone?",
      answer: "Lactic acid bacteria eat sugars and give off acids, and those acids are the tang. Yeast mainly makes the carbon dioxide that lifts the dough.",
      hook: "But the acid also keeps dangerous microbes out of the jar.",
    },
    {
      topic: "Why does the acid keep dangerous microbes out of the jar?",
      answer: "The low acidity is a hostile room for many microbes that would spoil food. A healthy starter is sour enough to guard itself, which is why a fed one can be safer than a neglected bowl of plain dough.",
      hook: "But if you stop feeding it, even that guard fails and mold moves in.",
    },
  ],
  f2: [
    {
      topic: "Why does bitterness signal poison to humans?",
      answer: "Many toxic plants taste bitter, so a strong urge to spit them out kept people safer. Bitter receptors on the tongue are that alarm, and coffee sets them off.",
      hook: "But people can learn to like a bitter taste, especially beside sugar or a ritual.",
    },
    {
      topic: "Why can people learn to like a bitter taste?",
      answer: "Repeat a flavor in a safe, pleasant setting and the brain retags it. Sugar, milk, a favorite mug, and the lift from caffeine teach the alarm to stand down.",
      hook: "But caffeine itself is a real insecticide inside the coffee plant.",
    },
    {
      topic: "Why is caffeine an insecticide in the coffee plant?",
      answer: "Caffeine in the leaves and beans discourages insects that would eat them. The dose that wakes a person is a weapon at the scale of a bug.",
      hook: "But the buzz you feel is your nervous system borrowing that weapon.",
    },
    {
      topic: "Why does caffeine buzz a human nervous system?",
      answer: "Caffeine sits in receptors that normally listen for adenosine, a chemical that builds sleepiness. Block those receptors and the tired message gets quieter.",
      hook: "But the brain makes more receptors in reply, which is why yesterday's cup works less today.",
    },
  ],
  f3: [
    {
      topic: "Why does chilling an onion slow the enzyme reaction?",
      answer: "The irritating gas of an onion is made by enzymes that work faster when warm. Cold slows those enzymes, so less gas escapes while you chop.",
      hook: "But that gas is a defense against being eaten, not a plot against cooks.",
    },
    {
      topic: "Why is onion gas a defense against being eaten?",
      answer: "Cutting the bulb mixes an enzyme with sulfur compounds the plant was keeping apart. The gas punishes whatever mouth or knife just damaged it.",
      hook: "But a sharp knife releases less of that gas than a dull one.",
    },
    {
      topic: "Why does a sharp knife release less onion gas?",
      answer: "A sharp cut crushes fewer cells than a dull one, so less enzyme meets less sulfur. Water on the board also catches some of the gas before it reaches your eyes.",
      hook: "But once the gas meets the water on your eye, it becomes a mild acid.",
    },
    {
      topic: "Why does onion gas become a mild acid on a wet eye?",
      answer: "The gas reacts with the water in your tears and makes a small amount of acid, enough to sting. The extra tears are a rinse, washing that sting away.",
      hook: "But the same sulfur chemistry is why a cooked onion turns sweet.",
    },
  ],
  f4: [
    {
      topic: "Why are the mood compounds in chocolate too small to matter?",
      answer: "Chocolate contains theobromine, a little caffeine, and traces of other pleasure-related molecules. A normal bar holds far less than a dose that would change your mood the way a drug would.",
      hook: "But chocolate still feels special, because cocoa butter melts at body temperature.",
    },
    {
      topic: "Why does cocoa butter melt at body temperature?",
      answer: "Cocoa butter is a fat with a melting point just under the warmth of your mouth. It goes from solid to silky as you eat it, which almost no other food copies exactly.",
      hook: "But that melt only works if the chocolate was tempered into the right crystal.",
    },
    {
      topic: "Why does chocolate need the right crystal?",
      answer: "Cocoa butter can solidify in several crystal shapes, and only one is glossy, snappy, and quick to melt. Tempering — careful heating and cooling — coaxes the fat into that shape.",
      hook: "But a warm car lets those crystals slip into a dull bloom.",
    },
    {
      topic: "Why does a warm car turn chocolate into bloom?",
      answer: "Heat melts the careful crystals, and when they reform on their own they pick messier shapes. Cocoa butter pushed to the surface looks like a gray bloom. It is fat, not mold, and the snap is gone.",
      hook: "But bloom is harmless, and the chocolate underneath is still the same food.",
    },
  ],
  f5: [
    {
      topic: "Why do humans seek out sourness for pleasure?",
      answer: "A mild acid can mean fruit that is interesting and not yet rotten. People learn to like that edge, especially with sugar, which is why lemonade and sour candy exist.",
      hook: "But the sour face you make is not a choice.",
    },
    {
      topic: "Why is the sour face not a choice?",
      answer: "Strong acid triggers a reflex. Extra saliva floods in to dilute it, and muscles around the mouth tighten, the way you squint at a sudden light.",
      hook: "But sourness uses a different sensor than sweet or bitter.",
    },
    {
      topic: "Why does sourness use a different sensor than sweet or bitter?",
      answer: "Sweet and bitter are read by proteins that grab a particular molecule. Sour is mostly a response to acid — hydrogen ions slipping into taste cells through special channels.",
      hook: "But those channels are why a lemon and vinegar taste related.",
    },
    {
      topic: "Why do a lemon and vinegar taste related?",
      answer: "Both send hydrogen ions onto the tongue, so the sour channel fires for each. What separates lemonade from pickles is the smell riding along with that shared signal.",
      hook: "But smell does more of the work of flavor than the tongue does.",
    },
  ],
  e1: [
    {
      topic: "Why does a handshake transfer personal scent?",
      answer: "Skin carries oils and microbes that make a smell particular to you. A few seconds of palm contact moves some of that mixture onto the other person's hand.",
      hook: "But after a greeting, people often sniff their own hand without noticing.",
    },
    {
      topic: "Why do people sniff their own hand after a greeting?",
      answer: "In one study, volunteers brought a shaken hand toward their nose more than the other hand. The likely reason is chemical sampling: a quiet check on who you just met.",
      hook: "But the weapon-hand origin of the handshake is much less certain.",
    },
    {
      topic: "Why is the weapon-hand story of the handshake uncertain?",
      answer: "An open palm can show you are not holding a blade, and that is a tidy story. Historians do not have a first handshake to point to, so it stays a plausible legend.",
      hook: "But the gesture is not universal — plenty of cultures greet with a bow instead.",
    },
    {
      topic: "Why do plenty of cultures greet with a bow instead?",
      answer: "A bow shares respect and keeps a little distance, which suits traditions that treat space and rank carefully. A bow and a handshake both show peaceful intent, with different tools.",
      hook: "But both greetings have to be learned, which is why toddlers bump before they bow.",
    },
  ],
  e2: [
    {
      topic: "Why do dogs catch yawns from their owners?",
      answer: "Contagious yawning in dogs shows up more with a familiar person than with a stranger in several studies. Familiarity seems to matter, which is why researchers link it to a social bond.",
      hook: "But contagious yawning in humans is tied, loosely, to empathy.",
    },
    {
      topic: "Why is contagious yawning in humans tied to empathy?",
      answer: "Seeing a yawn uses brain areas involved in social mirroring. People who score higher on some empathy measures sometimes join in more, and scientists still argue about how strong that link is.",
      hook: "But you are less likely to catch a yawn from someone you dislike.",
    },
    {
      topic: "Why are you less likely to catch a yawn from someone you dislike?",
      answer: "Mirroring pays more attention to people who matter to you. A person you feel cold toward is a weaker trigger, so their yawn is easier to watch without joining.",
      hook: "But even a video of a yawn can set people off, with nobody else in the room.",
    },
    {
      topic: "Why can a video of a yawn set people off?",
      answer: "The trigger is the sight of the yawn, not a chemical in the air. A face on a screen is enough for the mirror response to start, which is why reading about yawning can make you yawn.",
      hook: "But babies appear to yawn before birth, long before they have anyone to copy.",
    },
  ],
  e3: [
    {
      topic: "Why does a brief touch change the size of a tip?",
      answer: "A brief, appropriate touch can make a guest feel noticed. Restaurant studies have found that this small gesture lines up with a larger tip more reliably than speed alone.",
      hook: "But attractiveness predicting tips is an uncomfortable and unfair pattern.",
    },
    {
      topic: "Why is it unfair that attractiveness predicts tips?",
      answer: "If tips were pay for good work, looks would not matter. In the data they do, which means part of a server's pay is a contest they did not enter.",
      hook: "But the tipped minimum wage is why this system survived in the United States.",
    },
    {
      topic: "Why did the tipped minimum wage let tipping survive?",
      answer: "Employers could pay tipped workers a lower base wage and count tips toward the legal minimum. That rule made the customer's extra payment part of the wage itself.",
      hook: "But many countries never split the bill this way — the menu price is the whole price.",
    },
    {
      topic: "Why do many countries put the whole price on the menu?",
      answer: "Where servers earn a regular wage, the restaurant builds that cost into the menu. Diners do not guess a percentage, and a slow night does not decide the rent.",
      hook: "But a small extra for extraordinary care still shows up, because people like to mark a story.",
    },
  ],
  e4: [
    {
      topic: "Why did people sleep in two blocks before electric light?",
      answer: "Long dark nights left more time in bed than one solid sleep could fill. Old diaries describe a first sleep, a waking stretch in the middle, and a second sleep until dawn.",
      hook: "But that waking hour was not wasted — people talked, prayed, or tended the fire.",
    },
    {
      topic: "Why was the waking hour between sleeps a real part of the night?",
      answer: "The gap shows up so often in old writing that historians treat it as a normal pattern, not as insomnia. It was a quiet shift in the house, long enough to think or to check the fire.",
      hook: "But electric light and fixed clocks pushed people onto one compressed sleep.",
    },
    {
      topic: "Why did electric light push people onto one compressed sleep?",
      answer: "Bright evenings delay the hormone that makes you sleepy, so people stay up and still rise for work. A two-block night does not fit a bell that rings at the same hour all year.",
      hook: "But the brain still does its deepest cleaning during a long stretch of real sleep.",
    },
    {
      topic: "Why does the brain do its deepest cleaning during real sleep?",
      answer: "In deep sleep, fluid rinses through the brain and carries off waste that built up while you were awake. Shorten that stretch and the rinse is shortened too.",
      hook: "But a nap can repay a little of that debt, and it cannot repay all of it.",
    },
  ],
  e5: [
    {
      topic: "Why do some designers limit these apps for their own children?",
      answer: "Several well-known builders of social apps have said they limit screens at home. They know the products are hard to put down, and they fence that stickiness in for their own kids.",
      hook: "But the stickiness comes from a variable reward, the same pattern as a slot machine.",
    },
    {
      topic: "Why does a variable reward work like a slot machine?",
      answer: "If every pull paid the same, you would stop when you had enough. When the next post might be wonderful or dull, the brain keeps pulling to see which.",
      hook: "But a feed also removes the natural stopping points a book would have.",
    },
    {
      topic: "Why does a feed remove natural stopping points?",
      answer: "A chapter ends and a conversation says goodbye. A feed has no last page, and the next item is already under your thumb, so one more never has to be the last.",
      hook: "But a gray night screen only helps a little, because the habit is not only blue light.",
    },
    {
      topic: "Why is the scrolling habit not only about blue light?",
      answer: "Blue light can delay sleep, and night modes turn that down. The harder part is the unfinished reward, which keeps you awake even on a dim, warm-colored screen.",
      hook: "But leaving the phone in another room beats any color filter.",
    },
  ],
  b1: [
    {
      topic: "Why does the sky turn red and orange at sunset?",
      answer: "When the sun is low, its light takes a long path through the air. Blue scatters away along that path, and the reds and oranges, which scatter less, are what reach your eye.",
      hook: "But the reddest sunsets often follow dusty or smoky days.",
    },
    {
      topic: "Why do dusty or smoky days make redder sunsets?",
      answer: "Extra bits in the air scatter even more blue and green light out of the beam. What is left to come straight at you is a deeper red.",
      hook: "But the Moon can turn red for a completely different reason.",
    },
    {
      topic: "Why can the Moon turn red during an eclipse?",
      answer: "During a lunar eclipse, Earth sits between the Sun and the Moon. The only sunlight that reaches the Moon has skimmed through Earth's air, and that air paints it sunset-red.",
      hook: "But if Earth had no air, an eclipsed Moon would simply go dark.",
    },
    {
      topic: "Why would an eclipsed Moon go dark with no air?",
      answer: "The red glow is sunlight bent by the atmosphere into Earth's shadow. Without air, nothing bends that light onto the Moon, so the shadowed face stays dark.",
      hook: "But Earth's air is also why the setting Sun looks slightly flattened.",
    },
  ],
  b2: [
    {
      topic: "Why does ice stay slippery far below freezing?",
      answer: "Pressure and friction from a shoe melt a tiny bit of the surface, and the outer molecules of ice are loose even in cold air. That loose layer works like a lubricant.",
      hook: "But cold enough ice stops being slippery at all.",
    },
    {
      topic: "Why does very cold ice stop being slippery?",
      answer: "Once the surface is hard and dry, no slick film forms under your foot. Travelers and lab tests both find that ice near the cold of dry ice grips instead of sliding.",
      hook: "But snow can be slippery for a different reason than a solid sheet of ice.",
    },
    {
      topic: "Why is snow slippery for a different reason than solid ice?",
      answer: "Snow is a pile of tiny ice grains. A step can roll those grains, melt their edges, and refreeze them into a smoother patch.",
      hook: "But that refrozen patch is why the same path gets more dangerous with every walk.",
    },
    {
      topic: "Why does a refrozen path get more dangerous with every walk?",
      answer: "Each pass melts a little, and the cold glues it back as smoother ice. A path that felt safe in the morning can be slick by afternoon, built by the feet that crossed it.",
      hook: "But a scatter of sand gives those grains something dry to bite.",
    },
  ],
  b3: [
    {
      topic: "Why might hiccups be a leftover from fish ancestors?",
      answer: "Tadpoles close a throat flap to push water over their gills without filling their lungs. Some scientists think a hiccup reuses that old pattern: a sudden breath, then a quick close.",
      hook: "But a hiccup fit can last much longer than a minute.",
    },
    {
      topic: "Why can a hiccup fit last longer than a minute?",
      answer: "The nerve to the diaphragm can keep firing when a full stomach or a startle sets it off. Most fits still end once that nerve settles down.",
      hook: "But one man kept hiccuping from 1922 until 1990.",
    },
    {
      topic: "Why did one man keep hiccuping from 1922 until 1990?",
      answer: "Charles Osborne hiccuped from 1922 to 1990, about 68 years. Doctors never found a simple off switch, because the reflex runs on a nerve loop that does not ask permission.",
      hook: "But those hiccups did stop on their own, about a year before he died.",
    },
    {
      topic: "Why can hiccups stop on their own after decades?",
      answer: "An irritated nerve can quiet without a treatment, even after a very long run. Osborne's hiccups ended in 1990, and he died the following year.",
      hook: "But holding your breath only sometimes interrupts the loop.",
    },
  ],
  b4: [
    {
      topic: "Why do planets shine steadier than twinkling stars?",
      answer: "Planets are close enough to look like tiny disks, not pinpoints. Parts of the disk wobble in different directions and average out, so the light looks steady.",
      hook: "But a planet low on the horizon will twinkle too.",
    },
    {
      topic: "Why will a planet on the horizon twinkle too?",
      answer: "Light from the horizon passes through much more air than light from overhead. More air means more shaky pockets, for a planet as well as a star.",
      hook: "But astronauts see stars that do not twinkle at all.",
    },
    {
      topic: "Why do stars seen by astronauts not twinkle at all?",
      answer: "Twinkling is made by air, and above the air nothing is left to bend the beam. From orbit, stars are sharp and steady.",
      hook: "But dust between the stars can dim them without any twinkle.",
    },
    {
      topic: "Why can dust between the stars dim them without a twinkle?",
      answer: "Dust clouds absorb or scatter some light on its way here, so a star looks fainter. That dimming stays steady, because the dust is not a moving pocket of air.",
      hook: "But that dust is also where new stars are born.",
    },
  ],
  b5: [
    {
      topic: "Why is human hair too sparse for goosebumps to keep us warm?",
      answer: "On a furry animal, standing hairs trap a thicker blanket of air. Humans lost most of that coat, and the tiny muscles stayed, so we fluff up fur we barely have.",
      hook: "But goosebumps also appear when a song gives you chills.",
    },
    {
      topic: "Why do goosebumps appear when a song gives you chills?",
      answer: "The nerves that fire for cold also fire for a sudden feeling. Music can trip that wire, a cousin of an animal puffing up or shivering when a moment hits hard.",
      hook: "But not everyone gets chills from music.",
    },
    {
      topic: "Why doesn't everyone get chills from music?",
      answer: "People who do often seem to have stronger links between hearing and the brain's reward center. The shiver and the pleasure arrive together, and not every brain is linked that tightly.",
      hook: "But expecting a chill often chases the feeling away.",
    },
    {
      topic: "Why does expecting a chill chase the feeling away?",
      answer: "That kind of chill is a surprise. When you wait for it and watch yourself, the spike that would tighten the tiny muscles often never arrives.",
      hook: "But a live show still gives many listeners more chills than headphones do.",
    },
  ],
  b6: [
    {
      topic: "Why does magnetic north move?",
      answer: "Earth's magnetic field comes from swirling liquid iron in the outer core. As that flow changes, the magnetic poles drift, sometimes by tens of miles in a year.",
      hook: "But the magnetic poles do not only drift — sometimes they trade places.",
    },
    {
      topic: "Why do the magnetic poles sometimes trade places?",
      answer: "The iron dynamo is messy, and over thousands of years its direction can weaken, wander, and return the other way. The last full swap was about 780,000 years ago.",
      hook: "But a magnetic flip does not turn the planet upside down.",
    },
    {
      topic: "Why does a magnetic flip not turn the planet upside down?",
      answer: "Magnetism is not what holds Earth upright or keeps the planet in orbit. During a flip the field gets weaker and tangled, compasses struggle, and then a new pattern settles.",
      hook: "But life has survived many magnetic flips.",
    },
    {
      topic: "Why has life survived many magnetic flips?",
      answer: "A weaker field lets more particles from the Sun reach the upper air, and compasses get unreliable, but the air and the ground remain. Fossils do not show a clean die-off lined up with past flips.",
      hook: "But magnetic north is currently racing across the Arctic faster than it did a century ago.",
    },
  ],
};

export function presetAt(seedId: string, depth: number): PresetCard | null {
  if (!Number.isInteger(depth) || depth < 1) return null;
  const chain = PRESETS[seedId];
  if (!chain) return null;
  return chain[depth - 1] ?? null;
}
