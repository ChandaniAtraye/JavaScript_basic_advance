//array methods : push,pop,shift,unshift,splice,slice,reverse,sort,map,filter,reduce,find,some,every

let arr = [10,20,30,40,2]  // or let arr = new Array();

arr[2] = 32;   // modify value

//sort

let sr = arr.sort(function(a,b){
    return b-a;
})

//reverse
arr.reverse(); 

//silce - give part of array (copy a portion of an array) - original array me change nhai hoga
let list = [0,1,2,3,4,5,6,7,8,9];
let newlist = list.slice(2,7); //it does not change in original arry


// splice(); -(add,remove,or replace element) - original array me change karega
list.splice(1,4,9);  // index-1 se , 4 element remove karega 

// foreach,map,filter,reduce

let num = [11,62,3,4,32,90];
//foreach
num.forEach(function(val){
    console.log(val + 5);
});

//map
//map sirf tab use karna hai jab aapko ek naya array banana hai pichle arraye ke data ke basis par

let newarr = num.map(function(val){
//    return 12
  if(val >10 ) return val;
})


// filter
let arr1 = [1,2,3,4,5,6,7,8,9,0];
let newarr1 = arr1.filter(function(val){
    if(val>4) return true;
});

//reduce()

let numbers = [1,2,3,4,5,6];
let totalnum = numbers.reduce(function(accumulator,val){
    return accumulator + val ;
},0);


// find

let number = [1,2,3,4,5,6];
let ans = number.find(function(val){
    return val === 5;
})


// some

let score = [10,20,30,40,50,90];

let any = score.some(function(val){
    return val > 85;
})


//every
let marks = [40,35,60,80];
let varun = marks.every(function(val){
    return val >= 35;
})
