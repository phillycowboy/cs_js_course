// alert('working');


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    { id: 1, username: "Bilbo" },
                    { id: 5, username: "Esmerelda" }
                ],
                '/users/1' : {
                    id: 1,
                    username: 'Bilbo',
                    upvotes: 360,
                    city: 'Lisbon',
                    topPostId: 454321
                },
                '/users/5': {
                    id: 5,
                    username: 'Esmerelda',
                    upvotes: 571,
                    city: 'Honolulu'
                },
                '/posts/454321': {
                    id: 454321,
                    title: "ladies and gentelman may i introduce my pig Hamlet!"
                },
                '/about': 'This is the about page.'
            };
            const data = pages[url]
            if (data) {
                resolve({ status: 200, data });
            } else {
                reject({ status: 404 });
            }
        }, 1000);
    });
};

fakeRequest('/users').then((res) => {
    console.log(res);
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
}).then((res) => {
    console.log(res);
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
}).then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log("OH NO!", err);
})
// this way we only need one catch for all of the promise requests 

// this catch is only working for the most outer fakeRequest, you would need to add catches for each request if you are nesting your promises 