const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// const titleCased = tutorials.map((tutorial) => firstLetters = tutorial.match(/\b(\w)/g).toUpperCase); 
// console.log(titleCased);



// const tutorial = 'what does the this keyword mean?'
// const firstLetterOfEachWordArray = tutorial.match(/\b(\w)/g);
// console.log(firstLetterOfEachWordArray);
// const capitalizedFirstLettersArray = firstLetterOfEachWordArray.map((letter) => letter.toUpperCase());
// console.log(capitalizedFirstLettersArray);



// const tutorial = 'what does the this keyword mean?'

// const firstLetterOfEachWordArray = tutorial.match(/\b(\w)/g);
// console.log(firstLetterOfEachWordArray);
// const capitalizedFirstLettersArray = firstLetterOfEachWordArray.map((letter) => letter.toUpperCase());
// console.log(capitalizedFirstLettersArray);





// const titleCased = () => {tutorials.map((tutorial) => {
//   console.log(tutorials);
//   const firstLetterOfEachWordArray = tutorial.match(/\b(\w)/g);
//   const capitalizedFirstLettersArray = firstLetterOfEachWordArray.map((letter) => letter.toUpperCase());
//   console.log(firstLetterOfEachWordArray);
//   console.log(capitalizedFirstLettersArray);
//   console.log(tutorial);
// }
// )
//   // console.log(tutorials);
//   return tutorials;
// }
// titleCased();


const titleCased = () => {
  let breakArrayIntoStrings = tutorials.map(toTitle);
  return breakArrayIntoStrings;
}

function toTitle(string) {
  let breakStringIntoWords = string.split(' ');
  let capitalizeFirstLetter = breakStringIntoWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  let putWordsBackIntoString = capitalizeFirstLetter.join(' ');
  return putWordsBackIntoString;
}
//iterate over my array of strings to do something 
//to every single strings (.map()) D
//separate the string into words (.split (' '), at each space (' ')) D
//iterate over each word (with another .map())
// capitalize the first letter of each word (use charAt(0) to pick 
//the first letter of each word and use .toUpperCase to capitalize it. 
//Then .slice(1) to take a slice of the word containing all the letter
// but the first one. And add those two together) D
//put the words back together into a string (.join (' ') 
//with a space (' ') in between them.) D