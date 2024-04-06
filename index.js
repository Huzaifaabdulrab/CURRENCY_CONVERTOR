#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Currency = {
    USD: 1, //Base currency
    ERU: 0.91,
    G8P: 0.76,
    IND: 74.57,
    PKR: 278
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.blueBright("Enter From Currency"),
        type: "list",
        choices: ["USD", "ERU", "G8P", "IND", "PKR"]
    },
    {
        name: "amount",
        message: chalk.bold("Enter Your Amount"),
        type: "number"
    },
    {
        name: "to",
        message: chalk.blueBright("Enter To Currency"),
        type: "list",
        choices: ["USD", "ERU", "G8P", "IND", "PKR"]
    },
]);
let fromAmount = Currency[user_answer.from];
let toAmount = Currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
let roundedConvertedAmount = Math.round(convertedAmount * 100) / 100;
console.log(roundedConvertedAmount);
