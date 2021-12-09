console.log("%cawait keyword", "color: orange");

// await will pause the execution of a function waiting for a promise to be resolved.

// function getPlanets(){
//     return axios.get("https://swapi.dev/api/planets");
// }

// getPlanets().then((res) => {
//     console.log(res.data)
// })

async function getPlanets(){
    const res = await axios.get("https://swapi.dev/api/planets")
    console.log(res.data)
}

getPlanets();