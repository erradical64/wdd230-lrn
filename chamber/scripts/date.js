const d = new Date();
let yearVariable = d.getFullYear();

document.querySelector("#year").innerHTML = yearVariable;

document.querySelector(".lastmod").innerHTML = "Last Modification: "+document.lastModified;