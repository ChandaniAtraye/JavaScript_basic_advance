//evenet means koi action huwa 
// event listener ka maltb hai aapne koi action ka reaction



// COMMON EVENTS - click,input,change,submit,mouseover,keyup


// 1.click 
// process - select the paragraph first
// realise what will happen - click hoga then green hoga
let p = document.querySelector("p");

// p.addEventListener("click",function(){         // for single click
//     p.style.color = "green";
// });

function dblclick(){                              // for double click
    p.style.color = "lightgreen";
};
p.addEventListener("dblclick",dblclick);

p.removeEventListener("dblclick",dblclick);

// 2.input - example of input event
let inp = document.querySelector("input");

inp.addEventListener("input",function(dets){
    if(dets.data !== null){
        console.log(dets.data);
    }
});

// 3. change - tab chlta jab apka koi input select ya textarea me koi change ho jaye 


let sel = document.querySelector("select");
let device = document.querySelector("#deviceselection");

sel.addEventListener("change",function(dets){
    device.textContent = `${dets.target.value} Device Selected`;
    console.log(dets.target.value);
});




// 4. submit 