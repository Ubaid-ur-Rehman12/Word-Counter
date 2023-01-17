#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = ()=>{
    return new Promise((resolve) => {
        setTimeout(resolve,2000);
    })
}
async function welcome() {
    let rainbow = chalkAnimation.rainbow("      <<<<<Welcome to Currency Converter>>>>>")
    await sleep();
    rainbow.stop()
}
await welcome();

const answer:{
    Sentence : string,
} =await inquirer.prompt([
    {
        name : "Sentence",
        type : "input",
        message : "Enter Your Sentence: ",
   }
])
let result = answer.Sentence.trim().split(" ");
console.log(`Your Sentence Word Count is: ${result.length}`);
