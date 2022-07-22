                                        //Fetch API.
// the fetch api provide a fetch() method define on the window Object, which you can use to perfrom request. 
// this method return a promise that you can use to retrieve the response of the request

// fetch('https://api.covid19api.com/summary').then( (apidata) =>{
//     // console.log(apidata);
//     return apidata.json();
// }).then( (actualdata) => {
//     console.log(actualdata);

//     const mydata = actualdata.Countries[77];
//     document.getElementById('apiindia').innerHTML = `The name of the country is ${mydata.Country}. The TotalConfirmed cases here is ${mydata.TotalConfirmed} and the TotalDeaths cases here is ${mydata.TotalDeaths} and finally the TotalRecovered cases here is ${mydata.TotalRecovered}`;
// }).catch( (error) => {
//     console.log(error);
// })



//
async function getCovidapi(){
    const jsondata = await fetch('https://api.covid19api.com/summary');
    const jsdata = await jsondata.json();
 //    console.log(jsdata.Countries[77].Country);
    const mydata = jsdata.Countries[77];
     document.getElementById('apiindia').innerHTML = `The name of the country is ${mydata.Country}. The TotalConfirmed cases here is ${mydata.TotalConfirmed} and the TotalDeaths cases here is ${mydata.TotalDeaths} and finally the TotalRecovered cases here is ${mydata.TotalRecovered}`;
 }
 getCovidapi();