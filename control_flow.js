// write a function getGrade(score) that:
// takes a students's marks (0 to 100)
// returns the grade based on this logic
//90-100 A+
//80-89 A
// 70-79 B
//60 -69 C
//33-59 D
// 0-32 Fail
//Anything else Invalid marks 


// using if else
// let marks=111;

//     if(marks>=90){
//         console.log("A+");
//     }else if(marks>=80){
//         console.log("A");
//     }else if(marks>=70){
//         console.log("B");
//     }else if(marks>=60){
//         console.log("C");
//     } else if(marks>=33){
//         console.log("D");
//     }else if(marks>=0){
//         console.log("FAILED");
//     }else{
//         console.log("Invalid marks");
//     }     


    // using return function

    // function getGrade(score){
    //     if(score>=90 && score <=100){
    //         return 'A+';
    //     }else if(score>=80 && score<=89){
    //         return 'A';
    //     }else if(score>=70 && score<=79){
    //         return 'B';
    //     }else if(score>=60 && score<=69){
    //         return 'C';
    //     }else if(score>=33 && score<=59){
    //         return 'D';
    //     }else if(score>=0 && score<=32){
    //         return 'Fail';
    //     }else{
    //         return 'INVALID SCORE';
    //     }
    // }

    // console.log(getGrade(111));


    //using early return

    function getGrade(score){
        if(score>=90 && score <=100) return 'A+';
        if(score>=80 && score<=90) return 'A';
        if(score>=70 && score<=79)  return 'B';
        if(score>=60 && score<=69) return 'C';
        if(score>=33 && score<=59)  return 'D';
        if(score>=0 && score<=32) return 'FAIL';
        return 'Invalid score';
    }

    console.log(getGrade(35));



    // Rock paper scissors logic
    function rps(user,computer){
        if(user===computer) return 'draw';

        if(user=="rock" && computer == "scissor") return "user wins";
        if(user==="scissor" && computer === "paper") return 'user wins';
        if(user==="paper" && computer === "rock") return 'user wins';
        return "computer wins"
    }
      console.log(rps("rock","paper"));
        


