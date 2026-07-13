var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".randomButton");

function setGradient(){
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value + 
		")";

		css.textContent = body.style.background + ";"
}

function randomize(){
	var randRed1 = Math.floor(Math.random()*256);
	var randGreen1 = Math.floor(Math.random()*256);
	var randBlue1 = Math.floor(Math.random()*256);
	var randRed2 = Math.floor(Math.random()*256);
	var randGreen2 = Math.floor(Math.random()*256);
	var randBlue2 = Math.floor(Math.random()*256);
	console.log(randRed1);
	body.style.background = 
		"linear-gradient(to right, " 
		+ "rgb(" + randRed1 + ", "  + randGreen1 + ", "  + randBlue1 + ")"
		+ ", " 
		+ "rgb(" + randRed2 + ", "  + randGreen2 + ", "  + randBlue2 + ")" + 
		")";

		css.textContent = body.style.background + ";"

	color1.value = "rgb(" + randRed1 + ", "  + randGreen1 + ", "  + randBlue1 + ")"
	color2.value = "rgb(" + randRed2 + ", "  + randGreen2 + ", "  + randBlue2 + ")"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomize);