console.log("Hello World");

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
    console.log("1 & 2");
  return 1;
  } else if (cho == "PAPER") {
    console.log("3 & 4");
   return 2;
  } else if( cho == "SCISSORS"){
    console.log("5& 6");
   return 3;''
  }
   
}

function PlayRound( hs, ps){
const HumChoice = PlayerChoice();
const CpuChoice= ComputerChoice();
 console.log(HumChoice +" " + CpuChoice);
 if(HumChoice == 1 && CpuChoice == 2){
  console.log("Paper beats rock, Cpu wins");
   return ps +1;
 } else if(HumChoice == 2 && CpuChoice == 3 ){
  console.log("Scissors beat Paper, Cpu Wins");
  return ps +1;
 } else if(HumChoice == 3 && CpuChoice == 1){
  console.log("Rock beats scissors, Cpu wins");
  return ps +1;
 } else  if(HumChoice == 1 && CpuChoice == 3 ){
  console.log("Paper beats rock, Player wins");
  return hs +1;
 } else if(HumChoice == 2 && CpuChoice == 1){
  console.log("Paper beats rock, Player wins");
   return hs +1;
 } else if(HumChoice == 3 && CpuChoice == 2){
  console.log("Scissors beats Paper, Player wins");
   return hs +1;
 } else if(HumChoice == CpuChoice){
    console.log("Draw");
    return hs, ps;
 }
}
const  hs = 0;
const ps = 0;

PlayRound();

console.log("Player Score: " + hs + "Cpu SCore: " + ps);