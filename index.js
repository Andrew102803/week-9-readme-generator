
// packages
const { writeFile, copyFile } = require('./utils/generateFile.js');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
//questions added
const promptQuestions = () => {
    return inquirer.prompt([
        {
            //username prompt wpoooooooo
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username? (Required)',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            //github loink to profile
            type: 'input',
            name: 'gitLink',
            message: 'Enter the GitHub link to your profile.:',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Link!');
                    return false;
                }
            }
        },
        {
            //email stuff
            type: 'input',
            name: 'email',
            message: 'Please enter your email for others to contact you: (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            //name of repository it do what it do
            type: 'input',
            name: 'title',
            message: 'What is the name of your repository? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            // description woooooooo
            type: 'input',
            name: 'about',
            message: 'Please enter some information about your project: (Required)',
            validate: aboutInput => {
                if (aboutInput) {
                    return true;
                } else {
                    console.log('Please enter some information!')
                    return false;
                }
            }
        },
        {
            //special oinsytructions
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Does your project need special instructions on how to install?',
            default: true
        },
        {
            //instal prompt
            //pain
            type: 'input',
            name: 'install',
            message: 'Enter your installation instructions:',
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            //what the project doin 
            type: 'input',
            name: 'usage',
            message: 'Please explain the usage of this project:',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
        //smart people stuff 
            type: 'confirm',
            name: 'confirmTest',
            message: 'Will your project need testing instructions?',
            default: true
        },
        {
            //smart people instructions
            type: 'input',
            name: 'testing',
            message: 'Please input testing instructions for the user:',
            when: ({ confirmTest }) => {
                if (confirmTest) {
                    return true;
                } else {
                    return false
                }
            }
        },
        
    ])
        .then(data => {
            return generateMarkdown(data);
        })
        .then(Markdown => {
            return writeFile(Markdown);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })

        .catch(err => {
            console.log(err);
        })
}
function init() {
    promptQuestions()
}

init();


