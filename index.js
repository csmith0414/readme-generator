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
    name: 'install',
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
    name: 'test',
    message: 'If necessary, provide any tests for the project and provide examples on how to run them.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license did you use?',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
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
  return writeToFile(readmeInfo);
});
