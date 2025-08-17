console.log("Hello World");
let  hs = 0;
let ps = 0;

function ComputerChoice(){
    let min = 1;
    let max = 4;
   let ans = Math.floor(Math.random()*(max-min)) + min;
   return ans;
   // 1 reserve for the rock , 2 reserve for paper , 3 reserve for scissors
}

function PlayerChoice(){
let Choice = prompt(" Rock \n  paper \n scissors \nEnter Your Choice");
    console.log("Your choice is: " + Choice);
   let cho =  Choice.toUpperCase();
  if(cho == "ROCK"){
  return 1;
  } else if (cho == "PAPER") {
   return 2;
  } else if( cho == "SCISSORS"){
   return 3;''
  }
   
}

function pc( num){
     if (num == 1){console.log("Cpu choice is: Rock")}else 
        if (num == 2){console.log("Cpu choice is: Paper")}else
             if (num == 3){console.log("Cpu Choice is Scissors")}
}

function PlayRound(){
const HumChoice = PlayerChoice();
const CpuChoice= ComputerChoice();
 pc(CpuChoice);
 if(HumChoice == 1 && CpuChoice == 2){
    
  console.log("Paper beats rock, Cpu wins");
   ++ps;
  console.log("Player Score: " + hs + " Cpu SCore: " + ps);
 
 } else if(HumChoice == 2 && CpuChoice == 3 ){
  console.log("Scissors beat Paper, Cpu Wins");
   ++ps;
   console.log("Player Score: " + hs + " Cpu SCore: " + ps);
 
 } else if(HumChoice == 3 && CpuChoice == 1){
  console.log("Rock beats scissors, Cpu wins");
    ++ps;
  console.log("Player Score: " + hs + " Cpu SCore: " + ps);

 } else  if(HumChoice == 1 && CpuChoice == 3 ){
  console.log("Paper beats rock, Player wins");
     ++hs;
  console.log("Player Score: " + hs + " Cpu SCore: " + ps);

 } else if(HumChoice == 2 && CpuChoice == 1){
  console.log("Paper beats rock, Player wins");
    ++hs;
  console.log("Player Score: " + hs + " Cpu SCore: " + ps);

 } else if(HumChoice == 3 && CpuChoice == 2){
  console.log("Scissors beats Paper, Player wins");
  hs++;
 console.log("Player Score: " + hs + " Cpu SCore: " + ps);

 } else if(HumChoice == CpuChoice){
    console.log("Draw");
    
 }
}

let i = 1;
while( i <= 5){
PlayRound();
i++;
}