import console from 'console';

function calculScore(players) {
    players.forEach(player => {
        let totalScore=0;

        player.frames.forEach((frame, i ) => {
            const [firstShot, secondShot] = frame.shots;
            let frameScore = firstShot + secondShot;

            if (firstShot ===10) { // ça c'est pour le Strike
                const next2Shots= getNext2Shots(player.frames, i);
                frameScore += next2Shots;
            }
            else if (frameScore === 10) { // ça c'est pour le spare 
                const nextShot = getNextShot(player.frames, i);
                frameScore += nextShot;

            }
            frame.score = frameScore;
            totalScore += frameScore;
        });
            player.totalScore = totalScore;
        });

    }

function getNext2Shots(frames, i) {
    const nextFrame = frames[i+1];
    if (nextFrame == null) return 0;

    
    if (nextFrame.shots.length == 1) {
        const next2Frame = frames[i+2];
        if (next2Frame !== undefined) {
            return nextFrame.shots[0] + next2Frame.shots[0];
        } 
        else {
            return nextFrame.shots[0] + 0;
        }

        }
        else {
            return nextFrame.shots[0] + nextFrame.shots[1];
        }
    }
function getNextShot(frames, i){
    const nextFrame = frames[i+1];
    if (nextFrame !== null) {
        return nextFrame.shots[0];
    }
    else {
        return 0;
    }
}
export { calculScore };
    
