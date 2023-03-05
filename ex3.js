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

