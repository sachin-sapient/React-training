const arr = [1,2,3,4,5];
function expectFirstElement (elements) {
    const [ , ...rest ] = elements;
    return rest;
}

expectFirstElement(arr);