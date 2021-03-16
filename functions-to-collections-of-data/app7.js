const btn = document.querySelector('button');
btn.addEventListener('click', function (){
    alert('YEAH THE PAGES ARE LINKED!');
})

// FOREACH -- 

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]

nums.forEach(function (n) {
    console.log(n * n);
});