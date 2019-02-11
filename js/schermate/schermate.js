
function screenGame(){
    let i;
                               
    contesto.fillStyle = "rgb(0,0,0)";             
    
    for (i = 0; i < oggetti.length; i++){                         
        oggetti[i].draw();             
    }    
}

let play_led = 0;
let play_pos = 0;

function screenMenu(){
    // let my_gradient = contesto.createLinearGradient(0, 0, 0, 170);
    // my_gradient.addColorStop(0, "black");
    // my_gradient.addColorStop(1, "blue");
    // contesto.fillStyle = my_gradient;
    // contesto.fillRect(0, 0, canvas.width, canvas.height);

    contesto.drawImage(backgroundMenu, 0, 0);

    contesto.fillStyle = "white";   
    contesto.fillRect((canvas.width/2), 0, 5, (canvas.height/3)*2);
    contesto.fillRect(0, (canvas.height/3)*2, canvas.width, 5);


    // contesto.drawImage(buttonNinja, 50, 150);
    // contesto.drawImage(buttonZucca, 180, 150);

    // contesto.drawImage(buttonNinja, (canvas.width/2) + 50, 150);
    // contesto.drawImage(buttonZucca, (canvas.width/2) + 180, 150);

    // console.log(mouse.x);
    // console.log(mouse.y);
    // if(mouse.x > 100 && mouse.x < 201 && mouse.y > 380 && mouse.y < 380 + 50){
    //     contesto.drawImage(buttonVS, 180, 0, 167, 83, 100, 380, 101, 50);
    // }else{
    //     contesto.drawImage(buttonVS, 0, 0, 167, 83, 100, 380, 101, 50);
    // }

    // if(mouse.x > 220 && mouse.x < 321 && mouse.y > 380 && mouse.y < 380 + 50){
    //     contesto.drawImage(buttonVS, 180, 83, 167, 83, 220, 380, 101, 50);
    // }else{
    //     contesto.drawImage(buttonVS, 0, 83, 167, 83, 220, 380, 101, 50);
    // }

    // if(mouse.x > 340 && mouse.x < 441 && mouse.y > 380 && mouse.y < 380 + 50){
    //     contesto.drawImage(buttonVS, 180, 82 * 2, 167, 83, 340, 380, 101, 50);
    // }else{
    //     contesto.drawImage(buttonVS, 0, 82 * 2, 167, 83, 340, 380, 101, 50);
    // }

    // if(mouse.x > 460 && mouse.x < 561 && mouse.y > 380 && mouse.y < 380 + 50){
    //     contesto.drawImage(buttonVS, 180, 82 * 3, 167, 83, 460, 380, 101, 50);
    // }else{
    //     contesto.drawImage(buttonVS, 0, 82 * 3, 167, 83, 460, 380, 101, 50);
    // }

    checkPaintButton(100, 201, 380, 380+50, 0, 0, 167, 83, 100, 380, 101, 50, 178, 0);
    checkPaintButton(220, 321, 380, 380+50, 0, 83, 167, 83, 220, 380, 101, 50, 178, 1);
    checkPaintButton(340, 441, 380, 380+50, 0, 82*2, 167, 83, 340, 380, 101, 50, 178, 2);
    checkPaintButton(460, 561, 380, 380+50, 0, 82*3, 167, 83, 460, 380, 101, 50, 178, 3);

    checkPaintButtonDiff(460, 566, 450, 450+50, 0, 0, 106, 50, 460, 450, 106, 50, 109, "easy");
    checkPaintButtonDiff(580, 686, 450, 450+50, 0, 50, 106, 50, 580, 450, 106, 50, 109, "medium");
    checkPaintButtonDiff(700, 806, 450, 450+50, 0, 50*2, 106, 50, 700, 450, 106, 50, 109, "hard");

    checkPaintButtonLeftPlayer(50, 150, 50, 150, 0, 0, 144, 144, 50, 50, 100, 100, 158, "button_zucca_left");
    checkPaintButtonLeftPlayer(180, 280, 50, 150, 0, 144, 144, 144, 180, 50, 100, 100, 158, "button_ninja_left");

    checkPaintButtonRightPlayer(canvas.width/2 + 50, canvas.width/2 + 150, 50, 150, 0, 0, 144, 144, canvas.width/2 + 50, 50, 100, 100, 158, "button_zucca_right");
    checkPaintButtonRightPlayer(canvas.width/2 + 180, canvas.width/2 + 280, 50, 150, 0, 144, 144, 144, canvas.width/2 + 180, 50, 100, 100, 158, "button_ninja_right");

    play_led += 0.18;
    if(play_led > 1){
        led_play_button();
        play_led = 0;
    }

    contesto.drawImage(buttonPlay, play_pos, 0, 306, 150, (canvas.width/2) - (163/2), canvas.height/2 + 20, 163, 80);

    contesto.drawImage(cursor, mouse.x, mouse.y);
}

