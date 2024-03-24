

var character = document.getElementById("character");
var obstacle = document.getElementById("obstacle");
var counter = 0;

function jump() {
	if (character.classList == "jumper") {
		return
	} character.classList.add("jumper");
	setTimeout(function () {
		character.classList.remove("jumper");
	}, 300);
}

var checkDead = setInterval(function () {
	let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	let obsacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
	if (obsacleLeft < 50 && obsacleLeft >-10 && characterTop >= 100) {
		obstacle.style.animation = "none";
		alert("Game Over. score:"  + Math.floor(counter / 90));
		
		counter = 0;
		obstacle.style.animation = "movement 3s linear infinite";
		
	}
	else{
		counter++;
		document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
	}
}, 10);

