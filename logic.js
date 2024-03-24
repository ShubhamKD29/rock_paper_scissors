let  userScore=0;
let computerScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#change");


const genCompChoice = () =>{
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame = () =>{
    console.log("the game was a draw");
    msg.innerText = "Play again it's a draw";
}

const playGame = (userChoice) =>{
    console.log("the user choice is ",userChoice);
    const compChoice = genCompChoice();
    console.log("the computer choice is ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // comp = paper/scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //comp = rock,scissors
            userWin = compChoice === "rock" ? true : false;
        }else{
            //comp =rock/paper 
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
        }
    };


choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    });
});

const showWinner = (userWin) =>{
    if(userWin){
        console.log("you win!");
        msg.innerText = ("Congratulations! You Win");
    }else{
        console.log("computer win!");
        msg.innerText = "Play Again You lose";
    }
}