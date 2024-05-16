function generateHashtag(str) {
  if (!str.length || str === '#') {
    return false;
  }
  const stringSplit = str.split('');
  const hashtag = ['#'];
  for (let i = 0; i < stringSplit.length; i++) {
    const char = stringSplit[i];
    if (char === ' ' || char === '#') {
      if (stringSplit[i+1] === ' ' || (i + 1) === stringSplit.length) {
        continue;
      } else {
        hashtag.push(stringSplit[i+1].toUpperCase());
        i++;
      }
    } else {
      i === 0 ? hashtag.push(char.toUpperCase()) : hashtag.push(char)
    }
  }
  if (hashtag.length === 1 || hashtag.length > 140) {
    return false;
  }
  return hashtag.join('');
}

const test1 = " Hello there thanks for trying my Kata";
const test2 = "    Hello     World   ";
const test3 = " ";
const test4 = "you didnt think of me";
const test5 = "#";

console.log(generateHashtag(test3))