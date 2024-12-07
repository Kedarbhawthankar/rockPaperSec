let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let us = document.querySelector("#user-score");
let cs = document.querySelector("#comp-score");

const genCompChoice =()=> {
    const options = ["rock","paper","scissors"];
    let random = Math.floor(Math.random()*3);
    return options[random];
}

const playGame = (userChoice)=> {
    let cc=genCompChoice();
    if(cc===userChoice) {
        message.innerText = "Game Was Draw. Play again";
        message.style.backgroundColor = "#081b31";
    } else if(userChoice==="rock") {
        if(cc === "scissors") {
            userScore++;
            us.innerText = userScore;
            message.innerText = `You Win! Your ${userChoice} beats ${cc}`;
            message.style.backgroundColor = "green";
        } else {
            compScore++;
            cs.innerText = compScore;
            message.innerText = `You Lost. ${cc}beats ${userChoice}`;
            message.style.backgroundColor = "red";
        }
    }  else if(userChoice==="paper") {
        if(cc === "rock") {
            userScore++;
            us.innerText = userScore;
            message.innerText = `You Win! Your ${userChoice} beats ${cc}`;
            message.style.backgroundColor = "green";
        } else {
            compScore++;
            cs.innerText = compScore;
            message.innerText = `You Lost. ${cc}beats ${userChoice}`;
            message.style.backgroundColor = "red";
        }
    }  else if(userChoice==="scissors") {
        if(cc === "paper") {
            userScore++;
            us.innerText = userScore;
            message.innerText = `You Win! Your ${userChoice} beats ${cc}`;
            message.style.backgroundColor = "green";
        } else {
            compScore++;
            cs.innerText = compScore;
            message.innerText = `You Lost. ${cc}beats ${userChoice}`;
            message.style.backgroundColor = "red";
        }
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        genCompChoice();

    })    
});