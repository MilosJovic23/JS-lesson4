// document.getElementById("naslovSajta").innerHTML = "Ovo je naslov iz JSa";
// document.getElementById("naslovSajta").style.color = "red";

var naslov = document.getElementById("naslovSajta");
naslov.style.color = "blue";
naslov.innerHTML = "Ovo je drugi naslov iz JSa";

document.getElementsByClassName("tekstSajta")[0].style.color = "green";
document.getElementsByClassName("tekstSajta")[1].style.color = "Royalblue";
var tekstSajta = document.getElementsByClassName("tekstSajta");
tekstSajta[1].style.color = "yellow";
document.getElementById("demo").innerHTML = Date();

function displayDate() {
	document.getElementById("demo1").innerHTML = Date();
}
