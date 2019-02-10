

function drawBox() {             
    contesto.fillStyle = this.fillstyle;                   
    contesto.fillRect(this.sx, this.sy, this.swidth, this.sheight); 
}      

function rectBox(sx, sy, swidth, sheight, stylestring)   {             
    this.sx = sx;             
    this.sy = sy;             
    this.swidth = swidth;             
    this.sheight = sheight;             
    this.fillstyle = stylestring;             
    this.draw = drawBox; 
}   