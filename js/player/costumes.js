
var current_player1 = {};
var current_player2 = {};

var ninja = {
    jump: 74,
    idle: 53,
    run: 79,
    height: 100,
    costum_run_l: "./sprites/ninja_run_s1.png",
    costum_jump_l: "./sprites/ninja_jump_s1.png",
    costum_idle_l: "./sprites/ninja1.png",    
    costum_run_r: "./sprites/ninja_run_s1_b.png",
    costum_jump_r: "./sprites/ninja_jump_s1_b.png",
    costum_idle_r: "./sprites/ninja1_b.png",
    jump_frame: 10,
    run_frame: 10
};

var zucca = {
    jump: 76,
    idle: 64,
    run: 75,
    height: 100,
    costum_run_l: "./sprites/zucca_run_s.png",
    costum_jump_l: "./sprites/zucca_jump_s.png",
    costum_idle_l: "./sprites/zucca_s.png",    
    costum_run_r: "./sprites/zucca_run_sb.png",
    costum_jump_r: "./sprites/zucca_jump_sb.png",
    costum_idle_r: "./sprites/zucca_sb.png",
    jump_frame: 10,
    run_frame: 8
};

function set_player1(num_costm){
    switch(num_costm){
        case 1:
            current_player1 = ninja;
            sprite1.src = ninja.costum_run_l;
            sprite1_jump.src = ninja.costum_jump_l;
            sprite1_rest.src = ninja.costum_idle_l;
            break;

        case 2:
            current_player1 = zucca;
            sprite1.src = zucca.costum_run_l;
            sprite1_jump.src = zucca.costum_jump_l;
            sprite1_rest.src = zucca.costum_idle_l;
            break;
    }
    
}

function set_player2(num_costm){
    switch(num_costm){
        case 1:
            current_player2 = ninja;
            sprite2.src = ninja.costum_run_r;
            sprite2_jump.src = ninja.costum_jump_r;
            sprite2_rest.src = ninja.costum_idle_r;
            break;

        case 2:
            current_player2 = zucca;
            sprite2.src = zucca.costum_run_r;
            sprite2_jump.src = zucca.costum_jump_r;
            sprite2_rest.src = zucca.costum_idle_r;
            break;
    }
    
}