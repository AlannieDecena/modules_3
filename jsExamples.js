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

// let longString = "this is fairly long string with lot sof different characters in it.";
// let shortString = "short string";

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

// const product = {
//     name : "company name",
//     category: "useful thing",
//     price: 123,
//     discount: 10,
//     valueof() {

//         return this.price = (this.price * (this.discount/100));
//     },

//     toString() {
//         return `${this.name} ${this.category}`
//     }
    
// }

// const product2 = {
//     name : "company nameA",
//     category: "useful thing2",
//     price: 15.00,
//     discount: 10,
//     valueof() {

//         return this.price - (this.price * (this.discount/100));
//     },

//     toString() {
//         return `${this.name} ${this.category}`
//     }
    
// }
// console.log(`${product2} with quantiy 5 cost ${(product * 5)}`);

// let billion = 1_000_000_000;
// console.log(billion);

const cities_au = ['Sydney', 'Melbourne', 'Adelaide', 'Cairns', 'Brisbane']
const cities_nz = ['Auckland', 'Christchurch', 'Hamilton', 'Wellington', 'Queenstown']

// cities_au.push("perth")
// cities_au.unshift("Adelaide")

// lastCity = cities_nz.pop('Queenstown')
//  const cities = cities_au.concat(cities_nz)

// console.log(cities_au)
// console.log(cities_nz)
// console.log(cities)

// cities_nz.splice(4, 0, 'Taupo')
// console.log(cities_nz)
// cities_nz.forEach(cities => console.log(cities));

// const pepole = [
//     {firstName: 'A', lastName: '1', age: 12}
//     {firstName: 'B', lastName: '2', age: 13}
//     {firstName: 'C', lastName: '3', age: 14}
//     {firstName: 'D', lastName: '4', age: 15}
// ]

// pepole.forEach(person => console.log(`${person.firstName} ${person.lastName} is ${person.age} years old`))

const people = [
    {firstName: 'Wendy', lastName: 'Darton', age: 52, location: 'QLD'},
    {firstName: 'Steven', lastName: 'Williams', age: 41, location: 'NSW'},
    {firstName: 'Phillip', lastName: 'Robertson', age: 38, location: 'VIC'},
    {firstName: 'Connor', lastName: 'Edmonds', age: 24, location: 'NZ'},
    {firstName: 'Sheila', lastName: 'Horne', age: 37, location: 'QLD'},
]
// //  people.forEach(person => {
// //     console.log(person.location);
  
// //  })
//  let vicPerson = people.find(person => person.location == 'VIC') //.find()
// console.log(vicPerson)
// let sPerson = people.filter(person => person.firstName.startsWith('S'))//.filter()
// console.log(sPerson)

// let newAges = people.map(person => person.age + 1)//.map()
// console.log(newAges)

// people.sort((person1, person2) => {   //.sort()
//     if (person1.firstName == person2.firstName) return 0;
//     if (person1.firstName > person2.firstName) return 1;
//     return -1;
// });

// console.log(people);
// console.log('total age:' + people.reduce((sum, person) => sum + people.age, 0))

// let sortedQLDer = people.filter(person => person.location == 'QLD').sort((person1, person2) => {
//     if (person1.firstName == person2.firstName) return 0;
//     if (person1.firstName > person2.firstName) return 1;
//     return -1;
// });

// console.log(sortedQLDer);

// console.log(people.find(person => person.location == 'NZ').firstName);
// console.log(people.filter(person => person.location == 'NZ').map(person => person.firstName).shift());

// let months = 'January, February, March, April, May, June, July, August, September, October, November, December';

// let threeletter = months.split(',');

// console.log(months.split(',').map(months =>));



// let people.forEach(person => (console.log(person.firstName + ' is ' + person.age + ' years old')))

// for (let person of people) {
//     console.log(person.firstName + ' is ' + person.age + ' years old');
// }

