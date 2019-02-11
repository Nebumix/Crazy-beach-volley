
function screenGame(){
    let i;
                               
    contesto.fillStyle = "rgb(0,0,0)";             
    
    for (i = 0; i < oggetti.length; i++){                         
        oggetti[i].draw();             
    }    
}

function screenMenu(){
    let my_gradient = contesto.createLinearGradient(0, 0, 0, 170);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(1, "blue");
    contesto.fillStyle = my_gradient;
    contesto.fillRect(0, 0, canvas.width, canvas.height);

    contesto.fillStyle = "white";   
    contesto.fillRect((canvas.width/2), 0, 5, (canvas.height/3)*2);
    contesto.fillRect(0, (canvas.height/3)*2, canvas.width, 5);


    contesto.drawImage(buttonNinja, 50, 150);
    contesto.drawImage(buttonZucca, 180, 150);

    contesto.drawImage(buttonNinja, (canvas.width/2) + 50, 150);
    contesto.drawImage(buttonZucca, (canvas.width/2) + 180, 150);

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

    checkPaintButton(100, 201, 380, 380+50, 0, 0, 167, 83, 100, 380, 101, 50, 180, 0);
    checkPaintButton(220, 321, 380, 380+50, 0, 83, 167, 83, 220, 380, 101, 50, 180, 1);
    checkPaintButton(340, 441, 380, 380+50, 0, 82*2, 167, 83, 340, 380, 101, 50, 180, 2);
    checkPaintButton(460, 561, 380, 380+50, 0, 82*3, 167, 83, 460, 380, 101, 50, 180, 3);

    contesto.drawImage(cursor, mouse.x, mouse.y);
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