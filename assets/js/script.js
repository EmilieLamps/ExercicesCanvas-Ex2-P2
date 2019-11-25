var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// Haut
ctx.beginPath();
ctx.fillStyle="#FFFF"
ctx.moveTo(150,175);
ctx.bezierCurveTo(190,75,220,100,239,155);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#E0E1F3"
ctx.moveTo(300, 175);
ctx.quadraticCurveTo(200, 110, 110, 175);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#E0E1F3"
ctx.moveTo(300, 175);
ctx.quadraticCurveTo(190,240,110,175);
ctx.fill();
