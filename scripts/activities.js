const anotherUrl = "https://erradical64.github.io/wdd230-lrn/scripts/week.json"
const ps = document.querySelector('.pe');
const pc = document.querySelector('.pc');
const grail = document.querySelector('.grail');
const design = document.querySelector('.design');
const ham = document.querySelector('.ham');
const bom = document.querySelector('.bom');
const table = document.querySelector('.table');
const newJSON = document.querySelector('.new');
const combine = document.querySelector('.combine');
const salt = document.querySelector('.slc');



async function apiFetch() {
    try {
      const response = await fetch(anotherUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayWeeks(data); 
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();
function displayWeeks(data) {
    grail.innerHTML = data.week01[0].Name;
    grail.setAttribute('href', data.week01[0].URL);
    design.innerHTML = data.week02[0].Name;
    design.setAttribute('href', data.week02[0].URL);
    ham.innerHTML = data.week02[1].Name;
    ham.setAttribute('href', data.week02[1].URL);
    bom.innerHTML = data.week02[2].Name;
    bom.setAttribute('href', data.week02[2].URL);
    salt.innerHTML = data.week03[0].Name;
    salt.setAttribute('href', data.week03[0].URL);

    pc.innerHTML = data.week04[0].Name;
    pc.setAttribute('href', data.week04[0].URL);
    table.innerHTML = data.week04[1].Name;
    table.setAttribute('href', data.week04[1].URL);

    ps.innerHTML = data.week05[0].Name;
    ps.setAttribute('href', data.week05[0].URL);
    newJSON.innerHTML = data.week05[1].Name;
    newJSON.setAttribute('href', data.week05[1].URL);

    
  }
