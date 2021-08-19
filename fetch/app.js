
const btn = document.querySelector("#fetch-button")


btn.addEventListener("click", () => {
    fReq();
})


const fReq = () => fetch("https://swapi.dev/api/planets")
.then((res) => res.json())
.then((data) => {
    for(let planet of data.results){
        console.log(planet.name)
    }
})
.catch((error) => {
    console.log(error)
})

