                                //callback 
// A callback function is function pass into another function as an argument. 
// This function invokes inside the outer function to complete an action.



// Output; // Second function called // First function called As observed from the output, 
// javascript didn't wait for the response of the first function and the remaining code block got executed. 
// So callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.


// const funA = () => {
//     setTimeout(function(){
//         console.log('welcome funA');
//     }, 5000)
    
// }
// const funB = () => {
//     console.log('welcome funb');
// }
// funA();
// funB();




// const funA = () => {
//     setTimeout(function(){
//         console.log('welcome funA');
        //    funB();
//     }, 5000)
    
// }
// const funB = () => {
//     console.log('welcome funb');
// }
// funA();


// why do we used 
// the callback are need because javascript is an event driven language.
// that means instead of waiting for a response js will keep executing while listening for onther events.
// let finish the work for firstfunction after that only secondfunction is run  

// const perOne = (friend, callfrnd) => {
// console.log('i am busy right now. i am talking to ' + friend + "i will call you back");
// callfrnd();
// }
// const perTwo = () => {
//     console.log('hey what up. i call back you can you see')
// }
// perOne("Palash", perTwo);


// function callbackFunction(name){
//   console.log(`Hello ${name}`);
// }
// function outerFunction(callback){
//   let name = prompt("Please enter your name.");
//   callback(name);
// }
// outerFunction(callbackFunction);