import type { PresetCard } from "@/types";

/** Levels 5–8, continuing each existing trail to bedrock. */
export const DEEPER: Record<string, readonly PresetCard[]> = {
  s1: [
    {
      topic: "Why do miners dig up salt that was buried?",
      answer: "Those dried seas left thick beds of rock salt. Miners follow the white beds underground, or pump water down and pull salty brine back up.",
      hook: "But the salt in a shaker may have come from a mine or from a pond of seawater.",
    },
    {
      topic: "Why might shaker salt come from a mine or from seawater?",
      answer: "Sea salt is seawater left in shallow ponds until the water is gone. Rock salt is an ancient seabed. Both are mostly sodium chloride, the same mineral.",
      hook: "But your body needs a little of that mineral, and a lot of it strains you.",
    },
    {
      topic: "Why does the body need a little of that mineral?",
      answer: "Sodium helps nerves send signals and helps blood hold the right amount of water. Kidneys can only clear so much extra, so a very salty diet makes the heart work harder.",
      hook: "But the ocean and the kitchen are two ends of one mineral loop.",
    },
    {
      topic: "Why are the ocean and the kitchen one mineral loop?",
      answer: "Rivers dissolve rock, seas store it, and people dig or evaporate it back onto the table. This is the bedrock: the ocean is salty because the planet keeps moving minerals and almost never throws them away.",
      hook: "But the loop is so slow that one human life never tastes the ocean change.",
    },
  ],
  s2: [
    {
      topic: "Why can two people remember one event differently?",
      answer: "Each brain stores a sketch, not a video, and fills gaps with what usually happens. Two honest people can walk away with two different sketches of the same afternoon.",
      hook: "But a dream uses that same sketchbook while the outside world is quiet.",
    },
    {
      topic: "Why does a dream use that sketchbook at night?",
      answer: "During sleep the brain replays pieces of the day and stitches them to older memories. The stitch is loose, which is why a dream can put your teacher in a boat.",
      hook: "But the replay seems to help the memories that matter stick.",
    },
    {
      topic: "Why would replaying the day help memories stick?",
      answer: "A memory that is used again becomes easier to find later, the way a path through grass gets clearer when feet keep using it. Sleep is a quiet time for that reuse.",
      hook: "But nightmares replay fear, and that can make the fear path clearer too.",
    },
    {
      topic: "Why do nightmares make a fear path clearer?",
      answer: "A scary dream is the same replay with the alarm turned up. This is the bedrock: dreams are the brain practicing its files in the dark, and practice strengthens whatever it touches, pleasant or not.",
      hook: "But waking up and telling the dream to someone can loosen the scary ones.",
    },
  ],
  s3: [
    {
      topic: "Why can scientists track lightning across the planet?",
      answer: "Each bolt sprays a radio pop that a network of antennas can hear from far away. The time the pop arrives at several antennas points back to the strike.",
      hook: "But those same pops are how a storm warns a plane before the pilot sees the cloud.",
    },
    {
      topic: "Why can a radio pop warn a plane about a storm?",
      answer: "Lightning is a sign of a violent cloud, with wind and hail nearby. Hearing the pops early lets a pilot steer around weather that radar is still painting.",
      hook: "But the bolt itself is hotter than the surface of the Sun for an instant.",
    },
    {
      topic: "Why is a lightning bolt hotter than the Sun's surface?",
      answer: "The channel is a thin thread of air turned into plasma, and a huge current is squeezed through it. Heat that intense makes the air explode outward, which is the thunder.",
      hook: "But the ground strike you notice is only one piece of a flash that may have branched.",
    },
    {
      topic: "Why does one flash of lightning branch?",
      answer: "The faint leader searches many paths through the air, and several can light at once. This is the bedrock: lightning is a searching spark, and the bright stroke is just the path that finally connected sky and ground.",
      hook: "But most of those searching branches never touch anything at all.",
    },
  ],
  s4: [
    {
      topic: "Why does sweat fail to cool you in soggy air?",
      answer: "Sweat cools only when it evaporates, and soggy air is already full of water. The drops sit on your skin, and the heat stays with you.",
      hook: "But a breeze can still help, because it sweeps the damp air away from your skin.",
    },
    {
      topic: "Why does a breeze help sweat evaporate?",
      answer: "Moving air carries off the humid layer clinging to you and brings drier air in. That is why a fan feels cooling even when the room's thermometer does not drop.",
      hook: "But a fever is a raised set point, so the body may fight the cooling on purpose.",
    },
    {
      topic: "Why would the body fight cooling during a fever?",
      answer: "If the thermostat is set high, chilling the skin makes you shiver and climb back up. Medicine that lowers the set point is what lets the sweat finally mean the fever is leaving.",
      hook: "But most fevers are the immune system doing a job, not a mistake.",
    },
    {
      topic: "Why is a fever usually the immune system doing a job?",
      answer: "A warmer body slows many germs and speeds some defender cells. This is the bedrock: fever is a controlled heat, useful until it climbs toward danger, which is why a very high one is an emergency and a mild one often is not.",
      hook: "But the number on the thermometer matters less than how the person is acting.",
    },
  ],
  s5: [
    {
      topic: "Why did clouds nearly hide the target from some dishes?",
      answer: "Water in clouds absorbs and scatters the radio waves those dishes were collecting. A storm over one telescope can punch a hole in the Earth-sized array.",
      hook: "But the array can still make a picture if enough dishes see clearly at the same moment.",
    },
    {
      topic: "Why can the array make a picture from only some dishes?",
      answer: "Each dish is one piece of a giant lens. Lose a few pieces and the picture gets fuzzier, but the ring can still appear if the remaining dishes span the planet.",
      hook: "But the black hole itself stays invisible, and only the glowing gas gives the outline.",
    },
    {
      topic: "Why does only the glowing gas give a black hole an outline?",
      answer: "Nothing, not even light, comes back from inside the edge called the event horizon. The gas outside is hot enough to shine, and the hole's shadow is the missing middle of that shine.",
      hook: "But that edge is not a solid surface you could land on.",
    },
    {
      topic: "Why is the event horizon not a solid surface?",
      answer: "It is the distance where gravity's pull on light becomes a one-way trip. This is the bedrock: a black hole is invisible because it is a place light cannot leave, and the famous picture is the glow of everything that has not fallen in yet.",
      hook: "But cross that distance and no signal you send can climb back out.",
    },
  ],
  s6: [
    {
      topic: "Why can footprints that look like a group be one trail?",
      answer: "Many animals walk the same easy path, one after another, and the prints pile up. A cluster of prints can be a parade, not a team hunt.",
      hook: "But some trackways show animals of different sizes moving together in step.",
    },
    {
      topic: "Why would different sizes moving in step suggest a family?",
      answer: "Adults and younger animals side by side, heading the same way, are hard to explain as strangers who happened by. It looks like a group that stayed together.",
      hook: "But bones still tell us more about size than footprints tell us about friendship.",
    },
    {
      topic: "Why do bones tell us more about dinosaur size?",
      answer: "A leg bone's thickness has to hold the animal's weight, so the bone is a scale. Hollow, bird-like bones made huge bodies possible without the legs becoming impossibly thick.",
      hook: "But even those light bones had a limit, and the biggest animals lived near it.",
    },
    {
      topic: "Why did the biggest dinosaurs live near the limit of their bones?",
      answer: "Past a point, legs, heart, and food cannot keep up with weight. This is the bedrock: dinosaurs got huge because light bones, lots of plants, and enough time lined up, and the footprint puzzles are about behavior, not about how the size was possible.",
      hook: "But birds, the dinosaurs that remain, kept the light bones and gave up the giant bodies.",
    },
  ],
  h1: [
    {
      topic: "Why did some statues survive only underwater or in mud?",
      answer: "Air, fire, and lime kilns destroy marble that people can reach. A shipwreck or a buried ditch hides a statue from both weather and builders who need stone.",
      hook: "But the words of Rome survived more often than the statues did.",
    },
    {
      topic: "Why did the words of Rome survive more often than the statues?",
      answer: "A text can be copied by hand onto a new page, and a statue cannot. Monks, lawyers, and teachers kept copying the books they still used.",
      hook: "But they copied what they needed, so poems and jokes were easier to lose.",
    },
    {
      topic: "Why were poems easier to lose than law books?",
      answer: "A law book earns its shelf by being useful in court. A poem has to be loved by someone with time and parchment, and love is a weaker guarantee.",
      hook: "But the city that made those laws kept living, under new names.",
    },
    {
      topic: "Why did the city keep living under new names?",
      answer: "People, roads, churches, and Latin did not vanish on a single day. This is the bedrock: Rome changed rulers and shrank, and a great deal of it walked forward into medieval Europe instead of ending like a dropped plate.",
      hook: "But the western emperors did stop, and that political ending was real.",
    },
  ],
  h2: [
    {
      topic: "Why did rain turn unrepaired earth walls back into mud?",
      answer: "Rammed earth is soil packed until it is hard, and it stays hard only if the top is capped and the face is kept dry. Rain soaks a neglected wall and the packing lets go.",
      hook: "But stone sections still stand, and tourists meet those, not the mud.",
    },
    {
      topic: "Why do tourists mostly meet the stone sections?",
      answer: "Stone lasts, and later dynasties rebuilt the famous stretches in brick and stone near the capital. The long frontier of packed earth weathered away and photographs poorly.",
      hook: "But even the stone was a line of forts, not a single sealed door.",
    },
    {
      topic: "Why was the stone wall still a line of forts?",
      answer: "Gates, towers, and soldiers did the real work. A wall without people is a fence, and a fence can be climbed, bribed, or walked around.",
      hook: "But the forts also guided trade, which was a quieter purpose than war.",
    },
    {
      topic: "Why did the forts guide trade as well as war?",
      answer: "Whoever holds the gate chooses who passes and what tax they pay. This is the bedrock: the Wall was a way to watch a huge border, and it failed as a magic barrier because no wall replaces the people standing on it.",
      hook: "But the watchers needed grain and pay, and both ran out more than once.",
    },
  ],
  h3: [
    {
      topic: "Why did the spices in the hold pay for the trip?",
      answer: "Cloves, nutmeg, and pepper were worth more than their weight in many European markets, because they traveled a long dangerous road. A few surviving barrels could cover three years of ships and wages.",
      hook: "But the price was high only because the islands that grew them were far and few.",
    },
    {
      topic: "Why were the spice islands far and few?",
      answer: "Nutmeg and cloves grew on a handful of islands in what is now Indonesia. Whoever controlled the ships controlled the price, which is why so many empires wanted the route.",
      hook: "But Columbus never reached those islands, and he had been aiming for Asia the whole time.",
    },
    {
      topic: "Why was Columbus aiming for Asia when he struck a continent?",
      answer: "Europe already bought Asian goods through long overland and Middle Eastern routes. A sea path west looked like a shortcut, if the globe was as small as he insisted.",
      hook: "But the scholars who said the globe was larger were measuring, not guessing for glory.",
    },
    {
      topic: "Why were the doubting scholars measuring instead of guessing?",
      answer: "They used older estimates of Earth's size that were much closer to the truth. This is the bedrock: Columbus sailed because he wanted a rich route and trusted a too-small Earth, and the people who told him the ocean was too wide were right.",
      hook: "But the lands he did reach were not empty, and that meeting changed both sides forever.",
    },
  ],
  h4: [
    {
      topic: "Why does the spreading flea struggle in very cold weather?",
      answer: "The oriental rat flea slows down and dies back when the air is cold and dry. Plague outbreaks often eased in winter and flared when rats and fleas were warm again.",
      hook: "But the bacterium can also ride in droplets from a sick person's cough.",
    },
    {
      topic: "Why can the plague bacterium ride in a cough?",
      answer: "If it reaches the lungs, it becomes pneumonic plague, which spreads person to person in the air. That form is less common and much faster, which is why some towns seemed to fall in days.",
      hook: "But most of the famous spread still followed rats on ships and grain carts.",
    },
    {
      topic: "Why did rats on ships and grain carts carry the plague so far?",
      answer: "Medieval trade was a web of boats and wagons, and rats live where grain is stored. A sick rat in a hold is a passenger with a ticket to the next port.",
      hook: "But the people who survived were not a random handful.",
    },
    {
      topic: "Why were the people who survived the plague not a random handful?",
      answer: "Some bodies fight the bacterium better, and some towns that quarantined ships lost fewer neighbors. This is the bedrock: the Black Death moved at the speed of trade, because fleas, rats, and ships were already connected, and the germ did not need anyone to understand it.",
      hook: "But understanding germs, centuries later, is what finally slowed that kind of spread.",
    },
  ],
  h5: [
    {
      topic: "Why did the flight home depend on a single engine?",
      answer: "The lunar module's ascent engine had no backup. If it failed on the Moon, the crew could not leave, which is why that one motor was built to be as simple as a stove.",
      hook: "But the rocket that left Earth was a stack of engines, and several could fail.",
    },
    {
      topic: "Why could several engines on the Saturn stack fail?",
      answer: "The first stage had five huge engines, and the rocket could limp onward if one shut down early. Extra engines are how you buy a second chance when the mission is leaving the planet.",
      hook: "But the race that funded the stack was really about rockets that could carry bombs.",
    },
    {
      topic: "Why was the Space Race also about rockets that could carry bombs?",
      answer: "A rocket that can put a satellite in orbit can also throw a weapon across the world. The peaceful pictures and the military worry were two uses of the same machine.",
      hook: "But the crews who flew were not the generals, and they came home with rocks.",
    },
    {
      topic: "Why did the crews come home with rocks?",
      answer: "Moon rocks are a piece of an early planet that never melted and recycled the way Earth does. This is the bedrock: the Space Race was a missile contest that also bought a trip to another world, and the odds were never comfortable because every new machine had to work the first time it mattered.",
      hook: "But those rocks are still in labs, older than almost any stone under your feet.",
    },
  ],
  h6: [
    {
      topic: "Why did teachers' favorites get copied and other books vanish?",
      answer: "Copying a book by hand takes months. A school copies the text it assigns, and a text nobody assigns quietly turns to dust.",
      hook: "But a few lost books came back as faint writing under a later page.",
    },
    {
      topic: "Why did faint writing under a later page bring books back?",
      answer: "Palimpsests kept the old ink in the fibers. Cameras that see what eyes miss have recovered works that the last complete copy had seemed to lose.",
      hook: "But cameras cannot recover a book that was never copied even once.",
    },
    {
      topic: "Why is a book that was never copied gone for good?",
      answer: "Papyrus and parchment rot. If only one copy existed and it burned, molded, or was scraped, the words ended with that object.",
      hook: "But the famous fire is the story people remember, because a single blaze is easier than a century of neglect.",
    },
    {
      topic: "Why is a single blaze easier to remember than a century of neglect?",
      answer: "A fire has a night and a villain. Neglect is just nobody ordering the next copy. This is the bedrock: the Library of Alexandria faded because copying stopped and pages rotted, and most of what we lost from the ancient world was lost that slow way, not in one dramatic afternoon.",
      hook: "But every book still in print is a chain of people who chose to copy it.",
    },
  ],
  n1: [
    {
      topic: "Why can a lion only make that soft sound on the exhale?",
      answer: "A roaring cat's throat is built around a flexible bone that helps the roar and gets in the way of a two-way flutter. The soft sound rides the breath going out, then stops.",
      hook: "But the house cat's two-way flutter is also how a purr can run for minutes.",
    },
    {
      topic: "Why can a house cat's purr run for minutes?",
      answer: "The muscles twitch on their own, inhale and exhale, without the cat planning each pulse. It can keep going while the cat is half asleep.",
      hook: "But the reason for the sound is still partly a guess, even if the mechanics are clear.",
    },
    {
      topic: "Why is the reason for purring still partly a guess?",
      answer: "Cats purr when they are comfortable, and also when they are hurt, so one mood does not explain it. Soothing themselves, calling a friend, and the maybe-healing vibration can all be true at once.",
      hook: "But the healing idea is a frequency match, not a proven medicine.",
    },
    {
      topic: "Why is the healing idea only a frequency match?",
      answer: "Purrs sit in a low range that also shows up in some bone-stimulation tools, and that rhyme is interesting. This is the bedrock: we know how a purr is made and that it happens in sickness and in comfort, and we do not yet know which job it was built for.",
      hook: "But you can feel the flutter if a cat chooses your chest.",
    },
  ],
  n2: [
    {
      topic: "Why does an early frost leave autumn colors dull?",
      answer: "The tree is in the middle of pulling useful pieces out of the leaf. A hard freeze kills the leaf's machinery before the green is cleared and before much red is built.",
      hook: "But the yellow pigments were waiting under the green the whole summer.",
    },
    {
      topic: "Why were yellow pigments waiting under the green all summer?",
      answer: "Carotenoids help with light, and chlorophyll hides them while days are long. Short days break the green down, and the yellow was never new.",
      hook: "But the red is new, and the tree spends sugar to make it on the way out.",
    },
    {
      topic: "Why does the tree spend sugar on red that is about to fall?",
      answer: "The leading ideas are a sunshield for a leaf that is still shipping food inward, or a warning to insects. Experiments disagree, which means the red is a real cost with a debated purpose.",
      hook: "But the fallen leaf is not wasted, because the soil gets what the tree did not take.",
    },
    {
      topic: "Why does the soil get what the tree did not take back?",
      answer: "Leftover leaf becomes food for fungi, worms, and next year's roots. This is the bedrock: autumn color is a tree unpacking a leaf, hiding nothing yellow, building red on purpose, and then giving the rest to the ground.",
      hook: "But a warm autumn without frost lets that unpacking finish, and the hills go bright.",
    },
  ],
  n3: [
    {
      topic: "Why does the peroxide in honey fade as the jar ages?",
      answer: "The enzyme that makes hydrogen peroxide slows and the peroxide itself breaks down. Old honey can still resist germs because it is dry and acidic, even after the peroxide is gone.",
      hook: "But those two defenses are why a sealed jar can outlast the beekeeper.",
    },
    {
      topic: "Why can dryness and acid let a sealed jar outlast the beekeeper?",
      answer: "Germs need free water, and honey holds its water too tightly. Acid makes the room even less friendly, so a closed jar has little left for a microbe to use.",
      hook: "But honey is still bee food, stored for a flowerless winter.",
    },
    {
      topic: "Why do bees store honey for a flowerless winter?",
      answer: "Workers spend summer turning nectar into a fuel that will not spoil, then eat it when blossoms are gone. The jar on your shelf is a piece of that winter plan.",
      hook: "But taking too much leaves the colony hungry, which is why beekeepers leave them a share.",
    },
    {
      topic: "Why must beekeepers leave the colony a share of honey?",
      answer: "The bees made the food for themselves, and a stripped hive can starve before spring. This is the bedrock: honey lasts because bees built a dry, sour fuel for winter, and the ancient jars are that fuel doing exactly what it was made to do.",
      hook: "But a hive is a crowd, and no single bee lives to see the winter it saved for.",
    },
  ],
  n4: [
    {
      topic: "Why does a gentle beach spill a wave while a steep one dumps it?",
      answer: "On a gentle slope the bottom slows the wave gradually, so the crest crumbles into foam as it runs. A sudden drop makes the crest pitch forward all at once, and the wave dumps.",
      hook: "But the wave that arrives was born by wind, often days away.",
    },
    {
      topic: "Why is the wave that arrives often born by wind days away?",
      answer: "Wind pushes on water and wrinkles it into waves that then travel on their own. A storm you never saw can deliver the surf at your beach.",
      hook: "But waves of similar speed catch up with each other and arrive as a set.",
    },
    {
      topic: "Why do waves of similar speed catch up and arrive as a set?",
      answer: "Longer, faster waves outrun shorter ones and bunch with others like themselves. The bunch is the set, and the gap behind it is the lull surfers wait through.",
      hook: "But no law says the seventh wave in that bunch is the biggest.",
    },
    {
      topic: "Why is the seventh wave not a law of the ocean?",
      answer: "The tallest member of a set can sit anywhere in the bunch. This is the bedrock: sets are families of waves that traveled together from a storm, sorted by speed, and the number seven is a story people told about a pattern that is real but not counted that way.",
      hook: "But a patient watcher can still learn the rhythm of bunch, then lull.",
    },
  ],
  n5: [
    {
      topic: "Why do the extra-high spring tides happen twice a month?",
      answer: "When the Sun, Earth, and Moon line up, at new moon and full moon, the two pulls add. The bulges grow, and those are spring tides, named for the springing up, not for the season.",
      hook: "But a week later the Sun and Moon pull at right angles and the tides shrink.",
    },
    {
      topic: "Why do tides shrink when the Sun and Moon pull sideways?",
      answer: "The Sun's bulge and the Moon's bulge then fight, and the difference between high and low gets smaller. Those are neap tides.",
      hook: "But the Moon's pull is still the larger share, even though the Sun is heavier.",
    },
    {
      topic: "Why is the Moon's tidal pull larger when the Sun is heavier?",
      answer: "Tides depend strongly on closeness, and the Moon is vastly nearer. Weight matters, and distance matters more, which is why the small neighbor wins.",
      hook: "But that winning pull is also slowly pushing the Moon away.",
    },
    {
      topic: "Why is the Moon's winning pull pushing it away?",
      answer: "Friction from the tides steals a little of Earth's spin and gives it to the Moon's orbit, so the Moon climbs outward about as fast as fingernails grow. This is the bedrock: tides are the Moon and the Sun hauling on the oceans, the Moon hauls harder because it is close, and the haul is slowly lengthening our days.",
      hook: "But the lengthening is about a millisecond a century, too small to feel.",
    },
  ],
  n6: [
    {
      topic: "Why can an injury cost the future wing before it unfolds?",
      answer: "The wing's imaginal disc is already a small packet of cells in the caterpillar. Damage that packet and the adult part it was building has nothing complete to grow from.",
      hook: "But most of the old body is still broken down into a reusable soup.",
    },
    {
      topic: "Why is the unused body turned into a reusable soup?",
      answer: "Wings, long legs, and a new gut are built from proteins the crawler already owns. Enzymes take the unneeded tissues apart so the waiting discs have material.",
      hook: "But a few memory cells skip the soup and carry a smell across.",
    },
    {
      topic: "Why can a few memory cells carry a smell across metamorphosis?",
      answer: "Some neurons in the memory centers are spared. A caterpillar that learned to avoid a scent can still avoid it as an adult, which means the self is not entirely erased.",
      hook: "But the adult body plan was under construction long before the chrysalis looked still.",
    },
    {
      topic: "Why was the adult body plan already under construction?",
      answer: "The discs grow quietly during caterpillar life, waiting for the signal to unfold. This is the bedrock: the change looks like a magic trick, and it is a rebuild that was scheduled in advance, with a little memory carried through the soup.",
      hook: "But from the outside the chrysalis just hangs there, as if nothing is happening.",
    },
  ],
  p1: [
    {
      topic: "Why has no experiment settled what a feeling is?",
      answer: "We can match brain activity to reports of red, pain, or a song. We cannot yet point to the activity and say which part of it is the feeling, rather than the report.",
      hook: "But anesthesia shows the feeling can be switched off while the body stays alive.",
    },
    {
      topic: "Why can anesthesia switch feeling off while the body stays alive?",
      answer: "Certain drugs change how brain cells talk, and the inner scene goes dark even though the heart keeps beating. The link between those cells and experience is tight.",
      hook: "But a tight link is not the same as knowing why the talk feels like anything.",
    },
    {
      topic: "Why is a tight link not an explanation of the feeling?",
      answer: "A map of which neurons fire is a description of the machinery. The hard problem is why that machinery is accompanied by an inside, instead of happening in the dark.",
      hook: "But some people think the inside just is the machinery, seen from within.",
    },
    {
      topic: "Why might the inside just be the machinery seen from within?",
      answer: "On that view there is no extra ghost behind the summary. This is the bedrock: nobody can yet say why brain activity feels like something, the guesses are still argued, and every honest answer admits the gap.",
      hook: "But you do not need the answer to notice that the gap is there.",
    },
  ],
  p2: [
    {
      topic: "Why has nobody watched the Big Bang the way we watch an ice cube?",
      answer: "The beginning is not an event we can rewind in a lab. We see its leftovers, like the afterglow in the sky, and we infer the tidy start from the way things now run down.",
      hook: "But an ice cube melting in a kitchen is the same kind of running down, small enough to hold.",
    },
    {
      topic: "Why is a melting ice cube the same kind of running down?",
      answer: "Heat spreads, order unravels, and the molecules gain more ways to be arranged. That rise in ways-to-be is entropy, and it is why the cube does not leap back together.",
      hook: "But the laws of motion would allow the leap, if the past were as messy as the future.",
    },
    {
      topic: "Why would messy laws still allow a cube to unmelt?",
      answer: "The equations almost all work backward. What forbids the unmelting is the tidy past, not a sign inside the equation that says forward only.",
      hook: "But calling that tidy past an accident is still a fight among physicists.",
    },
    {
      topic: "Why is the tidy past of the universe still a fight?",
      answer: "It might have been required by a deeper law, or it might have been a rare start. This is the bedrock: time points forward because the universe began unusually orderly, and entropy is us spending that order, one melted cube at a time.",
      hook: "But we have not found the law that would say the tidy start had to happen.",
    },
  ],
  p3: [
    {
      topic: "Why do many scientists want a real explanation instead of a hint?",
      answer: "A hint that says we can only find ourselves where observers are possible can excuse almost any number. An explanation would say why the numbers are these, even if nobody were here to notice.",
      hook: "But every deep theory so far still has a dial you can turn.",
    },
    {
      topic: "Why does an unfinished theory still leave a dial for experiment?",
      answer: "The equations leave a strength or a mass for experiment to fill in. Turn that dial and the predictions change, so the math alone did not finish the job.",
      hook: "But a different setting of some dials would have made no stars at all.",
    },
    {
      topic: "Why would a different dial setting make no stars?",
      answer: "Gravity, nuclear forces, and the masses of particles have to sit in a narrow range for atoms to last and clouds to collapse into suns. Outside that range the sky stays dark.",
      hook: "But a dark universe would not contain anyone to call the dials wrong.",
    },
    {
      topic: "Why would a dark universe contain nobody to complain?",
      answer: "Questions are asked by creatures, and creatures need stars, chemistry, and time. This is the bedrock: we do not know why there is something, or why the rules are these rules, and the hint that we must live where asking is possible is not yet an explanation.",
      hook: "But the question is old enough that pretending it is solved would be the real mistake.",
    },
  ],
  p4: [
    {
      topic: "Why do children protest an unfair share so early?",
      answer: "By about age three, many children object when a split ignores effort or treats them worse for no reason. The protest is clumsy, and it is already about fairness, not only about liking a helper.",
      hook: "But a toddler's protest is not yet a culture's whole moral code.",
    },
    {
      topic: "Why is a toddler's protest not a whole moral code?",
      answer: "A code weighs strangers, promises, and punishment, which takes years of practice. The early no is a seed, and the grown rules are what groups build so strangers can trust each other.",
      hook: "But groups that could not trust strangers tended to lose to groups that could.",
    },
    {
      topic: "Why did groups that trusted strangers tend to win?",
      answer: "Trade, shared defense, and big projects need people who are not family. Rules against cheating and casual harm make that possible, so versions of those rules kept spreading.",
      hook: "But the details of polite and rude still change from one table to the next.",
    },
    {
      topic: "Why do polite and rude still change from table to table?",
      answer: "How close to stand, or how loud to laugh, is local history. This is the bedrock: the shared core, do not casually harm your partners and keep a fair deal, shows up everywhere because groups that ignored it fell apart, and the local manners are the costume that core wears.",
      hook: "But a visitor can learn the costume, which is why travel is awkward and then easier.",
    },
  ],
  f1: [
    {
      topic: "Why does mold move in when you stop feeding a starter?",
      answer: "A hungry starter dries out or loses its sour guard, and then other microbes can take the jar. Regular flour and water keep the crowd dense and acidic enough to hold the door.",
      hook: "But the crowd itself changes, even when you feed it faithfully.",
    },
    {
      topic: "Why does a faithfully fed starter still change its crowd?",
      answer: "Different flours, kitchens, and seasons favor different yeasts and bacteria. The name stays, and the population slowly becomes a new mix.",
      hook: "But the bacteria, not the yeast, are what make the sour taste.",
    },
    {
      topic: "Why do bacteria, not yeast, make sourdough sour?",
      answer: "Lactic acid bacteria give off acids as they eat. Yeast mostly makes the gas that lifts the dough, and the acid is the tang.",
      hook: "But the gas only lifts the loaf if gluten traps it.",
    },
    {
      topic: "Why does gluten have to trap the gas for bread to rise?",
      answer: "Yeast breathes out carbon dioxide, and a stretchy network of gluten holds those bubbles until the oven sets them. This is the bedrock: bread rises because a living crowd makes gas inside a dough that can hold a bubble, and sourdough is that crowd kept alive by being fed.",
      hook: "But a forgotten jar goes flat and then fuzzy, which is the crowd losing.",
    },
  ],
  f2: [
    {
      topic: "Why does yesterday's cup of coffee work less today?",
      answer: "The brain answers a blocked tiredness signal by adding more receptors. The same caffeine then has more doors to cover, so the buzz shrinks unless the dose grows.",
      hook: "But caffeine began as the coffee plant's weapon against insects.",
    },
    {
      topic: "Why did caffeine begin as a weapon against insects?",
      answer: "In the leaves and beans it discourages bugs that would eat the plant, and it can slow rival seedlings nearby. A dose that wakes a person is a serious amount for an insect.",
      hook: "But people had to learn to like the bitter warning that comes with it.",
    },
    {
      topic: "Why did people have to learn to like coffee's bitter warning?",
      answer: "Bitter often means poison, so the tongue starts suspicious. Sugar, milk, habit, and the pleasant lift teach the alarm to stand down.",
      hook: "But the lift is borrowed, and the plant was not trying to wake you.",
    },
    {
      topic: "Why was the coffee plant not trying to wake you?",
      answer: "The buzz is your nervous system sitting in the way of a chemical meant for bugs. This is the bedrock: coffee tastes like a warning because bitterness was a warning, and drinkers trained themselves to enjoy a defense the plant built for itself.",
      hook: "But skip it for a few days and the extra receptors fade, which is why a pause brings the first cup back.",
    },
  ],
  f3: [
    {
      topic: "Why does the same sulfur chemistry turn a cooked onion sweet?",
      answer: "Heat breaks the sharp sulfur compounds into milder ones and browns the sugars. The gas that stung you at the cutting board is cooked into the flavor people mean when they say onion.",
      hook: "But the sting itself was a defense, released only when cells are broken.",
    },
    {
      topic: "Why is the onion's sting released only when cells are broken?",
      answer: "The enzyme and the sulfur compounds sit in separate compartments. A knife mixes them, and the gas is the plant punishing whatever damaged the bulb.",
      hook: "But a cold onion slows that enzyme, which is why the fridge helps.",
    },
    {
      topic: "Why does a cold onion slow the enzyme that makes you cry?",
      answer: "The reaction runs faster when it is warm. Chill the bulb and less gas escapes before you finish chopping.",
      hook: "But once the gas meets the water on your eye, it becomes a mild acid anyway.",
    },
    {
      topic: "Why does the gas wait for tear water before it stings?",
      answer: "The gas reacts with the water in your tears and only then becomes a mild acid. This is the bedrock: onions make you cry because a defense gas, mixed by the knife, turns to a sting in the eye's own water, and the tears are a rinse.",
      hook: "But a sharp knife crushes fewer cells, so less of that mix escapes.",
    },
  ],
  f4: [
    {
      topic: "Why is chocolate bloom still the same food underneath?",
      answer: "The gray film is cocoa butter that melted and reformed in a messier crystal. It looks like mold and it is only fat, so the bar is safe and just less snappy.",
      hook: "But the snappy crystal is the one that melts on your tongue.",
    },
    {
      topic: "Why does the snappy crystal melt on your tongue?",
      answer: "Cocoa butter's best crystal shape softens just below body temperature. The bar goes from solid to silky in the mouth, which almost no other food copies.",
      hook: "But that shape has to be taught to the fat by tempering.",
    },
    {
      topic: "Why does tempering have to teach cocoa butter its shape?",
      answer: "The fat can freeze into several crystals, and only one is glossy and quick to melt. Careful heating and cooling nudges it into that one.",
      hook: "But the mood people blame on chocolate is mostly too small to be a drug.",
    },
    {
      topic: "Why is the chocolate mood too small to be a drug?",
      answer: "Theobromine, a little caffeine, and trace pleasure molecules are real, and a normal bar does not hold a mood-changing dose. This is the bedrock: chocolate feels special because a trained crystal melts at body warmth in your mouth, and the famous high is mostly the pleasure of that melt plus expectation.",
      hook: "But expectation is powerful, which is why the ritual of the square matters.",
    },
  ],
  f5: [
    {
      topic: "Why does smell do more of the work of flavor than the tongue?",
      answer: "The tongue reports a handful of signals: sour, sweet, salty, bitter, umami. Most of what you call strawberry or coffee is smell drifting up the back of the throat.",
      hook: "But sour is the signal that makes a lemon and a vinegar taste related.",
    },
    {
      topic: "Why does the sour signal make lemon and vinegar taste related?",
      answer: "Both dump hydrogen ions, acid, onto the tongue, and a special channel fires for that. The smells differ, and the sour channel does not care.",
      hook: "But a strong acid also pulls a face you did not choose.",
    },
    {
      topic: "Why does a strong acid pull a face you did not choose?",
      answer: "Extra saliva floods in to dilute the acid, and muscles around the mouth tighten. It is a reflex, like a squint, not a decision.",
      hook: "But a mild sour, especially with sugar, is a taste people seek on purpose.",
    },
    {
      topic: "Why do people seek a mild sour taste on purpose?",
      answer: "A little acid can mean fruit that is lively and not yet rotten, and sugar makes the edge fun. This is the bedrock: sour is an acid alarm that we turned into a pleasure, and the pucker is the alarm still doing its old job when the dose is high.",
      hook: "But hold your nose and the lemon becomes mostly that alarm, with the fruit gone.",
    },
  ],
  e1: [
    {
      topic: "Why do toddlers bump heads before they learn to bow or shake?",
      answer: "A greeting is a rule, and rules are taught. A small child aims at a face with enthusiasm and has not yet learned the local version of hello.",
      hook: "But every culture has some hello, because strangers need a peaceful signal.",
    },
    {
      topic: "Why do strangers need a peaceful signal at all?",
      answer: "Walking up to someone without a sign can read as a threat. A bow, a wave, or an open hand says the approach is friendly before any words.",
      hook: "But the open-hand story of the handshake is a legend, not a recorded first handshake.",
    },
    {
      topic: "Why is the weapon-hand story of the handshake only a legend?",
      answer: "Showing an empty palm is a tidy explanation, and historians cannot point to the day it started. The scent that moves during the clasp, though, has been measured.",
      hook: "But people often sniff that hand afterward without noticing.",
    },
    {
      topic: "Why does the shaken hand drift toward the nose unnoticed?",
      answer: "A study found that hand moves toward the nose more than the other one, and people do not notice the sniff. This is the bedrock: a greeting is a learned peace signal, and a handshake quietly trades smell as well as politeness.",
      hook: "But a bow trades neither skin nor scent, which some tables prefer.",
    },
  ],
  e2: [
    {
      topic: "Why do babies yawn before they have anyone to copy?",
      answer: "Ultrasounds show fetuses yawning, long before mirrors or playmates. The motion can happen with no social trigger, so copying is not the whole story.",
      hook: "But once you are older, seeing a yawn is often enough to start one.",
    },
    {
      topic: "Why is seeing a yawn often enough to start one?",
      answer: "The sight uses brain areas that mirror other people's actions. A face on a screen works, which is why a video, or even reading this, can set you off.",
      hook: "But you are less likely to join a yawn from someone you dislike.",
    },
    {
      topic: "Why does dislike weaken a yawn you would otherwise join?",
      answer: "Mirroring pays more attention to people who matter. Someone you feel cold toward is a weaker trigger, so their yawn is easier to watch without joining.",
      hook: "But dogs catch yawns more from their own person than from a stranger too.",
    },
    {
      topic: "Why do dogs catch yawns more from their own person?",
      answer: "Familiarity seems to matter in the studies, which ties the copy to a bond. This is the bedrock: yawning can happen alone, even before birth, and the contagious kind is a social echo that is stronger between creatures who already know each other.",
      hook: "But if you yawned while reading the last line, the echo just found you.",
    },
  ],
  e3: [
    {
      topic: "Why do people still add a little extra to mark a story?",
      answer: "A tip, where it is optional, is a way to say that meal was more than fuel. The amount is a feeling, which is why it tracks charm and a brief touch more than it tracks the clock.",
      hook: "But in many countries the menu price already includes the server's wage.",
    },
    {
      topic: "Why does the menu price include the wage in many countries?",
      answer: "The restaurant pays a regular wage and builds it into the food, sometimes with a stated service charge. A slow Tuesday does not decide the rent.",
      hook: "But the United States kept a lower base wage and let tips fill the gap.",
    },
    {
      topic: "Why did the United States let tips fill a server's wage?",
      answer: "After Prohibition, restaurants rebuilt their economics by counting tips toward the legal minimum. The customer's extra became part of the paycheck itself.",
      hook: "But that makes pay depend on things the server cannot control.",
    },
    {
      topic: "Why does tip pay depend on things a server cannot control?",
      answer: "Studies keep finding that looks and a light touch predict the amount better than service quality does. This is the bedrock: tipping survived as a wage system, not as a fair meter of work, which is why the same dinner costs a posted price in some countries and a guess in others.",
      hook: "But a posted price lets everyone at the table know the number before they sit.",
    },
  ],
  e4: [
    {
      topic: "Why can a nap repay only a little of a sleep debt?",
      answer: "A short nap can restore some alertness, and it rarely contains the long deep stretch where the brain's rinse is strongest. The night is still where that rinse gets its hours.",
      hook: "But bright evenings push the night later than the morning alarm allows.",
    },
    {
      topic: "Why do bright evenings push sleep later than the alarm?",
      answer: "Light delays the hormone that makes you sleepy. Screens and lamps keep that delay going, and the alarm does not move, so the night gets squeezed.",
      hook: "But before electric light, many people split the dark into two sleeps.",
    },
    {
      topic: "Why did people split the dark into two sleeps?",
      answer: "Long nights left more time in bed than one solid sleep could fill. Diaries describe a first sleep, a quiet waking hour, and a second sleep until dawn.",
      hook: "But the brain's deepest cleaning still wants a long unbroken stretch.",
    },
    {
      topic: "Why does the brain's cleaning want a long unbroken stretch?",
      answer: "In deep sleep, fluid rinses waste that built up while you were awake, and a chopped night cuts the rinse short. This is the bedrock: the eight-hour rule is a modern schedule, the need for real deep sleep is older, and a nap is a patch, not a replacement.",
      hook: "But the two-sleep night is hard to keep when the morning bell never moves.",
    },
  ],
  e5: [
    {
      topic: "Why does another room beat a color filter for scrolling?",
      answer: "A gray screen can reduce blue light, and the unfinished reward is still in your hand. Distance removes the thumb's next pull, which a tint cannot do.",
      hook: "But the pull works because the next post might be wonderful or dull.",
    },
    {
      topic: "Why does a wonderful-or-dull next post keep the thumb moving?",
      answer: "An unpredictable prize is harder to quit than a steady one. That variable reward is the same pattern as a slot machine, and a feed is a slot machine you can check in bed.",
      hook: "But a book has a last page, and a feed is built without one.",
    },
    {
      topic: "Why is a feed built without a last page?",
      answer: "The next item is already waiting, so one more never has to be the end. Stopping has to come from you, because the product did not include an ending.",
      hook: "But some of the people who built these feeds limit them at home.",
    },
    {
      topic: "Why do some builders of feeds limit them at home?",
      answer: "They know the stickiness is a design, not an accident. This is the bedrock: scrolling is hard to stop because the next reward is unpredictable and the page never ends, and the reliable fix is to put the machine where your hand is not.",
      hook: "But knowing that and doing it are two different evenings.",
    },
  ],
  b1: [
    {
      topic: "Why does Earth's air make the setting Sun look slightly flattened?",
      answer: "Air bends light, and it bends the light from the bottom of the Sun more than the light from the top, because the bottom's path is longer. The Sun's disc gets squashed.",
      hook: "But that same bending is why you still see the Sun for a moment after it has geometrically set.",
    },
    {
      topic: "Why can you see the Sun after it has geometrically set?",
      answer: "The bent rays lift the image. The Sun is already below the horizon and its picture is still above it.",
      hook: "But the blue of noon is the other half of this story, the light that did not come straight.",
    },
    {
      topic: "Why is noon blue the light that did not come straight?",
      answer: "Air molecules scatter blue in every direction, so the sky glows with light that bounced. The Sun itself looks slightly yellower because some blue left its beam.",
      hook: "But at sunset the beam's path is so long that the blue is gone before it reaches you.",
    },
    {
      topic: "Why is the blue gone from a sunset beam before it reaches you?",
      answer: "A low Sun shines through much more air, and the blue scatters out along the way. This is the bedrock: the sky is blue because air prefers to scatter blue, and sunset is red because that long path used the blue up before the light arrived.",
      hook: "But dust and smoke scatter even more, which is why some evenings go deeper red.",
    },
  ],
  b2: [
    {
      topic: "Why does a scatter of sand give ice grains something dry to bite?",
      answer: "Sand grains are hard and do not melt under your shoe. They sit between the sole and the slick film, so the tread can push on them instead of skating.",
      hook: "But the slick film is the whole reason cold ice is slippery in the first place.",
    },
    {
      topic: "Why is a thin film the reason cold ice is slippery?",
      answer: "Pressure, friction, and the loose outer molecules of ice make a water-like layer under a shoe or a skate. You slide on that layer, not on a dry crystal.",
      hook: "But cold enough ice never grows the film, and then it grips.",
    },
    {
      topic: "Why does extremely cold ice grip instead of slide?",
      answer: "Near the cold of dry ice the surface stays hard and dry. Polar travelers and labs both find it grippy, which surprises anyone who thinks all ice is a rink.",
      hook: "But snow gets slippery by a different route, because it is a pile of grains.",
    },
    {
      topic: "Why does a pile of snow grains get slippery by a different route?",
      answer: "Steps roll the grains, melt their edges, and the cold glues them back as smoother ice. This is the bedrock: ice is slippery when a thin film or a smoothed path lets your shoe skate, and far-below-freezing ice can refuse to play along.",
      hook: "But the path that many people walk becomes the slickest, because each step helps polish it.",
    },
  ],
  b3: [
    {
      topic: "Why does holding your breath only sometimes stop hiccups?",
      answer: "A hiccup is a reflex loop through the nerve to the diaphragm, and it does not ask permission. Raising carbon dioxide by holding your breath can interrupt some loops and not others.",
      hook: "But the loop can keep firing for years, as one man proved.",
    },
    {
      topic: "Why could one man's hiccup loop fire from 1922 until 1990?",
      answer: "Charles Osborne hiccuped for about 68 years, and doctors never found a simple off switch. The reflex kept its own schedule.",
      hook: "But those hiccups did stop on their own, about a year before he died.",
    },
    {
      topic: "Why can a hiccup loop stop on its own after decades?",
      answer: "An irritated nerve can quiet without a treatment. Osborne's ended in 1990, which is a strange mercy rather than a cure anyone chose.",
      hook: "But the motion may be older than hiccups' reputation, borrowed from fish.",
    },
    {
      topic: "Why might hiccups be a motion borrowed from fish ancestors?",
      answer: "Tadpoles close a throat flap to push water over their gills without filling their lungs. This is the bedrock: a hiccup is that kind of sudden breath-and-close, usually pointless now, run by a nerve that does not ask your thinking brain.",
      hook: "But most fits still end in minutes, even if nobody understands the off switch.",
    },
  ],
  b4: [
    {
      topic: "Why are new stars born in the dust that dims the old ones?",
      answer: "Those clouds are gas and dust gathered thick enough that gravity can pull a knot into a star. The same dust that shades distant light is a nursery.",
      hook: "But a star seen from space does not twinkle, nursery or not.",
    },
    {
      topic: "Why does a star seen from space not twinkle?",
      answer: "Twinkling is air. Above the air, nothing is left to shake the beam, so stars are steady points.",
      hook: "But a planet seen through air usually stays steadier than a star.",
    },
    {
      topic: "Why does a planet stay steadier than a star through the same air?",
      answer: "A planet is close enough to look like a tiny disc. Different parts of the disc wobble in different directions and average out.",
      hook: "But a planet low on the horizon twinkles too, because the air path is longer.",
    },
    {
      topic: "Why does a long air path make even a planet twinkle?",
      answer: "Light from the horizon crosses much more shaky air than light from overhead. This is the bedrock: twinkling is the atmosphere wobbling a pinpoint of light, planets average the wobble out unless the air path is huge, and space is steady because the air is gone.",
      hook: "But the nursery dust still dims stars without wiggling them.",
    },
  ],
  b5: [
    {
      topic: "Why does a live show give more chills than the same song on headphones?",
      answer: "A crowd, a loud room, and a performer you can see add surprise and shared feeling. Many listeners get the shiver more easily there than alone with a recording.",
      hook: "But the shiver is the same tiny muscles that try to fluff fur you barely have.",
    },
    {
      topic: "Why do those tiny muscles try to fluff fur humans barely have?",
      answer: "On a furry animal, standing hairs trap warm air. Humans lost most of the coat and kept the muscles, so cold still makes bumps on nearly bare skin.",
      hook: "But the same muscles fire for a song or a scare, not only for cold.",
    },
    {
      topic: "Why do fear and music fire the muscles that were meant for cold?",
      answer: "The nerves that raise hair also answer a sudden feeling. A chill down the neck is that old fluff, triggered by emotion instead of temperature.",
      hook: "But not every listener gets it, and expecting it often chases it off.",
    },
    {
      topic: "Why does expecting a chill often chase the chill off?",
      answer: "The shiver is a surprise response. This is the bedrock: goosebumps are a fur reflex we kept after the fur left, and music borrows it when a feeling arrives faster than you can prepare for it.",
      hook: "But if you wait and watch for the bump, the feeling often never quite spikes.",
    },
  ],
  b6: [
    {
      topic: "Why is magnetic north racing across the Arctic faster than a century ago?",
      answer: "The liquid iron in the outer core has shifted, and the pole has been sprinting toward Siberia, tens of miles a year. Charts and runway numbers have had to be updated.",
      hook: "But a racing pole is not the same event as a full flip of the field.",
    },
    {
      topic: "Why is a racing magnetic pole not a full flip?",
      answer: "The pole can wander quickly while the overall field still points the same general way. A flip is the slow weakening and return of the whole pattern, last completed about 780,000 years ago.",
      hook: "But life has sat through many flips without a clean die-off in the rocks.",
    },
    {
      topic: "Why do the rocks show no clean die-off at magnetic flips?",
      answer: "A weaker field lets more solar particles reach the upper air, and compasses struggle. The air and the ground remain, which is what fossils record.",
      hook: "But a compass still only knows the magnetic pole, not the geographic one.",
    },
    {
      topic: "Why does a compass know the magnetic pole and not the map's North Pole?",
      answer: "The needle is a magnet lining up with the field the core makes, and that field's north is a wandering spot, not the spin axis. This is the bedrock: compasses point along Earth's magnetic field, the field is a moving iron storm in the core, and the star on the map is a different north.",
      hook: "But pilots and hikers correct for the gap, because the two norths are not secretly the same.",
    },
  ],
};
