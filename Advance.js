// variable Scope, closures ( cant go up only down)

//scheduling, settimeout

// function printMsg (msg) {
//     console.log(`printing this msg ${msg}`)
// };
//  const soDelayedTimer = setTimeOut(printMsg, 5000, 'Delayed by 5000 miliseconds' );
//  const lessDelayedTimer = setTimeOut(printMsg, 3000, 'Delayed by 3000 miliseconds' );

// const interval = setInterval(printMsg, 5*1000, 'interval function');
// setTimeout(() => clearInterval(interval), 11*1000);

// function repeatTimeOut (delay, limit) {
//     let counter = 1;
//     setTimeout(function repeatThis(current){
//         console.log('repeatTimeOut: repeated '+current+' of '+limit+' times')
//         if (current < limit) setTimeOut(repeatThis, delay, current+1)
//     }, delay);
//     counter++;
// }
// repeatTimeOut(1000, 5)


// function repeatInterval(delay, limit) {
//     let counter = 1;

//     let intervalTimer = setTimeout(function repeatThis() {
//         console.log('repeatInterval: repeated '+counter+' of '+limit+' times')
//         if (counter == limit) clearInterval(intervalTimer);
//         counter++;
//     }, delay);
// }

// repeatInterval(1000, 10)

// const tempUser = {
//     firstName: 'fisrt',
//     lastName: 'last',
//     printName( ) {console.log(`${this.firstName} ${this.lastName}`)}
// }
// tempUser.printName();

// setTimeout(() => tempUser.printName(), 2000);



// function slow(x, y, a) {
//     // there can be a heavy CPU-intensive job here like adding up to a large number
//     let goal = Math.floor(Math.random() * x * 1_000_000) //random number between 0 and a million times x
//     console.log(`slow(${x}, ${y}, ${a}): randomly generated goal for ${x * 1_000_000} is ${goal}`)
//     let random = 0;
//     for (let i = 0; i < goal; i++)
//     {
//         random++
//     }
//     return random;
// }

// // Jo Batkin to Everyone (1 Mar 2023, 1:48 PM)
// function cachingDecorator(pureFunction) {
//     const cache = new Map();
//     const outerContext = this;

//     return function() {
//         //let x = arguments[0];
//         let funcParams = Array.from(arguments).join('')
//         if (cache.has(funcParams)) { // if there's such key in cache
//             console.log('returned cached value for '+funcParams)
//             return cache.get(funcParams); // read the result from it
//         }
//         //let result = pureFunction.call(this, ...arguments); //needed for object functions that reference 'this' for context
//         // let result = pureFunction.apply(outerContext, arguments); //can also use apply - very similar, only difference is in handling arguments
//         let result = pureFunction(x) //works fine for standalone functions that don't rely on 'this' for context
//         cache.set(funcParams, result); // and cache (remember) the result
//         console.log('generated new value '+result+' for '+funcParams)
//         return result;
//     };
// }
// slow = cachingDecorator(slow);

// console.time('slow no caching')
// console.log( slow(1, 2, 4) ); // slow(1) is run, cached and the result returned
// console.timeEnd('slow no caching')

// console.time('slow with caching')
// console.log( "Again: " + slow(1, 2, 4) ); // slow(1) result returned from cache
// console.timeEnd('slow with caching')


// let newUser = {
//     // age : 30,

//     get age() {
//       return this._age;
//     },
  
//     set age(value) {
//       if (value < 0) {
//         console.log("age cannot be 0");
//         return;
//       }
//       if (value > 120) {
//         console.log("age cannot be more than 120");
//         return;
//       }
//       this._age = value;
//     }
// };
// newUser.age = 20;
// newUser.age = -20;
// newUser.age = 121;
// console.log(newUser.age)

// let animal = {
//     eats: true,
//     sleeps: true,
//     legs: 4,
//     mammal: true,
//     enemy: false
// };

// let dog = Object.create(animal, {
//     runs: {
//         value: true,
//         enumerable: true
//     }
// });

// console.log(dog)
// console.log(dog.eats)
// console.log(dog.legs)
// console.log(dog.sleeps)

// function Horse(name) {
//     this.name = name;
    
// }

// Horse.prototype = animal;
// const horse = new Horse("Tammy");
// horse.eats = 'carrots'

// console.log('horse mammal? ' + horse.mammal)
// console.log('eat? ' + horse.eats)


// class Animal {

