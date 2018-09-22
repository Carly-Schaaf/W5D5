// class Clock {
//   constructor() {
//     let date = new Date();
//     this.seconds = date.getSeconds();
//     this.minutes = date.getMinutes();
//     this.hours = date.getHours();
//     this.printTime();
//     setInterval(this._tick.bind(this), 1000);
//     // 1. Create a Date object.
//     // 2. Store the hours, minutes, and seconds.
//     // 3. Call printTime.
//     // 4. Schedule the tick at 1 second intervals.  
//   }
// 
//   printTime() {
//     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//     // Format the time in HH:MM:SS
//     // Use console.log to print it.
//   }
// 
//   _tick() {
//     if (this.hours === 23 && this.seconds === 59 && this.minutes === 59) {
//       this.hours = 0;
//       this.seconds = 0;
//       this.minutes = 0;
//     }
// 
//     else if (this.seconds === 59 && this.minutes === 59) {
//       this.hours += 1;
//       this.seconds = 0;
//       this.minutes = 0;
//     }
//     else if (this.seconds === 59) {
//       this.seconds = 0;
//       this.minutes += 1;
//     }
//     else {
//       this.seconds += 1;
//     }
// 
//     this.printTime();
// 
//     // 1. Increment the time by one second.
//     // 2. Call printTime.
//   }
// }

// const clock = new Clock();

// const readline = require('readline');
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// 
// function addNumbers(sum, numsLeft, completionCallback) {
//   if (numsLeft > 0) {
//     reader.question("Tell me a number\n", function (answer) {
//       const thisNumber = parseInt(answer);
// 
//       sum += thisNumber;
//       console.log("Working sum: " + sum);
// 
//       addNumbers(sum, numsLeft - 1, completionCallback);
//     });
//   } else {
//     completionCallback(sum);
//   }
// }
// 
// addNumbers(0, 3, function (sum) {
//   console.log("Total Sum: " + sum);
//   reader.close();
// });

// ---------------------------------------------------------------------------

// const readline = require("readline");
// 
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// 
// // Write this first.
// function askIfGreaterThan(el1, el2, callback) {
//   // Prompt user to tell us whether el1 > el2; pass true back to the
//   // callback if true; else false.
//   reader.question(`is ${el1} greater than ${el2} ?`, function(answer){
//     if (answer === 'yes') {
//       callback(true);
//     }
//     else if (answer === 'no'){
//       callback(false);
//     }
//   });
// }
// 
// // askIfGreaterThan(3, 5, function (el) {console.log(el);} );
// 
// // Once you're done testing askIfGreaterThan with dummy arguments, write this.
// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//   // Do an "async loop":
//   // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
//   //    know whether any swap was made.
//   // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
//   //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
//   //    continue the inner loop. You'll want to increment i for the
//   //    next call, and possibly switch madeAnySwaps if you did swap.
//   if (i === arr.length - 1) {
//     outerBubbleSortLoop(madeAnySwaps);
//   }
//   else {
//     askIfGreaterThan(arr[i], arr[i + 1], function (boolean) {
//       if (boolean) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         madeAnySwaps = true;
//       } 
//       innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
//     });
//   }
// 
// }
// 
// // innerBubbleSortLoop([2, 10, 3, 7, 5], 0, false, true);
// 
// 
// // Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// // Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.
// 
// function absurdBubbleSort(arr, sortCompletionCallback) {
//   function outerBubbleSortLoop(madeAnySwaps) {
//     // Begin an inner loop if you made any swaps. Otherwise, call
//     // `sortCompletionCallback`.
//     if (madeAnySwaps === true) {
//       innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
//     } else {
//       sortCompletionCallback(arr);
//     }
//   }
// 
//   // Kick the first outer loop off, starting `madeAnySwaps` as true.
//   outerBubbleSortLoop(true);
// }
// 
// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });


// -----------------------------------------------------------------------------------------


function myBind (context) {
  this.apply(context);
}

// let myBind = (context) => { this.apply(context); };






class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

const boundTurnOn = turnOn.myBind(lamp);
boundTurnOn();