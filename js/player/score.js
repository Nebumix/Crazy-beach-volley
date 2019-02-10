

function drawScore() {             
    contesto.fillStyle = this.fillstyle;                   
    contesto.fillRect(this.sx, this.sy, this.swidth, this.sheight); 

    contesto.fillStyle = "white";                   
    contesto.font = "20px arial black";
    contesto.fillText("Player 1 - "+game.puntiPlayer1+" : "+game.puntiPlayer2+" - Player 2", (canvasWidth/2) - 120, 30, 240);
}      

function scoreBox(sx, sy, swidth, sheight, stylestring)   {             
    this.sx = sx;             
    this.sy = sy;             
    this.swidth = swidth;             
    this.sheight = sheight;             
    this.fillstyle = stylestring;             
    this.draw = drawScore; 
}   