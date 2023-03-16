
function whoWins(playerChoice){    
    compChoice = randomChoice();

    console.log(compChoice + " " + playerChoice);
    switch(compChoice){

        case playerChoice:
            console.log("Draw");
            break;

        case "rock":
            playerChoice === "paper"? playerWon() : enemyWon();
            break;
        
        case "paper":
            playerChoice === "scissors"? playerWon() : enemyWon();
            break;
        
        case "scissors":
            playerChoice === "rock"? playerWon() : enemyWon();
            break;
        
        default:
            console.warn("Enemy incorrect Choice");
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