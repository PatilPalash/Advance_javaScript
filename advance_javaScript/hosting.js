// hosting is a js mechanism where  variable and function declaration are  moved to the top of their scope before  the code execution
//function hosting
sum(50,50);

function sum(a,b){
    add =a+b;
    console.log(add);
}

//variable hosting
console.log(a);
var a;
a=10;

//ex:
var b = 10;
console.log(b);
var b = 20;
//ex:
console.log("I am a " + job);
var job = "Web Developer";
console.log("I am a " + job);

function WhoAmI(){
    console.log("I am a " + job);
    var job = "Full Stack";
    console.log("I am a " + job);
}
WhoAmI();


// function somemethod(){
//     console.log(a);
//     console.log(b);

// var a = 2;
// let b = 1;
// }

// let a = null;
// let b ;
 
// console.log(a==b);
// console.log(a===b);