                                       // pure function 
// function add(x){
//     console.log(x+1);
//     return x+1
// }
// add(10);




                                      // impure function
// var x = 10;
// function add(){
//     console.log(x);
//     x++;
// }
// add();
// add();
// add();
// add();


// let numberArray = [];
// // impure 
// const impureAddNumber = (number) => numberArray.push(number);
// // pure
// const pureAddNumber = (number) => (argNumberArray) => argNumberArray.concat([number]);

// console.log(impureAddNumber(6));
// console.log(numberArray);

// console.log(pureAddNumber(7)(numberArray));
// console.log(numberArray);


function calculate(sum){
    return (sum + 0.5);
}

console.log(calculate(2));
console.log(calculate(5));



