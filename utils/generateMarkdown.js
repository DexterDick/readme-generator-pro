// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${data.title}

  ## [Description](Table of Contents)

  ## Table of Contents

  - [Description](#description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## [Installation](Table of Contents)

  ${data.installation}

  ## [Usage](Table of Contents)

  ${data.usage}

  ## [License](Table of Contents)

  ## [Contributing](Table of Contents)

  ## [Tests](Table of Contents)

  ${data.tests}

  ## [Questions](Table of Contents)

  For additional questions please contact using the following links:

  [Email:](https://github.com/mailto:${data.email})
  
  [GitHub](https://github.com/${data.github})






  

`;
}

module.exports = generateMarkdown;