//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//         this.type = 'animal'
//     }
    
//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} runs with speed ${this.speed}.`);
//     }

//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stays still ...then`);
//     }
// }

// class Spider extends Animal {

//     constructor(name){

//     super(name)
    
//     this.type = 'insect';
//     }

//     hides() {
//         console.log(`${this.name} hides everywhere!`)
//     }

//     jumps() {
//         super.speed;
//         console.log(`${this.name} jumps at you.`)
//     }
// }

// const spider = new Spider('spider')
// spider.run(10)
// spider.hides()
// spider.stop()
// spider.jumps()

// //try catch error
// function checkDate(date) {
  
//     try {
//         const testDate = new Date(date);
        
//         if (testDate == `Invalid Date`) {
//             throw new SyntaxError('not valid date')
//         }
//         return true;
//     } catch (err) {

//         if (err instanceof SyntaxError) {
//             console.log(err.message)
//         }else {
//             throw err;
//         }
//     }
//     finally {
//         console.log('At the End')
//     }
//     return false;
// }


// console.log(checkDate('not date'))
// console.log(checkDate("2023-03-03"))

// function produceSong(resolve, reject) 
// {
//     const artists = ['Taylor Swift', 'Beyonce', 'Drake', 'Ed Sheeran', 'Rihanna', 'The Weeknd', 'Harry Styles']
//     const randomArtist = Math.floor(Math.random() * artists.length) //random number corresponding to one of the above artists

//     const songs = ['Unstoppable', 'Numb Little Bug', 'About Damn Time', 'Music For a Sushi Restaurant', 'Anti-Hero', 'Glimpse of Us']
//     const randomSong = Math.floor(Math.random() * songs.length) //random number corresponding to one of the above songs

//     const randomOutcome = Math.round(Math.random()) //returns either 0 or 1 randomly for failure (0) or success (1)

//     let successResult = artists[randomArtist] + ' has just released their newest song called ' + songs[randomSong]
//     let failResult = artists[randomArtist] + ' has no new songs'

//     setTimeout(() => randomOutcome ? resolve(successResult) : reject(failResult), 1000)

    //a longhand version of the above setTimeout, without arrow functions or conditional statements:
    //setTimeout(function() {
    //    if (randomOutcome == 1) resolve(successResult) //calls the resolve callback to indicate successful promise resolution, native to promise producer functions
    //    else reject(failResult) //calls the reject callback to indicate failed promise resolution, native to promise producer functions
    //}, 1000)
//}

// let songPromise = new Promise(produceSong)

// songPromise.then(
//     successMsg => console.log(`Success #1: ${successMsg}`),
//     failMsg => console.log(`Failure #1 ${failMsg}`)
// )

// songPromise.then(
//     null,
//     failMsg => console.log(`Failure #2 ${failMsg}`)
// )

// songPromise.catch( successMsg => console.log(`Success #3: ${successMsg}`))

// songPromise
// .then(successMsg => console.log(`Success #4: ${successMsg}`))
// .catch( failMsg => console.log(`Failure #2 ${failMsg}`))
// .finally (() => console.log('song production now finalised'))

// function start() {
//     console.log('start prepartion of Pizza');
// }

// const addBase = function() {
//     console.log('adding base of Pizza');
   
// }

// const addingCheese = () => {
//     console.log('adding cheese of Pizza');

// }   

// function addToppings() {
//     console.log('adding toppins of Pizza');
// }

// function cook() {
//     console.log('cook Pizza');
// }

// function finish() {
//     console.log('finish Pizza');
// }

// start();
// addBase();
// addingCheese();
// addToppings();
// cook();
// finish();

function start() {
    console.log('Started preparing Pizza'); 
    // setTimeout(makeBase, 10, addCheese, addToppings, cook, finish);
}

const makeBase = function(...actions) {
    console.log('Pizza Base is prepared');
    setTimeout(actions.shift(), 500, ...actions)
}

const addCheese = (...actions) => {
    console.log('Cheese is added on Pizza');
    setTimeout(actions.shift(), 200, ...actions)
}

function addToppings(...actions) {
    console.log('Toppings are added on Pizza')
    setTimeout(actions.shift(), 300, ...actions)
}

const cook = function(...actions) {
    console.log('Pizza is cooked')
    setTimeout(actions.shift(), 800, ...actions)
}

const finish = (...actions) => {
    console.log('Pizza is ready')
}

start();
