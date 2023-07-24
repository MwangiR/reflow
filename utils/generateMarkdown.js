// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    const encodedLicense = license.replace(/\s/g, "%20");
    const urlEncodedLicense = license.replace(/\s/g, "-");
    return `[![License: ${license}](https://img.shields.io/badge/License-${encodedLicense}-blue.svg)](https://opensource.org/licenses/${urlEncodedLicense})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    const urlEncodedLicense = license.replace(/\s/g, "-");
    return `[${license}](https://opensource.org/licenses/${urlEncodedLicense})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
  This project is licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  \n ${renderLicenseBadge(data.license)}
  \n ## Description
  \n ${data.description}
  \n ## Table of Contents
  \n * [Installation](#installation)
  \n * [Usage](#usage)
  \n * [License](#license) 
  \n * [Contributing](#contributing)
  \n * [Tests](#tests)
  \n ## Installation 
  \n ${data.installation}
  \n ## Usage
  \n ${data.usage}
  \n ${renderLicenseSection(data.license)}
  \n ${renderLicenseLink(data.license)}
  \n ## Contributing
  \n ${data.contribution}
  \n ## Tests
  \n ${data.test}
  `;
}

module.exports = generateMarkdown;
