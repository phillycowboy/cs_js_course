console.log("paralell vs. sequential requests");

// api https://pokeapi.co/api/v2/pokemon


// SEQUENTIAL REQUESTS! 
// async function get3Pokemon(){
//     // this line will run and fetch the data
//     const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//     // then once this returns this line will run 
//     const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//     // then once this returns this line will run 
//     const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//     // they are not running in paralell they are running in sequence.
//     // sequential requests.
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }

// PARALELL REQUESTS -- much better to do and you dont have to wait for a response to come back in order to await another repsone.

// async function get3Pokemon(){
//     const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
//     // variable is storing a promise 
//     const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
//     const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
//     // still sending a request to return a promise they should be pending 
//     console.log("PENDING PROMISE", prom1);
//     const poke1 = await prom1;
//     // variable is storing a response
//     const poke2 = await prom2;
//     const poke3 = await prom3;
//     console.log("RESOLVED PROMISE", prom1)
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }

// get3Pokemon();

// Much slower example of how promises work

function changeBodyColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    });
}

// async function lightShow(){
//     await changeBodyColor("teal", 1000);
//     await changeBodyColor("pink", 1000);
//     await changeBodyColor("lime", 1000);
//     await changeBodyColor("blue", 1000);
//     await changeBodyColor("red", 1000);
// }

// PARALELL -- faster 

async function lightShow(){
    const p1 = await changeBodyColor("teal", 1000);
    const p2 = await changeBodyColor("pink", 1000);
    const p3 = await changeBodyColor("lime", 1000);
    const p4 = await changeBodyColor("blue", 1000);
    const p5 = await changeBodyColor("red", 1000);
    await p1;
    await p2;
    await p3;
    await p4;
    await p5;
}
lightShow();




