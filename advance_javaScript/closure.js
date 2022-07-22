                                    //Closure
//closure is the action that is inner function can have access to the outer function 
//variable/parameter as well as all the global variables.
// or
//A closure is the combination of a function and the lexical enviroment within that function was declared.

// [The return function function does not executed the inner function - function is executed only when followed by(),
//  but rather the return statement return the entire body of the function.]

                                 // first example
// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//         let sum = a + b;
//         console.log(`the sum of two no. is ${sum}.`);
//     }
//     // innerFun();
//     return innerFun;
// }
// // outerFun(5);
// let inner = outerFun(5);
// console.dir(inner);
// inner();

                                 //second example
// function Welcome(name){
//     var greetingInfo = function(message){
//         // console.log(message + " " + name );
//         console.log(`${message} ${name}`);
//     }
//     return greetingInfo;
// }
// var myFunction = Welcome("Palash");
// myFunction("Welcome ");
// myFunction("Hello Mr. ");

                                    // thrid example
const add = (function () {
    let counter = 0;
    return function(){
        counter += 1;
        return counter;
    }
})();
add();
add();
add();




// const interviewQuestions = (name) => {
//     return function(topic){
//         if(name === "Kalash"){
//             console.log(`Hi, ${name}. plz explain what is ${topic}.`);
//         }else if(name === "Palash"){
//             console.log(`Hi, ${name}. plz explain what is ${topic}.`);
//         }else if(name === "Patil"){
//             console.log(`Hi, ${name}. plz explain what is ${topic}.`);
//         }else{
//             console.log("Welcome to TT company.");
//         }
//     }
// }

// const candidates1 = interviewQuestions("Kalash");
// candidates('UI');

// const candidates2 = interviewQuestions("Palash");
// candidates('React');

// interviewQuestions("Kalash")("UI");
// interviewQuestions("Palash")("React");
// interviewQuestions("Patil")("UI/UX");