function dibujarPaisaje(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // ===== CIELO CON DEGRADADO =====
    let gradiente = ctx.createLinearGradient(0,0,0,200);
    gradiente.addColorStop(0,"#4facfe");
    gradiente.addColorStop(1,"#00f2fe");
    ctx.fillStyle = gradiente;
    ctx.fillRect(0,0,500,200);

    // ===== SUELO =====
    dibujarRectangulo(0,200,500,200,"#228B22");

    // ===== SOL =====
    dibujarCirculo(420,70,30,"yellow");

    ctx.lineWidth = 3;
    for(let i=0;i<8;i++){
        dibujarLinea(
            420,70,
            420+55*Math.cos(i*Math.PI/4),
            70+55*Math.sin(i*Math.PI/4),
            "orange"
        );
    }

    // ===== MONTAÑAS =====
    dibujarTriangulo(50,200,150,100,250,200,"#5c4033");
    dibujarTriangulo(180,200,280,120,380,200,"#654321");
    dibujarTriangulo(300,200,400,110,500,200,"#5c4033");

    // ===== ÁRBOL =====
    dibujarRectangulo(70,160,20,40,"#8B4513");

    dibujarCirculo(80,150,20,"darkgreen");
    dibujarCirculo(60,170,18,"green");
    dibujarCirculo(100,170,18,"green");

    // ===== CASA =====
    dibujarRectangulo(330,230,80,60,"#FF6347");
    dibujarTriangulo(310,230,370,180,430,230,"#8B0000");
    dibujarRectangulo(360,255,20,35,"#654321");
    dibujarRectangulo(340,240,18,18,"lightblue");
    dibujarRectangulo(390,240,18,18,"lightblue");

    // ===== FLORES =====
    function flor(x,y,colorPetalo){
        dibujarCirculo(x,y,4,"yellow");
        dibujarCirculo(x,y-10,4,colorPetalo);
        dibujarCirculo(x,y+10,4,colorPetalo);
        dibujarCirculo(x-10,y,4,colorPetalo);
        dibujarCirculo(x+10,y,4,colorPetalo);
        dibujarLinea(x,y,x,y+25,"green"); // tallo
    }

    flor(200,300,"pink");
    flor(240,320,"purple");
}