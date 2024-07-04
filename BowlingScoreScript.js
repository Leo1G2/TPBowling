import console from 'console';
import inquirer from 'inquirer';
import fs from 'fs';




async function getNumberOfPlayer() {
    while(true) {
        const { numberOfPlayers } = await inquirer.prompt([
            { type: 'input',
              name: 'numberOfPlayer'   
              message: 'Combien de joueurs il y a dans la partie? (Il ne peut pas avoir plus de 6 joueurs par partie) '               
              validate: function(value) {
                
              }
            }
    }
}