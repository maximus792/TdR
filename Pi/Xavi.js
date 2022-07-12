var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
const pispan = document.querySelector(".picalc span");
const cant = document.querySelector(".cant span");

var n = 5,
	size = 100,
	Xcenter = 150,
	Ycenter = 150;

function shape(n) {
	console.log(n);
	ctx.beginPath();
	ctx.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

	for (var i = 1; i <= n; i += 1) {
		ctx.lineTo(
			Xcenter + size * Math.cos((i * 2 * Math.PI) / n),
			Ycenter + size * Math.sin((i * 2 * Math.PI) / n)
		);
	}

	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 1;
	ctx.stroke();
}
n = 4;
pi = "3.1415926535897932384";
stop = false;
function myLoop(rep, delay) {
	setTimeout(function () {
		ctx.clearRect(0, 0, 300, 300);
		console.log("ep " + n);
		if (n > 3000) shape(3000);
		else shape(n);
		piaprox = n * sinDegrees(180 / n);
		cant.innerHTML = n;

		pispan.innerHTML = "";
		for (let i = 0; i < piaprox.toString().length; i++) {
			if (
				piaprox.toString()[i] == pi[i] &&
				piaprox.toString()[i - 1] == pi[i - 1] &&
				piaprox.toString()[i - 2] == pi[i - 2]
			)
				pispan.innerHTML += `<span style="color:green">${
					piaprox.toString()[i]
				}</span>`;
			else
				pispan.innerHTML += `<span style="color:red">${
					piaprox.toString()[i]
				}</span>`;
		}
        if (n > 10000000) n += 1111111;
		else if (n > 100000) n += 11111;
		else if (n > 100000) n += 11111;
		else if (n > 10000) n += 1111;
		else if (n > 2000) n += 111;
		else n++;
		if (n <= rep && !stop) {
			myLoop(rep, delay - 15 > 0 ? delay - 15 : 0);
		} else
			() => {
				ctx.clearRect(0, 0, 300, 300);
				shape(3000);
				piaprox = rep * sinDegrees(180 / rep);
				cant.innerHTML = rep;

				pispan.innerHTML = "";
				for (let i = 0; i < piaprox.toString().length; i++) {
					if (
						piaprox.toString()[i] == pi[i] &&
						piaprox.toString()[i - 1] == pi[i - 1] &&
						piaprox.toString()[i - 2] == pi[i - 2]
					)
						pispan.innerHTML += `<span style="color:green">${
							piaprox.toString()[i]
						}</span>`;
					else
						pispan.innerHTML += `<span style="color:red">${
							piaprox.toString()[i]
						}</span>`;
				}
			};
	}, delay);
}

document.querySelector("#stop").addEventListener("click", () => {
	stop = true;
});
document.querySelector("#run").addEventListener("click", () => {
    stop = false
	myLoop(399999999, 700);
});

function sinDegrees(angleDegrees) {
	return Math.sin((angleDegrees * Math.PI) / 180);
}
