#! /usr/bin/env node
import inquirer from "inquirer";
const random_number = Math.floor(Math.random()*5 + 1);
console.log("Welcome To Number Guessing Game Let's Play")
const input = await inquirer.prompt({message:"Write A Number From 1 To 5 To Guess = ",type:"number",name:"num"});
if(random_number === input.num){
    console.log("Conratulations!! You Got A Right Nummber ")
}
else{
    console.log("Sorry You Guessed A Wrong Number");
    console.log("The Random Number Was = " + random_number);
    console.log("Better Luck Nexxt Time");
}