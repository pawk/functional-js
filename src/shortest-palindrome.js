function palindrome(word) {
  const reverse = (str) => [...str].reverse().join('');
  let part = '';
  let candidate = word;
  let i = 0;

  while (reverse(candidate) !== candidate) {
    part = part.concat(word[i]);
    candidate = word + reverse(part);
    i++;
  }

  return candidate;
}

console.assert(palindrome('a') === 'a');
console.assert(palindrome('aa') === 'aa');
console.assert(palindrome('ab') === 'aba');
console.assert(palindrome('abb') === 'abba');
console.assert(palindrome('abbab') === 'abbabba');
console.assert(palindrome('somerandomword') == 'somerandomwordrowmodnaremos')
