// window key word example-

// let h1 = document.querySelector("h1");
// window.addEventListener("keydown",function(det){
//     if(det.key === " "){
//         h1.textContent = "SPC"
        
//     }else{
//          h1.textContent = det.key
//     }
// });



// pdf file example 
let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click",function(){
    fileinp.click()
});

fileinp.addEventListener("change",function(det){
    btn.textContent = det.target?.files[0].name;
});






