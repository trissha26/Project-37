class Quiz {
    constructor() {

    }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        })
    }

    start() {
        if (gameState === 0) {
            contestent = new Contestent();
            contestent.getCount();
            question = new Question();
            question.display();

        }


    }

    play() {
        question.hide();
        background("yellow");
        textSize(30);
        text("Result Of the Quiz", 340, 50);
        Contestent.getPlayerInfo();
        if (allContestent !== undefined) {
            var answer = 230;
            fill("blue")
            textSize(20);
            text("Contestants Who Answered Correctly Are Hightlighted In Green Color", 130, 230);
            for (var plr in allContestent) {
                var correctAns = "2";
                if (correctAns === allContestent[plr].answer) {
                    fill("green");


                } else {
                    fill("red");
                }

                answer += 30;
                textSize(20)
                text(allContestent[plr].name + ": " + allContestent[plr].answer, 250, answer);



            }
        }




        drawSprites();
    }
}