console.log("Hello World");

function ComputerChoice(){
    let min = 1;
    let max = 4;
   let ans = Math.floor(Math.random()*(max-min)) + min;
   pc(ans);
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
     if (CpuChoice == 1){console.log("Cpu choice is: Rock")}else 
        if (CpuChoice == 2){console.log("Cpu choice is: Paper")}else
             if (CpuChoice == 3){console.log("Cpu Choice is Scissors")}
}

function PlayRound( hs, ps){
const HumChoice = PlayerChoice();
const CpuChoice= ComputerChoice();

 if(HumChoice == 1 && CpuChoice == 2){
    
  console.log("Paper beats rock, Cpu wins");
 return ++ps;
 } else if(HumChoice == 2 && CpuChoice == 3 ){
  console.log("Scissors beat Paper, Cpu Wins");
 return ++ps;
 } else if(HumChoice == 3 && CpuChoice == 1){
  console.log("Rock beats scissors, Cpu wins");
  return ++ps;
 } else  if(HumChoice == 1 && CpuChoice == 3 ){
  console.log("Paper beats rock, Player wins");
   return ++hs;
 } else if(HumChoice == 2 && CpuChoice == 1){
  console.log("Paper beats rock, Player wins");
 return ++hs ;
 } else if(HumChoice == 3 && CpuChoice == 2){
  console.log("Scissors beats Paper, Player wins");
   return ++hs;
 } else if(HumChoice == CpuChoice){
    console.log("Draw");
    return hs, ps;
 }
}
const  hs = 0;
const ps = 0;

PlayRound();

console.log("Player Score: " + hs + " Cpu SCore: " + ps);