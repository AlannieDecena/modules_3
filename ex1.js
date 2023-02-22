// "" + 1 + 0; // 10
// "" - 1 + 0; // -10
// true + false; // true 
// !true; // false
// 6 / "3"; // 2
// "2" * "3"; // 6
// 4 + 5 + "px"; // 9px
// "$" + 4 + 5; // $45
// "4" - 2; // 2
// "4px" - 2; // 2px
// " -9 " + 5; // 4
// " -9 " - 5; // -4
// null + 1; // 1
// undefined + 1; // 1
// undefined == null; // null
// undefined === null; // nan
// " \t \n" - 2; // -2

// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(true + false);
// console.log(!true);
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(" -9 " + 5);
// console.log(" -9 " - 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(" \t \n" - 2);
// // END OF QUESTION 1

// let three = "3"
// let four = "4"
// let thirty = "30"
// //what is the value of the following expressions?
// let addition = three + four // 34
// let multiplication = three * four // 12
// let division = three / four // 0.75
// let subtraction = three - four //-1
// let lessThan1 = three < four // true
// let lessThan2 = thirty < four //true - this one is wrong because its saying that "four" greater than "thirty"
// lessThan2 = thirty == four // we can fix by checking the equality of both values.

// console.log(lessThan2);
// END OF QUESTION 2

// if (0) console.log('#1 zero is true') // this dosen't print because "0" has no value to it
// if ("0") console.log('#2 zero is true')
// if (null) console.log('null is true')// this dosen't print because null is empty
// if (-1) console.log('negative is true')
// if (1) console.log('positive is true')
// END OF QUESTION 3

// let a = 2, b = 3;
// let result = `${a} + ${b} is `;

// result = (a + b < 10) ? result += 'less than 10': result += 'greater than 10';
// // // += adds value to the 'less than 10' variable.?
// console.log(result)
// //// END OF QUESTION 4

// function getGreeting(name) {
//     console.log( 'Hello ' + name + '!');
//     }
// getGreeting()

//  let getGreeting = (name) => console.log( 'Hello ' + name + '!');
//  getGreeting("kim");
// // END OF QUESTION 5
    
// const westley = {                
//     name: 'Westley',
//     lastName: 'Montoya',
//     numFingers: 5
//     }
//     const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
//     }
//     const inigo = {
//     firstName: 'Inigo',
//     greeting(person) {
//     let greeting = `Hello, my name is ${this.firstName} ${westley.lastName}. `;// including Last name.

//     console.log(greeting + this.getCatchPhrase(person));
//     },
//     getCatchPhrase(person) {
//     return person.name + 'You killed my father. Prepare to die.';
//     }
     
//      getCatchPhrase = (person) => person.name + 'You killed my father. Prepare to die.', //arrow function

//     }
//     inigo.greeting(westley)
// //     inigo.greeting(rugen)
// // END OF QUESTION 6    ???

// const basketballGame = {
//     score: 0,
//     foul: 0,

//     freeThrow() {

//         this.score++;
//         return this;

//      },
//     basket() {
//         this.score += 2;
//         return this;
//      },
//     threePointer() {
//         this.score += 3;
//         return this;
//         },

//         foulScore(){
//             this.foul++;
//             return this;
//         },

//     halfTime() {
//         console.log('Halftime score is '+this.score);
//         console.log('foul count is: ' + this.foul);
        
//         return this;
//         },
    
//         finalScore() {
//             console.log('final score score is '+this.score);
//             console.log('foul count is: ' + this.foul);
//             return this;
//             }
//     }

//     // basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().finalScore();
// basketballGame.basket().threePointer().foulScore().freeThrow().halfTime().basket().foulScore().freeThrow().finalScore();
// END OF QUESTION 7

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney',
    
    }
    const tokyo = {
        name: 'akl',
        population: 13_960_000 ,
        capital: 'shinjuku',
        founded: 'Meiji era (1868-1912)',
        timezone: '4 hours behind NZ',
        
        }
    function printObject(city){
        for(const obProp in city) {
            console.log(`${obProp}: ${city[obProp]}`);
        }
    }
printObject(sydney);
printObject(tokyo);
// END OF QUESTION 8





