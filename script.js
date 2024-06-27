// to get the computer's choice:
function getComputerChoice(){
    let rNum=Math.floor(Math.random()*3)+1;
    let compChoice;
    switch(rNum){
        case 1:
            compChoice= "Rock";
            break;
        case 2:
            compChoice= "Paper";
            break;
        case 3:
            compChoice= "Scissors";
            break;
        default:
            console.log("don't worry")
    }
    return compChoice;
}

// to get human choice:
function getHumanChoice(){
    let humanChoice;
    let humanChoiceNum=prompt("Press 1 for ROCK, 2 for PAPER, 3 for Scissors");
    switch(parseInt(humanChoiceNum)){
        case 1:
            humanChoice= "Rock";
            break;
        case 2:
            humanChoice= "Paper";
            break;
        case 3:
            humanChoice= "Scissors";
            break;
        default:
            console.log("Invalid Input ＼(｀0´)／¯")
    }
    return humanChoice;
}

//initialized scores
let humanScore=0;
let computerScore=0;

// Logic to play single round
function playOneRound(){
    let compChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log(`Computer picked ${compChoice}`);
    console.log(`Player picked ${humanChoice}`);

    if(compChoice==="Paper" && humanChoice==="Rock" ||compChoice==="Rock" && humanChoice==="Scissors" || compChoice==="Scissors" && humanChoice==="Paper"){
        computerScore++;
    }else if(compChoice==="Rock" && humanChoice==="Paper" ||compChoice==="Scissors" && humanChoice==="Rock" || compChoice==="Paper" && humanChoice==="Scissors"){
        humanScore++;
    }else if(compChoice===humanChoice){
        console.log("Draw");
    }
    else {
        console.log("IDK how you are seeing this")
    }

    console.log(`Score Computer: ${computerScore}, Player: ${humanScore}`);

    console.log("----------------------------------------------------------------")
}

function playGame(){

    while(humanScore<5 && computerScore <5){
        playOneRound();
        alert("Press OK when You are ready for the next Round")
    }

    let winner;
    if(humanScore===5){
        winner="PLAYER";
    }else if(computerScore===5){
        winner="COMPUTER";
    }

    console.log(`${winner} WON !!!! CONGRATULATIONS`)
}

playGame();