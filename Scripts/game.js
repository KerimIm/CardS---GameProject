var canvas = document.getElementById("platno")
var ctx = canvas.getContext('2d')

ctx.strokeStyle = 'black';
ctx.lineWidth = 1



for (i = 0; i < 800; i+=160) {
    ctx.moveTo(i,0);
    ctx.lineTo(i,800);
    ctx.stroke();
}

for (j = 0; j < 800; j+=160) {
    ctx.moveTo(0,j);
    ctx.lineTo(800,j);
    ctx.stroke();
}

function generateRandomNumb(min,max) {
    Math.floor(Math.random() * (max - min)) + min;
}

function printOutRandNum(x,y,z) {

}