let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");




const gencompchoice=()=>{
    let options=["rock","paper","scissors"];
     const randIdx=Math.floor(Math.random()*3);
     return options[randIdx];
};

const drawGame=()=>{
   // console.log("Game was draw");
    msg.innerText="Game Draw"
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        //console.log("you win!");
        msg.innerText=`YOU WIN! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`YOU LOSE!  ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userchoice)=>{
    //console.log("user choice=",userchoice);
    const compchoice=gencompchoice();
    //console.log("comp choice=",compchoice);

    if(userchoice===compchoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            //scissors,paper
            userWin=compchoice==="scissors"?true:false;
        }
        else if(userchoice==="paper"){
            //rock,scissors
           userWin=compchoice==="rock"?true:false; 
        }
        else{
            //rock,paper
            userWin=compchoice==="paper"?true:false;
        }
        showWinner(userWin,userchoice,compchoice);
    }

};

choices.forEach((choice)=>{
   // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
});