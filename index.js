// Code your solution in this file!
const returnFirstTwoDrivers = function(firstTwoDrivers) {
    return firstTwoDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function(lastTwoDrivers) {
    return lastTwoDrivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
}