const d = new Date();
let yearVariable = d.getFullYear();
document.querySelector("#year").innerHTML = yearVariable;
document.querySelector(".lastmod").innerHTML = "Last Modification: "+document.lastModified;
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("visits-ls"));
if (numVisits !== 0){
    visitsDisplay.textContent = numVisits;
} else{
    visitsDisplay.textContent = 'This is your first visit.'
}
numVisits++;
localStorage.setItem("visits-ls", numVisits);

const form = document.querySelector(".form");
const submittedTime = new Date();
document.querySelector(".user-date").textContent = submittedTime;
