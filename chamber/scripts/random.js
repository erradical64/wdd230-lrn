const cardOne = document.querySelector("#m-ichi");
const cardTwo = document.querySelector("#m-ni");
const cardThree = document.querySelector("#m-san");
const cards = document.querySelector(".lower");




var num = ["2", "4"]
var num2 = ["0", "1",]
var num3 = ["0", "4", "6"]


function displayRandomMembers(data){
    //1
    section1 = document.createElement("section");
    section1.setAttribute("class", "card")

    headerThree1 = document.createElement("h3")
    let cName1 = document.createElement("a");
    const rand1 = Math.floor(Math.random() * num.length);
    selected1 = num[rand1]
    cName1.setAttribute("href", data[selected1].url);
    cName1.textContent = data[selected1].name
    headerThree1.appendChild(cName1)
    section1.appendChild(headerThree1)
    let cPhone1 = document.createElement("p");
    cPhone1.textContent = data[selected1].phone
    section1.appendChild(cPhone1)
    let cAdd1 = document.createElement("p");
    cAdd1.textContent = data[selected1].address
    section1.appendChild(cAdd1)

    cards.appendChild(section1);

    //2
    section2 = document.createElement("section");
    section2.setAttribute("class", "card")
    headerThree2 = document.createElement("h3")
    let cName2 = document.createElement("a");
    const rand2 = Math.floor(Math.random() * num2.length);
    selected2 = num2[rand2]
    cName2.setAttribute("href", data[selected2].url);
    cName2.textContent = data[selected2].name
    headerThree2.appendChild(cName2)
    section2.appendChild(headerThree2)
    let cPhone2 = document.createElement("p");
    cPhone2.textContent = data[selected2].phone
    section2.appendChild(cPhone2)
    let cAdd2 = document.createElement("p");
    cAdd2.textContent = data[selected2].address
    section2.appendChild(cAdd2)

    cards.appendChild(section2);

    //3
    section3 = document.createElement("section");
    section3.setAttribute("class", "card")
    headerThree3 = document.createElement("h3")
    let cName3 = document.createElement("a");
    const rand3 = Math.floor(Math.random() * num3.length);
    selected3 = num3[rand3]
    cName3.setAttribute("href", data[selected3].url);
    cName3.textContent = data[selected3].name
    headerThree3.appendChild(cName3)
    section3.appendChild(headerThree3)
    let cPhone3 = document.createElement("p");
    cPhone3.textContent = data[selected3].phone
    section3.appendChild(cPhone3)
    let cAdd3 = document.createElement("p");
    cAdd3.textContent = data[selected3].address
    section3.appendChild(cAdd3)

    cards.appendChild(section3);
}

const getMembers = async () => {
    const response = await fetch(
      "https://erradical64.github.io/wdd230-lrn/chamber/data/members.json"
    );
    memberList = await response.json();
    displayRandomMembers(memberList);
  };
getMembers();
