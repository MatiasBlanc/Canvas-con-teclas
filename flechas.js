let teclas =
  {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };
console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
let cuadrito = document.getElementById("area_de_dibujo");
let papel = cuadrito.getContext("2d");
let x = 650;
let y = 250;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath()
  }

function dibujarTeclado(evento)
  {
    let colorsito = "black";
    let mov = 20;
   switch (evento.keyCode)
   {
     case teclas.UP:
      dibujarLinea(colorsito, x, y, x, y - mov, papel);
      y = y - mov;
     console.log("ARRIBA");
       break;

     case teclas.DOWN:
      dibujarLinea(colorsito, x, y, x, y + mov, papel);
      y = y + mov;
     console.log("ABAJO");
       break;
       default:
       console.log("otra tecla")
       break;

       case teclas.LEFT:
        dibujarLinea(colorsito, x, y, x - mov, y, papel);
        x = x - mov;
       console.log("IZQUIERDA")
         break;

        case teclas.RIGHT:
          dibujarLinea(colorsito, x, y, x + mov, y, papel);
          x = x + mov;
        console.log("DERECHA")
          break;
    }
  }
