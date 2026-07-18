// Q1. print the second fruit
let fruits = ["Apple","banana","Mango"];
 console.log(fruits[1]);

 // Q . add orange at the end and pineapple at the beginning

 fruits.push("orange");
 fruits.unshift("pineapple");


 // replace banana with kiwi in the array above
 
 fruits.splice(2,1,"Kiwi");

 //remove the last item from this array using method

 let numbers = [1,2,3,4]
 numbers.pop();

 // insert "red"  and "blue" at index 1 in this array

 let colors = ["Green","Yellow"];
 colors.splice(1,0,"Red","Blue");

 // extract  only the middle 3 elements from this array

 let items = [1,2,3,4,5,6];
let newitems = items.slice(2,5);

// sort this array alphabetically and then reverse it 
let names =["Zara","Arjun","Mira","Bhavya"];

 names.sort().reverse();
// let newName = names.sort(); // by default sort to alphabetical order 
//  names.sort(function(a,b){
//     return b-a;
// });

// use.map() to square each number:
let num = [1,2,3,4];
let newNum = num.map(function(val){
    return val * val;
})


// use .filter() to keep numbers greater than 10:
let num1 = [5,12,8,20,3];
let newnum1 = num1.filter((val)=>{
   return val > 10;
});

// use.reduce() to find the sum of this array
let arr = [10,20,30];
let sum = arr.reduce(function(acc,val){
    return acc + val; 
},0);

//use .find() to get the first number less than 10:

let num2 = [12,15,3,8,20];
let firstvalue = num2.find(function(val){
    return val<10;
});


//use .some() to check if any student has scored below 35;

let score = [45,60,28,90];
let newScore = score.some(function(val){
    return val<35;
});


//use .every() to check if all numbers are even :
let num3 = [2,4,6,8,10];
let newnum3 = num3.every(function(val){
    return val % 2 === 0;
});

//Destructure this array to get firstName and lastName 
let fullName = ["Chandani","Atraye"];

let [firstName,lastName] = fullName;
console.log(firstName);

// merge two arrays using spread operator
let a = [1,2];
let b = [3,4];
let c = [...a,...b];


// Add "India" to the start of this array using spread:

let countries = ["USA","UK"];

countries = ["India",...countries];


//Clone this array properly (not by references)

let arr1 = [1,2,3];
let arr2 = [...arr1];