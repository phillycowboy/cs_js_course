// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseover', function(){
//     h1.style.textAlign = 'center';
// })

// COIN GAME DEMO -- 

function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width 

    );
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');
const btn = document.querySelector('#refresh');

window.addEventListener('keyup', function (e) {
    if(e.key === 'ArrowDown' || e.key === 'Down'){
        moveVertical(avatar, 50);

    } else if (e.key === 'ArrowUp' || e.key === 'Up'){
        moveVertical(avatar, -50);

    } else if (e.key === 'ArrowRight' || e.key === 'Right'){
        moveHorizontal(avatar, 50);

        avatar.style.transform = 'scale(1,1)';
    } else if (e.key === 'ArrowLeft' || e.key === 'Right'){
        moveHorizontal(avatar, -50)

        avatar.style.transform = 'scale(-1,1)';
    }
    if(isTouching(avatar, coin)){
        document.body.style.backgroundColor = "green";
        alert('WINNER!');
        moveCoin();
    }
});

const moveVertical = (element, ammount) => {
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + ammount}px`;
}

const moveHorizontal = (element, ammount) => {
    const currLeft = extractPos(element.style.left);
    element.style.left = `${currLeft + ammount}px`;
}

const extractPos = (pos) => {
    if(!pos) return 100;
   return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
  const y =  Math.floor(Math.random() * window.innerHeight);
  const x =  Math.floor(Math.random() * window.innerWidth);

  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
}
moveCoin();

btn.addEventListener('click', function () {
    window.location.reload();
})

// thoughts for extra features: 

// Scoreboard 

// different background actions 