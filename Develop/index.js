// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt(questions)
}

const questions = [
    {
        type: "input",
        message: "What is name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a short description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "How is the app used?",
        name: "use",
    },
    {
        type: "input",
        message: "How is the app installed?",
        name: "installation",
    },
    {
        type: "input",
        message: "Do you have any questions?",
        name: "questions",
    },
    {
        type: "input",
        message: "How can contributions be made to the app?",
        name: "contributions",
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



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => (err) ? console.error(err) : console.log(`${fileName}.md has been created successfully!`))

}

// TODO: Create a function to initialize app
async function init() {
    let answers = await promptUser();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();

