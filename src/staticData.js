// An array of objects containing the static details for each STC beat.

const beats = [
  {
    name: 'Opening Image',
    page: '1',
    desc: 'How does your story open? What are we looking at? Start strong with an image that catapults your audience into the look and feel of your story. Blake Snyder suggests knocking this out on Page 1.'
  },
  {
    name: 'Set-Up',
    page: '1-10',
    desc: `Use your first ten pages wisely. Here, you’ll need to establish your story scope (and “look and feel”) for the audience. First, show your character in their “old world.” Let the audience know what the status quo is for them, then hint at the adventure that follows. Second, establish all characters who will factor into your main story beats. This may take some creativity. Sometimes, for story reasons, you will just have to hint at those characters. The setup is one of the most important sections of your script because it provides the essential context needed for the audience to become either immediately engaged, or lose interest within the first ten minutes.`
  },
  {
    name: 'Theme Stated',
    page: '5',
    desc: "What's the driving force behind your story? Film structure requires that the theme of the film is communicated by someone fairly early on. Commonly, this is dialogue spoken to the protagonist that he doesn’t quite grasp yet."
  },
  {
    name: 'Catalyst',
    page: '12',
    desc: `Sometimes called the “inciting incident,” the catalyst is the event that disrupts your protagonist’s status quo. But they’re not ready to make the choice that catapults them into the story just yet.`
  },
  {
    name: 'Debate',
    page: '12-25',
    desc: `This is where the protagonist has doubts about setting out on their perilous journey. In Joseph Campbell's "The Hero's Journey," this is called the 'refusal of the call.'`
  },
  {
    name: 'Break Into Two',
    page: '25',
    desc: `Inevitably, your protagonist will overcome his or her doubt and make a choice to set out on their adventure. This is the choice that officially sets the plot in motion. From here on out, your Save the Cat beat sheet template will be filled with obstacles and twists resulting from making this choice.`
  },
  {
    name: 'B Story',
    page: '30',
    desc: 'The A story revolves around the choice your protagonist made as Act 1 breaks into Act 2. But another subplot ensues, commonly a love story. Blake Snyder suggests this at around Page 30 to illustrate the theme of your film.'
  },
  {
    name: 'Fun and Games',
    page: '30-55',
    desc: `Thankfully, the Save the Cat beat sheet template is not just “all work and no play.” Your plot structure requires a stretch where your protagonist wields their new power, and does cool stuff with it.`
  },
  {
    name: 'Midpoint',
    page: '55',
    desc: `At some point, your protagonist will either get what they’re after...or not. But there will be consequences either way.`
  },
  {
    name: 'Bad Guys Close In',
    page: '55-75',
    desc: `After your protagonist gets what they want, or not, there will be consequences. These forces will tighten their grasp, and throw the protagonist off balance. These forces don’t necessarily have to be actual antagonists. It can also be fighting within the protagonist’s circle.`
  },
  {
    name: 'All Is Lost',
    page: '75',
    desc: `In film structure, the dire circumstances your protagonist endures will lead to an inevitable loss. This is usually a character, and classically the “mentor” (think Obi-Wan, Gandalf and Morpheus). Whatever the loss, it’s felt deeply because this item (or person) gave the protagonist their bearings.`
  },
  {
    name: 'Dark Night of the Soul',
    page: '75-85',
    desc: `This is the most dire circumstance your character reaches. At this point of the Save the Cat beat sheet template, your protagonist has lost hope.`
  },
  {
    name: 'Break Into Three',
    page: '85',
    desc: `Like a forest fire, loss and misery are followed by new life. In plot structure, this is where your protagonist claws around in the darkness, only to find or remember something useful.`
  },
  {
    name: 'Finale',
    page: '85-110',
    desc: `Treat the finale as the Act 3 summary. The Save the Cat beat sheet template is at its end, so it’s time for the protagonist to take on their foes. Armed with new tools and self-discoveries, the protagonist often synthesizes what they've learned (in Act 2) with values they've always had (Act 1).`
  },
  {
    name: 'Final Image',
    page: '110',
    desc: `Along with the opening image, the final image creates the bookend that encapsulates the journey. It’s the last thing the audience sees, and should cement the theme of the film, as well as represent what happened and changed over the course of this journey.`
  }
]

