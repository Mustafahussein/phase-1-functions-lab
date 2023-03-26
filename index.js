// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    if (pickup >= 42) {
        return pickup - 42;
    } else {
        return 42 - pickup;
    }  
}

function distanceFromHqInFeet(pickup) {
    const distanceInBlocks = distanceFromHqInBlocks(pickup);
    const feetPerBlock = 264;
    return distanceInBlocks * feetPerBlock;
}

function distanceTravelledInFeet(start, stop) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(start - stop);
    return distanceInBlocks * feetPerBlock;
}

function calculatesFarePrice(start, stop) {
    const distanceInFeet = distanceTravelledInFeet(start, stop);

    if (distanceInFeet <= 400) {
        return 0;
    }

    else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    }

    else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    }

    else {
        return 'cannot travel that far';
    }
}