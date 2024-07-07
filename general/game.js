import console from 'console';
import inquirer from 'inquirer';

async function game(players) {
    for (let i = 0; i < 10; i++) {
        console.log('Lancer' +(i+1)+'');
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
            if (firstRoll <10) {
                const quillesRestantes= 10-premierLancer;
                const { deuxiemeLancer} = await inquirer.prompt([
                    {
                        type: 'inpu',
                        name: 'deuxiemeLancer',
                        message: 'Combien de quilles au deuxieme lancer',
                        validate: function(value) {
                            const valid = !isNaN(value) && value >=0 && value < quillesRestantes; 
                            if (valid) {
                                return true;
                            }
                            return 'Entrez de nouveau le nombre de quilles'
                        },
                        filter: Number
                    }
                ]);
                player.frames[i].lancers.push(deuuxiemeLancer);
            }
            }
    }
}
export {game};
