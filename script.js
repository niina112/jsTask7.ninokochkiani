const text = "I love learning JavaScript"
const text1 = text.split(' ')
console.log(text1)



for (let i = 0; i < text1.length; i++) {
    if (text1[i].length >= 5) {
      text1[i] = "LongWord"; 
    } else {
      text1[i] = "ShortWord"; 
    }
  }
  
  let modString = text1.join(' ');
  console.log("String:", modString);


  let words = text.split(' ');
let count = 0;
let index = 0;

while (index < words.length) {
  if (words[index].includes('a')) {
    count++;
  }
  index++;
}
console.log(`Number of "a" in this text : ${count}`);
let words1 = modString.split(' ');
let modifiedIndex = 0;

let originalWords = text.split(' ');
let finalIndex = 0;

let modIndex = 0;

console.log("Words from text1:");
do {
  console.log(text1[modIndex]);
  modIndex++;
} while (modIndex < text1.length);