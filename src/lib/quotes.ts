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
  "Time to turn coffee into words"
];

export const getRandomQuote = () => {
  return writingQuotes[Math.floor(Math.random() * writingQuotes.length)];
};
