
function muoviMouse (ev) {
    mouse.x = ev.offsetX;
    mouse.y = ev.offsetY;
}

var mouse = {x : 0, y : 0}


function checkClick (ev) {

    if(game.schermata != 0){
        return 0;
    }

    mouse.x = ev.offsetX;
    mouse.y = ev.offsetY;

    if(checkPaintButton(100, 201, 380, 380+50, 0, 0, 167, 83, 100, 380, 101, 50, 180, 0)){
        return riparti(0);
    }
    
    if(checkPaintButton(220, 321, 380, 380+50, 0, 83, 167, 83, 220, 380, 101, 50, 180, 1))
        return riparti(1);


    if(checkPaintButton(340, 441, 380, 380+50, 0, 82*2, 167, 83, 340, 380, 101, 50, 180, 2))
        return riparti(2);

    if(checkPaintButton(460, 561, 380, 380+50, 0, 82*3, 167, 83, 460, 380, 101, 50, 180, 3))
        return riparti(3);

    if(checkPaintButtonDiff(460, 566, 450, 450+50, 0, 0, 106, 50, 460, 450, 106, 50, 109, 4))
        return diff(2);

    if(checkPaintButtonDiff(580, 686, 450, 450+50, 0, 50, 106, 50, 580, 450, 106, 50, 109, 5))
        return diff(4);
    
    if(checkPaintButtonDiff(700, 806, 450, 450+50, 0, 50*2, 106, 50, 700, 450, 106, 50, 109, 6))
    return diff(5);

}