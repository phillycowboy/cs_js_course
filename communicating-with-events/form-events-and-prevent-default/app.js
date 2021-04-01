const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'pink';
})
h1.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'white';
})