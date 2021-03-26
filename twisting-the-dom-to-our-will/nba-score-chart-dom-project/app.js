// const h1 = document.createElement('h1');
// h1.innerText = "NBAJAM";
// document.body.append(h1);

const warriorGames = [{
    awayTeam:{
        team: 'Golden State',
        points: 119,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 106,
        isWinner: false 
    }

},
{
    awayTeam:{
        team: 'Houston',
        points: 105,
        isWinner: false
    },
    homeTeam: {
        team: 'Golden State',
        points: 127,
        isWinner: true 
    }
},
{
    awayTeam:{
        team: 'Golden State',
        points: 133,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 127,
        isWinner: false 
    }
},
{
    awayTeam:{
        team: 'Houston',
        points: 100,
        isWinner: true
    },
    homeTeam: {
        team: 'Golden State',
        points: 99,
        isWinner: false 
    }
},
{
    awayTeam:{
        team: 'Golden State',
        points: 99,
        isWinner: false
    },
    homeTeam: {
        team: 'Houston',
        points: 127,
        isWinner: true  
    }
},
{
    awayTeam:{
        team: 'Houston',
        points: 150,
        isWinner: true
    },
    homeTeam: {
        team: 'Golden State',
        points: 127,
        isWinner: false 
    }
}
];


// *************************************************
// STEP 1 - UGLY UN-REFACTORED CODE! (but it works!)
// *************************************************

const makeChart = (games, targetTeam) => {
    const ulParent = document.createElement('ul');
    for (let game of games) {
        const { homeTeam, awayTeam } = game;
        const gameLi = document.createElement('li');
        gameLi.innerHTML = getScoreLine(game)
        gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
       
        ulParent.append(gameLi);
    }
    return ulParent;
};

const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
    const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return target.isWinner;
}

const getScoreLine = ({homeTeam, awayTeam}) => {
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;
    const teamNames = `${aTeam} @ ${hTeam}`;
    let scoreLine
    if (aPoints > hPoints) {
        scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
    } else {
        scoreLine = `${aPoints} - <b>${hPoints}</b>`;
    }
    return `${teamNames} ${scoreLine}`;
}

const gsSection = document.querySelector('#gs')
const hrSection = document.querySelector('#hr')
const gsChart = makeChart(warriorGames, 'Golden State');
const hrChart = makeChart(warriorGames, 'Houston');
gsSection.appendChild(gsChart);
hrSection.appendChild(hrChart);

// refactored code 



