// console.log("Itworks")

// console.log()
// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", function ()  {
//     console.log("FIRST REQ WORKED")
//     const data = JSON.parse(this.responseText)
//     // console.log(data)
//     // for(let planet of data.results){
//     //     console.log(planet.name)
//     // }
//     const filmURL = data.results[0].films[0]
//     const filmReq = new XMLHttpRequest();
//     filmReq.addEventListener("load", function(){
//         console.log("SECOND REQ WORKED!")
//         const filmData = JSON.parse(this.responseText)
//         console.log(filmData)
//     });
//     filmReq.addEventListener("error", function(e){
//         console.log("error loading film", e)
//     });
//     filmReq.open("GET", filmURL);
//     filmReq.send();

// })
// firstReq.addEventListener("error", () => {
//     console.log("OH NO")
// })
// firstReq.open("GET","https://swapi.dev/api/planets")
// firstReq.send();
// console.log("Request sent")

// testing

// const checkStatusAndResponse = (response) => {
//     if(!response.ok)
//     throw new Error(`Status Code Error: ${response.status}`)
//     return response.json()
// }

// const printPlanets = (data) => {
//     console.log("Loaded 10 more planets.")
//     for(let planet of data.results){
//         console.log(planet.name)
//     }
//     // const p = new Promise((resolve, reject) => {
//     //     resolve(data)
//     // })
//     // return p
//     return Promise.resolve(data.next);
// }

// const get10MorePlanets = (url= "https://swapi.dev/api/planets") => {
//     return fetch(url);
// }

// fetch("https://swapi.dev/api/planets")
// .then(checkStatusAndResponse)
// .then(printPlanets)
// .then(get10MorePlanets)
// .then(checkStatusAndResponse)
// .then(printPlanets)
// .catch((err) => {
//     console.log("SOMETHING WENT WRONG WITH FETCH")
//     console.log(err)
// })
    // console.log("Feteched first 10 planets")
    // for(let planet of data.results){
    //     console.log(planet.name)
    // }
    // const nextUrl = data.next;
    // return fetch(nextUrl);
    // const filmURL = data.results[0].films[0];
    // for(let planet of data.results){
    //     console.log(planet)
    //     console.log(planet.name)
    // }
// })
// .then(checkStatusAndResponse)
// .then(printPlanets)
// .catch((err) => {
//     console.log("SOMETHING WENT WRONG WITH FETCH")
//     console.log(err)
// })

// refactored fetch with built in callback functions

// fetch("https://swapi.dev/api/planets")
// .then(checkStatusAndResponse)
// .then(printPlanets)
// .then(get10MorePlanets)
// .then(checkStatusAndResponse)
// .then(printPlanets)
// .then(get10MorePlanets)
const url = "https://swapi.dev/api/planets"

const checkStatusAndResponse = (response) => {
    if(!response.ok)
    throw new Error(`Status Code Error: ${response.status}`)
    return response.json()
}

const printPlanets = (data) => {
    console.log("Loaded 10 more planets.")
    for(let planet of data.results){
        console.log(planet.name)
    }
    // const p = new Promise((resolve, reject) => {
    //     resolve(data)
    // })
    // return p
    return Promise.resolve(data.next);
}

const get10MorePlanets = (url) => {
    return fetch(url);
}

fetch(url)
.then(checkStatusAndResponse)
.then(printPlanets)
.then(get10MorePlanets)
.then(checkStatusAndResponse)
.then(printPlanets)
.catch((err) => {
    console.log("SOMETHING WENT WRONG WITH FETCH")
    console.log(err)
})