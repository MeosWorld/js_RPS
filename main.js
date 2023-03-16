
function whoWins(playerChoice = ""){

    playerChoice = playerChoice.toLowerCase();
    compChoice = randomChoice();

    console.log(compChoice + " " + playerChoice);
    switch(playerChoice){

        case compChoice:
            console.log("Draw");
            break;

        case "rock":
            compChoice === "paper"? playerWon() : enemyWon();
            break;
        
        case "paper":
            compChoice === "scissors"? playerWon() : enemyWon();
            break;
        
        case "scissors":
            compChoice === "rock"? playerWon() : enemyWon();
            break;
        
        default:
            console.warn("Incorrect Choice");
    }
}

function playerWon(){
    console.log("Player won!");
}

function enemyWon(){
    console.log("Enemy won!");
}

function randomChoice(){
    let rnd = Math.random();

    if (rnd < (1/3))
        {return "rock";}
    else if (rnd < (2/3))
        {return "paper";}
    else
        {return "scissors";}
}