

function drawPlayer() {         
                                           
    if (this.dir == 1) {   

        if (this.pos >= current_player1.run_frame){
             this.pos = 0;
        }             
        
        if (this.pos < 0){
            this.pos = current_player1.run_frame - 1; 
        }            
        
        if(Number.isInteger(this.pos))
            startxa = this.pos * current_player1.run;     

            if(this.sy < canvasHeight - current_player1.height){
                contesto.drawImage(sprite1_jump, current_player1.jump * this.jump, 0, current_player1.jump, current_player1.height, this.sx, this.sy, current_player1.jump, current_player1.height);
            }else{
                if(this.rest == 1){
                    contesto.drawImage(sprite1, startxa, 0, current_player1.run, current_player1.height, this.sx, this.sy, current_player1.run, current_player1.height);
                }else{
                    contesto.drawImage(sprite1_rest, this.sx, this.sy, current_player1.idle, current_player1.height);
                }
            }

            // contesto.drawImage(sprite1, startxa, 0, 79, 100, this.sx, this.sy, 79, 100);

        // if(this.sy < canvasHeight - 100){
        //     contesto.drawImage(sprite1_jump, 74 * this.jump, 0, 74, 100, this.sx, this.sy, 74, 100);
        // }else{
        //     if(this.rest == 1){
        //         contesto.drawImage(sprite1, startxa, 0, 79, 100, this.sx, this.sy, 79, 100);
        //     }else{
        //         contesto.drawImage(sprite1_rest, this.sx, this.sy, 53, 100);
        //     }
        // }

    }else {   
                  
        if (this.pos >= current_player2.run_frame){
            this.pos = 0;
        }
        if (this.pos < 0){
            this.pos = current_player1.run_frame - 1;    
        }         

        if(Number.isInteger(this.pos)){
            startxb = this.pos * current_player2.run;    
            //console.log(this.pos);
        } 

        if(this.sy < canvasHeight - current_player2.height){
            contesto.drawImage(sprite2_jump, current_player2.jump * this.jump, 0, current_player2.jump, current_player2.height, this.sx, this.sy, current_player2.jump, current_player2.height);
        }else{
            if(this.rest == 1){
                contesto.drawImage(sprite2, startxb, 0, current_player2.run, current_player2.height, this.sx, this.sy, current_player2.run, current_player2.height);
            }else{
                contesto.drawImage(sprite2_rest, this.sx, this.sy, current_player2.idle, current_player2.height);
            }
        }

            // contesto.drawImage(sprite2, startxb, 0, 79, 100, this.sx, this.sy, 79, 100);

        // if(this.sy < canvasHeight - 100){
        //     contesto.drawImage(sprite2_jump, 74 * this.jump, 0, 74, 100, this.sx, this.sy, 74, 100);
        // }else{
        //     if(this.rest == 1){
        //         contesto.drawImage(sprite2, startxb, 0, 79, 100, this.sx, this.sy, 79, 100);
        //     }else{
        //         contesto.drawImage(sprite2_rest, this.sx, this.sy, 53, 100);
        //     }
        // }

    } 
}     

function Player(sx, sy, dir){   
    //posizione          
    this.sx = sx;             
    this.sy = sy;    
    //vecchia posizione         
    this.sxOld = sx;             
    this.syOld = sy;   
    //salto          
    this.vUP = 0;      
    //funzione di disegno       
    this.draw = drawPlayer;  
    //direzione per distinguere il giocatore di sinistra da quello di destra        
    this.dir = dir;     
    
    this.jump = 0;   

    this.rest = 0;
    //     
    this.pos = 0;
}   


function dinamicaGiocatori() {                  
    // Giocatori umani             
    if (myRightPlayer.sy <= canvasHeight - 100) 
        myRightPlayer.sy -= myRightPlayer.vUP;             
        
    if (myRightPlayer.sy < canvasHeight - 100) 
        myRightPlayer.vUP -= 0.6;             
        
    if (myRightPlayer.sy > canvasHeight - 100) { 
        myRightPlayer.sy = canvasHeight - 100; 
        myRightPlayer.vUP = 0; 
        myRightPlayer.jump = 0;
    }

    if (myLeftPlayer.sy <= canvasHeight - 100) 
        myLeftPlayer.sy -= myLeftPlayer.vUP;

    if (myLeftPlayer.sy < canvasHeight - 100) 
        myLeftPlayer.vUP -= 0.6;

    if (myLeftPlayer.sy > canvasHeight - 100) {
        myLeftPlayer.sy = canvasHeight - 100;
        myLeftPlayer.vUP = 0;
        myLeftPlayer.jump = 0;
    }
                          
    // Computer                 
    if (( game.computer == 1) || (game.computer == 3)) {      
                             
        // left                                       
        if (myBall.sx > myLeftPlayer.sx + 15) {                                         
            if (myLeftPlayer.sx < (canvasWidth / 2) - 70) {                                                     
                myLeftPlayer.sx += (8 + game.diff);                                                             
                myLeftPlayer.pos += 0.5;  
                myLeftPlayer.rest = 1;                   
            }                           
        }                           
        
        if (myBall.sx < myLeftPlayer.sx + 15) {                                         
            if (myLeftPlayer.sx > -5) {                                                     
                myLeftPlayer.sx -= (8 + game.diff);                                                 
                myLeftPlayer.pos  -= 0.5; 
                myLeftPlayer.rest = 1;                   
            }                           
        }                                                     
        
        if (( myBall.sy > (canvasHeight - 260)) 
            && (myBall.sx > myLeftPlayer.sx - 45) 
            && (myBall.sx < myLeftPlayer.sx + 35) 
            && (myLeftPlayer.sy >= (canvasHeight - 100))){
                myLeftPlayer.vUP = 17;             
                myLeftPlayer.jump = Math.floor(Math.random() * (9))+1; 
            } 

    }                                       
    
    // if (( game.computer == 2) || (game.computer == 3)) {                          
    //      // right                                     
    //      if (myBall.sx > myRightPlayer.sx + 15) {                                         
    //          if (myRightPlayer.sx < canvasWidth - 50) {                                                             
    //              myRightPlayer.sx += (8 + game.diff);                                                           
    //              myRightPlayer.pos -= 1;                                         
    //         }
    //     }                           
        
    //     if (myBall.sx < myRightPlayer.sx + 15) {                                         
    //         if (myRightPlayer.sx > (canvasWidth / 2)) {                                                           
    //             myRightPlayer.sx -= (8 + game.diff);                                                           
    //             myRightPlayer.pos += 1;                                         
    //         }                            
    //     }                                                     
        
    //     if (( myBall.sy > (canvasHeight - 260)) 
    //         && (myBall.sx > myRightPlayer.sx - 35) 
    //         && (myBall.sx < myRightPlayer.sx + 45) 
    //         && (myRightPlayer.sy > (canvasHeight - 90))) 
    //         myRightPlayer.vUP = 17;             
    // }                        
}                

