console.log("async and await");

function getData(){
    const data = axios.get('https://swapi.dev/api/planets').then((data) => {
        console.log(data)
    })
    console.log("this will run first", data)
}

getData();