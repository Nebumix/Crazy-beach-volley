

function acquisizioneInput() {      
        
    if (Key.isDown(Key.LEFT1)) {                           
        if (myLeftPlayer.sx > 0) {                           
            myLeftPlayer.sx -= 8;   
            myLeftPlayer.pos -= 0.5;        
            myLeftPlayer.rest = 1;                   
        }            
    }       
    
    if (Key.isDown(Key.RIGHT1)) {     
        if (myLeftPlayer.sx + (sprite1.width / 10) < (canvasWidth / 2)) {            
            myLeftPlayer.sx += 8;
            myLeftPlayer.pos += 0.5;  
            myLeftPlayer.rest = 1;                   
        }                      
    }

    if(!Key.isDown(Key.LEFT1) && !Key.isDown(Key.RIGHT1) )  {
        myLeftPlayer.rest = 0;
    }        
    
    if (Key.isDown(Key.LEFT) && (( game.computer != 1) || (game.computer != 3)) ) {                           
        if (myRightPlayer.sx > (canvasWidth / 2)) {
            myRightPlayer.sx -= 8;   
            myRightPlayer.pos += 0.5;   
            myRightPlayer.rest = 1;    
        }             
    }           
    
    if (Key.isDown(Key.RIGHT) && (( game.computer != 1) || (game.computer != 3))) {                           
        if (myRightPlayer.sx < canvasWidth - 74) {
            myRightPlayer.sx += 8; 
            myRightPlayer.pos -= 0.5;  
            myRightPlayer.rest = 1;                                                                    
        }             
    } 

    if(!Key.isDown(Key.LEFT) && !Key.isDown(Key.RIGHT) )  {
        myRightPlayer.rest = 0;
    }        

}            

function doKeyDown(eve) {                          
    var key = eve.keyCode;      
               
    if ((key == 38) && (myRightPlayer.sy >= canvasHeight - 100)) {
        myRightPlayer.vUP = 17;           
        myRightPlayer.jump = Math.floor(Math.random() * (current_player2.run_frame - 1))+1; 
    }                      
        
    if ((key == 87) && (myLeftPlayer.sy >= canvasHeight - 100)) {
        myLeftPlayer.vUP = 17;       
        myLeftPlayer.jump = Math.floor(Math.random() * (current_player1.run_frame - 1))+1; 
    }           
        
    if (key == 80) {
        if (game.pause == true) {
            game.pause = false;     
        }else{
            game.pause = true; 
        }
    }
} 