canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_x, last_position_y;
color="black";
width_line=1;
canvas.addEventListner("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";

}

canvas.addEventListner("mouseup",my_mouseup );
function my_mouseup(e){
    mouseEvent="mouseup";

}
canvas.addEventListner("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListner("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") 
{
    ctx.beginPath();
    ctx.strokeStyle= color ;
    ctx.lineWidth= width_line ;
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_x + "y = " + last_position_y);
    ctx.moveTo(last_position_x, last_position_y);
    console.log("current position of x and y coordinates = ");
    console.log("x = " + current_position_x + "y = " + current_position_y);
    ctx.lineTo(current_position_x, current_position_y);
    ctx.stroke();

}
last_position_x = current_position_x ;
last_position_y = current_position_y ;

}



    
