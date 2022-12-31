// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please provide title of your repository? (Required)",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Title field is required please enter.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "description",
        message: "Please provide description of your repository? (Required)",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("description field is required please enter.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation steps for project. (Required)",
        validate: (installationInput) => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter your installation instructions!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage instructions for project. (Required)",
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter usage instructions!");
                return false;
            }
        },
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use for project?",
        choices: ["mit", "apache", "No License"],
    },
    {
        type: "confirm",
        name: "contributeToProject",
        message: "Would you like developers to contribute to project?",
        default: true,
    },
    {
        type: "input",
        name: "contribute",
        message:
            "Please provide information on how to contribute to project. (Required)",
        when: ({ contributeToProject }) => {
            if (contributeToProject) {
                return true;
            } else {
                return false;
            }
        },
        validate: (contributeInput) => {
            if (contributeInput) {
                return true;
            } else {
                console.log("Please enter how to contribute to project!");
                return false;
            }
        },
    },

    {
        type: "input",
        name: "tests",
        message: "Please provide testing instructions. (Required)",
        validate: (testsInput) => {
            if (testsInput) {
                return true;
            } else {
                console.log("Please enter testing instructions!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "questions",
        message: "Please provide questions. (Required)",
        validate: (questionsInput) => {
            if (questionsInput) {
                return true;
            } else {
                console.log("Please enter questions!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username? (Required)",
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please GitHub username!");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address. (Required)",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please email enter address!");
                return false;
            }
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then((readmeData) => {
        const readmeFile = generateMarkdown(readmeData);
        writeToFile("./dist/README.md", readmeFile);
    });
}

// Function call to initialize app
init();
