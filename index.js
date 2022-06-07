#! /usr/bin/env node

const auth = require('./commands/authentication')
const showBalance = require('./commands/showBalance')
const addMoney = require('./commands/addMoney')
const withdrawMoney = require('./commands/withdrawMoney')
const { program } = require('commander')
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');




const run = async () => {
    clear();

    console.log(
        chalk.yellow(
            figlet.textSync("Dalida's Bank", { horizontalLayout: 'full' })
        )
    );
    
    program
            .command('deposit <amount>')
            .description('Deposit money to your account')
            .action(addMoney);
    program
    .command('withdraw <amount>')
    .description('Withdraw money from your account')
    .action(withdrawMoney);   

    program
            .command('balance')
            .description("Displays current balance of your account")
            .action(showBalance)

    program
            .command('login')
            .description("Account authorization")
            .action(auth);

    program.parse()
}
run();