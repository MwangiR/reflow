// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    const encodedLicense = license.replace(/\s/g, "%20");
    const urlEncodedLicense = license.replace(/\s/g, "-");
    return `[![License: ${license}](https://img.shields.io/badge/License-${encodedLicense}-blue.svg)](https://opensource.org/licenses/${urlEncodedLicense})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    const urlEncodedLicense = license.replace(/\s/g, "-");
    return `[${license}](https://opensource.org/licenses/${urlEncodedLicense})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
  ## License
  This project is licensed under the ${license} license.`;
  } else {
    return "";
  }
}

function installationDefault(instalDefault, appTitle) {
  if (instalDefault === "npm install") {
    return `
    1. Clone the repository: git clone https://github.com/your-username/${appTitle}.git
    2. Navigate to the project directory: cd ${appTitle}
    3. Install dependencies: npm install
    4. Start the development server: node (name of your file).js
    `;
  } else {
    return instalDefault;
  }
}

function usageCriteria(options) {
  const input = options.split(",").map((option) => option.trim());
  const orderedList = input.map((option, index) => `\n ${index + 1}. ${option}`).join("\n");
  return orderedList;
}

function contributingDefault(contribution) {
  if (contribution === "Fork") {
    return `
    1. Fork the repository.
    2. Create a new branch: git checkout -b feature/your-feature
    3. Make your changes and commit them: git commit -m "Add new feature"
    4. Push to the branch: git push origin feature/your-feature
    5. Create a pull request, explaining your changes in detail.
    `;
  } else {
    return contribution;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
\n ${renderLicenseBadge(data.license)}\n
## Description
${
  data.title
} is a powerful and user-friendly web application that allows users to manage their tasks and boost productivity.
With an intuitive interface and robust features, AwesomeApp helps individuals and teams stay organized, collaborate efficiently, and achieve their goals effectively.
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation 
\n ${installationDefault(data.installation, data.title)}

## Usage
${usageCriteria(data.usage)}\n
\n ${renderLicenseSection(data.license)}
\n ${renderLicenseLink(data.license)}

## Contributing

We welcome contributions from the community to improve ${
    data.title
  }. To contribute, please follow these steps:
${contributingDefault(data.contribution)}
## Tests
\n ${data.test}\n
## Questions
\n If you have any questions or suggestions regarding AwesomeApp, feel free to reach out to our team:
\n * [GitHub](https://github.com/${data.github})
\n * [Email](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
