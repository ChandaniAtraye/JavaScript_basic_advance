//print numbers from 1 to 10
for(let i=1; i<11; i++){
    console.log(i);
}

//print 10 to 1
for(let i=10; i>0; i--){
    console.log(i);
}

//print all even number from 1 to 20
for(let i=1; i<21; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// find the sum of number from 1 to 10
let sum = 0;
for(let i=1; i<11; i++){
    sum = sum + i ;
}
console.log(sum);

// print the multiple table
for(let i=5; i<=5*10; i = i+5 ){
    console.log(i);

}

//OR
for(let i=1; i<=10;i++){
    console.log(i*8);
}


// count from 1 to 50 and print only numbers divisible by 5

for(let i = 1; i<=51; i++){
    if(i%5 === 0){
    console.log(i);
    }
   
}


//print a square pattern

for(let i = 1; i<=5; i++){
    let pattern = "";
    for(let j=1;j<=5;j++){
        pattern = pattern + "*";
    }
    console.log(pattern);
} 


//new pattern
for(let i=1; i<=5; i++){
  let pattern = "";
   for(let j=1; j<=i;j++){
    pattern= pattern + j ;
   
   }
    console.log(pattern);
} 

//
for(let i=5; i>=1; i--){
    let pattern = "";
    for(let j=1; j<=i; j++){
        pattern = pattern + "*";
    }
    console.log(pattern);
}