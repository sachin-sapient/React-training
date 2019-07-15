function request({ url, method }) {
    console.log(url);
    console.log(method);
}

request({ url: 'http://www.google.com', method: 'GET' });