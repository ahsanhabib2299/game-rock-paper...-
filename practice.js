let computerScore = 0;
let usrScore = 0;

const msg = document.querySelector("#msg");

const choices =document.querySelectorAll(".choice");

const showUsreScore = document.querySelector("#user-scroe");
const showCompScore = document.querySelector("#com-score");


const genCompChoice =() => {
  const options = ["rock","paper","scissor"];
  const randidx = Math.floor(Math.random()*3);
  return options[randidx];
};


//draw game 
const drawGame =() => {
  console.log("game was draw.");
  msg.innerText = "game draw"
  }


//show winer
const shawWinner = (userWin) => {
  if(userWin) {
    usrScore++;
    showUsreScore.innerText =usrScore;
    msg.innerText ="you win";

    
    
  } else {
    computerScore++;
    showCompScore.innerText = computerScore;
    msg.innerText ="you lost.try again"
  }
};

const playgame = (userchoice)=> {
  const compchoice = genCompChoice();

  if(userchoice===compchoice) {
    drawGame();
  } else {
    let userWin = true;
    if(userchoice==="rock") {
      //scissor,paper
      userWin = compchoice === "paper"? false:true;
    } else if (userchoice === "paper") {
      //rock,scissor
      userWin = compchoice === "rock"? true : false;
    } else {
      userWin = compchoice=== "rock"? false:true;

    }
    shawWinner(userWin);

  }
  
  
}

choices.forEach((choice) => {
  
  choice.addEventListener("click", ()=> {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
    
  })
  
});

