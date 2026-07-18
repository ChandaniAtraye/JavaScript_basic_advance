// first class function -> functions ko value ki tarah treat kiya jata hai

function abd(val) {
    val();

}
abd(function () {
    console.log("Hey");
});



// high order function --> wo function hota hai jo ki return kare ak function ya fhir accept kare ak function apne paramaeter me 

function abcd(val) {  //hof jo function ko parameter me accept kar raha hai 

}
abcd(function () {

})


//or 

function abcde() {
    return function () {  //  function return kar raha hai
        console.log("hwiohoiw");
    }
}
abcde()()


// another example
function shout(msg) {
    return msg.toUpperCase ();
}
function processMessage(fn) {
    console.log(fn("hello"));
}
processMessage(shout);

