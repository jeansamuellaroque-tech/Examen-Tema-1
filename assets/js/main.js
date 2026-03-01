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

// Obtiene el elemento canvas del HTML
const canvas = document.getElementById("canvas");

// Obtiene el contexto 2D para dibujar
const ctx = canvas.getContext("2d");


/* ============================================================
   FUNCIONES GENERALES POR TIPO DE FIGURA
   ============================================================ */

/**
 * Dibuja un rectángulo relleno.
 * @param {number} x - Posición horizontal inicial
 * @param {number} y - Posición vertical inicial
 * @param {number} ancho - Ancho del rectángulo
 * @param {number} alto - Alto del rectángulo
 * @param {string} color - Color de relleno
 */
function dibujarRectangulo(x, y, ancho, alto, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}


/**
 * Dibuja un círculo relleno.
 * @param {number} x - Centro en eje X
 * @param {number} y - Centro en eje Y
 * @param {number} radio - Radio del círculo
 * @param {string} color - Color de relleno
 */
function dibujarCirculo(x, y, radio, color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fill();
}


/**
 * Dibuja un triángulo relleno.
 * @param {number} x1,y1 - Primer punto
 * @param {number} x2,y2 - Segundo punto
 * @param {number} x3,y3 - Tercer punto
 * @param {string} color - Color de relleno
 */
function dibujarTriangulo(x1,y1,x2,y2,x3,y3,color){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3,y3);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}


/**
 * Dibuja una línea.
 * @param {number} x1 - Punto inicial X
 * @param {number} y1 - Punto inicial Y
 * @param {number} x2 - Punto final X
 * @param {number} y2 - Punto final Y
 * @param {string} color - Color de la línea
 */
function dibujarLinea(x1,y1,x2,y2,color){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}


/* ============================================================
   FUNCIÓN PRINCIPAL: DIBUJAR PAISAJE
   ============================================================ */

/**
 * Genera el dibujo completo del paisaje.
 * Organizado por tipo de figura utilizada.
 */
function dibujarPaisaje(){

    // Limpia el canvas antes de redibujar
    ctx.clearRect(0,0,canvas.width,canvas.height);


    // ========================================================
    // RECTÁNGULOS
    // ========================================================

    dibujarRectangulo(0,0,500,200,"#87CEEB");      // Cielo
    dibujarRectangulo(0,200,500,200,"green");      // Suelo
    dibujarRectangulo(70,160,20,40,"#8B4513");     // Tronco árbol
    dibujarRectangulo(330,230,80,60,"#FF6347");    // Base casa
    dibujarRectangulo(360,255,20,35,"#654321");    // Puerta
    dibujarRectangulo(340,240,18,18,"lightblue");  // Ventana izquierda
    dibujarRectangulo(390,240,18,18,"lightblue");  // Ventana derecha


    // ========================================================
    // CÍRCULOS
    // ========================================================

    dibujarCirculo(420,70,30,"yellow"); // Sol

    // Copa del árbol
    dibujarCirculo(80,150,20,"darkgreen");
    dibujarCirculo(60,170,18,"darkgreen");
    dibujarCirculo(100,170,18,"darkgreen");

    // Flor 1
    dibujarCirculo(200,300,4,"yellow");
    dibujarCirculo(200,290,4,"pink");
    dibujarCirculo(200,310,4,"pink");
    dibujarCirculo(190,300,4,"pink");
    dibujarCirculo(210,300,4,"pink");

    // Flor 2
    dibujarCirculo(240,320,4,"yellow");
    dibujarCirculo(240,310,4,"purple");
    dibujarCirculo(240,330,4,"purple");
    dibujarCirculo(230,320,4,"purple");
    dibujarCirculo(250,320,4,"purple");


    // ========================================================
    // TRIÁNGULOS
    // ========================================================

    dibujarTriangulo(50,200,150,100,250,200,"#654321");
    dibujarTriangulo(180,200,280,120,380,200,"#654321");
    dibujarTriangulo(300,200,400,110,500,200,"#654321");
    dibujarTriangulo(310,230,370,180,430,230,"brown"); // Techo


    // ========================================================
    // LÍNEAS
    // ========================================================

    // Rayos del sol (8 líneas)
    for(let i=0;i<8;i++){
        dibujarLinea(
            420,70,
            420+55*Math.cos(i*Math.PI/4),
            70+55*Math.sin(i*Math.PI/4),
            "yellow"
        );
    }
}