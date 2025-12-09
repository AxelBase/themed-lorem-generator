// src/lib/generator.ts
// SINGLE FILE – contains all themes and generation logic

const themes = {
  Hipster: [
    'Artisan', 'kombucha', 'vinyl', 'fixie', 'beard', 'kale', 'chips', 'PBR&B',
    'cold-pressed', 'sustainable', 'locavore', 'ethical', 'craft', 'beer', 'plaid',
    'flannel', 'tote', 'bag', 'banh', 'mi', 'farm-to-table', 'keytar', 'messenger',
    'bag', 'DIY', 'aesthetic', 'mustache', 'VHS', 'tumblr', 'blog', 'retro',
    'polaroid', 'single-origin', 'coffee', 'gentrify', 'put', 'a', 'bird', 'on',
    'it', 'scenester', 'keffiyeh', 'salvia', 'chia', 'quinoa', 'sriracha', 'tofu',
    'organic', 'free-range', 'gluten-free', 'vegan', 'biodynamic', 'heirloom',
    'microdosing', 'forage', 'asymmetrical', 'leggings', 'brunch'
  ],
  Zombie: [
    'Brains', 'undead', 'apocalypse', 'horde', 'groan', 'shuffle', 'bite', 'infect',
    'outbreak', 'survival', 'barricade', 'moan', 'decay', 'flesh', 'eater', 'walker',
    'grave', 'rising', 'dead', 'virus', 'quarantine', 'headshot', 'reanimate',
    'cannibal', 'ghoul', 'limb', 'dragging', 'blood', 'stained', 'ravenous',
    'decompose', 'stagger', 'hunger', 'for', 'brains', 'post-apocalyptic',
    'survivor', 'fortress', 'scavenge', 'ammo', 'shotgun', 'chainsaw', 'escape',
    'infection', 'cure', 'lab', 'experiment', 'mutant', 'zombified', 'outpost'
  ],
  Cat: [
    'Meow', 'purr', 'catnip', 'laser', 'pointer', 'box', 'zoomies', 'floof',
    'chonk', 'blep', 'mlem', 'treats', 'human', 'servant', 'sunbeam', 'nap',
    'knead', 'biscuits', 'boop', 'snoot', 'paws', 'beans', 'whiskers', 'fluff',
    'cattitude', 'hiss', 'pounce', 'scratch', 'litter', 'box', 'midnight',
    'yowl', 'feline', 'pawsome', 'purrfect', 'cat', 'hair', 'everywhere',
    'cardboard', 'castle', 'red', 'dot', 'judging', 'you', 'loaf', 'position'
  ],
  Corporate: [
    'Synergy', 'leverage', 'paradigm', 'shift', 'core', 'competency', 'value',
    'proposition', 'low-hanging', 'fruit', 'bandwidth', 'stakeholder', 'buy-in',
    'touch', 'base', 'circle', 'back', 'best', 'practice', 'deep', 'dive',
    'action', 'item', 'deliverable', 'scalability', 'metrics', 'KPI', 'ROI',
    'thought', 'leadership', 'disruptive', 'innovation', 'blue', 'ocean',
    'strategy', 'agile', 'framework', 'pivot', 'granular', 'drill', 'down',
    'empower', 'team', 'player', 'win-win', 'game', 'changer', 'outside', 'the',
    'box', 'thinking', 'holistic', 'approach', 'benchmark', 'alignment'
  ],
  Yoda: [
    'Do', 'or', 'do', 'not', 'there', 'is', 'no', 'try', 'fear', 'is', 'the',
    'path', 'to', 'the', 'dark', 'side', 'when', 'nine', 'hundred', 'years',
    'old', 'you', 'reach', 'look', 'as', 'good', 'you', 'will', 'not', 'hmm',
    'judge', 'me', 'by', 'my', 'size', 'do', 'you', 'luminous', 'beings',
    'are', 'we', 'wars', 'not', 'make', 'one', 'great', 'patience', 'you',
    'must', 'have', 'the', 'force', 'strong', 'with', 'this', 'one', 'ready',
    'are', 'you', 'what', 'know', 'you', 'of', 'ready', 'adventure', 'excitement',
    'a', 'Jedi', 'craves', 'not', 'these', 'things', 'lost', 'a', 'planet',
    'Master', 'Obi-Wan', 'has', 'how', 'embarrassing'
  ]
} as const;

function generateParagraph(wordPool: readonly string[]): string {
  const length = Math.floor(Math.random() * 50) + 50; // 50–100 words
  const words: string[] = [];
  for (let i = 0; i < length; i++) {
    words.push(wordPool[Math.floor(Math.random() * wordPool.length)]);
  }

  // Special Yoda-speak shuffling (simple but effective)
  if (wordPool === themes.Yoda) {
    // Reverse roughly 70% of sentences for that Yoda feel
    const sentences = words.join(' ').match(/[^.!?]+[.!?]+/g) || [words.join(' ')];
    const shuffled = sentences.map(s => {
      if (Math.random() < 0.7) {
        const wordsInSentence = s.trim().split(/\s+/);
        // Move object after verb (very basic Yoda transformation)
        if (wordsInSentence.length > 3) {
          const verbIdx = wordsInSentence.findIndex(w => w.toLowerCase().match(/^(is|are|have|do|will|can|must|should|would)$/i));
          if (verbIdx > -1 && verbIdx < wordsInSentence.length - 2) {
            const object = wordsInSentence.splice(verbIdx + 1).join(' ');
            return wordsInSentence.join(' ') + ' ' + object;
          }
        }
      }
      return s;
    });
    return shuffled.join(' ') + ' ';
  }

  return words.join(' ') + '.';
}

export function generateText(theme: keyof typeof themes, paragraphs: number): string {
  const pool = themes[theme];
  const result: string[] = [];

  for (let i = 0; i < paragraphs; i++) {
    result.push(generateParagraph(pool));
  }

  return result.join('\n\n');
}

export const availableThemes = Object.keys(themes) as (keyof typeof themes)[];