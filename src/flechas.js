// Variables
let canvas = document.getElementById("area_de_dibujo");
let papel = canvas.getContext("2d");

let x = 960;
let y = 400;

const colorLinea = "black";
const mov = 20;

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath()
}

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
document.addEventListener("keyup", function(e) {
    if (e.key === 'w' || e.key === 'k') {
      dibujarLinea(colorLinea, x, y, x, y - mov, papel);
      y = y - mov;
    }
    else if (e.key === 's' || e.key === 'j') {
      dibujarLinea(colorLinea, x, y, x, y + mov, papel);
      y = y + mov;
    }
    else if (e.key === "a" || e.key === 'h') {
      dibujarLinea(colorLinea, x, y, x - mov, y, papel);
      x = x - mov;
    }
    else if (e.key === "d" || e.key === 'l') {
      dibujarLinea(colorLinea, x, y, x + mov, y, papel);
      x = x + mov;
    }
});