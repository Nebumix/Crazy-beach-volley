
var game = {             
    pause : false,             
    puntiPlayer1 : 0,             
    puntiPlayer2 : 0,             
    sound : true,             
    reset : resetGame,             
    computer : 1, // 0: nessuno   1: left   2: right   3: entrambi computer 
    diff : 2, // difficoltà computer        valori  2 4 5   
    start: false,
    schermata : 0,
    costum_left : 1,
    costum_right: 2
}            

function resetGame() {             
    myBall.dx = 0;                         
    myBall.dy = 0;                         
    myBall.sy = canvasHeight - 200;             
    myBall.sx = (canvasWidth / 2) + 150;             
    myLeftPlayer.sx = 100;             
    myRightPlayer.sx = canvasWidth - 100;                                                     
    this.puntiPlayer1 = 0;             
    this.puntiPlayer2 = 0;             
    // document.getElementById("Player1Score").innerHTML = 0;             
    // document.getElementById("Player2Score").innerHTML = 0; 
}      

function riparti(conf) {             
    contesto.clearRect(0,0, canvasWidth, canvasHeight);             
    //playSound( start);                     
    game.start = false;                 
    // 0: Player vs Player             
    // 1: Computer vs Player             
    // 2: Player vs Computer             
    // 3: Computer vs Computer             
    game.computer = conf;                                         
    game.reset(); 
}        

function diff(val) {             
    game.diff = val;       
}        

function set_costum_left(num) {             
    game.costum_left = num;       
}      

function set_costum_right(num) {             
    game.costum_right = num;       
}      

function set_schermata(num) {             
    game.schermata = num;       
}      