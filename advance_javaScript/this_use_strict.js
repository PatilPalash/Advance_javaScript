//   USE STRICT
// it's a new feature of ECMAScript 5.
// the statement "use strict"; instructs the browser to use the strict mode. which is a reduced and safer feature set of js.

// what is this in js 
// the js this keyword refer to the object it belongs to 

// it has different values depending on where it is used:

// alone, this refers to the global object. 

//in a regular function, this refers to the global object.

// in a method, this refers to the to owner object.(means when we create object in that we declared function and that this refers to object like this.name)

// in a function, in strict mode,this is undefined.

// ex:.

const palash = {
    name: "Palash Patil",
    qualif: "BE",
    sum: function(){
        console.log(this.name);
        var add = 2+2;
        console.log("sum of two no. is "+ add);
        console.log(this);

        function child(){
            var name = "palash";
            console.log("child method name:  "+name);
            console.log(this);
        }
        child();
    }
}
palash.sum();