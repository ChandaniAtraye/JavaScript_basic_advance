let box = document.querySelector("#box");
//mouseover
// box.addEventListener("mouseover",function(){
//     box.style.backgroundColor = "yellow";
// });

// //mouseout
// box.addEventListener("mouseout",function(){
//     box.style.backgroundColor = "red";
// });


//mousemove
window.addEventListener("mousemove",function(det){
    box.style.top = det.clientY + "px";
    box.style.left = det.clientX + "px";
})