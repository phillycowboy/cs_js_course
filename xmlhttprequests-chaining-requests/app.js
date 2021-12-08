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

const checkStatusAndResponse = (response) => {
    if(!response.ok)
    throw new Error(`Status Code Error: ${response.status}`)
    return response.json()
}

fetch("https://swapi.dev/api/planets")
.then(checkStatusAndResponse)
.then((data) => {
    console.log("Feteched first 10 planets")
    for(let planet of data.results){
        console.log(planet.name)
    }
    const nextUrl = data.next;
    return fetch(nextUrl);
    // const filmURL = data.results[0].films[0];
    // for(let planet of data.results){
    //     console.log(planet)
    //     console.log(planet.name)
    // }
})
.then(checkStatusAndResponse)
.then((data) => {
    console.log("Fetched next ten planets")
    for(let planet of data.results){
        console.log(planet.name)
    }
    // const nextUrl = data.next;
    // return fetch(nextUrl);
    // console.log(data.title);
})
.catch((err) => {
    console.log("SOMETHING WENT WRONG WITH FETCH")
    console.log(err)
})