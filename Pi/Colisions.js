var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
let count = 0;
let digits = 1;
var loaded= false
let accuracy =(5*(10**(digits-3))) == 0.05 ? 30 : (5*(10**(digits-3)));
countp = document.querySelector(".count");
ctx.beginPath();
run = false;
class Block {
  constructor(x, w, v, m) {
    this.x = x;
    this.w = w;
    this.v = v;
    this.m = m;
  }

  set(x,w,v,m){
    this.x = x;
    this.w = w;
    this.v = v;
    this.m = m;
  }

  show() {
    ctx.fillRect(this.x, 150 - this.w, this.w, this.w);
  }
  update() {
    this.x += this.v;
  }
  collide(other) {
    return !(this.x + this.w < other.x || this.x > other.x + other.w);
  }
  bounce(other) {
    var newV = ((this.m - other.m) / (this.m + other.m)) * this.v;
    newV += ((2 * other.m) / (this.m + other.m)) * other.v;
    return newV;
  }
  bounceWall() {
    if (this.x <= 0) {
      this.v *= -1;
      count++;
    }
  }
}
window.onload = inizialize();
function inizialize() {
  ctx.clearRect(0, 0, 700, 200);
  if(run){
    var block1 = new Block(50, 20, 0, 1);
  var block2 = new Block(80, 40, (-1)/accuracy, 100 ** (digits - 1));
  }
 /** else{
    block1.set(50, 20, 0, 1);
    block2.set(80, 40, (-1)/accuracy, 100 ** (digits - 1));
    block1.show()
    block2.show()
  } */
  loaded = false
  update = setInterval(function () {
    draw(block1, block2);
  }, 15);
}

function draw(block1, block2) {
  if (run) {
    for(let i = 0; i<accuracy; i++){
    block1.bounceWall();
    if (block1.collide(block2)) {
      v1 = block1.bounce(block2);
      v2 = block2.bounce(block1);
      block1.v = v1;
      block2.v = v2;
      count++;
    }
    block1.update();
    block2.update();
    
}
    ctx.clearRect(0, 0, 700, 200);
    block1.show();
    block2.show();

    countp.innerHTML = "Nombre de xocs: " + parseInt(count);
    
  }
}

document.querySelector("#stop").addEventListener("click", () => {
  run = false;
  clearInterval(update);
});
document.querySelector("#run").addEventListener("click", () => {
  clearInterval(update);
  run = true;
  count = 0;
  digits = document.querySelector("#digits").value != '' ?  parseInt(document.querySelector("#digits").value) : 1;
  console.log(digits);
  accuracy =(5*(10**(digits-3))) == 0.05 ? 30 : (5*(10**(digits-3)));
  inizialize();
});
