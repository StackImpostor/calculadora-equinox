$(document).ready(()=>{
  ajustarCanvas();
});

function ajustarCanvas(){
  var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - ($("#header").height() + $("#footer").height());
    console.log(canvas.height);
}