import console from 'console';

function afficherResultats(players) {
    console.log('Score des joueurs')
    
    for (let j=0; j < players.length; j++) {
        const player = players[j];
        console.log(player.name + ': ' + player.totalScore);
 
    }
    let highestScore =0;
   
    let winner=0;
    

    for (let j= 0 ; j<players.length; j++) {
        if (players[j].totalScore > highestScore) {
            highestScore = players[j].totalScore;
            winner= j;
        }
      
        
    }    
    console.log(' Le gagnant est ' + players[winner].name + ' ,son score est de :' + highestScore);
}
export { afficherResultats }