// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

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
    message: 'Please provide a description of your project',
  },
  {
    type: 'input',
    name: 'install',
    message: 'If necessary, provide the installation instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide a example of your project and instructions on how to use it',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'If necessary, provide guidelines on how others can contribute to the project',
  },
  {
    type: 'input',
    name: 'test',
    message: 'If necessary, provide any tests for the project and provide examples on how to run them',
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
    message: 'Enter your GitHub Username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

// TODO: Create a function to initialize app
function init() {}

inquirer
  .prompt([
    ,
  ])  .then((answers) => {
    const readMeContent = generateREADME(answers);

    fs.writeFile('README.MD', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

// Function call to initialize app
init();




