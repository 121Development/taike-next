export const writingQuotes = [
  "Write drunk, edit sober. - Ernest Hemingway",
  "There is nothing to writing. All you do is sit down at a typewriter and bleed. - Ernest Hemingway",
  "I'm not a great writer, I'm a great rewriter. - Michael Crichton",
  "The first draft is just you telling yourself the story. - Terry Pratchett",
  "Writing is like driving at night. You can only see as far as your headlights, but you can make the whole trip that way. - E.L. Doctorow",
  "Pro tip: Replace your keyboard with a waffle iron for tastier writing",
  "Warning: Writing may cause excessive caffeine consumption",
  "Remember: Every typo is just a creative spelling opportunity",
  "Plot twist: You're the main character in your writing journey",
  "Writer's block is just your imagination playing hide and seek",
  "Today's writing mood: Caffeinated and contemplative",
  "Your story matters (even if it's about ninja hamsters)",
  "Write like nobody's reading (they probably aren't anyway)",
  "Channel your inner Shakespeare (typos included)",
  "Time to turn coffee into words",
  "You had me at 'Chapter One'",
  "In a world where anything is possible... write that",
  "Keep calm and write on",
  "Loading creativity... please wait",
  "Error 404: Writer's block not found",
  "Don't tell me the moon is shining; show me the glint of light on broken glass. - Anton Chekhov",
  "Start writing, no matter what. The water does not flow until the faucet is turned on. - Louis L'Amour",
  "The road to hell is paved with adverbs. - Stephen King",
  "Writing is the painting of the voice. - Voltaire",
  "Either write something worth reading or do something worth writing. - Benjamin Franklin"
];

export const getRandomQuote = () => {
  return writingQuotes[Math.floor(Math.random() * writingQuotes.length)];
};
