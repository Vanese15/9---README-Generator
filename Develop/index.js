// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a short description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "What command should be used in invoke dependencies?",
        name: "installation",
        default: "npm i",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username",
    }

];

//funtion to prompt user to answer questions
const promptUser = () => {
    inquirer.prompt(questions)
    .then (data => {
console.log(data)
    });
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return writeToFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
promptUser()
}

// Function call to initialize app
init();
