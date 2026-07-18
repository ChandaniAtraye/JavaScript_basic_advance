// destructuring - destructuring is a way to extract values from an array or object and store them in variables easily. (extract-nikalna)


let arr = [1,2,3,4,5,6];
let [a,b, ,c] = arr;




//spread_operator - is used to expand the elements of an array or the properties of an object
// simply spread everything - take all values from arr1 and put them into newarr 
// or spread operator is used to copy or combine values from arrays or objects by exapanding them.

let arr1 = [1,2,3,4,5,6,7,8,9];

let arr2 = [...arr1];


// example 
let fruits = ["Apple","Banana","Mango"];
console.log(fruits[1]);