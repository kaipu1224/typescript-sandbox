/// <reference path="jquery.d.ts" />
/// <reference path="underscore.browser.d.ts" />
var canvas = <HTMLCanvasElement>document.getElementById("stage");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
context.fillStyle = "black";
context.fillRect(0,0,canvas.width,canvas.height);

var w = 0;
var h = 0;

setInterval(function(){
	context.fillStyle = "yellow";
	context.fillRect(0,0,w,h);
	w++;
	h++;
	if(w >= canvas.width) w = 0;
	if(h >= canvas.height) h = 0;
},33);