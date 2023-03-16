let playerPoints = 0;
let compPoints = 0;

function game(){
    playerPoints = 0;
    compPoints = 0;

    while (playerPoints < 3 && compPoints < 3){
        whoWins();
    }
}

function whoWins(){
    playerChoice = prompt("Choose Rock, Paper or Scissors:")

    playerChoice = playerChoice.toLowerCase();
    compChoice = randomChoice();

    console.log("Your Choice: "+ playerChoice + " " +"Enemys Choice:"+ playerChoice);
    switch(playerChoice){

        case compChoice:
            console.log("Draw");
            break;

        case "rock":
            compChoice === "scissors"? playerWon() : compWon();
            break;
        
        case "paper":
            compChoice === "rock"? playerWon() : compWon();
            break;
        
        case "scissors":
            compChoice === "paper"? playerWon() : compWon();
            break;
        
        default:
            console.warn("Incorrect Choice");
    }
}

function playerWon(){
    console.log("Player won! "+ ++playerPoints + ":"+ compPoints);
}

function compWon(){
    console.log("Enemy won! "+ playerPoints +":"+ ++compPoints);
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