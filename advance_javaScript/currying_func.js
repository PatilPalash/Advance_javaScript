                                             //function currying
// function getSum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return function(e){
//                     //  console.log(a + b + c + d + e);
//                     return a + b + c + d + e;
//                 }
//             }        
//         }
//     }
// }
// getSum(5)(4)(3)(2)(1);
// using arrow function

// const getSum = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;
// const total = getSum(5)(4)(3)(2)(1);
// console.log(total);
