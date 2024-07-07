import console from 'console' ;
import { getNumberOfPlayers } from './getNumberOfPlayers.js';
import { getNames } from './getNames.js';
import { game } from './game.js';
import { calculScore } from './calculScore.js';


async function main() {
    const numberOfPlayers = await getNumberOfPlayers();
    const players = await getNames(numberOfPlayers);
    await game(players);
    calculScore(players);
    showResults(players);
    saveHistory(players);
    displayHistory();
}
main();