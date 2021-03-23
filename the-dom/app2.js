// const btn1 = document.querySelector("#button1");
// const btn2 = document.querySelector("#button2");

// btn1.addEventListener('click', ()=>{
//     alert('this is button 1');
// })

// btn2.addEventListener('mouseover', ()=>{
//     btn1.remove();
// })

// btn2.addEventListener('click', ()=> {
//     alert('where did the other button go?');
// })

const myImg = document.createElement('img')
myImg.src = "https://images.pexels.com/photos/3135649/pexels-photo-3135649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

myImg.style.width = '200px';
document.body.append(myImg);
myImg.style.transition = 'all 2s';

const sheet = new CSSStyleSheet();
sheet.replaceSync('* {transition: all 2s}');
document.adoptedStyleSheets = [sheet];

const allEls = document.body.children;
setInterval(() => {
    for(let el of allEls){
        const rotation = Math.floor(Math.random() * 360);
        const x = Math.floor(document.body.clientWidth * Math.random());
        const y = Math.floor(document.body.clientHeight * Math.random());
        el.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    }
}, 2000);