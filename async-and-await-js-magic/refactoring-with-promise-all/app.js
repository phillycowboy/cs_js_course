console.log("refactoring with promise.all");

// testing 

// api https://pokeapi.co/api/v2/pokemon


// // SEQUENTIAL REQUESTS! 
// async function get3PokemonSequential(){
//     const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//     const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//     const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }

// PARALELL REQUESTS -- much better to do and you dont have to wait for a response to come back in order to await another repsone.

async function get3Pokemon(){
    const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
    const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
    const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
    // const poke1 = await prom1;
    // const poke2 = await prom2;
    // const poke3 = await prom3;
    // dont need to set awaits to a variable, we can just pass in variables set to requests.
    const results = await Promise.all([prom1, prom2, prom3]);
    // returns an array of response objects
    console.log("Array of Response Objects", results);
    // console.log(poke1.data);
    // console.log(poke2.data);
    // console.log(poke3.data);
    printPokemon(results)
}
function printPokemon(results){
    for(let pokemon of results){
        console.log(pokemon.data.name)
    }
}

get3Pokemon();