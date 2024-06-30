
//generates a random choice for computer
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

//initialized scores and winner text
let humanScore=0;
let computerScore=0;
let winner="";

//runs the logic by comparing player's and computer's choice
// sets value to resultText, and increments scores
function game_logic(compChoice, humanChoice){
    if(compChoice==="Paper" && humanChoice==="Rock" ||compChoice==="Rock" && humanChoice==="Scissors" || compChoice==="Scissors" && humanChoice==="Paper"){
        computerScore++;
    }else if(compChoice==="Rock" && humanChoice==="Paper" ||compChoice==="Scissors" && humanChoice==="Rock" || compChoice==="Paper" && humanChoice==="Scissors"){
        humanScore++;      
    }else if(compChoice===humanChoice){
        //Draw
    }
    else {
    console.log("IDK how you are seeing this")
    }
}

//this function updates score and gives out: 1)who won, 2)score-card
//it also disables buttons when either of the two have won
function playOneRound(humanChoice){
    let compChoice = getComputerChoice();

    game_logic(compChoice, humanChoice)

    if(humanScore==5){
        winner="PLAYER";
        disable(winner)
    }else if(computerScore==5){
        winner="COMPUTER";
        disable(winner)
    }

    // resultDiv.innerHTML=`${resultText}`;
    
    scoreDiv.innerHTML=`Computer=${computerScore} : Player=${humanScore}`
}

//adresses the button elements
const btn_rock=document.getElementById("Rock");
const btn_paper=document.getElementById("Paper");
const btn_scissors=document.getElementById("Scissors")

//addresses the result and score div for further use
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");

//add event listeners to each button
//tells what to do when each button is clicked
btn_rock.addEventListener("click", () => {playOneRound("Rock");});
btn_paper.addEventListener("click", () => {playOneRound("Paper");});
btn_scissors.addEventListener("click", () => {playOneRound("Scissors");});

//disables the buttons when either wins
//also displays the winner
function disable(winner){
    btn_paper.disabled=true;
    btn_rock.disabled=true;
    btn_scissors.disabled=true;
    console.log("Disabled buttons")
    resultDiv.innerHTML=`${winner} WON THE GAME`;
}


