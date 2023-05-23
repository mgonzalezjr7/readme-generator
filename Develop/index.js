// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "repository",
    message: "Let's give your repository a name, shall we?",
  },
  {
    type: "input",
    name: "description",
    message: "Now let's describe this project we're working on.",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install our project? Provide a step-by-step insstructions.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Okay, now provide instructions and examples for use. Include screenshots as needed!",
  },
  {
    type: "input",
    name: "contribution",
    message: "So what are the guidelines for contributing to our project?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the test instructions for our project?",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license should we include?",
    choices: [
      "MIT License",
      "GNU General Public License v3.0",
      "Apache License 2.0",
    ],
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("README.md", generateMarkdown(data), (err)=>
    err ? console.log(err) : console.log("Big success!"));
    });
}

// Function call to initialize app
init();
