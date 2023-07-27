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

function installationDefault(instalDefault, appTitle, username) {
  if (instalDefault === "npm install") {
    return `
    1. Clone the repository: git clone https://github.com/${username}/${appTitle}.git
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
  const orderedList = input.map((option, index) => `\n ${index + 1}. ${option}`).join("");
  return orderedList;
}

function contributingDefault(contribution) {
  if (contribution === "Fork Instructions") {
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
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

Project name is ${data.title}. It aims to ${data.description}.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installationDefault(data.installation, data.title, data.github)}

## Usage

${usageCriteria(data.usage)}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing

We welcome contributions from the community to improve ${
    data.title
  }. To contribute, please follow these steps:

${contributingDefault(data.contribution)}

## Tests

${data.test}

## Questions

If you have any questions or suggestions regarding ${
    data.title
  }, feel free to reach out to our team:

- [GitHub](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
