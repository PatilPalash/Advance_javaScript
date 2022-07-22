// execution context
// the enviroment in which our code is executed and is evaluated.

// js engine creates the global execution context before it start to execute any code.

// variable, and function that is not inside any function. a new execution context gets created every time a function is execution

// the global execution conetext just like any other execution context, except that it gets created by defaault.
// it is associated with Global Object. Which means a window object. Ex.:this === window, name == window.name

// Execution Stack
// Execution Stack, also know as "call stack" is a stack with a LIFO(last in first out) structure,which is used to store all the execution context created during the code execution.


// ex:-

var globalEC = "added";

function a(){
    var fa = "2nd function o/p1";
    console.log(fa);
    debugger;
    b();
    console.log("let's see when i will be on console.");
}
function b(){
    debugger;
    console.log("2nd function o/p2");
    c();
}
function c(){
    debugger;
    console.log("3red function o/p3");
    a();
}
