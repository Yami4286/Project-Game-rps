console.log("Hello World");

function ComputerChoice(){
    let min = 1;
    let max = 7;
   let ans = Math.floor(Math.random()*(max-min)) + min;
   return ans;
   // 1 && 2 reserve for the rock , 3 && 4 reserve for paper 5 &&6 reserve for scissors
}

function PlayerChoice(){
    console.log("1 for Rock \n 2 for paper \n 3 for scissors");
    let Choice = prompt(" 1 for Rock \n 2 for paper \n 3 for scissors \nEnter Your Choice");
    console.log("Your choice is: " + Choice);
    return Choice;
}

let pc = ComputerChoice();
console.log("Pc is: " + pc)