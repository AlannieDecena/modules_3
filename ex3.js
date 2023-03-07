// function makeCounter(startFrom, incrementBy, ) {
//     // let currentCount = 0;
//     startFrom = Math.floor(2)
//     incrementBy = 2;
//         return function() {
//             startFrom += incrementBy;
//      console.log(startFrom)
//         return startFrom;
//     };
// } 

// // let counter1 = makeCounter();
// // counter1(); // 1
// // counter1(); // 2

// let counter2 = makeCounter();
// counter2();
// counter2();
// counter2();
// END OF QUESTION 1

//QUESTION 2a = it will print by #4, #3, #2, #1 because #4 dose not have a number of miliseconds set to it so prints instantly while the others will print in the order of the shortest miliseconds.

//  const delayMsg = (msg) => {console.log(`This message will be printed after a delay: ${msg}`)}
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')

// const TenSecDalyed = setTimeout(delayMsg, 10000, '#5: Delayed by 10s (10000 ms)');

// clearTimeout(TenSecDalyed)

// END OF QUESTION 2

// function printMe(msg) {
//     console.log('printing debounced message' + msg)
// }

// function debounce(func, ms) {
//     let timer;
//     return function () {
//         clearTimeout(timer);

//         timer = setTimeout(func, ms, ...arguments)
//     }
// }
// printMe = debounce(printMe, 1000);

// setTimeout( printMe, 100, ' msg 1');
// setTimeout( printMe, 200, ' msg 2');
// setTimeout( printMe, 300, ' msg 3');
// END OF QUESTION 3

// function printFibonacci(n) {
//     let a = 0;
//     let b = 1;

//     console.log(a)
//     console.log(b)

//     setInterval(function printNext() {
//         let c = a + b
//         console.log(c)
//         a = b;
//         b = c;
//     },1000 )
// } 

// printFibonacci()

// function printFibonacciB(n) {
//     let  [a, b ] = [1, 1]

//     console.log(a)
//     console.log(b)

//     setTimeout(function printNext(a, b) {
//         let c = a + b
//         console.log(c)
//         setTimeout(printNext, 1000, b, c) 
//     },1000, a, b)
// } 
// printFibonacciB()

// function printFibonacciC(n) {
//     let  [a, b ] = [1, 1]
//     let counter = 2;
//     console.log(a)
//     console.log(b)

//     setTimeout(function printNext(a, b) {
//         let c = a + b
//         counter = counter + 1;
//         console.log(c)
//         if (counter < n ){
//         setTimeout(printNext, 1000, b, c) }
//     },1000, a, b)
// } 
// printFibonacciC(10)
// END OF QUESTION 4


// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,
// setTimeout(description) {console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); 
// 200}
// };

// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,
//     description() {

//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//     }
//     };

// // setTimeout(car.description, 200); //fails //because it cant access the object

// // setTimeout(() => car.description(), 1000)// A
// // car = {...car, year:'2023' } // B
// // C = no beacause we override it
// let noWrapper = car.description.bind(car)
// setTimeout(noWrapper, 2000) //D
// car = {...car, model:'123' } //E
// END OF QUESTION 5

// delay.prototype = setTimeseout() 


// multiply.delay(500)(5, 5);
// END OF QUESTION 6 ??

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// //  }

//  Person.prototype.toString = function() {
//     return `This is ${this.name} they are ${this.gender} and ${this.age} years old `
//  }

// const cusPerson = new Person('Kent', 'non-binary', 23)//A
// console.log(cusPerson)
// const cusPerson2 = new Person('sara', 'male', 38)//B
// console.log(cusPerson2)
// const cusPerson3 = new Person('Ben', 'female', 26)
// console.log(cusPerson3)

// //C
// function Student(name, age, gender, cohort) {
//    Person.call(this, name, age, gender);
//    this.cohort = cohort;
// }
// Student.prototype.toString = function() {
//    return `${this.name} ${this.gender} ${this.age} ${this.age} ${this.cohort}`
// }
// const cusStudent = new Student('Kent', 'non-binary', 23, '2012Cohort')
// console.log(cusStudent)

// const cusStudent2 = new Student('sara', 'male', 38,'2023Cohort' )
// console.log(cusStudent2)
// END OF QUESTION 7

// class DigitalClock {
//    constructor(prefix) {
//       this.prefix = prefix;
//    }
//    display() {
//       let date = new Date();
//       //create 3 variables in one go using array destructuring
//       let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
//       date.getSeconds()];
//       if (hours < 10) hours = '0' + hours;
//       if (mins < 10) mins = '0' + mins;
//       if (secs < 10) secs = '0' + secs;
//       console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//    }
//    stop() {
//       clearInterval(this.timer);
//    }
//    start() {
//       this.display();
//       this.timer = setInterval(() => this.display(), 1000);
//    }
// }
// const myClock = new DigitalClock('my clock:')
// myClock.start()

// class PrecisionClock extends DigitalClock {
//    constructor(precision)
// }

//  END OF QUESTION 8??

// function randomDelay() {
//    let delay = Math.ceil(Math.random() * 20);
//    return new Promise(resolve => setTimeout(resolve, delay*1000)) 

//    }

//    function randomDelay() {
//       let delay = Math.ceil(Math.random() * 20);
//       return new Promise(resolve => setTimeout(resolve, delay*1000)) 
//          if (setTimeout())
//       }


// randomDelay().then(() => console.log('There appears to have been a delay.'));
//  END OF QUESTION 9??

import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
   let fetchPromise = fetch(url).then(response => {
      if (response.status === 200) {
         return response.json();
      } else {
         throw new Error(`Request failed with status ${response.status}`);
      }

   });
   return fetchPromise;
}
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
   .then(data => console.log(data))
   .catch(error => console.error(error.message));