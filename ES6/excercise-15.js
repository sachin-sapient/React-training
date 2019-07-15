const array = [10, 20, 30, 40, 50, 60];

const newArray = array.filter((value, index) => array.length - index <= 4);

console.log(newArray);