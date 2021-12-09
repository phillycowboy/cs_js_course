console.log("error handling in async functions");

// error handling in async functions 
// how do we handle if a promise is rejected?


// async function getPlanets(){
//     const res = await axios.get("https://swapi.dev/api/planetsssssssss")
//     console.log(res.data)
// }

// getPlanets().catch((err) => {
//     console.log("In CATCH!")
//     console.log(err)
// })

// try and catch 

async function getPlanets(){
    try{
        const res = await axios.get("https://swapi.dev/api/planets")
        console.log(res.data)
    }catch (err){
        console.log('IN CATCH!!!', err)
    }

}
getPlanets();