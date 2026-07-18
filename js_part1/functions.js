
// Types of writing functions
//1. function declaration or functon statement
function abcd(){
    console.log("Hello");
};

abcd();

//2. function expression - function stored in variable
let hny = function(){
    console.log("Happy New Year");
};

hny();

//3. Arrow functions
let abcde = ()=>{
    console.log("Morning");
};

abcde();

//4 iife (immediatley invoked function expression - turant chalega , ye call ho chuka hai)
(function(){
    console.log("hddjoi");
})();




//Parameters and arguments
// parameters are variable define in function
// arguments are values we passed when calling function
// parameter = v1,v2     arguments = 2,3
let fnc = function(v1,v2){
    console.log(`Addition is : ${v1+v2}`);
};


fnc(2,3);
fnc(21,9);
