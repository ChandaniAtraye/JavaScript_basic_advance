//1. print numbers from 1 to 10 using a for loop
for(let i=1; i<11; i++){
    console.log(i);
}


//2 . Print numbers from 10 to 1 using a while loop

let i = 10;
while(i>0){
    console.log(i);
    i--;
}


// 3. print even numbers from 1 to 20 using a for loop

for(let i=2; i<21; i=i+2){
    console.log(i);
}

//OR
for(let i=1; i<21; i++){
   if(i%2 === 0){
     console.log(i);
   }
}




// 4. print odd numbers from 1 to 15 using a while loop

let j = 1;
while(j<16){
    console.log(j);
    j=j+2;
}

//OR

let m = 1;
while(m<16){
    if(m%2===1){
        console.log(m);
    }
    m++;
}


// 5.print the multiplication table 
for(let i=5; i<=50; i=i+5){
    console.log(i);
}

//OR
for(let i=1; i<11; i++){
    console.log(`5 * ${i} =  ${i*5}`);
}



//6.find the sum of numbers from 1 to 100 using a loop

let sum=0;
for(let i=1; i<101; i++){
    sum = sum + i;
}
console.log(sum);


//7.print all numbers between 1 to 50 that are divisible by 3
 for(let i=3; i<=50;i=i+3){
    console.log(i);
 }

 //OR
 for(let i=1; i<51; i++){
   if(i%3 === 0){
     console.log(i);
   }
 }


//8. Ask the user for a number and print whether each number from 1 to that number is even or odd.
//  let val = prompt("Enter a number");

//  for(let i=1; i<=val; i++){
//     if(i%2 === 0){
//     console.log(`${i} is Even`);
//  }else{
//     console.log(`${i} is Odd`);
//  }
//  }


 //9. Count how many numbers between 1 to 100 are divisible by both 3 and 5

 for(let i=1; i<101; i++ ){
    if(i % 3 === 0 && i % 5 === 0){
       console.log(i);
    }
    
 }



 // BREAK AND CONTINUE QUESTIONS
 //10. Stop at first multiple of 7
 // write a loop from 1 to 100 that:
  // prints each number
  //stops completely when it finds the first number divisible by 7


  for(let i=1; i<101; i++){
    console.log(i);
    if(i%7===0){
        break;
    }
    
  }


  //11. Skip Multiple of 3
  // write a loop from 1 to 20 that :
   // Skips numbers divisible by 3
   // prints all others

  //Use continue
  // Expected output :
  //1 2 4 5 7 8 10 11.....(no 3,6,9,etc.should be skip)  


  for(let i=1; i<21; i++){
    if(i % 3 === 0){
        continue;
    }
    console.log(i);
  }



  //12. Print first 5 odd numbers only
  //write a loop from 1 to 100 that:
  //prints only 5 odd numbers
  //then stops the loop

  //Use both if ,continue ,and a counter + break
  //expected output
  //1 3 5 7 9
  let count = 0;
  for(let i=1; i<101; i++){
    if(i%2===1){
        count++;
        console.log(i);
    } 
    if(count === 5) break;
   
  }
 
