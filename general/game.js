import console from 'console';
import inquirer from 'inquirer';
import { afficherResultats } from './afficherResultats.js';


async function game(players) {
    for (let i = 0; i < 2; i++) {
        console.log('Lancer ' +(i+1)+'');
        for (const player of players) {
            console.log('C est au tour de ' +(player.name)+':');
            const { premierLancer } = await inquirer.prompt ([
                {
                type: 'input',
                name: 'premierLancer',
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
            player.frames[i].lancers.push(premierLancer);
            if (premierLancer <10) {
                const quillesRestantes= 10-premierLancer;
                const { deuxiemeLancer} = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'deuxiemeLancer',
                        message: 'Combien de quilles au deuxieme lancer',
                        validate: function(value) {
                            const valid = !isNaN(value) && value >=0 && value <= quillesRestantes; 
                            if (valid) {
                                return true;
                            }
                            return 'Entrez de nouveau le nombre de quilles'
                        },
                        filter: Number
                    }
                ]);
                player.frames[i].lancers.push(deuxiemeLancer);
            }
            let totalScore =0;

            for (let j = 0; j <= i; j ++ ) {
                let frame = player.frames[j];

                for (let k = 0; k < frame.lancers.length; k++) {
                    totalScore += frame.lancers[k];
                
                }
            }
                player.totalScore = totalScore;
        
        }
        afficherResultats(players);
    }
}
export {game};
