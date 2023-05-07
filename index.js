// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ([
    {
        message: 'What is the title of your application?',
        type: 'input',
        name: 'title'
    },
    {
        message: 'What kind of license does this application have?',
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'none']
    },
    {
        message: 'How can someone make contributions to your application?',
        type: 'input',
        name: 'contributing'
        
    },
    {
        message: 'type a description of your application',
        type: 'input',
        name: 'description'

    },
    {
        message: 'how is this app installed?',
        type: 'input',
        name: 'installation',
        default: 'npm i'

    },
    {
        message: 'how can someone can report issues related to this app?',
        type: 'input',
        name: 'issues'

    },
    {
        message: 'what is this app used for?',
        type: 'input',
        name: 'usage'

    },
    {
        message: 'how can this app be tested?',
        type: 'input',
        name: 'testing'

    }
])

// TODO: Create a function to write README file
//const generateMD = ({ heading, license, usage, description, installation, issues }) =>
//     `#${heading}
//     ## Description
//     ${description}

//     ## Installation
//     ${installation}

//     ## Usage
//     ${usage}

//     ## Reporting issues
//     ${issues}

//     ## License
//     ${license}`;

 function writeToFile(filename, data) {
     return fs.writeFileSync(path.join(process.cwd(), filename), data)
 }
// function createMD (answers) {
//     const MDContent = generateMD(answers);

//     fs.writeFile('README.md', MDContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created your README file!')
//     );
//   }

// createMD()

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((answers) => {
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
