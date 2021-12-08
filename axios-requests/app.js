console.log("%caxios-requests", "color: red")


// url "https://swapi.dev/api/planets"

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets') => {
    return axios.get(url)
}
const printPlanets = ({data}) => {
    for(const planet of data.results){
        console.log(planet.name)
    }
    return fetchNextPlanets(data.next)
}

fetchNextPlanets()
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.catch((err) => {
    console.log("ERROR!", err)
})

// axios.get('https://swapi.dev/api/planets')
// .then(({data}) => {
//     // console.log(data)
//     for(const planet of data.results){
//         console.log(planet.name)
//     }
    // return axios.get(data.next)
    // return fetchNextPlanets(data.next)
// })
// .then(({data}) => {
//     // console.log(data)
//     for(const planet of data.results){
//         console.log(planet.name)
//     }
// })
// .catch((err) => {
//     console.log("ERROR!", err)
// })