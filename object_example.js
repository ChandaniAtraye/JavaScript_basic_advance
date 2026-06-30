// Q1. Create an object for a student with name, age and isEnrolled.
let student = {
    name:"Harsh",
    age:24,
    isEnrolled:true,
};
console.log(student);

//Q2. can an object key be a number or boolean ? Try this

const obj4 = {
    true:"yes",
    42:"answer"
};
console.log(obj4[true]);

//Access the value of "first-name" from this object:
const user = {
    "first-name":"Harsh",
}
console.log(user["first-name"]);

// Given a dynamic key let key = "age",how will you access user[key] ?
let key = 'age';
const user1 = {
    age :26,
   
};

console.log(user1[key]);

// destructure the city and lat from the location object
const locations ={
    city:"pune",
    coordinates:{
        lat:32.4,
        lng:42.5,
    },
};


let {city} = locations;
let{lat} =locations.coordinates;

// destrucutre the kay "first-name" as a varibale called firstname
const user3 ={
    "first-name":"harsha"
};


let {"first-name":firstName} = user3



// use for-in to log all keys in this object:
const course ={
    title:"javascript",
    duration:"4 weeks"
};

for(let key in course){
    console.log(key);
}


// use object.entries() to print all key-value pairs as:
//title:js
//duration:4 weeks
Object.entries(course).forEach(function(val){
    console.log(val[0] + ":" + val[1]);
});


// 

