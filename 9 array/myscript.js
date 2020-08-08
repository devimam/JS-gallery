// declarations
let arr = new Array('item0','item1','item2');
let arr1 = Array('item0','item1','item2');
let arr2 = ['item0','item1','item2'];

console.log(arr);
console.log(arr1);
console.log(arr2);

// an array with non-zero length, but without any items
let len=10;
let arr3=new Array(len);
let arr4=Array(len);
let arr5=[];
arr5.length=len;

console.log(arr3);
console.log(arr4);
console.log(arr5);


// accessing array elements
let myarray = ['item0', 'item1', 'item2'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


// populating an array
let myarray1 = []
myarray1[0] = 'one';
myarray1[1] = 'two';
myarray1[2] = 'three';


// array object property - length
let myarray2 = [];
myarray2[30] = 'thirty';
console.log(myarray2.length); // 31


// Iterating over Arrays

let myarray3 = ['item0', 'item1', 'item2', 'item3'];
myarray3[10] = 'item10';

// way 1
for(let ind=0;ind<myarray3.length;ind++){
    console.log(ind+" => "+myarray3[ind]);
}

// way 2 - it is not advisable to iterate through JavaScript arrays using for...in loops, because normal elements and all enumerable properties will be listed.
for(let ind in myarray3){
    console.log(ind+" => "+myarray3[ind]);
}


// Array object methods

// concat()
let myArray = new Array('1', '2', '3');
myArray = myArray.concat('a', 'b', 'c');
console.log(myArray); // myArray is now ["1", "2", "3", "a", "b", "c"]


// join(delimeter = ',')
let myArray1 = new Array('Wind', 'Rain', 'Fire');
let list = myArray1.join(' - ');
console.log(list);
// list is "Wind - Rain - Fire"


// push() and pop()
let myArray2 = new Array('1', '2');
myArray2.push('3', '4');
console.log(myArray2);
// myArray2 is now ["1", "2", "3", "4"]
let last = myArray2.pop();
console.log(myArray2);
console.log(last);
// myArray2 is now ["1", "2", "3"], last = "4"


// shift() and unshift()
let myArray3 = new Array('1', '2', '3');
myArray3.unshift('4', '5');
console.log(myArray3);
// myArray3 becomes ["4", "5", "1", "2", "3"]

let first = myArray3.shift();
console.log(myArray3);
console.log(first);
// myArray3 is now ["5", "1", "2", "3"], first is "4"



// slice(start_index, upto_index)
let myArray4 = new Array('a', 'b', 'c', 'd', 'e');
newArray = myArray4.slice(1, 4);
console.log(newArray);
// starts at index 1 and extracts all elements until index 3, returning [ "b", "c", "d"]

// splice(index, count_to_remove, addelm1, addelm2, ...)
let myArray5 = new Array('1', '2', '3', '4', '5');
remArray = myArray5.splice(1, 3, 'a', 'b', 'c', 'd');
console.log(remArray);
console.log(myArray5);
// remArray is now ["2", "3", "4"]
// myArray5 is now ["1", "a", "b", "c", "d", "5"]


// reverse() and sort()
let myArray6 = new Array('1', '2', '3');
myArray6.reverse();
console.log(myArray6);
// transposes the array so that myArray6 = ["3", "2", "1"]

let myArray7 = new Array('Wind', 'Rain', 'Fire');
myArray7.sort();
console.log(myArray7);
// sorts the array so that myArray7 = ["Fire", "Rain", "Wind"]

let myArray8 = [2, 4, 3, -10];
myArray8.sort(sortFn);
console.log(myArray8);

function sortFn(elm1, elm2){
    if(elm1>elm2) return -1;
    else if(elm1==elm2) return 0;
    else return 1;
}


// indexOf(searchElm[, fromIndex]) and lastIndexOf(searchElm[, fromIndex])
let myArray9 = ['a', 'b', 'a', 'b', 'a'];
console.log(myArray9.indexOf('b'));
// output: 1

console.log(myArray9.lastIndexOf('b'));
// output: 3


// forEach(callbackfn)
let a = [1, 2, 3]
a.forEach(function(element) { console.log(element+10) })
// logs each item in turn 11, 12, 13


// map(callbackfn)
let a1 = ['a', 'b', 'c']
let a2 = a1.map(function(item) { return item.toUpperCase(); })
console.log(a2) // logs ['A', 'B', 'C']
