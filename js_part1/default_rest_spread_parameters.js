//default parameter allows us to assign default value to function paramaeter if no argument is passed.

let num = function(v1=1,v2=2){
    console.log(v1,v2);
}

num();



//Rest parameter - jab arguments kai sare ho to hume utne hi paramatere banane padenge , issey bachne ke liye hum rest ka use karte hai .agar ... function ke parameter space mein lage to wo rest operator hai .and agar wo arrays and object me lage to wo spread operator hai.
let list = function(...val){
    console.log(val);
}

list(1,2,3,4,5,6,7,8,9,0);


// return values - jaha se aaye ho wahi pe dal do
function abcd(v){
    return 12 + v;
}

let val = abcd(23);
console.log(val);


//  and early returns - exiting a function before the end if a condition is met 
function user(age){
    if(age>=18) return "adult";
    return "not adult";  
    
}

console.log(user(70));