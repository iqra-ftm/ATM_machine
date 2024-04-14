#! /usr/bin/env node

import inquirer from "inquirer";


export let myBalance = 20000; //Dollars
let myPin = 2525;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number"

        }
    ]
);

if (pinAnswer.pin === myPin){
    console.log("correct pin code!!");
    console.log("welcome to the ATM service");}

  export let operationAns = await inquirer.prompt(
    [
        {
            name: "operations",
            message: "pleace select option:",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        }
     ]
   );
if (operationAns.operations === "withdraw") {
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]
    );

    //assigment operators =, +=, -= 
    if (myBalance >= amountAns.amount) {
        myBalance -= amountAns.amount;


        console.log(`${"your remaining balance is : "} ${myBalance}`);
    }
    else {
        console.log("insufficient Balance");
    }

} else if (operationAns.operations === "fast cash") {
    let fastcashAns = await inquirer.prompt(
        [
            {
                name: "fastcash",
                message: "select the option you want to fast cash:",
                type: "list",
                choices: ["5000", "8000", "12000", "15000", "18000"]
            }
        ]
    );

   if (myBalance >= fastcashAns.fastcash){
       myBalance -= fastcashAns.fastcash;

       console.log(`${"your remaining balance is : "} ${myBalance}`);
   }

   else {
        console.log("insufficient balance");
    }

} else if (operationAns.operations === "check balance") {
    console.log(`${"your balance is : "} ${myBalance}`);
}


else {
    console.log("invalid pin number");
}


