
function ball(sx, sy) {             
    this.sx = sx;             
    this.sy = sy;             
    this.sxOld = sx;             
    this.syOld = sy;             
    this.dx = 0;             
    this.dy = 0;             
    this.rad = ballCostume.width;             
    this.draw = drawBall; 
}     

function drawBall() {             
    contesto.drawImage(ballCostume, this.sx, this.sy); 
}     

function dinamicaPalla() {             
    // Movimento palla             
    myBall.sy -= myBall.dy;             
    myBall.sx += myBall.dx;          

    // urto il terreno             
    if (myBall.sy >= canvasHeight - 30) {
        //game.start = false;
        myBall.dx = 0;
        myBall.dy = 0;
        myBall.sy = canvasHeight - 500;
        
        if (myBall.sx < (canvasWidth / 2) - 20) {                                       
            game.puntiPlayer2++;                                         
            myBall.sx = (canvasWidth / 2) + 150;  
            // myBall.sx = Math.floor(Math.random() * (canvasWidth / 2) + 1);  
                                     
        } else {                                         
            game.puntiPlayer1++;                                         
            myBall.sx = (canvasWidth / 2) - 150;
            // myBall.sx = Math.floor(Math.random() * canvasWidth - (canvasWidth / 2) + (canvasWidth / 2)); 
        }                           
        // playSound( win);                                   
    }                                                     
    // gravità             
    /* if (game.start) */ myBall.dy -= 0.25;                                       
    
    // attrito laterale             
    if (myBall.dx > 0) myBall.dx -= 0.03;             
    if (myBall.dx < 0) myBall.dx += 0.03;    
                                       
    // velocità massima             
    let maxspeed = 15;             
    if (myBall.dx > maxspeed) myBall.dx = maxspeed;             
    if (myBall.dx < -maxspeed) myBall.dx = -maxspeed;        
                                   
    // urto la parete destra             
    if (myBall.sx >= (canvasWidth - myBall.rad)) {                           
        myBall.dx = -1 * myBall.dx;  
        myBall.sx = canvasWidth - myBall.rad;             
    }                      

    // urto la parete sinistra             
    if (myBall.sx <= 0) {                           
        myBall.dx = -1 * myBall.dx;   
        myBall.sx = 0;             
    }                                       
    
    // urto il personaggio destro             
    if (( myBall.sx > (myRightPlayer.sx - myBall.rad)) 
        && (myBall.sx < (myRightPlayer.sx + myBall.rad)) 
        && (myBall.sy > (myRightPlayer.sy - 20 - myBall.rad))) {  
            
                                  
            //playSound( boing);                                     
            // if (! game.start) 
            //     game.start = true;              
                                                                     
            if (myBall.sy < (myRightPlayer.sy + 35 - myBall.rad))            
                myBall.dy = 5 + (myRightPlayer.vUP / 2) + (( Math.random() * 3) -1.5);   
                                        
                // la palla va ->                           
                if (myBall.dx > 0) {                                       
                    if (myBall.sx <= myRightPlayer.sx) myBall.dx = -1 * myBall.dx;                           
                }                          

                // la palla va <-                           
                if (myBall.dx < 0) {                                       
                    if (myBall.sx > myRightPlayer.sx) myBall.dx = -1 * myBall.dx;                           
                }                                        

                myBall.dx -= (( myRightPlayer.sx - myBall.sx) / 10);             
    }         
        
    
    // urto il personaggio sinistro             
    if (( myBall.sx > (myLeftPlayer.sx - myBall.rad)) 
        && (myBall.sx < (myLeftPlayer.sx + myBall.rad)) 
        && (myBall.sy > (myLeftPlayer.sy - 20 - myBall.rad))) {


            //playSound( boing);                           
            //if (!game.start) game.start = true;   
                                                  
            if (myBall.sy < (myLeftPlayer.sy + 35 - myBall.rad)) 
                myBall.dy = 5 + (myLeftPlayer.vUP / 2) + (( Math.random() * 3) -1.5);    
                                       
            // la palla va ->                           
            if (myBall.dx > 0) {                                         
                if (myBall.sx <= myLeftPlayer.sx) myBall.dx = -1 * myBall.dx;                           
            }       
                                
            // la palla va <-
            if (myBall.dx < 0) { 
                if (myBall.sx > myLeftPlayer.sx) myBall.dx = -1 * myBall.dx;                           
            }             
                          
            myBall.dx -= (( myLeftPlayer.sx - myBall.sx) / 10);             
    }                                    

    // urto la rete             
    if (( myBall.sx >= (( canvasWidth / 2) - myBall.rad)) 
        && (myBall.sx <= (canvasWidth / 2)) 
        && (myBall.sy > (canvasHeight - 140))) {       

            if (myBall.sy < (canvasHeight - 180)) myBall.dy = -1 * myBall.dy;      

            // la palla va -> 
            if (myBall.dx > 0) {
                if (myBall.sx <= (( canvasWidth / 2) - (myBall.rad / 2))) myBall.dx = -1 * myBall.dx;                           
            }                   
                    
            // la palla va <-                           
            if (myBall.dx < 0) {
                if (myBall.sx > (( canvasWidth / 2) - (myBall.rad / 2))) myBall.dx = -1 * myBall.dx;                           
            }             
    } 
}    