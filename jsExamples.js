// function getBmi(number) {
//     return number + number;
// }

// let result = square(3);
// console.log(result);

// function getBmi( height, weight) {
//     let myBmi = weight / (height * height);
//     return myBmi;
// }

// const bobSmith = {
//     nameArray : ["bob", "smith"],
//     nameObject: {
//         first:"bob",
//         last: "smith"
//     },
//     'firstName': 'bob',
//     lastName: 'smith',
//     age : 24,
//     boi() {
//         console.log(`${this.firstName} ${this.lastName} is ${this.age} old`)
//     },
//     intorduceSelf() {
//         console.log(`hi, im ${this.firstName}`);
//     }
// };

// function printObject(object){
//     for(let obProp in object) {
//         console.log(obProp)
//     }
// }

// printObject(bobSmith);

// const favBook = {
//         charaName : "percy jackson",
//         author : "Rick Riordan",
//         sonOf: "Poseidon",
//         charaAge: 12,
//         favGreekGod: ["hades", "hecate", "athena"]
// };
          
// function plot(favBook) {
//     console.log(`${favBook.charaName} finds out he is the son ${favBook.sonOf} 
//     at the age of ${favBook.charaAge} years old`);
//     console.log(`my fave greek god is ${favBook.favGreekGod[1]}`)
// };

// plot(favBook);

// const user1 = {name: "jo"}
// const user2 = user1

// user1.name = "joanne"
// console.log(user2)

// function User(firstnameValue, lastnameValue) {
//     this.firstname = firstnameValue;
//     this.lastname = lastnameValue;
// };
// const user1 = { name: "jo"};

// const user2 = new User('joanne');
// const user3 = new User('Nico', 'Robin');


// console.log(user1);
// console.log(user2.lastnameValue);
// console.log(user3.firstnameValue);

// class UserClass {

//     constructor (firstnameValue, lastnameValue){
//         this.firstname = firstnameValue;
//         this.lastname = lastnameValue;
//     }
//to fix
// let pi = 3.14569
// let amount = 25.33333

// console.log(pi.toFixed(3))
// console.log(parseFloat(amount.toFixed(2)) + 10.50)
//parseInt
//isInteger and parseFloat
//isInteger and isNan

// let quickFox = 'he a quick fox';
// let quickFoxUpper = quickFox.toUpperCase(); 

// console.log(quickFox.toUpperCase);
// console.log(quickFox.toLowerCase);

// function compareString(string1, string2) {
//     return string1.toUpperCase() == string2.toUpperCase()
// }
// console.log(compareString(quickFox, quickFoxUpper))
// console.log(quickFox.startsWith('He'))

// let name1 = 'Adam'
// let name2 = 'Alannie'
// let name3 = 'Robin'

// function startWithA(name) {
//     return name.toUpperCase().startWith('A')

// }
// console.log(name1+ `starts with a? ` +startWithA(name1))

// let longString = "this is fairly long string with lot sof different characters in it.";
// let shortString = "short string";
 
// function truncate (fullString, maxChars) {
//     return fullString.subString(0, maxChars)

// }
// console.log(truncate(longString, 10))

// console.log(truncate(shortString, 10))

//split Function

let longString = "this is fairly long string with lot sof different characters in it.";
let shortString = "short string";

// let wordsplit = longString.split(' ')

// console.log(longString)


// function countWords(string) {
//     let words = longString.split(' ')
//     console.log(words)
//     return words.lenght;

// }

// console.log('there arre' +countWords(longString) + 'words in' + longString)
// console.log('there arre' +countWords(longString) + 'words in' + longString)

// const user = {
//     name: 'kim',
//     location: 'akl',
//     toString() {
//         return `${this.name} is from ${this.location}`
//     }

// }

// console.log('this person is ' + user);

