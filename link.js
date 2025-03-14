// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// function findSolution(target) {
//     function find(current, history) {
//         if (current == target) {
//             return history;
//         } else if (current > target) {
//             return null;
//         } else {
//             return find(current + 5, '(${history} + 5)') ??
//                     find(current * 3, '(${history} * 3)');
//         }
//     }
//     return find(1, "1");
// }

// console.log(findSolution(24));


// function printFarmInventory(cows, chicken){
//     let cowString = String(cows);
//     while (cowString.length < 3){
//         cowString = "0" + cowString;
//     }
//     console.log('${cowString} Cows');
//     let chickenString = String(chicken);
//     while (chickenString.length < 3) {
//         chickenString = "0" + chickenString;
//     }
//     console.log('${chickenString} Chicken');
// }
// printFarmInventory(7, 11);

// function printZeroPaddedWithLable(number, label) {
//     let numberString = String(number);
//     while (numberString.length < 3) {
//         numberString = "0" + numberString;
//     }
//     console.log('${numberString} ${label}');
// };
//  function printFarmInventory(cows, chicken, pigs){
//      printZeroPaddedWithLable(cows, "Cows");
//      printZeroPaddedWithLable(chicken, "Chicken");
//      printZeroPaddedWithLable(pigs, "Pigs");
//  };
//  printFarmInventory(7, 12, 13);

// function isEven(n){
//     if (n == 0){
//         return true;
//     } else if ( n == 1) {
//         return false;
//     } else if (n < 0){
//         return isEven(-n);
//     } else {
//         return isEven(n - 2);
//     }
// }

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-2));

// function countBs(string){
//     return countChar(string, "B");
// }
//  function countChar(string, char) {
//      let count = 0;
//      for (let i = 0; i < string.length; i++) {
//          if (string[i] === char){
//              count++;
//          }
//      }
//      return count;
//  }
 
//  console.log(countBs("BoB"));
//  console.log(countChar("kakkerlak", "k"));
 
let listOfNumbers = [2,4,5,0,1];

console.log(listOfNumbers[1]);
 
console.log(listOfNumbers[2 -2]);
 
 let doh = "doh";
 
 console.log(typeof doh.toUpperCase);
 
 console.log(doh.toUpperCase());
 
//  let sequence = [1,2,3,4];
//  sequence.push(5);
//  sequence.push(6);
//  console.log(sequence);
 
//  console.log(sequence.pop());
//  console.log(sequence.pop());
//  console.log(sequence);
 
// let day1 = {squerrel:false, events:["work", "play", "eat"]};
 
// console.log(day1.squerrel);

// console.log(day1.wolf);

// day1.wolf = false;
// console.log(day1.wolf);
let anObject = {left: 1, right: 2};
console.log(anObject.left);

delete anObject.left;

console.log(anObject.left);

console.log("left" in anObject);

console.log("right" in anObject);

console.log(Object.keys({a:1, b:2, c:3}));

let objectA = {d:4, e:5, f:6};
Object.assign(objectA, {e:7, g:8});

console.log(objectA);

let object1 = {value:10};

let object2 = object1;

let object3 = {value:14};

console.log(object1 === object2);

object1.value = 15;

console.log(object2.value);

// rest parameter
// function max(...numbers) {
//     let result = -Infinity;
//     for (let number of numbers) {
//         if (number > result) result = number;
//     }
//     return result;
// }
// console.log(max(4,10,9,-2));

// use three-dot notation to call a function with an array of arguments

// let numbers = [3, 9, 8];
// console.log(max(...numbers));

// Square bracket array notation similarly allows the triple-dot operator
// let words = ["never", "fully"];
// console.log(["will", ...words, "understand"]);

// curly brace objects
// let coordinates = {x: 10, y: 5};
// console.log({...coordinates, y: 6, z: 3});


// Math can help. It contains cos (cosine), sin (sine), and tan (tangent)
// function randomPointOnCircle(radius){
//     let angle = Math.random() * 2 * Math.PI;
//     return  {x:radius * Math.cos(angle),
//             y:radius * Math.sin(angle)};
// }
// console.log(randomPointOnCircle(2));



// Math.random function returns a new pseudorandom number between 0 (inclusive) and 1 (exclusive) every time you call it
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());


// whole random number instead of a fractional one, we use Math.floor (which rounds down to the nearest whole number)

console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));

// The sum of a range
// modify your range function to take an optional third argument that indicates the “step” value used when building the array
function range(start, end, step = 1) {
    let result = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        result.push(i);
      }
    }
    return result;
  }
  
  function sum(numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  
  console.log(sum(range(1, 10))); // Output: 55
  console.log(range(1, 10, 2)); // Output: [1, 3, 5, 7, 9]
  console.log(range(5, 2, -1)); // Output: [5, 4, 3, 2]
  console.log(range(5,5,1)) //output: [5]
  console.log(range(5,5,-1)) //output: [5]
  console.log(range(1,10)) //output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(10,1,-2))//output: [10, 8, 6, 4, 2]
  
  
  // Reversing an array
  // first, reverseArray, takes an array as its argument and produce a new array that has the same elements in the inverse order.
  function reverseArray(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
      reversed.push(array[i]);
    }
    return reversed;
  }
  // second, reverseArrayInPlace, does what the reverse method does: modify the array given as its argument by reversing its element
  function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
  }
  
  let myArray = ["A", "B", "C"];
  console.log(reverseArray(myArray)); // → ["C", "B", "A"]
  console.log(myArray); // → ["A", "B", "C"]
  
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue); // → [5, 4, 3, 2, 1]

  // pass action as a function value
// function repeat(n, action){
//     for(let i = 0; i < n; i++){
//         action(i);
//     }
// }
// repeat(3, console.log);
// // creating a function value on the spot
// let labels = [];
// repeat (5, i=>{
//     labels.push('Unit ${i + 1}');
// });
// console.log(labels);

// we can have functions that create new functions
function greaterThan(n){
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));



// functions that change other functions
function noisy(f){
  return(...args) => {
      console.log("Calling with ", args);
      let result = f(...args);
      console.log("called with ", args, ", returned", result);
      return result;
  };
}
noisy(Math.min)(3,2,1);

// functions that provide new types of control flow
function unless(test, then){
  if(!test) then();
}
function repeat(times, action) {
  for (let i = 0; i < times; i++) {
      action(i);
  }
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
      console.log(n, "is Even");
  });
});


// built-in array method, forEach, that provides something like a for/of loop
["A", "B"].forEach(l => console.log(l));