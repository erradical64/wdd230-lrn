const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("co-grid");
	display.classList.remove("co-list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("co-list");
	display.classList.remove("co-grid");
}

const outPut = (members) => {
    members.forEach((member) => {
        section = document.createElement("section");
        let coImage = document.createElement("img");
        coImage.setAttribute("src", member.img)
        coImage.setAttribute("alt", member.name)
        coImage.setAttribute("target", "_blank")
        section.appendChild(coImage);
        let header = document.createElement("h2");
        let coName = document.createElement("a");
        coName.textContent = member.name
        coName.setAttribute("href", member.url);
        header.appendChild(coName);
        section.appendChild(header);
        let coPhone = document.createElement("p");
        coPhone.textContent = member.phone
        section.appendChild(coPhone)
        let coLoc = document.createElement("p");
        coLoc.textContent = member.address
        section.appendChild(coLoc)
        let membership = document.createElement("p");
        membership.textContent = member.membership + " Membership"
        section.appendChild(membership)
        let coOther = document.createElement("caption");
        coOther.textContent = member.other
        section.appendChild(coOther)
        document.querySelector(".co-grid").appendChild(section);
    })
}
const getMembers = async () => {
    const response = await fetch(
      "https://erradical64.github.io/wdd230-lrn/chamber/data/members.json"
    );
    memberList = await response.json();
    outPut(memberList);
  };
getMembers();

