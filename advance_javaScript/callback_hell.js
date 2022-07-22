                                          //callback hell
// callback hell is an anti-pattern with multiple nested callbacks with makes code hard to read and debug when dealing with asynchronous logic.
// async1(function(){
//     async2(function(){
//         async3(function(){
//             async4(function(){
//                 ....
//             });
//         });
//     });
// });
// to over come this types of callback hell problem we use promise 


// API 
// 1: 2s stydent roll not
// 2: 2s 2nd name and age
// 3: 2s gender 

// const getRollNo = () => {
//     setTimeout( () => {
//         console.log('API getting rollno');
//         let roll_no = [1,2,3,4,5];
//         console.log(roll_no);
//         setTimeout( (rollno) => {
//             const biodata = {
//                 name : 'Palash',
//                 age : 23
//             }
//             console.log(`My rollno is ${rollno}. My name is ${biodata.name} and i am ${biodata.age} years old`);
//             setTimeout( () => {
//                 biodata.gender = 'male';
//                 console.log(`My rollno is ${rollno}. My name is ${biodata.name} and i am ${biodata.age} years old. I am an alpha ${biodata.gender}`);
//             }, 2000, biodata.name)
//         }, 2000, roll_no[1])
//     }, 2000);
// }
// getRollNo();