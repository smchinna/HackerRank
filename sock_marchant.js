/**
  John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
  Given an array of integers representing the color of each sock, determine how many pairs of socks
  with matching colors there are.
  For example, there are  socks with colors .
  There is one pair of color  and one of color . There are three odd socks left, one of each color.
  The number of pairs is .
*/

function getCount(arr) {
  let count = 0;
  let makeArr = [];
  for (let i = 0; i < arr.length; i++) {
    let getIndex = makeArr.findIndex((a) => a === arr[i]);
    if (getIndex > -1) {
      count += 1;
      makeArr.splice(getIndex, 1);
    } else {
      makeArr.push(arr[i])
    }
  }
  return count;
}

let inputArr = [1, 2, 3, 4, 2, 2, 10];

//console.log(getCount(inputArr))

function minimumBribes(q) {
 let sum = 0;
 for(let i=q.length - 1; i>=0; i--) {
   if((q[i] - (i+1)) > 2) {
     console.log("Too chaotic")
     return false;
   }
   for(let j=q[i] - 2; j<i; j++) {
     if(q[j] > q[i]) {
       sum += 1;
     } 
   }
 }
 console.log(sum)
}

let aa = '1 2 5 3 7 8 6 4'
let b = aa.split(' ');

minimumBribes(b)