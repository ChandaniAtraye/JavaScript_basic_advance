// object - 
let obj = {
    name :"Chandani",
    age:24,
    City: "Pune"
};

let aa = "name";
// to access - obj.name or obj['name']

console.log(obj.age); // 24

console.log(obj.City); // pune   or
console.log(obj["City"]); // pune

console.log(obj.aa); // undefined because it will find aa in obj 
console.log(obj[aa]); // chandani it will return because it will convert aa to name  


// nesting in deep access

let user = {
    name:"Vaibhav",
    address : {
        city :"Nashik",
        pincode:410504,
        location:{
            lat:23.02,
            lng:77.8,
        },
    },
};

console.log(user.address.location.lng);
console.log(user.address.city);



// object destructuring
let {lat,lng} = user.address.location;

// looping : for-in,object.keys,object.entries

// for- in
let Emp = {
    name :"Chandani",
    age:24,
    City:"Mumbai"
};

for(let key in Emp){
    console.log(key,Emp[key]);
}


//object.keys - it gives arrays of keys 
console.log(Object.keys(Emp));

//object.entries - array of array
console.log(Object.entries(Emp));



// Copying objects : spread,Object.assign,deep clone 

// let Emp2 = {...Emp};


//object.assign - 

let Emp2 = Object.assign({price: Infinity},Emp);


// Deep cloning - real copy - 

let Employee = {
    name :"Chandani",
    age:24,
    addresses: {
        city : "Pune",
    },
};

let Employee2 = JSON.parse(JSON.stringify(Employee));


//Optional chaining -- error nahi dega
// Employee?.address?.city;

// and computed properties - 
let role = "Admin";
let Employees = {
    name :"Chandani",
    age:24,
    addresses: {
        city : "Pune",
    },
    [role] : "Chandani",
};


