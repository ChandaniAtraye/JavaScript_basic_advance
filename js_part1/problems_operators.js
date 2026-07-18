// Logical opeartor
let Score = 45;
if(Score>=35 || Score>75){
    console.log("Pass");
}else{
    console.log("Fail");
}


// ternary operator

let marks=60;
let grade = marks>=90 ? "A" : marks>=75 ?  "B" : marks>=60 ? "C" : "BETTER LUCK"
console.log(grade);


// boolean 
let isAdmin=true;
let isLoggedIn = false;
if(isAdmin||isLoggedIn){
    console.log("Access Granted");
}else{
    console.log("Access denied");
}


let a =0 ;
if(a){
    console.log("Truthy");
}else{
    console.log("Falsy");
}


let b = 5 ;
b++;
console.log(b);

let d = 5 ;
++d;
console.log(d);

let x = 3 ;
let y = x++;

console.log(x,y);


//
let z = 3 ;
let c = ++z;

console.log(z,c);

//
let m=10;
console.log(m--); //10
console.log(m); //9


let n=5;
let result = n++ + ++n;
console.log(result); // 12


// 
let count = 5;
if(count-- === 5){
    console.log("Matched");
}else{
     console.log("not Matched");
}