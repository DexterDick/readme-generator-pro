// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
            break;
        case "Apache-2.0":
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
            break;
        case "BSD-3-Clause":
            return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`;
            break;
        default:
            return ``;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "MIT":
            return `(https://opensource.org/licenses/MIT)`;
            break;
        case "Apache-2.0":
            return `(https://opensource.org/licenses/Apache-2.0)`;
            break;
        case "BSD-3-Clause":
            return `(https://opensource.org/licenses/BSD-3-Clause)`;
            break;
        default:
            return ``;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "No License") {
        return `
## [License](Table of Contents)
        
This application is covered under ${license} license:

${renderLicenseBadge(license)}

${renderLicenseLink(license)}
`;
    } else {
        return ``;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## [Description](Table-of-Contents)

  ## Table of Contents

  - [Description](#description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  ${data.license !== "No License" ? "- [License](#License)" : ""}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## [Installation](Table-of-Contents)

  ${data.installation}

  ## [Usage](Table-of-Contents)

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## [Contributing](Table-of-Contents)

  ${
      data.contributeToProject
          ? data.contribute
          : "Thanks for using our app.  Developer is not accepting contributions at this time"
  }

  ## [Tests](Table-of-Contents)

  ${data.tests}

  ## [Questions](Table-of-Contents)

  For additional questions please contact using the following links:

  [Email:](https://github.com/mailto:${data.email})
  
  [GitHub](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
