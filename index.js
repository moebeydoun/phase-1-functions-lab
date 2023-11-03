function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        return someValue - 42
    }
    return 42 - someValue
    
}
function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feet = blocks * 264;
    return feet
}
function distanceTravelledInFeet(start, destination)  {
    if (start > destination) {
        return (start - destination) * 264
    }
    return (destination - start) * 264
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        
        return 25;
    } else {
        
        return "cannot travel that far";
    }
}

