const h1 = document.querySelector('h1');

h1.addEventListener('mouseover', function(){
    this.style.fontSize = '100px';
    this.style.color = 'blue';
});
h1.addEventListener('mouseout', function(){
    this.style.fontSize = '60px';
    this.style.color = 'slategrey'
});


const btn = document.querySelector('button');
// window.screen in console will give you dimesions 
// window.innerHeight
// window.innerWidth
btn.addEventListener('mouseover', function(){
    console.log("MOUSED OVER ME");
    const height = Math.floor(Math.random() * window.innerHeight)
    const width = Math.floor(Math.random() * window.innerWidth)
    btn.style.left = `${height}px`;
    btn.style.top = `${width}px`;
})

btn.addEventListener('click', function(){
    btn.innerText = 'YOU GOT ME!';
    document.body.style.backgroundColor = 'green';
})