const examples = [
  {
    title: 'The Matrix',
    0: `The Matrix boasts a strong opening image: a blinking command line cursor. The film is about a hacker named Neo (Keanu Reeves) who realizes his life is a computer-simulated reality (The Matrix). Over the image we hear Trinity and Cypher, on the “other end” of the cursor. They’re liberated from The Matrix, and looking for their savior.`,
    1: `In The Matrix, Neo moonlights as a creator of illegal software. One of his customers tells him that he looks like he “needs to unplug for awhile.” This subtly suggests that Neo will learn to unplug from his computer simulated reality, and how to fight those who were keeping him there.`,
    2: `The Matrix begins with an action sequence cleverly to establish how there are people in Neo's world (Trinity, the Agents), who seem like they are from another place all together. They defy the laws of physics, and seem to come and go as they please. We also meet Neo, and learn that he senses this other world, but it’s just beyond his grasp. When you want your audience to get engaged quickly, it's these pieces of essential context that will make that happen.`,
    3: `In The Matrix, this happens when Neo meets Trinity in a club. She tells him that he’s in danger. This inciting incident gets us hooked, let's see what keeps us there.`,
    4: `After talking to Trinity, Neo finds himself hunted by sunglasses-wearing “suits” (the Agents). Thankfully, he’s on the phone with Morpheus — the leader of the rebellion Trinity represents. However, Neo’s not strong enough follow through on Morpheus’ orders to escape his office building.`,
    5: `You guessed it: this is where Neo takes the red pill (to unplug from The Matrix) over the blue pill (to resume status quo).`,
    6: `The Matrix does not conform to this succinctly (remember, the Save the Cat beat sheet template only gives you suggested page counts). The B Story is the blossoming romance between Neo and Trinity. It starts when they meet in the club, and blossoms once Neo has left the Matrix and is aboard the Nebuchadnezzar with Morpheus and his crew. Trinity gives Neo strength to believe that he’s their savior.`,
    7: `In The Matrix, Neo enters a virtual program (The Construct), where Morpheus teaches him all kinds of fun stuff. Here he starts to hone martial arts skills and how to jump really high. Have fun with these scenes. Just make sure they make the world you're creating more interesting or serve a purpose. These scenes should also reinforce the "rules" of the world and what your hero can or can't do.`,
    8: `Neo takes the red pill to see if he’s truly humanity’s savior. But, at the midpoint, he goes to the clairvoyant Oracle to see if this is true. She gives him a once-over and, tragically, tells him it's not true.`,
    9: `Back to The Matrix. This is the section where Cypher betrays the team and allows the Agents to capture Morpheus. This thwarts the team’s relative control amongst chaos.`,
    10: `In The Matrix, this is where Morpheus is kidnapped, and Agent Smith presses him to give up the location of Zion — humanity’s safe haven.`,
    11: `In The Matrix, this is where Neo and his team come to the tragic realization that they have to pull the plug on Morpheus. Otherwise, the Agents might thwart humanity forever.`,
    12: `In The Matrix, Neo is reminded of crucial information he gleaned from the Oracle. This gives him the confidence to take arms and save Morpheus from The Agents against impossible odds. Trinity goes with him and we officially enter the final act of the film.`,
    13: `In The Matrix, Neo and Trinity put their training to the ultimate test to take on the Agents and liberate Morpheus. Eventually, Neo has to face the Agent Smith by himself. He “unplugs” from the Oracle’s logic and follows these feelings, which give him godlike powers in The Matrix. He’s indeed The One, subdues the Agents and completely disintegrates Agent Smith.`,
    14: `The Matrix closes on Neo. We hear his voiceover talk about the next steps of liberating these humans stuck in The Matrix. Then he takes flight! Being The One has endowed him with superhero qualities in The Matrix, which he will now put to good use.`
  }
]

export { beats, examples }