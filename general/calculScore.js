import console from 'console';

function calculScore(players) {
    players.forEach(player => {
        let totalScore=0;

        player.frames.forEach((frame, i ) => {
            const [premierLancer, deuxiemeLancer] = frame.lancers;
            let frameScore = premierLancer + deuxiemeLancer;

            if (premierLancer ===10) { // ça cest pour le Strike
                const next2Lancers= getNext2Lancers(player.frames, i);
                frameScore += next2Lancers;
            }
            else if (frameScore === 10) { // ça c'est pour le spare 
                const prochainLancer = getProchainLancer(player.frames, i);
                frameScore += prochainLancer;

            }
            frame.score = frameScore;
            totalScore += frameScore;
        });
            player.totalScore = totalScore;
        });

    }

function getNext2Lancers(frames, i) {
    const nextFrame = frames[i+1];
    if (nextFrame == null) return 0;

    
    if (nextFrame.lancers.length == 1) {
        const next2Frame = frames[i+2];
        if (next2Frame !== undefined) {
            return nextFrame.lancers[0] + next2Frame.lancers[0];
        } 
        else {
            return nextFrame.lancers[0] + 0;
        }

        }
        else {
            return nextFrame.lancers[0] + nextFrame.lancers[1];
        }
    }
function getProchainLancer(frames, i){
    const nextFrame = frames[i+1];
    if (nextFrame !== null) {
        return nextFrame.lancers[0];
    }
    else {
        return 0;
    }
}
export { calculScore };
    
