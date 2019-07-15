const date = '2025-09-26';

function parseDate (date) {
    const [ year, month, day ] = date.split('-');
    return `year: ${year}, month: ${month}, day: ${day}`;
}

parseDate(date);