//1. what is Dom ? How does it represent the HTML structure 
// 2. Name the types of nodes in the DOM tree.
// 3.difference between element node and text node
//4.difference between getElementById & querySelector



// 5.what does getElementsByClassName return ? Is it an array
// ANSWER - getElementsByClassName returns an HTML collection,which is looks like an array
// because it has indexes and a length property,but it is not a real js array.

//6. use querySelectorAll to select all buttons with class "buy-now"

let b = document.querySelectorAll(".buy-now");
console.log(b);


// select the heading of a page by ID and change its text to "Welcome to sheryians!

let h1 = document.getElementById("heading");
h1.textContent = "Welcome to sheriyans";


// select all <li> elements and print their text using a loop.

let list = document.querySelectorAll("li");
// list.forEach(function(val){
//     console.log(val.textContent);
// })


//using for loop
for(let i=0; i<list.length; i++ ){
    console.log(list[i].textContent);
}


// select a paragraph and replace its content with : <b> Updated</b> by javascript

let para = document.querySelector("p");
para.innerHTML = "<b>Updated</b> by JavaScript";
console.log(para);

// how do you get an src of an image using javascript
let imageSrc = document.querySelector("img");
console.log(imageSrc.src); // first way of getting image src
console.log(imageSrc.getAttribute("src")); // second way 

// what does set attribute do - used to set value of attribute 

console.log(imageSrc.setAttribute("src","https://s.yimg.com/fz/api/res/1.2/B91fOiwpxgzZRFNnkZ0Vcg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/c5/e6/41/c5e641b2186ed6614cdac4cffea90565.jpg"));


// select a link and update its href to point to https://sheryians.com.

let a = document.querySelector("a");
// a.setAttribute("href","https://sheryians.com"); //or 
a.href = "https://www.shreyians.com";
console.log(a.href);


// add a  title attribute to a div dynamically.

let div = document.querySelector("div");
div.setAttribute("title","some info");


// remove the disabled attribute button 
let btn = document.querySelector("button");
btn.removeAttribute("disabled");









