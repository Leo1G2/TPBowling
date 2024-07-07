import console from 'console' ;
import { getNumberOfPlayers } from './getNumberOfPlayers.js';
import { getNames } from './getNames.js';




async function main() {
    const numberOfPlayers = await getNumberOfPlayers();
    const players = await getNames(numberOfPlayers);
    await playGame(players);
    calculScore(players);
    showResults(players);
    saveHistory(players);
    displayHistory();
}
main();