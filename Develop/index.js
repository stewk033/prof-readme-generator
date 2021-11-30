// TODO: Include packages needed for this application

const prompt = require('prompt-sync')();

// var fs = require('fs');

// fs.writeFileSync('README.md',) {

// }
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Enter a description of your project.',
    'What are the installation instructions?',
    'What is the usage information?',
    'What are the contribution guidelines?',
    'What are the test instructions?',
    'Choose a license for your application.',
    'What is your GitHub username?',
    'What is your email address?',
];

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();