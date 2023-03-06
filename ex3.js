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


// function multiply(a, b) {
//     console.log( a * b );
//  }

// delay.prototype = setTimeseout() 


// multiply.delay(500)(5, 5);
// END OF QUESTION 6 ??

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
 }

const cusPerson = new Person['Kent', 23, 'non-binary']

cusPerson.toString()

const arr = [1, 2, 3];

console.log(cusPerson.toString())