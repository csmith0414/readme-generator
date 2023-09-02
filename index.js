// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the projects title? ',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'If necessary, provide the installation instructions.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide a example of your project and instructions on how to use it.',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'If necessary, provide guidelines on how others can contribute to the project.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'If necessary, provide any tests for the project and provide examples on how to run them.',
  },
  {
    type: 'list',
    name: 'licenses',
    message: 'Which license did you use?',
    choices: ['MIT', 'GPLv3', 'Apache_2.0'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  }
];

// TODO: Create a function to write README file
function writeToFile (fileName, data) { 
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
  })};

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
 };

// Function call to initialize app
init()
.then(userInput => {
  return generateMarkdown(userInput);
})
.then(readmeInfo => {
  return writeToFile("./output/README.md",readmeInfo);
});
