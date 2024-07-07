import console from 'console';
import inquirer from 'inquirer';

async function getNames(numberOfPlayers) {
    const players = [];
    for (let i =0 ; i<numberOfPlayers; i++) {
        while (true) {
            const { playerName } = await inquirer.prompt([
                {
                type: 'input',
                name:'playerName',
                message:' Quel est le nom du joueur ' +(i+1)+':'
            }

        ]);
        const { confirm } = await inquirer.prompt([
            {
                type: 'confirm',
                name:'confirm',
                message: 'Vous confirmez?',
                default: true
            }
        ]);
        if (confirm) {
            players.push({
                name: playerName,
                frames:Array(10).fill(null).map(() => ({ lancers: [], score: 0})),
                totalScore: 0
            });
            break;
            }
        }
    }
    return players;
}
export { getNames};