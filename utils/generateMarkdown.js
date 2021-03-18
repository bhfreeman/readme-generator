// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // const badges = {
  //   'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  //   'APACHE 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  //   'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  //   'BSD 3': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  //   'None': ''
  // }
  // const md = badges.license;
  //   return md;
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'APACHE 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'None':
      return '';
      break;
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'None'){
    return `This project is licensed under the ${license} license`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
\`\`\`md
${data.description}
\`\`\`
## Table of Contents

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)


## Installation
To install necessary dependencies, run the following command:
\`\`\`md
${data.install}
\`\`\`
## Usage
\`\`\`md
${data.usage}
\`\`\`
## Contribution Guidelines
\`\`\`md
${data.contribution}
\`\`\`
## Testing Instructions
To run tests, run the following command:
\`\`\`md
${data.test}
\`\`\`
## License
${renderLicenseBadge(data.license)}
\`\`\`md
${renderLicenseSection(data.license)}
\`\`\`
## Questions
If you have any questions about the repo, open an issue of contact me directly at:
\`\`\`md
${data.email}
\`\`\`
You can find more of my work at:
\`\`\`md
[${data.github}](https://github.com/${data.github}/).
\`\`\`
  `;
}

module.exports = generateMarkdown;
