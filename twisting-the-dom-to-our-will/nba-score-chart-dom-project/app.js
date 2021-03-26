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
]

const ulParent = document.createElement('ul');
for(let game of warriorGames){
    const {homeTeam, awayTeam} = game;
    const gameLi = document.createElement('li');
    const {team: hTeam, points: hPoints} = homeTeam;
    const {team: aTeam, points: aPoints} = awayTeam;
    const teamNames  = `${aTeam} @ ${hTeam}`;
    let scoreLine
    if (aPoints > hPoints){
         scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
    }else {
         scoreLine = `${aPoints} - <b>${hPoints}</b>`;
    }

    const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
    gameLi.classList.add(warriors.isWinner ? 'win' : 'loss');
    
    
    gameLi.innerHTML = `${teamNames} ${scoreLine}`;
    ulParent.append(gameLi);
}
document.body.prepend(ulParent);