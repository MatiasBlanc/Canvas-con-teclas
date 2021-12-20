// Variables globales
const canvas = document.getElementById('canvas');
const papel = canvas.getContext('2d');

let x = 960;
let y = 400;

const colorLinea = '#111';
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
document.addEventListener('keyup', evt => {
    if (evt.key === 'w' || evt.key === 'k' || evt.key === 'ArrowUp') {
      dibujarLinea(colorLinea, x, y, x, y - mov, papel);
      y = y - mov;
    }
    else if (evt.key === 's' || evt.key === 'j' || evt.key === 'ArrowDown') {
      dibujarLinea(colorLinea, x, y, x, y + mov, papel);
      y = y + mov;
    }
    else if (evt.key === "a" || evt.key === 'h' || evt.key === 'ArrowLeft') {
      dibujarLinea(colorLinea, x, y, x - mov, y, papel);
      x = x - mov;
    }
    else if (evt.key === "d" || evt.key === 'l' || evt.key === 'ArrowRight') {
      dibujarLinea(colorLinea, x, y, x + mov, y, papel);
      x = x + mov;
    }
});
