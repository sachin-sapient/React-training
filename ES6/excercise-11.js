function wrap (str) {
    return [ str ];
}

function unwrap ([arr]) {
    return arr;
}

wrap('package');
unwrap(['package']);