#! /usr/bin/env node

import inquirer from "inquirer";

// 1- Computer will Generate a Random Number
// 2- User Input for guessing Number
// 3- Compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Wellcome to Number Guessing Game");

const answer = await inquirer.prompt([
  {
    name: "userGuess",
    type: "number",
    message: "Enter your guess number between 1-10",
  },
]);

if (answer.userGuess === randomNumber) {
  console.log("You are right");
} else {
  console.log("You are wrong");
}
