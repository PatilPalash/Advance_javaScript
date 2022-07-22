                                             // Promise
// a promise is an object that may produce a single value some 
// time in the future with either a reslove value or a reason that it not reslove
//  3 stages

// task 
// aap muja promise ki karo kal 10am me call karoge
// 1: pending
// 2: reslove
// 3: reject

//executor
//promise produce
// const pobj1 = new Promise( (reslove, reject) => {
//        setTimeout( () => {
//         let roll_no = [1,2,3,4,5];
//         reslove(roll_no);
//         // reject('Error while communicating');
//        }, 2000);
// });

const getBiodata = (indexdata) => {
    return new Promise( (reslove, reject) => {
        setTimeout( (indexdata) => {
            let biodata = {
                name : 'palash',
                age : 23
            }
            reslove(`My roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} year old.`)
        }, 2000, indexdata)
    })
}

//...promise consume
pobj1.then( (rollno) => {
    console.log(rollno);
    return getBiodata(rollno[1]);
}).then( (kuchbhi) => {
    console.log(kuchbhi);
    })
.catch( (error) => {
    console.log(error);
})


function func1(){
    return new Promise(function (reslove, reject) {
        setTimeout( () => {
            const error = true;
            if(!error){
                console.log('Function: Your promise has been reslove')
                reslove();
            }else{
                console.log('Function: Your promise has not been resloved');
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Palash: Thanks for resloveing");
}).catch(function(){
    console.log(`"Palash: Very bad bro. Reason : " ${error}`);
})