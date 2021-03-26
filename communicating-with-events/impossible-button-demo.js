const h1 = document.querySelector('h1');

h1.addEventListener('mouseover', function(){
    this.style.fontSize = '100px';
    this.style.color = 'blue';
});
h1.addEventListener('mouseout', function(){
    this.style.fontSize = '60px';
    this.style.color = 'slategrey'
});