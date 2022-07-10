var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var pi = "3.1415926535897932384";
ctx.beginPath();
ctx.arc(150, 150, 150, 0, 2 * Math.PI);
ctx.stroke();

function draw(iteracions) {
  for (let index = 0; index < toString(iteracions).length + (1/delay)*10**3; index++) {
    ctx.beginPath();
    x = Math.random(0) * 300;
    y = Math.random(0) * 300;
    d = Math.sqrt(Math.pow(x - 150, 2) + Math.pow(y - 150, 2));

    if (d > 150) ctx.fillStyle = "red";
    else {
      ctx.fillStyle = "green";
      inside += 1;
    }
    ctx.arc(x, y, 1, 0, 2 * Math.PI);

    ctx.fill();
    i += 1;
    /*if(((inside/i)*4).toString()[pindex] == pi[pindex]){
piaprox = (inside/i)*4
pindex+=1} */

    document.querySelector(".pinum").innerHTML = pi + "   Nombre d'iteracions: " + i;
    
    index++;
  }
  document.querySelector(".piaprox").innerHTML = (inside / i) * 4;
}

inside = 0;
pindex = 0;
piaprox = 3;
i = 0;
iteracions = 10000000;
delay = 20
document.querySelector("#submit").addEventListener("click", () => {
    stop = false
  i = 0;
  inside = 0;
  ctx.clearRect(0, 0, 300, 300);
  ctx.beginPath();
  ctx.arc(150, 150, 150, 0, 2 * Math.PI);
  ctx.stroke();
  update = setInterval(function () {
    draw(iteracions);
  }, delay/15);
});

document.querySelector("#stop").addEventListener("click", () => {
    stop =true
  i = 0;
  inside = 0;
  ctx.clearRect(0, 0, 300, 300);
  ctx.beginPath();
  ctx.arc(150, 150, 150, 0, 2 * Math.PI);
  ctx.stroke();
  clearInterval(update);
})

document.querySelector("#rapid").addEventListener("click", () => {
        rapid();
        rapid();
      
})
function rapid() {
    for (let index = 0; index < 1000000; index++) {
      x = Math.random(0) * 300;
      y = Math.random(0) * 300;
      d = Math.sqrt(Math.pow(x - 150, 2) + Math.pow(y - 150, 2));
  
      if (d <= 150) inside += 1;

  
      i += 1;
      /*if(((inside/i)*4).toString()[pindex] == pi[pindex]){
  piaprox = (inside/i)*4
  pindex+=1} */
  
      document.querySelector(".pinum").innerHTML = pi + "   Nombre d'iteracions: " + i;
      
      index++;
    }
    document.querySelector(".piaprox").innerHTML = (inside / i) * 4;
  }

  document.querySelector(".lento").addEventListener("click",()=>delay = 200)
  document.querySelector(".normal").addEventListener("click",()=>delay = 20)
  document.querySelector(".rapid").addEventListener("click",()=>delay = 1)