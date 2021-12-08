console.log("welcome to axios");

// external library for making http requests

// unlike with fetch we do not have to do the json parsing on our own axios will parse it for us.

// url "https://swapi.dev/api/planets"

axios.get("https://swapi.dev/api/planets")
.then((res) => {
    // console.log(res);
    // console.log(res.data);
    console.log(res.data.results);
})
.catch((err) => {
    console.log(err);
})