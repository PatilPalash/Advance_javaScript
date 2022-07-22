                                       //Async/await

// There a special syntax to work with Promise in a more comfortable fashion,
// called "async/await". it surprisingly easy to understand and use.Promise

// The word "async" before a function means one simple thing: a function always returns a Promise.all

// so the async keyword is added to functions to tell them to return a promise rather than
// directly returing the value.

// we can use await when calling any function that return a promise, including web API functions. 

// The keyword await makes js wait until that promise settels and returns its result.

// const pobj1 = new Promise( (reslove, reject) => {
//        setTimeout( () => {
//         let roll_no = [1,2,3,4,5];
//         reslove(roll_no);
//         // reject('Error while communicating');
//        }, 2000);
// });

// const getBiodata = (indexdata) => {
//     return new Promise( (reslove, reject) => {
//         setTimeout( (indexdata) => {
//             let biodata = {
//                 name : 'palash',
//                 age : 22
//             }
//             reslove(`My roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} year old.`)
//         }, 2000, indexdata)
//     })
// }

//...promise consume
// pobj1.then( (rollno) => {
//     console.log(rollno);
//     return getBiodata(rollno[1]);
// }).then( (kuchbhi) => {
//     console.log(kuchbhi);
//     })
// .catch( (error) => {
//     console.log(error);
// })

                                       //Error Handling in js using try catch in promise async/await
// async function getData(){
//     try{
//         const rollnodata = await pobj1;
//     console.log(rollnodata);

//     const biodatas = await getBiodata(rollnodata[1]);
//     console.log(biodatas);

//     return biodatas;
//     }catch(error){
//         console.log(`The Error: ${error}`);
//     }
// }
// const getname = getData().then( (myname) => {
//     console.log(myname);
// })
// getData();