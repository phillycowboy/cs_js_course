// console.log("Itworks")

// console.log()
const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function ()  {
    console.log("FIRST REQ WORKED")
    const data = JSON.parse(this.responseText)
    // console.log(data)
    // for(let planet of data.results){
    //     console.log(planet.name)
    // }
    const filmURL = data.results[0].films[0]
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener("load", function(){
        console.log("SECOND REQ WORKED!")
        const filmData = JSON.parse(this.responseText)
        console.log(filmData)
    });
    filmReq.addEventListener("error", function(e){
        console.log("error loading film", e)
    });
    filmReq.open("GET", filmURL);
    filmReq.send();

})
firstReq.addEventListener("error", () => {
    console.log("OH NO")
})
firstReq.open("GET","https://swapi.dev/api/planets")
firstReq.send();
console.log("Request sent")