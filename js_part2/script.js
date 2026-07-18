// select element by getElementById,getElementsByClass,queryselector,queryselectorAll


let h1 = document.getElementById("head")
h1.textContent ="Hello chandani"
console.dir(h1);

// Attribute manipulation 

//setAttribute,getAttribute,removeAttribute
let a = document.querySelector("a");
a.setAttribute("href","https://www.flipkart.com"); // to set value of attribute

a.removeAttribute("href"); // to remove attribute




// createElement,prepend,appendChild,removeChild
let p = document.createElement("p");
p.textContent = "April";
document.body.append(p); //  or document.querySelector("body").prepend(p)

// to remove element 
let h2 = document.querySelector("h2");
h2.remove();


// css updates
let h3 = document.querySelector("h3");
// h3.style.color ="red";
// h3.style.backgroundColor = "cyan";
// h3.style.fontFamily = "cursive";
// h3.style.textTransform= "Uppercase";


// to add class
h3.classList.add("hui");

//to remove class
h3.classList.remove("hui");

// toggle = class lagi hai to hata dega ,hati hai to laga denga
h3.classList.toggle("hui");