// ===============================
// CONFIGURACIÓN INICIAL
// ===============================
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ===============================
// FUNCIONES POR TIPO DE FIGURA
// ===============================

// RECTÁNGULOS
function dibujarRectangulo(x, y, ancho, alto, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

// CÍRCULOS
function dibujarCirculo(x, y, radio, color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fill();
}

// TRIÁNGULOS
function dibujarTriangulo(x1,y1,x2,y2,x3,y3,color){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3,y3);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

// LÍNEAS
function dibujarLinea(x1,y1,x2,y2,color){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

// ===============================
// DIBUJO COMPLETO DEL PAISAJE
// ===============================

function dibujarPaisaje(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // RECTÁNGULOS (6)
    dibujarRectangulo(0,0,500,200,"#87CEEB");      // cielo
    dibujarRectangulo(0,200,500,200,"green");      // suelo
    dibujarRectangulo(70,160,20,40,"#8B4513");     // tronco
    dibujarRectangulo(330,230,80,60,"#FF6347");    // casa
    dibujarRectangulo(360,255,20,35,"#654321");    // puerta
    dibujarRectangulo(340,240,18,18,"lightblue");  // ventana 1
    dibujarRectangulo(390,240,18,18,"lightblue");  // ventana 2

    // CÍRCULOS (15)
    dibujarCirculo(420,70,30,"yellow"); // sol

    // copa árbol
    dibujarCirculo(80,150,20,"darkgreen");
    dibujarCirculo(60,170,18,"darkgreen");
    dibujarCirculo(100,170,18,"darkgreen");

    // flor 1
    dibujarCirculo(200,300,4,"yellow");
    dibujarCirculo(200,290,4,"pink");
    dibujarCirculo(200,310,4,"pink");
    dibujarCirculo(190,300,4,"pink");
    dibujarCirculo(210,300,4,"pink");

    // flor 2
    dibujarCirculo(240,320,4,"yellow");
    dibujarCirculo(240,310,4,"purple");
    dibujarCirculo(240,330,4,"purple");
    dibujarCirculo(230,320,4,"purple");
    dibujarCirculo(250,320,4,"purple");

    // TRIÁNGULOS (4)
    dibujarTriangulo(50,200,150,100,250,200,"#654321");
    dibujarTriangulo(180,200,280,120,380,200,"#654321");
    dibujarTriangulo(300,200,400,110,500,200,"#654321");
    dibujarTriangulo(310,230,370,180,430,230,"brown"); // techo

    // LÍNEAS (8 rayos)
    for(let i=0;i<8;i++){
        dibujarLinea(
            420,70,
            420+55*Math.cos(i*Math.PI/4),
            70+55*Math.sin(i*Math.PI/4),
            "yellow"
        );
    }
}