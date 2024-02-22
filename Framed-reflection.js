/*
You are given a message (text) that you choose to read in a mirror. 
Return what you would see, complete with the mirror frame. 

Example:
  'Hello World'
  would give:
    *********
    * olleH *
    * dlroW *
    *********

Words in your solution should be left-aligned.
*/


// Solution

function mirror(text) {
  const words = text.split(' ');
  const width = Math.max.apply(null, words.map(w => w.length));
  const tb = '*'.repeat(width + 4);
  const revs = words.map(w => `* ${Array.from(w).reverse().join('')}${' '.repeat(width - w.length)} *`).join('\n');
  return `${tb}\n${revs}\n${tb}`;
}

// or

function mirror(text) {
  const words = text.split(' ');
  const max = Math.max(...(words.map(w => w.length)));
  const lines = q => '*'.repeat(q);
  const revert = str => [...str].reverse().join('');
  const trailing = str => `${' '.repeat(max - str.length)}*`;
  const decorate = str => `* ${revert(str)} ${trailing(str)}`;

  let inverted = words.map(w => decorate(w));
  let separator = lines(max + 4);

  inverted.unshift(separator);
  inverted.push(separator);

  return inverted.join('\n');
}

