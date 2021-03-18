// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of the project:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What is the command to install the project?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information of the project:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What are the contribution guidelines for this project?",
        default: "Creative common contributions"
    },
    {
        type: 'input',
        name: 'test',
        message: "What is the command for testing? ",
        default: 'npm test'
    },
    {
        type: 'list',
        name: 'license',
        message: "What license does the project fall under?",
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter the github username associated with this project:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email associated with this project:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./generated_readme/README.md`,data, (err) => console.log(err) || console.log("worked"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => writeToFile(data.title, generateMarkdown(data)));
}

// Function call to initialize app
init();
