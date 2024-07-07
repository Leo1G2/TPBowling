import console from 'console';
import inquirer from 'inquirer';
import fs from 'fs';




async function getNumberOfPlayers() {
    while(true) {
        const { numberOfPlayers } = await inquirer.prompt([
            { type:'input',
              name: 'numberOfPlayers',   
              message:'Combien de joueurs il y a dans la partie?',
              validate: function(value) {
                const valid = !isNaN(value) && value >= 1 && value <= 6;
                if (valid) {
                  return true;
                }
                return 'Il ne peut pas y avoir aucun joueur, ou plus de 6 dans la partie';
              }
            }
        ]);

        const { confirm } = await inquirer.prompt([
            {
                type:'confirm',
                name: 'confirm',
                message:'Avez-vous rentré le bon nombre de joueurs?',
                default: true
            }
        ])
        if (confirm) {
            return numberOfPlayers;
        }
    }
} 
export { getNumberOfPlayers }

