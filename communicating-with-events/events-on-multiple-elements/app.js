const h1 = document.querySelector('h1');

h1.addEventListener('mouseover', function(){
    const x = Math.floor(Math.random() * 100);
    this.style.fontSize = `${x}px`;
});

h1.addEventListener('mouseout', function() {
    this.style.fontSize = '60px';
});