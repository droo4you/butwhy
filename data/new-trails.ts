import type { PresetCard } from "@/types";

/** Full written trails for the shelves added after the original 32. Eight levels, then bedrock. */
export const NEW_TRAILS: Record<string, readonly PresetCard[]> = {
  g1: [
    {
      topic: "Why do movies look smooth with fewer pictures a second?",
      answer: "A film frame is blurred on purpose while the camera shutter is open, so motion smears across the gap. Your eye accepts 24 blurred pictures because the smear hides the jumps.",
      hook: "But a game cannot lean on that smear, because the player is steering the camera.",
    },
    {
      topic: "Why does a steered camera keep a game from hiding jumps?",
      answer: "You can flick your view at any moment, and the next picture has to match where you just looked. A blur painted for the old direction would feel like mud, so games need more pictures instead.",
      hook: "But each of those pictures has about 17 milliseconds to be finished.",
    },
    {
      topic: "Why does a picture that misses 17 milliseconds stutter?",
      answer: "The screen was ready for a new frame and the game was still working. It repeats the old picture or drops one, and the motion hitches.",
      hook: "But the screen only accepts a new picture on its own schedule, and ignoring that schedule tears the image.",
    },
    {
      topic: "Why does ignoring the screen schedule tear the image?",
      answer: "The display swaps to the next picture from top to bottom. If the game changes pictures halfway through, the top and bottom are two different moments, and the world looks sliced.",
      hook: "But some displays refresh 120 times a second, not 60.",
    },
    {
      topic: "Why do some displays refresh 120 times a second?",
      answer: "A higher refresh can show more pictures, so motion is even smaller between them and the wait after a button press is shorter. The panel has to be built for that speed, and the game has to keep up.",
      hook: "But the game still has to finish a picture before the next refresh arrives.",
    },
    {
      topic: "Why must the game finish before the next refresh arrives?",
      answer: "A refresh will not wait. Whatever picture is ready gets shown, so the artists and programmers share a deadline measured in milliseconds.",
      hook: "But a busy scene, full of lights and characters, can miss that deadline on a fast machine.",
    },
    {
      topic: "Why can a busy scene miss the deadline on a fast machine?",
      answer: "Every light, shadow, and character asks for work. A machine that is quick at one hero in an empty room can still fall behind when the room fills up.",
      hook: "But players buy the deadline back by turning the detail down.",
    },
    {
      topic: "Why does turning detail down buy the deadline back?",
      answer: "Fewer shadows and simpler pictures take less time, so the frame fits the sixtieth of a second again. This is the bedrock: a game is a stack of still pictures, and 60 a second is a deadline for how fast each still must be born.",
      hook: "But a quieter scene can spend the leftover time on a prettier picture.",
    },
  ],
  g2: [
    {
      topic: "Why does a jump button need forgiveness the real ground does not?",
      answer: "A person decides to jump a little late, and a game checks the button in tiny slices of time. Miss the slice where your feet still count as grounded and the jump is refused, which feels like the game called you a liar.",
      hook: "But coyote time keeps the ground true for a few slices after you have already walked off.",
    },
    {
      topic: "Why is that forgiveness called coyote time?",
      answer: "In old cartoons the coyote runs past the cliff and hangs in the air before he looks down. Games copy the hang for a few frames so a late button still counts.",
      hook: "But a button pressed just before you land can be remembered too.",
    },
    {
      topic: "Why does the game remember a jump pressed before you land?",
      answer: "That memory is a jump buffer. If the press happened a moment early, the game spends it on the first frame you touch ground, so the leap does not get swallowed.",
      hook: "But holding the button longer also makes the jump higher.",
    },
    {
      topic: "Why does holding the jump button make a higher leap?",
      answer: "Releasing early cuts the upward push short, and holding keeps it going. A tap is a hop and a hold is a reach, which matches how a real jump feels even though a button is only on or off.",
      hook: "But the gravity in that leap is often stronger than Earth's.",
    },
    {
      topic: "Why is game gravity often stronger than Earth's gravity?",
      answer: "Real hang time feels floaty when you also need to aim a landing. Stronger gravity makes the arc quick and snappy, so jumps read clearly.",
      hook: "But many games ease that gravity at the very top of the arc.",
    },
    {
      topic: "Why ease gravity at the top of a jump arc?",
      answer: "A little extra hang at the peak gives you time to line up a platform. The start and the landing stay fast, and the middle lets you steer.",
      hook: "But all of these tricks are lies that line up with a slow human reaction.",
    },
    {
      topic: "Why do jump tricks line up with a slow human reaction?",
      answer: "People cannot press a button on the exact frame their feet leave the ground. The game forgives a few frames so your brain can believe it was on time.",
      hook: "But the forgiveness has to be short, or the jump feels like glue.",
    },
    {
      topic: "Why does a long forgiveness make a jump feel like glue?",
      answer: "If you can leap long after leaving the ledge, the ground stops meaning anything and the move feels sticky. This is the bedrock: a good jump is a small, secret kindness that matches your timing, not a trampoline with no rules.",
      hook: "But players feel the kindness and rarely see the frames that caused it.",
    },
  ],
  g3: [
    {
      topic: "Why are the flat pieces in a game character triangles?",
      answer: "Three points always sit on one flat plane, so a triangle never twists. A graphics chip can paint a flat triangle extremely fast, millions of them a frame.",
      hook: "But a round character is just thousands of those flat triangles seen from far enough away.",
    },
    {
      topic: "Why do thousands of flat triangles look round from far away?",
      answer: "Each edge is smaller than the pixels you can pick out. Up close the silhouette is jagged, and at a normal distance the eye reads a curve.",
      hook: "But the chip also fakes a curve with lighting, even on a flat face.",
    },
    {
      topic: "Why can lighting fake a curve on a flat triangle?",
      answer: "Each corner stores a direction called a normal, and the light blends between them. The face is flat and the shading rolls across it, which is enough for a cheek or a helmet.",
      hook: "But a far-off character does not need thousands of triangles at all.",
    },
    {
      topic: "Why does a far-off character use fewer triangles?",
      answer: "Level of detail swaps in a simpler model when the figure is small on screen. The saved triangles are spent on whatever is close to the camera.",
      hook: "But older games often skipped triangles and used flat pictures instead.",
    },
    {
      topic: "Why did older games use flat pictures instead of triangles?",
      answer: "The machines could not paint enough triangles to build a world. A sprite, a single drawn picture, was cheaper, which is why so many classics look like paper cutouts.",
      hook: "But today's chips are built as triangle factories on purpose.",
    },
    {
      topic: "Why are graphics chips built as triangle factories?",
      answer: "They run the same small job on thousands of triangles at once: move the corners, figure the light, write the pixels. That parallel work is what makes a 3D world fit inside a frame.",
      hook: "But the world is still hollow, a shell of faces with nothing solid inside.",
    },
    {
      topic: "Why is a game character a hollow shell of faces?",
      answer: "Only the outside is drawn, because the inside is never seen. Filling the volume would waste the budget on triangles the camera cannot find.",
      hook: "But the silhouette still has to read, or the shell looks like a mistake.",
    },
    {
      topic: "Why does the silhouette have to read if the shell is hollow?",
      answer: "Players recognize a character from the outline first. This is the bedrock: round game worlds are piles of flat triangles, the machine is a factory for painting them, and the roundness is distance plus light.",
      hook: "But stand the camera too close and the flat edges confess.",
    },
  ],
  g4: [
    {
      topic: "Why does turning the machine off erase a game that was not saved?",
      answer: "The live game sits in memory that needs electricity to remember. Cut the power and those numbers vanish, which is why a save writes them onto storage that keeps them in the dark.",
      hook: "But a save file is only a list of numbers, not a tiny copy of the whole world.",
    },
    {
      topic: "Why is a save file a list of numbers and not a whole world?",
      answer: "The world is rebuilt from the game's rules every time you play. The file only needs the exceptions: where you stand, what you carry, which doors opened.",
      hook: "But a checkpoint is the game writing that list for you.",
    },
    {
      topic: "Why does a checkpoint write the list for you?",
      answer: "A hard part would feel cruel if failure sent you back an hour. The game saves at a chosen gate so the risk stays in the room you are learning.",
      hook: "But a save can break if the power dies while the list is half written.",
    },
    {
      topic: "Why does a half-written save file break?",
      answer: "A file that stops mid-number cannot be read back into a sensible game. Careful games write a temporary file and only then replace the old one, so a failure keeps the previous list.",
      hook: "But a cloud save copies that finished list onto someone else's computer.",
    },
    {
      topic: "Why copy a save onto someone else's computer?",
      answer: "A new phone or a replaced console has empty storage. A copy on a server lets the list follow you, which is all a cloud save is.",
      hook: "But the same list is how people cheat, by editing a number.",
    },
    {
      topic: "Why does editing a number in a save file cheat?",
      answer: "If coins are one number, changing it changes your coins. The game trusts the list it wrote, and a edited list still looks like its own handwriting.",
      hook: "But some games sign the list so a edited file is rejected.",
    },
    {
      topic: "Why does a signature make a game reject an edited save?",
      answer: "A checksum or signature is a seal computed from the numbers. Change a coin and the seal no longer matches, so the game can tell the list was tampered with.",
      hook: "But the live game still forgets everything the moment the power stops.",
    },
    {
      topic: "Why does the live game forget when the power stops?",
      answer: "Electricity is what holds those numbers in the fast memory. This is the bedrock: a save file is a memory the machine cannot keep by itself, a short list of facts the world can be rebuilt from.",
      hook: "But lose the list and the world can still be rebuilt, only from the beginning.",
    },
  ],
  g5: [
    {
      topic: "Why must a game copy its world into fast memory before it can play?",
      answer: "Drawing a frame needs models, sounds, and maps to be in RAM, which is quick to read. Disks, even fast ones, are too slow to fetch a whole level in the middle of a picture.",
      hook: "But an open world hides that copy inside corridors and quiet roads.",
    },
    {
      topic: "Why do corridors and quiet roads hide a loading copy?",
      answer: "While you walk a simple hallway, the game streams the next area into memory and drops the one behind you. The wait is disguised as travel.",
      hook: "But a spinning disk made that wait much longer than a solid-state drive does.",
    },
    {
      topic: "Why did a spinning disk make loading so much longer?",
      answer: "A hard drive has to swing a head to the right place on a platter. A solid-state drive jumps to the data with no moving part, so the copy finishes sooner.",
      hook: "But the tips written on a loading screen are there because some waits cannot be skipped.",
    },
    {
      topic: "Why can some loading waits not be skipped?",
      answer: "The next picture needs those bytes in memory, and there is no earlier moment that already has them. A tip, a joke, or a painting is a courtesy during a pause the machine cannot fake.",
      hook: "But installing the game ahead of time moves part of the copy off the critical path.",
    },
    {
      topic: "Why does installing ahead of time shorten the later wait?",
      answer: "The big files are already on your drive, unpacked and in the right place. Starting a level then copies a smaller slice into RAM instead of unpacking everything.",
      hook: "But a patch can force the big copy to happen again.",
    },
    {
      topic: "Why can a patch force the game to copy its files again?",
      answer: "Changed art and code have to replace the old files. Until that rewrite finishes, the version in memory would not match the version on disk.",
      hook: "But once the right files are in RAM, the loading screen's job is over.",
    },
    {
      topic: "Why is the loading screen's job over once the files are in RAM?",
      answer: "The frame loop can then read what it needs without waiting on the drive. The world is in the machine's hands.",
      hook: "But run out of RAM and the game must start unloading, which brings the wait back.",
    },
    {
      topic: "Why does running out of RAM bring the loading wait back?",
      answer: "Something has to be dropped to make room, and the next room may need to be fetched again. This is the bedrock: a loading screen is the pause while a world moves from a shelf into fast memory, because a frame cannot wait for the shelf.",
      hook: "But faster shelves have made that pause shorter every console generation.",
    },
  ],
  w1: [
    {
      topic: "Why does a name like a web address need a phone book?",
      answer: "Computers do not visit names. They visit numbers called IP addresses, and DNS is the phone book that turns the name you typed into the number of a server.",
      hook: "But your computer often remembers the number, so it skips the phone book next time.",
    },
    {
      topic: "Why does the computer remember the number and skip the phone book?",
      answer: "A DNS answer is cached for a while. Repeating the lookup on every click would add a wait, so the name's number is kept until it is allowed to expire.",
      hook: "But after the number is known, the browser still has to open a connection and ask for the page.",
    },
    {
      topic: "Why must the browser open a connection before it can ask?",
      answer: "The internet moves small packets, and a connection is the agreement about which packets belong to this conversation. Then the browser sends a request, often the word GET and the path of the page.",
      hook: "But on a locked site that request waits for a secret handshake first.",
    },
    {
      topic: "Why does a locked site wait for a secret handshake?",
      answer: "HTTPS agrees on a code so the pages cannot be read or changed in the middle. The handshake is that agreement, and only then does the server send the HTML.",
      hook: "But the HTML is rarely the whole page, because it names pictures and scripts still to fetch.",
    },
    {
      topic: "Why does HTML name pictures and scripts that still need fetching?",
      answer: "The first file is a recipe. The browser reads it and asks for each ingredient, sometimes dozens of extra requests, and then paints.",
      hook: "But those extra requests can travel across countries in a fraction of a second.",
    },
    {
      topic: "Why can requests cross countries in a fraction of a second?",
      answer: "The packets move at a large fraction of the speed of light in glass and copper, and the routes are already built. Distance still costs time, and the cost is small compared with a blink.",
      hook: "But a failed phone book or a silent server turns the blink into an error.",
    },
    {
      topic: "Why does a silent server turn the address into an error?",
      answer: "The name can be perfect and the number real, and if no computer answers, there is no page to paint. The browser waits, then admits the request failed.",
      hook: "But a successful answer is still just a reply to a question the browser asked.",
    },
    {
      topic: "Why is a web page a reply to a question the browser asked?",
      answer: "You typed a name, and the browser asked a server for the files. This is the bedrock: an address is a name, DNS makes it a number, and the page is the server's answer, plus every picture that answer asked for next.",
      hook: "But type the name wrong and the phone book honestly says it has never heard of it.",
    },
  ],
  w2: [
    {
      topic: "Why do many separate files make a page slower?",
      answer: "Each file is another request and another wait, even if the file is small. A page that asks for a hundred tiny things can lose more time to waiting than to downloading.",
      hook: "But a single huge image can waste the wait in the other direction.",
    },
    {
      topic: "Why does one huge image waste time the way many files do?",
      answer: "The browser cannot finish painting a hero picture until those bytes arrive. A photograph far larger than the screen is a long download for pixels you will never see.",
      hook: "But a script in the head of the page can delay the paint even when the image is small.",
    },
    {
      topic: "Why can a script delay the paint of a page?",
      answer: "If the browser must run a script before it is allowed to draw, a slow script becomes a closed curtain. That is a render-blocking script.",
      hook: "But sometimes the first byte is late because the server itself is busy.",
    },
    {
      topic: "Why does a busy server send the first byte late?",
      answer: "The machine may be building the page from a database, or it may be answering too many people at once. Until it starts the reply, your browser can only wait.",
      hook: "But your own network can be the slow step, even when the server is quick.",
    },
    {
      topic: "Why can your own network be the slow step?",
      answer: "Wifi congestion, a weak signal, or a crowded route adds delay to every packet. A fast server cannot hurry a pipe that is full.",
      hook: "But a copy of the page stored nearer to you avoids a lot of that distance.",
    },
    {
      topic: "Why does a nearby copy of a page load faster?",
      answer: "A content network keeps copies in many cities. You fetch the close copy, so the packets travel fewer miles.",
      hook: "But a page that must be built just for you cannot always be copied ahead of time.",
    },
    {
      topic: "Why can a page built just for you not be copied ahead?",
      answer: "Your inbox, your cart, your name: those bytes did not exist until the server made them. The shared pictures can be close, and the personal reply still has to be born on demand.",
      hook: "But the screen still cannot invent bytes that have not arrived.",
    },
    {
      topic: "Why can the screen not invent bytes that have not arrived?",
      answer: "Painting a guess would be a lie about the page. This is the bedrock: a page is slow when some request in the chain is waiting, whether the wait is files, a far server, a heavy query, or your own pipe.",
      hook: "But measuring which wait is the long one is how people fix it.",
    },
  ],
  w3: [
    {
      topic: "Why is a server just a computer that stays on to answer?",
      answer: "Your machine asks, and some other machine replies with files or with a page it just built. That other machine is the server, whether it sits in a closet or in a warehouse of computers.",
      hook: "But one computer cannot answer the whole world, so popular sites use many.",
    },
    {
      topic: "Why do popular sites use many computers instead of one?",
      answer: "A single machine has a limit of requests per second. A load balancer stands in front and shares the visitors across copies, so no one computer holds the crowd.",
      hook: "But a simple brochure site may be only files, with no custom building at all.",
    },
    {
      topic: "Why can a brochure site be only files?",
      answer: "If every visitor gets the same page, the server can hand out saved files and do no extra thinking. That is a static site, and it is sturdy because there is less to break.",
      hook: "But a page with your name on it has to be built when you ask.",
    },
    {
      topic: "Why must a page with your name be built when you ask?",
      answer: "The server runs a program that looks you up and writes HTML for that moment. Those are dynamic pages, and they need the program, the data, and the machine all awake.",
      hook: "But if the machine is off, the name of the site still exists and nobody answers.",
    },
    {
      topic: "Why does the name still exist when the machine is off?",
      answer: "DNS can keep pointing at a number whose computer is asleep, crashed, or unplugged. The phone book is not the shop.",
      hook: "But the browser can only wait, then show a timeout or a bad gateway.",
    },
    {
      topic: "Why does the browser show a timeout when nobody answers?",
      answer: "It asked and the silence lasted too long, or a middle machine said the real server failed. There is no honest page to show, so it shows the failure.",
      hook: "But a server that is on can still answer with an error on purpose.",
    },
    {
      topic: "Why would a server that is on answer with an error on purpose?",
      answer: "A missing page is a 404, and a bug in the program is often a 500. The reply arrived, and the reply says the request could not be fulfilled.",
      hook: "But an ordinary visit is the opposite: a computer whose job is to answer, answering.",
    },
    {
      topic: "Why is an ordinary website just a computer answering?",
      answer: "The page is not stored inside your laptop until you ask. This is the bedrock: a server is a computer that stays available to reply, and a website is that reply, shared by as many copies as the crowd requires.",
      hook: "But turn every copy off and the address becomes a name that points at silence.",
    },
  ],
  w4: [
    {
      topic: "Why do packets need a number to find a machine?",
      answer: "The internet forwards tiny envelopes hop by hop, and each envelope needs a destination. An IP address is that destination, the way a house number is, so routers know which way to send it.",
      hook: "But the older kind of number was running out, because it is only four bytes long.",
    },
    {
      topic: "Why did four-byte addresses start running out?",
      answer: "IPv4 has about four billion numbers, and phones, laptops, and lightbulbs all want one. IPv6 uses a much longer number so the supply is no longer the worry.",
      hook: "But your house still shows the world a single public number for many devices.",
    },
    {
      topic: "Why can one public number stand for many devices in a house?",
      answer: "The home router does network address translation. It keeps the private numbers indoors and rewrites envelopes so the outside world sees only the router's address.",
      hook: "But people remember words better than they remember those numbers.",
    },
    {
      topic: "Why do people remember words instead of internet numbers?",
      answer: "A name like a library's web address fits in a mind, and a string of digits does not. DNS is the lookup that trades the word for the number when a packet actually has to travel.",
      hook: "But a packet with no address is a letter with no envelope.",
    },
    {
      topic: "Why is a packet with no address undeliverable?",
      answer: "Routers do not guess who you meant. Without a destination number they have nowhere to forward the envelope, so it is dropped.",
      hook: "But two machines with the same public address would confuse the return trip too.",
    },
    {
      topic: "Why would two machines sharing one public address confuse the reply?",
      answer: "The response envelope comes back to that number. If two unrelated computers claimed it, the reply would not know which conversation it belonged to.",
      hook: "But the home router avoids that by keeping a table of which indoor device asked.",
    },
    {
      topic: "Why does the router's table keep the indoor devices straight?",
      answer: "Each outbound request is marked, and the matching reply is handed to the device that asked. The world sees one address, and the table does the sorting.",
      hook: "But none of the sorting matters if the number itself is wrong.",
    },
    {
      topic: "Why does a wrong number fail even if the name was pretty?",
      answer: "Packets follow numbers, not intentions. This is the bedrock: the internet is a postal system for tiny envelopes, addresses are how an envelope finds a machine, and names exist so people do not have to memorize the numbers.",
      hook: "But the number can change, which is why the phone book is allowed to update.",
    },
  ],
  w5: [
    {
      topic: "Why does the padlock mean the page rode in a private pipe?",
      answer: "HTTPS encrypts the conversation and checks a certificate, a signed ID card for the server's name. The lock is the browser saying that check succeeded and the pipe is scrambled for outsiders.",
      hook: "But a cafe wifi without that lock can read or change what you receive.",
    },
    {
      topic: "Why can cafe wifi read a page that has no lock?",
      answer: "On plain HTTP the bytes are readable by anyone on the path. A stranger on the same network can peek, or swap the page, because nothing is sealed.",
      hook: "But the seal depends on a certificate signed by someone your browser already trusts.",
    },
    {
      topic: "Why must a certificate be signed by someone the browser trusts?",
      answer: "Anyone can write an ID card. A signature from a known authority is how the browser decides the card was earned for that name, not forged in the cafe.",
      hook: "But an expired card or the wrong name makes the browser warn you anyway.",
    },
    {
      topic: "Why does an expired certificate still trigger a warning?",
      answer: "The signature was only promised until a date. After that the browser will not treat the card as current, even if the name matches.",
      hook: "But a perfect lock does not mean the site is honest.",
    },
    {
      topic: "Why can a locked site still be dishonest?",
      answer: "Encryption hides the pipe. It does not check whether the words inside are kind, true, or safe. A thief can hold a valid certificate.",
      hook: "But the lock does stop the thief next to you from silently rewriting the page.",
    },
    {
      topic: "Why does the lock stop a nearby thief from rewriting the page?",
      answer: "They can see that traffic exists, and they cannot read or edit it without the keys from the handshake. Tampering breaks the seal and the browser notices.",
      hook: "But you still have to look at the name on the card, because the lock might belong to a lookalike site.",
    },
    {
      topic: "Why does the name on the certificate have to match the site you wanted?",
      answer: "A valid card for a different name is a private pipe to the wrong place. The browser compares the name you typed with the name on the card.",
      hook: "But once they match, the pipe is private and the honesty of the words is a separate question.",
    },
    {
      topic: "Why is the honesty of the words separate from the privacy of the pipe?",
      answer: "Scrambled delivery does not grade the message. This is the bedrock: the padlock means you have a private, checked connection to whoever holds that certificate, not a medal that the site deserves your trust.",
      hook: "But without the lock, you do not even have the private pipe.",
    },
  ],
  m1: [
    {
      topic: "Why does a short catchy bit of a song loop in your head?",
      answer: "The hearing parts of the brain can replay a snippet with no speaker on. A simple rhythm with a small surprise is easy to restart, so attention keeps pressing play.",
      hook: "But the loop is usually a few seconds, not the whole song.",
    },
    {
      topic: "Why does the stuck part stay a few seconds long?",
      answer: "A short phrase fits in the loop the brain is willing to spin. The verses fall away, and the hook of the song, the sticky bit, is what remains.",
      hook: "But chewing gum or a puzzle can crowd that loop out.",
    },
    {
      topic: "Why can chewing gum or a puzzle crowd a song out?",
      answer: "The replay uses attention and a bit of the mouth's planning machinery. Give that machinery something else to do and the song has less room.",
      hook: "But an unfinished ending makes the itch worse.",
    },
    {
      topic: "Why does an unfinished ending make a stuck song itch?",
      answer: "The brain likes to complete a pattern it started. A phrase that feels cut off invites another pass, which is why the chorus restarts itself.",
      hook: "But hearing the whole song through can sometimes scratch the itch.",
    },
    {
      topic: "Why can hearing the whole song scratch the itch?",
      answer: "A complete play gives the pattern its ending. Some people then drop the loop, because the task the brain invented is done.",
      hook: "But trying not to think of the song usually restarts it.",
    },
    {
      topic: "Why does trying not to think of the song restart it?",
      answer: "To avoid a thing you have to remember what you are avoiding. The name of the song is a finger on the play button.",
      hook: "But the replay is happening inside you, with no speaker in the room.",
    },
    {
      topic: "Why can the replay happen with no speaker in the room?",
      answer: "Memory of sound is still a pattern of activity in the hearing brain. The ears are idle and the circuit runs anyway.",
      hook: "But a different song, started on purpose, can take the circuit over.",
    },
    {
      topic: "Why can a different song take the stuck loop over?",
      answer: "The circuit seems to hold one lively snippet, not a stack. This is the bedrock: a stuck song is your own brain pressing play on a short phrase, and the way out is to give that player something else to finish.",
      hook: "But the new song can get stuck too, which is a risky cure.",
    },
  ],
  m2: [
    {
      topic: "Why does a guitar and a flute playing the same note sound different?",
      answer: "The main vibration can be the same speed, which is the pitch, and the extra weaker vibrations are different. That recipe of extras is timbre, the reason a flute is not a string.",
      hook: "But those extra vibrations come from how the instrument shakes.",
    },
    {
      topic: "Why does the way an instrument shakes change the extra vibrations?",
      answer: "A string bends, a drum skin pops, a column of air in a flute pulses. Each shape allows a different family of overtones on top of the main note.",
      hook: "But your ear sorts those vibrations by speed before you ever name the instrument.",
    },
    {
      topic: "Why does the ear sort vibrations by speed?",
      answer: "Inside the cochlea, different places respond to different speeds of shake. The brain receives a recipe of which places fired, and that recipe is the sound.",
      hook: "But a pure tone, with almost no extras, sounds like a beep and not like a voice.",
    },
    {
      topic: "Why does a pure tone sound like a beep instead of a voice?",
      answer: "A voice is full of overtones shaped by the throat and mouth. Strip them away and little is left but pitch, which is why a sine wave feels empty.",
      hook: "But two instruments can still blend when their recipes do not fight.",
    },
    {
      topic: "Why do some instrument recipes blend instead of fight?",
      answer: "Overtones that land on related speeds sound smooth together. Clashing speeds beat against each other and sound rough, which composers use on purpose.",
      hook: "But the room adds its own vibrations after the instrument is done.",
    },
    {
      topic: "Why does the room add vibrations after the instrument stops?",
      answer: "Sound bounces off walls and comes back mixed. A bathroom and a closet change the recipe before it reaches you, which is reverb.",
      hook: "But a headphone can skip the room and deliver the instrument's recipe almost alone.",
    },
    {
      topic: "Why can headphones deliver the instrument almost alone?",
      answer: "They sit on the ear, so wall reflections barely join. You hear the recording's recipe, not the kitchen you are standing in.",
      hook: "But the note on the page was never the whole sound.",
    },
    {
      topic: "Why is the note on the page not the whole sound?",
      answer: "The page names the pitch, and the instrument decides the extras. This is the bedrock: instruments sound different because they are different recipes of vibration, and your ear is a sorter that reads the recipe.",
      hook: "But a beginner and a master can play the same note and still hand you different recipes.",
    },
  ],
  m3: [
    {
      topic: "Why does a steady beat make feet twitch?",
      answer: "Timing circuits and movement circuits in the brain link up. A predictable pulse gives the body a clock to join, which is why a toe taps even when you meant to sit still.",
      hook: "But an off-beat can feel good too, once you have learned where it lands.",
    },
    {
      topic: "Why can an off-beat feel good after you learn it?",
      answer: "Surprise is pleasant when it still fits the clock. The late hit breaks the pattern and then confirms it, and dancers wait for that confirmation.",
      hook: "But a crowd tends to lock to the same pulse.",
    },
    {
      topic: "Why does a crowd lock onto one pulse?",
      answer: "People hear each other move, and the shared beat is the easiest agreement. Synchrony is old social glue: marching, clapping, dancing in a ring.",
      hook: "But the glue fails if the beat is hidden.",
    },
    {
      topic: "Why does a hidden beat make dancing harder?",
      answer: "The body needs a pulse it can predict. A wash of sound with no grid gives the feet nothing to agree with, so people sway at random or stop.",
      hook: "But a drum exists largely to draw that grid in public.",
    },
    {
      topic: "Why is a drum a public grid for the body?",
      answer: "A strike is a sharp time mark everyone can hear across a room. Melody can wander, and the drum keeps the clock.",
      hook: "But you can feel the grid in silence after the song ends.",
    },
    {
      topic: "Why does the grid keep going in silence for a moment?",
      answer: "The timing circuits do not stop on the exact last hit. They coast, which is why you can still nod on the missing beat.",
      hook: "But the dance was never stored in the speaker.",
    },
    {
      topic: "Why is the dance not stored in the speaker?",
      answer: "The speaker only pushed air into a rhythm. The agreement to move was made in the people listening.",
      hook: "But without the air pushing a clock, most bodies never get the invitation.",
    },
    {
      topic: "Why do most bodies need a clock in the air before they dance?",
      answer: "Movement wants a shared time, and music is a way to build one out loud. This is the bedrock: dancing is the body agreeing with a clock the music made, which is why a beat reaches feet that were planning to stay still.",
      hook: "But a clock with no one in the room does not dance by itself.",
    },
  ],
  m4: [
    {
      topic: "Why does a minor chord sound more serious than a major one?",
      answer: "In the Western tradition a minor chord stacks its notes with a slightly narrower gap than a major chord. Listeners here have learned to hear that stack as sad, tense, or serious.",
      hook: "But the same stack does not mean sad in every musical culture.",
    },
    {
      topic: "Why does a minor stack not mean sad in every culture?",
      answer: "Feeling-labels for chords are habits taught by the songs around you. Other traditions use different scales and do not map that particular gap to grief.",
      hook: "But even inside one tradition, context can make a minor chord feel wistful instead of tragic.",
    },
    {
      topic: "Why can context make a minor chord wistful instead of tragic?",
      answer: "The chords before and after tell the ear what the stack is doing. A minor color in a bright song can feel like a gentle shadow, not a funeral.",
      hook: "But some of the seriousness is also in the vibrations beating against each other.",
    },
    {
      topic: "Why do some note stacks beat against each other?",
      answer: "When two close vibrations do not line up neatly, the sound pulses, a roughness you can hear. A narrower gap produces a different roughness than a wider one.",
      hook: "But a single note, played alone, has no stack and little of that mood.",
    },
    {
      topic: "Why does a single note carry little of a chord's mood?",
      answer: "The mood people name lives in the relationship between notes. One pitch can be high or low, loud or soft, and it does not yet have the gap that Western ears call minor.",
      hook: "But add the third, the note that sets the gap, and the mood walks in.",
    },
    {
      topic: "Why does the third of a chord set the mood?",
      answer: "That middle note chooses the narrower or wider stack. Major and minor are mostly that choice, with the root and the fifth staying put.",
      hook: "But film composers still use the narrower stack when they want worry.",
    },
    {
      topic: "Why do film composers reach for the narrower stack to signal worry?",
      answer: "Audiences in this tradition have heard it mean worry thousands of times. The association is strong enough to be a tool, even though it was learned.",
      hook: "But the tool is a habit, not a law of physics that sadness lives in the air.",
    },
    {
      topic: "Why is the sadness of a chord a habit and not a law of physics?",
      answer: "Physics explains the beats and the gaps. The label sad is something listeners in a culture practiced until it felt natural. This is the bedrock: a minor chord is a stack of notes with a narrower gap, and the feeling is a well-taught habit, not a universal fact hiding in the string.",
      hook: "But habits that deep still move people, which is why the tool keeps working.",
    },
  ],
  y1: [
    {
      topic: "Why do eyes need a wipe many times a minute?",
      answer: "The surface of the eye has to stay wet and clear of dust. A blink spreads tears like a windshield wiper, and you do it around fifteen times a minute without holding a meeting.",
      hook: "But you blink less when you stare at a screen.",
    },
    {
      topic: "Why do people blink less while staring at a screen?",
      answer: "Concentration quiets the automatic wipe. The eye dries, which is why a long scroll ends with burning eyes even though nothing touched them.",
      hook: "But a blink is also a tiny gap in what the brain is seeing.",
    },
    {
      topic: "Why is a blink a gap in what the brain sees?",
      answer: "The lids close and the picture stops for a fraction of a second. The brain papers over the gap so the world does not seem to flicker.",
      hook: "But you cannot watch yourself do it, because the gap includes the moment of looking.",
    },
    {
      topic: "Why can you not watch yourself in the moment of a blink?",
      answer: "The eyes are shut for that moment, so there is no picture of the shut. Other people see the gap, and the owner mostly feels it only when the eyes are already dry.",
      hook: "But dry eyes blur the world even when the lids are open.",
    },
    {
      topic: "Why do dry eyes blur the world?",
      answer: "A smooth tear film is part of the lens. When it breaks up, light scatters and the scene goes soft until the next wipe.",
      hook: "But tears are more than water, because oil slows the evaporation.",
    },
    {
      topic: "Why does oil in tears slow evaporation?",
      answer: "Glands in the lids add a thin oily layer that keeps the water from vanishing into the air. Without it the wet film collapses quickly.",
      hook: "But dust still has to be moved, which is the wiper's other job.",
    },
    {
      topic: "Why is moving dust part of a blink's job?",
      answer: "A speck on the cornea hurts because that surface is extremely sensitive. The lid sweeps it toward the corner, where it can leave.",
      hook: "But the sweep is scheduled by habit, not by a decision you notice.",
    },
    {
      topic: "Why is blinking scheduled by habit instead of by a decision?",
      answer: "An automatic timer plus dryness and dust keep the reflex going. This is the bedrock: a blink is a windshield wiper you cannot see yourself using, and the burn of a long screen is what it feels like when the timer slows down.",
      hook: "But looking away and letting a few full blinks happen brings the film back.",
    },
  ],
  y2: [
    {
      topic: "Why does a bruise start red if the blood is under the skin?",
      answer: "Fresh blood near the surface still carries oxygen and looks red or purple through the skin. The vessels that broke are tiny, and the leak is trapped where it cannot run off.",
      hook: "But over days the body breaks that trapped blood down, and the color changes.",
    },
    {
      topic: "Why does broken-down blood change a bruise's color?",
      answer: "Cleanup chemicals turn the red pigment into greenish biliverdin and then into yellow bilirubin. The shifting colors are the stages of taking the leak apart, not new injuries.",
      hook: "But a deep leak can take longer to show, because it has farther to travel toward the skin.",
    },
    {
      topic: "Why does a deep leak take longer to appear on the skin?",
      answer: "Blood under a thick muscle may not stain the surface on day one. Gravity and time move the pigment, which is why a sore ankle can bruise the foot.",
      hook: "But the vessels broke because they were crushed, not because the skin was cut.",
    },
    {
      topic: "Why do crushed vessels leak when the skin is not cut?",
      answer: "A blow squeezes tiny capillaries until they split, and the skin can stay closed. The blood has nowhere to go but sideways, into the surrounding tissue.",
      hook: "But platelets and clotting usually stop the leak before it spreads without limit.",
    },
    {
      topic: "Why does clotting stop a bruise from spreading without limit?",
      answer: "Platelets plug the broken capillaries and a clot seals them. Without that plug a small bump could keep bleeding under the skin.",
      hook: "But the sealed blood is still waste, and only cleanup removes the color.",
    },
    {
      topic: "Why does only cleanup remove a bruise's color?",
      answer: "The pigment does not drain like a puddle. Cells have to chemically take it apart, which is why the mark fades over a week or two instead of overnight.",
      hook: "But a bruise that keeps growing, or comes with no bump, is a different problem.",
    },
    {
      topic: "Why is a bruise that keeps growing a different problem?",
      answer: "Ordinary leaks stop. A mark that spreads fast or appears without an injury can mean clotting is not working, which is a reason to ask a doctor.",
      hook: "But the ordinary rainbow is just trapped blood being dismantled.",
    },
    {
      topic: "Why is the ordinary bruise rainbow just blood being dismantled?",
      answer: "Red, then green, then yellow are the pigments of cleanup. This is the bedrock: a bruise is blood leaked under intact skin, and the color show is the body taking that blood apart.",
      hook: "But until the last yellow fades, the cleanup is still at work.",
    },
  ],
  y3: [
    {
      topic: "Why do fingertip ridges help when a surface is wet?",
      answer: "The ridges act a bit like tire treads, channeling water so skin can still press on the surface. A smooth fingertip would skate more easily on a wet glass.",
      hook: "But the ridges may also sharpen touch by buzzing as you slide.",
    },
    {
      topic: "Why would ridges buzz and sharpen touch?",
      answer: "As the finger moves, the ridges vibrate at a speed that touch nerves notice. That extra signal can make fine texture easier to feel.",
      hook: "But the pattern itself is set before birth, by skin buckling as it grows.",
    },
    {
      topic: "Why does skin buckling before birth set a unique pattern?",
      answer: "The pads grow faster than the tissue under them and fold, and the folds depend on tiny differences in timing and position. Even identical twins do not match.",
      hook: "But uniqueness was not the point of the ridges, even though investigators use it.",
    },
    {
      topic: "Why do investigators use a side effect as an identity?",
      answer: "A pattern that is stable and almost never repeats is a useful label. The body grew it for grip and touch, and people later treated it as a signature.",
      hook: "But scars and wear can change a print, and the label is not magic.",
    },
    {
      topic: "Why can scars change a fingerprint without ending the grip?",
      answer: "A cut rearranges some ridges and leaves others. The tread still channels water, and the file of who you are may need a new photo.",
      hook: "But the ridges are only on the grabbing skin, not on the whole body.",
    },
    {
      topic: "Why are the ridges only on skin that grabs?",
      answer: "Palms, fingers, and soles do the gripping and the walking. Smooth skin elsewhere does not need treads, which is a clue about the job.",
      hook: "But a glove hides the tread and also dulls the buzz of touch.",
    },
    {
      topic: "Why does a glove dull the buzz of touch?",
      answer: "Cloth sits between the ridges and the surface, so the vibrations never start. You lose both some grip information and some texture.",
      hook: "But bare wet fingers get the tread back immediately.",
    },
    {
      topic: "Why do bare fingers get their grip back as soon as the glove is off?",
      answer: "The ridges were never gone. This is the bedrock: fingerprints are treads for a wet world and a texture sensor, and the fact that each pattern is unique is a side effect people later used as a name.",
      hook: "But the side effect is stable enough that the name usually lasts a lifetime.",
    },
  ],
  y4: [
    {
      topic: "Why does a broken bone start healing with a blood clot?",
      answer: "The break tears vessels inside the bone, and a clot fills the gap like a temporary packing. That packing is the stagehands' first platform.",
      hook: "But the next stage is a soft callus, not hard bone yet.",
    },
    {
      topic: "Why is the next stage of healing a soft callus?",
      answer: "Cartilage and new tissue bridge the break before sturdy bone is ready. The soft callus steadies the pieces so they are not grinding.",
      hook: "But osteoblasts then replace that soft bridge with hard bone.",
    },
    {
      topic: "Why do osteoblasts replace the soft bridge with hard bone?",
      answer: "Those cells lay down the mineral scaffold that makes bone rigid. Over weeks the soft bridge becomes a bony callus you could not bend.",
      hook: "But osteoclasts remodel that lump so the bone is not left as a bulge.",
    },
    {
      topic: "Why do osteoclasts remodel the healed lump?",
      answer: "They clear extra bone and reshape the repair toward the original line. A healed bone is rebuilt, not glued, which is why the bulge slowly settles.",
      hook: "But a metal rod does none of this, because metal is not alive.",
    },
    {
      topic: "Why can a metal rod not heal itself the way bone can?",
      answer: "Steel has no cells and no blood supply. It can splint a break, and only the living bone around it can actually mend.",
      hook: "But the living repair needs food, sleep, and time, or the callus stalls.",
    },
    {
      topic: "Why does a bone callus stall without food and time?",
      answer: "Building mineral and cartilage is construction, and construction needs materials and a blood supply. Starving the site or yanking the pieces apart keeps the bridge from finishing.",
      hook: "But children often finish that construction faster than adults.",
    },
    {
      topic: "Why do children often heal a break faster than adults?",
      answer: "Their bone cells are already busy growing, so the repair crew is large and well supplied. The steps are the same and the schedule is shorter.",
      hook: "But the steps still cannot be skipped, even in a child.",
    },
    {
      topic: "Why can the steps of bone healing not be skipped?",
      answer: "Clot, soft callus, hard bone, then remodeling are a sequence, each one the platform for the next. This is the bedrock: a broken bone heals because bone is alive and staffed with a repair crew, not because it is a dry stick that somehow sticks.",
      hook: "But move the pieces too soon and the crew has to start the bridge again.",
    },
  ],
};