// const plantNames = new Map();
// plantNames.set('Blueberry', 'Vaccinium');
// plantNames.set('Daylily', 'Hemerocallis');
// plantNames.set('Foxglove', 'Digitalis');
// plantNames.set('Lavender', 'Lavandula');
// plantNames.set('Turmeric', 'Curcuma Longa');


// console.log(plantNames.get('Lavender'));

// console.log(plantNames.has('Blueberry') ? 'its there' : 'not there');

// for (let latinPlant of plantNames.values()) {
//     console.log(latinPlant);
// }
const foods = new Set(['pizza', 'chips', 'pasta', 'seafood', 'salad', 'noodles', 'vegetables']);

// for (let food of foods) {
//     console.log('1#: (for ... of loop' + food);
// }

// foods.forEach(food => console.log('2#: (forEach loop) ' + food));


// const plantNames = new Map();
// plantNames.set('Blueberry', 'Vaccinium');
// plantNames.set('Daylily', 'Hemerocallis');
// plantNames.set('Foxglove', 'Digitalis');
// plantNames.set('Lavender', 'Lavandula');
// plantNames.set('Turmeric', 'Curcuma Longa');

// const[[ plant1Common, plant1Latin], ...otherPlants ] = plantNames

// for ( let [commonName, latintName] of plantNames.entries()) {
//     console.log(commonName + ' is ' latintName)
// }
 
// function printWeather() {
//     // let currentTemp = 28; //degrees celcius
//     // let maxTemp = 33;
//     // let windSpeed = 5; //km/h
//     // let forecast = 'Mostly sunny';
//     const [currentTemp, maxTemp,windSpeed, forecast] = [ 28, 33, 5, 'mostlysunny']
//     console.log(`Today's weather forecast: ${forecast}, with a wind speed of ${windSpeed}km/h. The current temperature is ${currentTemp} with a max of ${maxTemp} degrees.`)
// }


// printWeather()

// DATE object  always in UTC time zone

// const today = Date()
// const chistmas = new Date('2023-12-25')
// // const tomorrow = new Date(today.getFullYear(), today.getMonth()+1, 1)

//  console.log(today)
//  console.log(chistmas)
//  console.log(tomorrow)

//  console.log(today.toLocaleString())
//  console.log(chistmas.toLocaleString())

// const today = Date()
// const march7Local = new Date("March 7, 2014")
// const march7UTC = new Date("2014-03-07")

// console.log(march7Local.toLocaleString())
// console.log(march7UTC.toLocaleString())

// const easterSunday = new Date('2023-04-09')

// const difference = easterSunday - today;
// console.log('days until easter' + difference / 1000 / 60 /60 /24)

// let daysDiff = easterSunday.getDate() - today.getDate();
// let monthDiff = easterSunday.getMonth() - today.getMonth();

// if (daysDiff < 0) {
//     monthDiff = monthDiff - 1;

//     daysDiff += 30;
// }

// console.log('there is ' + monthDiff+ 'months and ' +daysDiff+ 'days until easter');

// JSON 

// const room = {
//     number: 23
// }
// const meeting = {
//     title: "conference",
//     paticipants: ['jason', 'ann']
// }


// const stringMeeting = JSON.stringify(meeting);
// const pasedMeething = JSON.stringify(stringMeeting);

// console.log(stringMeeting)
// console.log(pasedMeething)

// meeting.place = room;
// room.occupiedBy = meeting;

// const meetingString = JSON.stringify(meeting, (key, value) => {
//     console.log('key:' +key)
//     console.log('value:' +key)

//     if (key != '' && value == meeting) return undefined;

//     return value;
// }, 2); //give space

// console.log(meetingString)

// const backgroundImage = 'background-Image';
// const marginleft = 'margin-left';

// function camelCase(string) {
//     const words = string.split('-')
//     let camelCaseString = '';

//     words.forEach(word => {
//         if (camelCaseString.length == 0) {
//             camelCaseString = word;
      
//             camelCaseString =+ word.charAt(0).toUpperCase() + word.subString(1);
//         }
//     })
//     return camelCaseString;
// }
// console.log(camelCase(backgroundImage));
// console.log(camelCase(marginleft));