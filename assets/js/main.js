/**
 * ============================================================
 *  PROYECTO:      Proyecto API Canvas 2D
 *  DESCRIPCIÓN:   Dibujo de un paisaje utilizando figuras
 *                 básicas (rectángulos, círculos, triángulos
 *                 y líneas) organizadas por tipo de figura.
 *                 
 *  AUTOR:         Jean Samuel Laroque
 *  FECHA:         2026
 *  VERSIÓN:       1.0
 *  ASIGNATURA:    Graficacion
 *  DOCENTE:       M.C. Víctor Manuel Pinedo Fernández
 * ============================================================
 */


/* ============================================================
   CONFIGURACIÓN INICIAL
   ============================================================ */

const canvas = document.getElementById("barcoCanvas");
const ctx = canvas.getContext("2d");

/* ================= FIGURAS RECTANGULARES ================= */
function dibujarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

/* ================= FIGURAS CIRCULARES ================= */
function dibujarCirculo(x, y, radio, color) {
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

/* ================= FIGURAS TRIANGULARES ================= */
function dibujarTriangulo(x1,y1,x2,y2,x3,y3,color) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3,y3);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

/* ================= POLÍGONOS ================= */
function dibujarPoligono(puntos, color){
    ctx.beginPath();
    ctx.moveTo(puntos[0][0], puntos[0][1]);
    for(let i=1;i<puntos.length;i++){
        ctx.lineTo(puntos[i][0], puntos[i][1]);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

/* ================= ESCENA ================= */

function dibujarEscena(){
    dibujarCielo();
    dibujarMar();
    dibujarBarco();
}

/* ================= CIELO ================= */
function dibujarCielo(){
    dibujarRectangulo(0,0,600,400,"#87CEEB"); // 1
    dibujarCirculo(80,80,40,"yellow");        // 2
}

/* ================= MAR ================= */
function dibujarMar(){
    dibujarRectangulo(0,300,600,100,"#1e90ff"); // 3

    // 🔹 3 olas pequeñas bien al extremo izquierdo
    for (let i = 0; i < 3; i++) {
    dibujarCirculo(20 + i * 50, 300, 20, "white");
    }

    // 🔹 3 olas pequeñas bien al extremo derecho
    for (let i = 0; i < 3; i++) {
    dibujarCirculo(480 + i * 50, 300, 20, "white");
    }



}

/* ================= BARCO ================= */
function dibujarBarco(){

    // Casco (2 polígonos)
    dibujarPoligono([
        [100,250],
        [500,250],
        [450,300],
        [150,300]
    ], "black"); // 11

    dibujarPoligono([
        [150,300],
        [450,300],
        [430,330],
        [170,330]
    ], "red"); // 12

    // Cabina
    dibujarRectangulo(200,200,250,50,"white"); // 13

    // 8 ventanas un poco más a la izquierda
    for(let i = 0; i < 8; i++){
    dibujarCirculo(185 + i * 35, 270, 8, "gold");
    }



    // 3 chimeneas (6 rectángulos)
    for(let i=0;i<3;i++){
        dibujarRectangulo(240 + i*70,130,40,70,"orange"); // 21-23
        dibujarRectangulo(240 + i*70,130,40,15,"black");  // 24-26
    }

    // 1 mástil
    dibujarRectangulo(325,120,5,80,"brown"); // 27

    // 1 bandera
    dibujarTriangulo(325,120,360,135,325,150,"blue"); // 28

    // 2 detalles extra en cubierta
    dibujarRectangulo(220,240,20,10,"gray"); // 29
    dibujarRectangulo(380,240,20,10,"gray"); // 30
}

window.onload = function() {
    dibujarEscena();
};