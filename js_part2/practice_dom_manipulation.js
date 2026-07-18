// DOM MANIPULATION QS.

// what does createElement() do , what returned.

let h4 = document.createElement("h4");
h4.textContent = "Hey kaise ho";
document.body.prepend(h4);

// can you remove an element using removeChild()

// document.querySelector(" div button").remove();



// create a new list item <li>New Task </li> and add it to the end of a <ul>.
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "Lichi";
ul.appendChild(li);


// create a new image element with a placeholder source and add it at the top of a div.

let img = document.createElement("img");
img.setAttribute("src","https://s.yimg.com/fz/api/res/1.2/fKGDMbQb.CXKtRJE8NbeHA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/65/18/05/6518055f9fccda749a6285ac25bb4a01.jpg");
img.classList.add("placeholder");
document.querySelector("div").prepend(img);


// select the first item in a list and delete it from the DOM.

let ulList = document.querySelector("ul");
let liList = document.querySelector("li");
ulList.removeChild(liList);
// liList[0].remove() // if want to remove particular item



//how do you change the background color of an element 
let h2 = document.querySelector("h2");
h2.style.backgroundColor = "red";

let bgcolorchnage = document.querySelector("h1");
bgcolorchnage.classList.add("heading");

let uls = document.querySelectorAll("li");
uls[1].classList.add("list");


// diffrence between .classList.add() and .classList.toggle()

//Add a highlight class to every even item in a list

let li1 = document.querySelectorAll("ul li:nth-child(2n)");
li1.forEach(function(val){
    val.classList.add("highlight");
})

//set the fpnt size of all <p> elements tp 18px using style.

let para = document.querySelectorAll("p");

para.forEach(function(val){
    val.style.fontSize = "8px";
})