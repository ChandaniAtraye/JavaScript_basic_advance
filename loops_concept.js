//Loops
//for loop - (start; end; change)
// 1 to 100
for(let i=1; i<101; i++){
    console.log();
}


//while loop
let i=1;
while(i<32){
    console.log();
    i++;
}


//do while

let j=1;
do{
    console.log(j);
    j++;
}
while(j<10)


//break - loop rok dijiye
for(let i=1; i<101; i++){
    console.log(i);
    if(i===30){
        break;
    }
} 

//continue - agla number pe jaiye 


for(let i=1; i<101; i++){
    if(i===32){
        continue;   // agle no.pe jaiye
    }
    console.log(i);
    
}