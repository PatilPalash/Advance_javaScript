                                          //call() method
//the call()method is a predefined javascript method.
//with call(),an object can use a method belonging to another object.

// const youtuber1 = {
//     name: "ThapaTechnical",
//     content:"Programming",
//     feature:function(rating,support){
//         console.log(`very friendly way of teaching. ${this.name} is my fav ${this.content} channel. 
//         I will love to give ${rating} star. Please ${support} ${this.name} channel.`);
//     }
// }
// youtuber1.feature(5,"subscriber");

// const youtuber2 = {
//      name:"kuchha bhi",
//      content:"programing&vlog"
// }
// youtuber1.feature.call(youtuber2,5,"subscriber");


                                          //apply() method 
//the apply()method is similar to the call()method
//the call()method takes arguments separately.
//the apply() method takes arguments as an array

// youtuber1.feature.apply(youtuber2,[5,"subscriber"]);

// let max = Math.max(1,2,3);
// console.log(max);

// let arrMax = Math.max.apply(null,[1,2,3,4,5,6]);
// console.log(arrMax);

                                          //bind() method
// by using this method we can bind an object to a common function, 
// so that the function gives different result when its need.

// const youtuber = {
//     name: "palashprograming",
//     content: "programming",
//     feature: function(){
//         console.log(`My fav youtuber name is ${this.name}. He made videos on ${this}`)
//     }
// }
// youtuber.feature();

// let youtuberFun = youtuber.feature;
// youtuberFun();

// let youtuberFun2 = youtuber.feature.bind(youtuber);
// youtuberFun2();

// the bind() method takes an object as an first argument and cretes a new function
// const youtuber = {
//     name: "palashprograming",
//     content: "programming",
// }
// const youtuber1 = {
//     name: "palashprograming",
//     content: "programming",
// }
// const youtuber2 = {
//     name: "palashprograming",
//     content: "programming",
// }
// function feature(rating){
//     console.log(`My fav youtuber name is ${this.name}. He made videos on ${this.content} topics. i will love to give ${rating} star.`)
// }
// let you1 = feature.bind(youtuber);
// you1(5);
// let you2 = feature.bind(youtuber1);
// you2(5);
// let you3 = feature.bind(youtuber2);
// you3(5);