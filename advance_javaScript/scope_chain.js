// scope chain
// the scope chain is used to resolve the value of variable names in js.

// scope chain in js is lexically define, which means that we can see what the scope chain will be by looking at the code.

// at the top the scope chain is the global scope, which is the window object the browser.

// lexical scoping: a function that is lexically within another function get access to the scope of the outer function.
// {inner function can get access to their parent function variable but the vice-varsa is not true}

// ex:.
var a ="hello guys..";

function first(){
    var b = "How are you?...";
    second();

    function second(){
        var c = "Myself Palash Patil";
        console.log(a+b+c);
    }
}
first();

