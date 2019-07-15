const mapperFns = (number) => {
    return {
        isEven: number % 2 === 0,
        number,
        squared: number * number
    }
}

console.log([1,2,3].map(mapperFns));