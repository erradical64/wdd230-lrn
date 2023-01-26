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

const email = document.getElementById("email");
const fullname = document.getElementById("full_name");
const username = document.getElementById("username");
const verifyUN = document.getElementById("verify_name");
const message = document.getElementById("formmessage")
verifyUN.addEventListener("focusout", characterValid);

function characterValid(){
    
    if (username.value !== verifyUN.value){
        message.textContent = "Wrong username inputted. Please try again.";
        message.style.display = "block";
        verifyUN.style.backgroundColor = "#ff0000";
        verifyUN.focus();
        verifyUN.value = "";
    }else{
        message.style.display = "none";
		verifyUN.style.backgroundColor = "#fff";
		verifyUN.style.color = "#000";
    }
}

const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}
rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);

//Table Print
const namePrint = document.getElementById("namep");
const emailPrint = document.getElementById("emailp");
const ratePrint = document.getElementById("ratep");
const userPrint = document.getElementById("userp");

function printingValues(){
    namePrint.innerHTML = fullname.value;
    emailPrint.innerHTML = email.value;
    ratePrint.innerHTML = rangevalue.value;
    userPrint.innerHTML = username.value;
}
