                                   //template literals(template string)
//es5
// console.log("My name is vinod." + " My age is 26.");
// let firstName = "Palash";
// let lastName = "Patil";
// console.log("My name is " + firstName + ". My last name is " + lastName + ".");


//es6
// console.log(`My name is vinod. My age is 26.`);
// console.log(`My name is ${firstName}. My last name is ${lastName}.`);

//es6 strings.METHODS
// console.log(`${firstName}`.startsWith('P'));
// console.log(`${firstName}`.endsWith('h'));
// console.log(`${firstName}`.includes('Palash'));
// console.log(`${firstName} ${lastName} \n`.repeat(10));

                                    //object destructuring
// const bioData = {
//       name : "palash",
//       age : 26,
//       deg : "BE",
//       hobb : {
//         first : "playing",
//         second : "youtude video"
//       }
// }
// let {name,age,deg,hobb} = bioData;
// console.log(`my name is ${name}. My age is ${age} and My highest qual. is ${deg}.`);



                                    //default parameter
// function mult(a,b){
//     b = (typeof b !== 'undefined') ? b : 2
//     console.log(a*b);
// }
// mult(4);

// now es6
// function mult(a,b=4){
//     console.log(a*b);
// }
// mult(4);
// const mult = (a,b=4) => {
//     console.log(`the mult of two no. is ${a*b}`);
// }
// mult(4);


                                    //rest parameter
//es5
// function sum(a,b,c,d,e,f){
//     console.log(a+b+c+d+e+f);
// }
// sum(1,2,3,4,5,6);

//es6
// function sum(...inputs){
//     console.log(...inputs);
//     let total = 0;
//     for(let i of inputs){
//         total += i;
//     }
//     console.log(total);
// }
// sum(1,2,3,4,5,6);


                                    //spread operator
//es5
// function sum(a,b,c){
//     console.log(a+b+c);
// }
// // sum(1,2,3);

// var  arrVal = [5,2,3];
// sum.apply(null, arrVal);

//es6
// function sum(a,b,c){
//     console.log(a+b+c);
// }

// var  arrVal = [5,2,3];
// console.log(...arrVal);
// sum(...arrVal);

                                    //replace concat()
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];
// arr1 = arr1.concat(arr2);
// arr1 = [...arr1,...arr2,...arr3];
// console.log(arr1);

                                    //replace copy()
// let arrc1 = [1,2,3];
// let arrc2 = [6,7,8];
// let arrc2 = arrc1;
// arrc2.push(4,5);

// let arrc3 = [...arrc1,4,5,...arrc2,9];
// console.log(arrc3);
// console.log(arrc1);


                                    //Math object in es6
// sign()
// trunc()
// let number = -5.956;
// console.log(Math.sign(number));

// console.log(Math.trunc(number));
// console.log(Math.floor(number));

                                    //exponentiation operator in es6
//The exponentiation operator (**) raies the first operand to the power of the second operand.
//x**y produces the same result as Math.pow(x,y):

// let a = 5; let b = 2;
// console.log(a**b);

                                    //Number & Global Methods in Es6

// The isFinite() method 
// The global isFinite() method return false if the arguments is Infinity or NaN

// The isNaN method 
// the global isNaN method return true if the argument is NaN otherwise it return false

// the Number.isInteger method 
// the Number.isInteger method return true if the argument is an Integer

// let num = Infinity;
// console.log(Number.isFinite(num));
// console.log(isNaN(num));
// console.log(Number.isInteger(num));

//this is synchronous
// const func2 = () => {
//     console.log('func2 is starting');
// }
// const func1 = () => {
//     console.log('func1 is starting');
//     func2();
//     console.log('func1 is ending');
// }
// func1();



//this is asynchronous
// const func2 = () => {
//     setTimeout( () => {
//         console.log('func2 is starting');
//     }, 3000);
// }
// const func1 = () => {
//     console.log('func1 is starting');
//     func2();
//     console.log('func1 is ending');
// }
// func1();