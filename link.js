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