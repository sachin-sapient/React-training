const meta = {
    title: 'Destructuring Assignment',
    authors: [ { firstname: 'Craig', lastname: 'Buckler' } ],
    publisher: {
    name: 'SitePoint',
    url: 'http://www.sitepoint.com/'
    }
};

const {
        title: doc,
        authors: [{ firstname: name }],
        publisher: { url: web }
    } = meta;
console.log(doc, name, web);