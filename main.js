// console.log("hello world");

function getComputerChoice(){
   let number = Math.floor(Math.random()*3);
   if(number == 0){
       return "rock";
   }else if(number == 1){
       return "paper";
   }else{
       return "scissors";
   }
}



console.log(getComputerChoice());

function getUserInput(){
    let userInput = prompt("rock, paper, or scissors?");
    return userInput;
}

// console.log(getUserInput());

let humanScore = 0
let computerScore = 0


function playRound(humanChoice, computerChoice){
     humanChoice = humanChoice.toLowerCase();
    if(humanChoice == computerChoice){
        return "tie";
    }
        else if(humanChoice == "rock" && computerChoice == "scissors"){
            humanScore++;
            console.log("Human wins as rock beat scissors")
        }
        else if(humanChoice == "paper" && computerChoice == "rock"){
            humanScore++;
            console.log("Human wins as paper beat rock")
        }
        else if(humanChoice == "scissors" && computerChoice == "paper"){
            humanScore++;
            console.log("Human wins as scissors beat paper")
        }
        else{
            computerScore++;
            console.log("Computer wins as " + computerChoice + " beat " + humanChoice)
        }
    }


function playGame(){
        let humanChoice = getUserInput();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
     
        
    }
    



for(let i=0; i<5; i++){
playGame()
if(humanScore == 5){
    console.log("Human wins the game")
}else if(computerScore == 5){
    console.log("Computer wins the game")
}
    }