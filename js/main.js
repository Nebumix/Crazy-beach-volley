//file js
"use strict";

var canvas = document.getElementById("canvasvolley"); 
var contesto;
var rete;
var myLeftPlayer;
var myRightPlayer;
var startxa;
var startxb;
var myBall;
var score;
// var choiche_player1;
// var choiche_player2;

var oggetti = new Array();

var canvasWidth; 
var canvasHeight; 

var sprite1 = new Image();     
//sprite1.src = "./sprites/ninja_run_s1.png"; 
var sprite1_jump = new Image();     
//sprite1_jump.src = "./sprites/ninja_jump_s1.png"; 
var sprite1_rest = new Image();     
//sprite1_rest.src = "./sprites/ninja1.png"; 

var sprite2 = new Image();     
// sprite2.src = "./sprites/ninja_run_s1_b.png"; 
var sprite2_jump = new Image();     
// sprite2_jump.src = "./sprites/ninja_jump_s1_b.png"; 
var sprite2_rest = new Image();     
// sprite2_rest.src = "./sprites/ninja1_b.png"; 

var ballCostume = new Image();     
ballCostume.src = "./sprites/palla4.png"; 

var buttonNinja = new Image();     
buttonNinja.src = "./sprites/button_ninja.png"; 

var buttonZucca = new Image();
buttonZucca.src = "./sprites/button_zucca.png";

var buttonVS = new Image();
buttonVS.src = "./sprites/buttons_versus1.png";

var cursor = new Image();
cursor.src = "./sprites/cursor.png";


var Key = {             
    premuto: {},             
    LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, LEFT1: 65, RIGHT1: 68, UP1: 87,       
          
    isDown: function(keyCode) {                         
        return this.premuto[keyCode];             
    },             
    
    onKeydown: function(event) {                           
        this.premuto[event.keyCode] = true;   
    },               
    
    onKeyup: function(event) {                         
        delete this.premuto[event.keyCode];
    } 
}             

function disegnaScena() { 
       
    contesto.clearRect(0, 0, canvas.width, canvas.height);

    switch(game.schermata) {
        case 0:
            screenMenu()
          break;
        case 1:
            screenGame()
        break;
        default:
          // code block
    }             
}

function gameLoop() {   
    if (!game.pause) {
        //salvo le posizioni correnti dei giocatori e della palla                           
        // myLeftPlayer.sxOld = myLeftPlayer.sx;                           
        // myLeftPlayer.syOld = myLeftPlayer.sy;    
        //                        
        // myRightPlayer.sxOld = myRightPlayer.sx;                           
        // myRightPlayer.syOld = myRightPlayer.sy;   
        //                         
        // myBall.sxOld = myBall.sx;                           
        // myBall.syOld = myBall.sy;   
                               
        acquisizioneInput();                           
        dinamicaGiocatori();                           
        dinamicaPalla();                           
        disegnaScena();             
    } 
    requestAnimationFrame(gameLoop);        
}

function init(){
    //se esiste il canvas, se non esiste il canvas, canvas è uguale a null
    if (canvas.getContext) {                         




        set_player1(2);
        set_player2(2);


        contesto = canvas.getContext("2d");    
        canvasWidth = canvas.width;                           
        canvasHeight = canvas.height;     
                       
        rete = new rectBox( (canvasWidth / 2) - 1, canvasHeight - 80, 5, 200, "#644" );   
        score = new scoreBox(0, 0, canvasWidth, 40, "#000" );   


        myLeftPlayer = new Player(100, 10, 1);   
        myRightPlayer = new Player(canvasWidth - 100, 10, 0);         
   
        myBall = new ball(150, 150);                           

        oggetti.push(rete);
        oggetti.push(myBall);                           
        oggetti.push(myLeftPlayer);                           
        oggetti.push(myRightPlayer);  
        oggetti.push(score);


        window.addEventListener('keydown', doKeyDown, false); 
                                  
        window.addEventListener('keyup', function(event) {                                 
            Key.onKeyup(event); 
        }, false);                           
        
        window.addEventListener('keydown', function(event) {                             
            Key.onKeydown(event); 
        }, false);           
        
        canvas.addEventListener('mousemove', muoviMouse, false);                  
        canvas.addEventListener('click', checkClick, false);                  

        //setInterval(gameLoop, intervallo);      
        gameLoop();
    }
}


//var intervallo = 18;

//init();