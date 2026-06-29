// Q1. what will log
greet();  // hello

function greet(){
    console.log("hello");
}


//Q2. convert the function in arrow function 
// function multiply(a,b){
//     return a*b;
// }

let multiply=(a,b) => {
    return a*b;
}

console.log(multiply(5,3));

// Q3. predit the output 

function sayHi(name ="Guest"){
    console.log("Hi", name);
}

sayHi();   //Hi Guest


//Q4. Use rest parameter to accept any number of scores and return the total

function getScore(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val; 
    });
    return total;
}

console.log(getScore(10,20,30,40));


// Q5. fix this function using early return 

// function checkAge(age){
//     if(age<18){
//         console.log("Too Young");
//     }else{
//         console.log("Allowed");
//     }
// }


function checkAge(age){
    if(age < 18) return "Too young";
    return "Allowed";
}

console.log(checkAge(18));


// Q6. whats the return value of this function
// if nothing return it will retun undefined

function f(){
    return;
}


console.log(f()); // undefined

// Q7. can you assign a function to a variable and then call it ? show how ?

let sayHello = function(){
    console.log("Hello");
}

sayHello();


// Q8. pass a function into another function and execute it inside.


function addition(val){
    val();
}

addition(function add(){
    console.log("Hey");
    })


  //  Q9. convert the function into a pure function
  let total = 0;
  function addToTotal(num){
    let newTotal = total;
    newTotal+= num ;
  }

// Q10. what will be log  // closures examples
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
const counter = outer();
 counter();
 counter();



 // Q11. convert this normal function into iife
//  function init(){
//     console.log("initialized");
//  }


(function init(){
    console.log("initialized");
 })();

 // IMPORTANT QUESTIONS 
 //Q12. Write a BMI calculator

 function bmi(weight,height){
    return weight /(height*height);
 }
 console.log(bmi(40,1.5).toFixed(2));


 // Q13. create a reusable discount calculator (HOF)
 function discountCalculator(discount){
    return function(price){
        return price-price * (discount/100);
    }
 }
  let ten = discountCalculator(10);
  let twenty = discountCalculator(20);
  console.log(ten(1200));
  console.log(twenty(2400));

  //Q14. Build a counter using closure
  function counter1(){
    let count = 0;
    return function(){
       count++;
       return count;
    };
  }

  let c = counter1();
  console.log(c());
  console.log(c());
 

  //Q15. create a pure function to transform  a value 
  function double(val){
        return val * 2;
  }
  console.log(double(5));

  //Q16. Use IIFE to isolate variables / private vaiable create kar skte 
  (function() {
    const password = "secret password";
    console.log(password);

  })();
   console.log(password);