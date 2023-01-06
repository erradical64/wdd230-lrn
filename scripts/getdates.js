
//let oLastModif = new Date(document.lastModified);
//let nLastModif = Date.parse(document.lastModified);

var theDate = new Date(document.lastModified).toISOString().substr(5, 5).replace('-', '');
document.write(theDate);
