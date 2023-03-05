// function ucFirstLetters (string) {
//     return string = string.charAt(0).toUpperCase() + string.slice(1);
// }

const { title } = require("process");

// console.log(ucFirstLetters("japan") );
// END OF  QUESTION 1

// let longString = 'this is a verrrryy long strinnnng';

// let shortString = 'she a short string'


// function truncates (str, max) {
   
//      if (str.lenght < max) {
//       return str;
//      } else return str.substring(0, max) + '...';
    
//   }
  
// console.log(truncates(longString, 30));
// console.log(truncates(shortString, 30));
// END OF  QUESTION 2

// const animals = ['Tiger', 'Giraffe'];
// const addedAnimalsToEnd = animals.push('Panda', 'Fox');
// const addedToStartAnimals = animals.unshift('Boar', 'Birds')
// const alphabetically = animals.sort();


// let newAnimals = ['Tiger', 'Giraffe', 'Panda', 'Fox', 'Boar', 'Birds'];

// function replaceMiddleAnimal(newValue) {
//   let halfway = newAnimals.length/2;
//   newAnimals[halfway] = newValue;

// }
// replaceMiddleAnimal ('lion')
// console.log(newAnimals);

// function findMatchingAnimals(beginsWith){
  
//   // return beginsWith.charAt(0).find('B');
//   return newAnimals.filter(newAnimal => 
//     newAnimal.startsWith(beginsWith)
//     )
// }

// findMatchingAnimals('B')
// console.log(findMatchingAnimals('B'))
// END OF  QUESTION 3

// function camelCase1(cssProp) {
//   return cssProp.charAt(0).toUpperCase() + cssProp.replace('-', '');
// }
// console.log(camelCase('margin-left'))

// function camelCase(cssProp) {
//   let camelString = "";
//   for (let word of cssProp.split('-'))  {
//     camelString += (camelString.length == 0) ? word : word.charAt(0).toUpperCase() + word.substring(1);
//   }
//   return camelString;
// }

// console.log(camelCase('background-image'));
// END OF QUESTION 4

// let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen); //this logs as a string
// console.log(typeof fixedTwenty);// this is how to check 
// console.log(typeof fixedTwenty);
// console.log(parseFloat(fixedTwenty) + parseFloat(fixedTen)) // using parseFloat to convert into a decimal number.

// function currencyAddition(float1, float2) {

//   return parseFloat(float1.toFixed(2)) + parseFloat(float2.toFixed(2)); 
 
// }
// // console.log(currencyAddition(1.900, 1.900));

// function currencyOperation(float3, float4, operation) {
//   float3 = float3 * 100;
//   float4 = float4 * 100;
//   let result = 0;
//   switch (operation) {
//     case '+' : result = float3 + float4;
//       break;
//     case '-' : result = float3 - float4;
//       break;
//     case '*' : result = float3 / float4;
//       break;
//     case '/' : result = float3 * float4;
//       break;
  
//   }
  
//   return result / 100;
// }
// console.log(currencyOperation(0.1, 0.2, '+'))
// END OF QUESTION 5

// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

// function unique(duplicatesArray) {
//   if (duplicatesArray.lenght != new Set(duplicatesArray).size) {
//     return new Set(duplicatesArray);
//   }
//   return false;

// }
// console.log(unique(colours));
// console.log(unique(testScores));
// END OF QUESTION 6

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];

  // function getBookTitle(bookId) {
  //  return bookId = books.find(books => books.id === 5 );
  
  // };

// console.log(getBookTitle(books));

// function getOldBooks(oldBooks) {
//   return oldBooks = books.filter(books => books.year < 1950 );
// }

// console.log(getOldBooks(books));

// let addGenre = books.map(function(book) {
//   return {...book, genre: 'novel'}
// })

function getTitles(authorInitial) {
   authorInitial = books.filter(title.length < 2);
 return books.map(); 
}

getTitles()
// console.log(addGenre)

// function getOldBooks() {TypeError: false is not a function
 
//   return books.filter(book => book.year < 1950);
// }
// console.log(getOldBooks());

// function latestBook() {
//   let mostRecentYears = 1900;

//   books.forEach(book => {
//     if (book.year > mostRecentYears) mostRecentYears = book.year
//   });

//   return books.find(book => book.year == mostRecentYears);
// }

//  console.log(latestBook());
// END OF QUESTION 7


// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')


// const newPhoneBookDEF = new Map()
// newPhoneBookDEF.set('Danny', '0213878339');
// newPhoneBookDEF.set('Eliza', '02155782334');
// newPhoneBookDEF.set('Fran', '0215578233');

// console.log(newPhoneBookDEF)

// for (const key of newPhoneBookDEF.keys() ) {
//   console.log(key);
// }
// for (const value of newPhoneBookDEF.values() ) {
//   console.log(value);
// }

// phoneBookABC.set('Caroline', '0123456789')
// console.log(phoneBookABC);

// function printPhoneBook(contacts) {
//   return contacts = phoneBookABC.entries();
// }

// console.log(printPhoneBook(phoneBookABC));

// const fullPhoneBook = new Map([...phoneBookABC, ...newPhoneBookDEF]);
// console.log(fullPhoneBook);

// END OF QUESTION 8

// let salaries = {
//   "Timothy" : 35000,
//   "David" : 25000,
//   "Mary" : 55000,
//   "Christina" : 75000,
//   "James" : 43000
//   };

//   function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((a, b) => a + b, 0);
//   }

  // console.log(sumSalaries(salaries));

  // function topEarner(salaries) {
  //   let topPay = 0;
  //   let topEarner = " ";

    // if (salaries.value < 7000) {
    //   return salaries.value;
    // }
  //   for (let name in salaries) {
  //     if (salaries[name] > topPay) {
  //       topPay = salaries[name]
  //       topEarner = name
  //     }
  //   }
  //   return topPay;
  // }

  // console.log(topEarner(salaries))

  // END OF QUESTION 9

// const today = new Date();
// const birthDay = new Date('1998-03-26');

// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')
// console.log((today.getHours() * 60 + today.getMinutes()) + ' mins thats passed today')
// console.log((today.getHours() * 60 * today.getMinutes()) + today.getSeconds() + ' seconds thats passed today')

// let years = today.getFullYear() - birthDay.getFullYear();
// let months = today.getMonth() - birthDay.getMonth();
// let days = today.getDate() - birthDay.getDate();

// console.log(`Im ${years}years, ${months}months and ${days}days old... T^T`)
