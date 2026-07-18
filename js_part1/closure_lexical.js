//pune & impure functions - pending


// Closures = when a function remembers its parent scope, even after the parent has finished.
// ak function jo return kare ek aur function aur return hone wala function hamesha use karega parent function ka koi variable


function abcd(){
    let a=12;
    return function(){
        console.log(a);
    }
}



// lexical scoping = ( physical scoping ) lexical scoping is the js rule where a function can access variables from its own scope and its outer scopes based on where the function is defined in the source code.

function abcd(){
    let a =12;
    function defg(){
        let b= 26;
        function ghij(){
            let c= 31;
        }
    }
}