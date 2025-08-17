console.log("Hello World");

function ComputerChoice(){
    let min = 1;
    let max = 7;
   let ans = Math.floor(Math.random()*(max-min)) + min;
   return ans;
   // 1 && 2 reserve for the rock , 3 && 4 reserve for paper 5 &&6 reserve for scissors
}

function PlayerChoice(){
let Choice = prompt(" Rock \n  paper \n scissors \nEnter Your Choice");
    console.log("Your choice is: " + Choice);
   let cho =  Choice.toUpperCase();
  if(cho == "ROCK"){
    console.log("1 & 2");
  return 1;
  } else if (cho == "PAPER") {
    console.log("3 & 4");
   return 3;
  } else if( cho == "SCISSORS"){
    console.log("5& 6");
   return 5;
  }
   
}

function PlayRound( hs, ps){
const HumChoice = PlayerChoice();
const CpuChoice= ComputerChoice();
 console.log(HumChoice +" " + CpuChoice);
}
const  hs = 0;
const ps = 0;

PlayRound();