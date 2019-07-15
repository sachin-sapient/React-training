const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function filterDivisibleBy3(inputArray) {
    return inputArray.filter(element => element%3 === 0 )
}

console.log(filterDivisibleBy3(array));