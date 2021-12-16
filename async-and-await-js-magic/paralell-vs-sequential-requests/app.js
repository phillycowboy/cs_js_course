console.log("paralell vs. sequential requests");

// api https://pokeapi.co/api/v2/pokemon

async function get3Pokemon(){
    // this line will run and fetch the data
    const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
    // then once this returns this line will run 
    const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
    // then once this returns this line will run 
    const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
    // they are not running in paralell they are running in sequence.
    // sequential requests.
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
}

get3Pokemon();
