const person = {
    first: 'Mohan',
    last: 'Singh',
    address: {
        lines: ['Sector 47', 'Chestor Lane', 'Apt 23'],
        city: 'Gurgaon',
        state: 'Haryana'
    }
}

function extractValue(person) {
    const { address: {lines: [, value]} } = person;
    return value;
}

extractValue(person);