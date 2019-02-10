
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
    contesto.fillRect((canvas.width/2), 0, 5, canvas.height);


    contesto.drawImage(buttonNinja, 50, 150);
    contesto.drawImage(buttonZucca, 180, 150);

    contesto.drawImage(buttonNinja, (canvas.width/2) + 50, 150);
    contesto.drawImage(buttonZucca, (canvas.width/2) + 180, 150);
}