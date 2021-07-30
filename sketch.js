
var database;
var gameState = 0;
var contestentCount;
var question, contestent, quiz;
var allContestent;

var cars,car1,car2,car3,car4;



function setup(){
    createCanvas(displayWidth-20, displayHeight-30)
    database = firebase.database();

    quiz = new Quiz();
    quiz.getState();
    quiz.start();
   
}

function draw(){
    background("white");

    if(contestentCount===2){
        quiz.update(1);

    }

    if(gameState===1){
        clear();
        quiz.play();
    }
    
    
    
}






