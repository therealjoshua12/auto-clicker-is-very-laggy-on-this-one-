var canvas=document.getElementById("T_H_I_C_C");
var ctx = canvas.getContext("2d");
var color ="red ";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=8;
ctx.arc(200,200,60,0,4*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    mouse_X=e.clientX-canvas.offsetLeft;
    mouse_Y=e.clientY-canvas.offsetTop;
    console.log("x="+mouse_X+" Y="+mouse_Y);
    circle(mouse_X,mouse_Y);
}
function circle (mouse_X,mouse_Y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=8;
    ctx.arc(mouse_X,mouse_Y,60,0,4*Math.PI);
    ctx.stroke();
    
}