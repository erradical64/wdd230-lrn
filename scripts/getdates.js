const d = new Date();
let yearVariable = d.getFullYear();
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));
if (numVisits !== 0){
    visitsDisplay.textContent = numVisits;
} else{
    visitsDisplay.textContent = 'This is your first visit.'
}
numVisits++;
localStorage.setItem("visits-ls", numVisits);

document.querySelector("#year").innerHTML = yearVariable;

document.querySelector(".lastmod").innerHTML = "Last Modification: "+document.lastModified;
