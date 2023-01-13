const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const h2 = document.querySelector("h2");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000"; 
		h2.style.color = "#fff";
		modeButton.textContent = "▢";
	} else {
		main.style.background = "#fff";
		h2.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});