// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation",
    default: "npm install",
  },
  {
    type: "input",
    message:
      "What are the usage instructions for your project? *Enter usage scenarios comma-separated*",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contribution guidelines for your project?",
    name: "contribution",
    default: "Fork Instructions",
  },
  {
    type: "input",
    message: "What are the test instructions for your project?",
    name: "test",
  },
  {
    type: "list",
    message: "What is the license type for your project?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "BSD 3", "OSL 3.0", "None"],
  },
  {
    type: "input",
    message: "What is the GitHub username for your project?",
    name: "github",
  },
  {
    type: "input",
    message: "What is the email address for your project?",
    name: "email",
  },
  // Add more questions here...
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", data);
  });
}

// Function call to initialize app
init();
