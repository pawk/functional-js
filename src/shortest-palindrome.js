const reverse = (str) => [...str].reverse().join('');
const is = (str) => reverse(str) === str;

function palindrome(word) {  
  return [...word].reduce((acc, char) => {
    if (acc.length >= word.length && is(acc)) {
      return acc;
    }    
    return (is(word + acc)) ? word + acc : char.concat(acc);
  }, '');  
}

console.assert(palindrome('a') === 'a');
console.assert(palindrome('aa') === 'aa');
console.assert(palindrome('ab') === 'aba');
console.assert(palindrome('abb') === 'abba');
console.assert(palindrome('abbab') === 'abbabba');
console.assert(palindrome('somerandomword') == 'somerandomwordrowmodnaremos')