function led_play_button(){

    if(play_pos == 0){
        play_pos = 325;
    }else{
        play_pos = 0;
    }
}

function checkPaintButton(limXStart, limXEnd, limYStart, limYEnd, ax, ay, bx, by, cx, cy, dx, dy, ax2, type){

    if(type == 0 && game.computer == 0){
        contesto.drawImage(buttonVS, ax2 + 176, ay, bx, by, cx, cy, dx, dy);
        return 0;
    }

    if(type == 1 && game.computer == 1){
        contesto.drawImage(buttonVS, ax2 + 176, ay, bx, by, cx, cy, dx, dy);
        return 0;
    }

    if(type == 2 && game.computer == 2){
        contesto.drawImage(buttonVS, ax2 + 176, ay, bx, by, cx, cy, dx, dy);
        return 0;
    }

    if(type == 3 && game.computer == 3){
        contesto.drawImage(buttonVS, ax2 + 176, ay, bx, by, cx, cy, dx, dy);
        return 0;
    }

    if(mouse.x > limXStart && mouse.x < limXEnd && mouse.y > limYStart && mouse.y < limYEnd){
        contesto.drawImage(buttonVS, ax2, ay, bx, by, cx, cy, dx, dy);
        return 1;
    }else{
        contesto.drawImage(buttonVS, ax, ay, bx, by, cx, cy, dx, dy);
    }
}

function checkPaintButtonDiff(limXStart, limXEnd, limYStart, limYEnd, ax, ay, bx, by, cx, cy, dx, dy, ax2, type){

    //contesto.drawImage(buttonDiff, ax, ay, bx, by, cx, cy, dx, dy);

    if(type == "easy" && game.diff == 2){
        contesto.drawImage(buttonDiff, ax2 + 106, ay, bx, by, cx, cy, dx, dy);
        return 0;
    }

    if(type == "medium" && game.diff == 4){
        contesto.drawImage(buttonDiff, ax2 + 106, ay, bx, by, cx, cy, dx, dy);
        return 0;
    }

    if(type == "hard" && game.diff == 5){
        contesto.drawImage(buttonDiff, ax2 + 106, ay, bx, by, cx, cy, dx, dy);
        return 0;
    }

    if(mouse.x > limXStart && mouse.x < limXEnd && mouse.y > limYStart && mouse.y < limYEnd){
        contesto.drawImage(buttonDiff, ax2, ay, bx, by, cx, cy, dx, dy);
        return 1;
    }else{
        contesto.drawImage(buttonDiff, ax, ay, bx, by, cx, cy, dx, dy);
    }

}

function checkPaintButtonLeftPlayer(limXStart, limXEnd, limYStart, limYEnd, ax, ay, bx, by, cx, cy, dx, dy, ax2, type){

    // contesto.drawImage(buttonLeftPlayers, ax, ay, bx, by, cx, cy, dx, dy);

    if(type == "button_zucca_left" && game.costum_left == 2){
        contesto.drawImage(buttonLeftPlayers, ax2 + 160, ay, bx, by, cx, cy, dx, dy);
        return 0;
    }

    if(type == "button_ninja_left" && game.costum_left == 1){
        contesto.drawImage(buttonLeftPlayers, ax2 + 160, ay, bx, by, cx, cy, dx, dy);
        return 0;
    }

    if(mouse.x > limXStart && mouse.x < limXEnd && mouse.y > limYStart && mouse.y < limYEnd){
        contesto.drawImage(buttonLeftPlayers, ax2, ay, bx, by, cx, cy, dx, dy);
        return 1;
    }else{
        contesto.drawImage(buttonLeftPlayers, ax, ay, bx, by, cx, cy, dx, dy);
    }

}


function checkPaintButtonRightPlayer(limXStart, limXEnd, limYStart, limYEnd, ax, ay, bx, by, cx, cy, dx, dy, ax2, type){

    // contesto.drawImage(buttonRightPlayers, ax, ay, bx, by, cx, cy, dx, dy);

    if(type == "button_zucca_right" && game.costum_right == 2){
        contesto.drawImage(buttonRightPlayers, ax2 + 160, ay, bx, by, cx, cy, dx, dy);
        return 0;
    }

    if(type == "button_ninja_right" && game.costum_right == 1){
        contesto.drawImage(buttonRightPlayers, ax2 + 160, ay, bx, by, cx, cy, dx, dy);
        return 0;
    }

    if(mouse.x > limXStart && mouse.x < limXEnd && mouse.y > limYStart && mouse.y < limYEnd){
        contesto.drawImage(buttonRightPlayers, ax2, ay, bx, by, cx, cy, dx, dy);
        return 1;
    }else{
        contesto.drawImage(buttonRightPlayers, ax, ay, bx, by, cx, cy, dx, dy);
    }

}

function checkPlayButton(limXStart, limXEnd, limYStart, limYEnd){

    if(mouse.x > limXStart && mouse.x < limXEnd && mouse.y > limYStart && mouse.y < limYEnd){
        return 1;
    }
}