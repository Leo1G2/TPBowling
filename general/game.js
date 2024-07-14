import console from 'console';
import inquirer from 'inquirer';
import { printScore} from './printScore.js';
import { printCurrentScore } from './printCurrentScore.js'


async function game(players) {
    for (let i = 0; i < 10; i++) {
        console.log('Lancer ' +(i+1)+'');
        for (const player of players) {
            console.log('C est au tour de ' +(player.name)+':');
            const { firstShot } = await inquirer.prompt ([
                {
                type: 'input',
                name: 'firstShot',
                message: ' Combien de quilles au premier lancer',
                validate: function(value) {
                    const valid = !isNaN(value) && value >= 0 && value <= 10;
                    if (valid) {
                        return true;
                    }
                    return 'Entrez de nouveau le nombre de quilles';
                },
                filter: Number
                }

            ]);
            player.frames[i].shots.push(firstShot);
            if (firstShot <10) {
                const leftPins= 10-firstShot;
                const { secondShot} = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'secondShot',
                        message: 'Combien de quilles au deuxieme lancer',
                        validate: function(value) {
                            const valid = !isNaN(value) && value >=0 && value <= leftPins; 
                            if (valid) {
                                return true;
                            }
                            return 'Entrez de nouveau le nombre de quilles'
                        },
                        filter: Number
                    }
                ]);
                player.frames[i].shots.push(secondShot);
            }
            let totalScore =0;

            for (let j = 0; j <= i; j ++ ) {
                let frame = player.frames[j];

                for (let k = 0; k < frame.shots.length; k++) {
                    totalScore += frame.shots[k];
                
                }
            }
                player.totalScore = totalScore;
        
        }
        printCurrentScore(players);
    }
    printScore(players);
}
export {game};