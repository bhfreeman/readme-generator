// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license = license.replace(/\s+/g, '');
  return `![${license}](https://img.shields.io/badge/license-${license}-brightgreen)` || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseLink(license)}`
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

  *[Installation](#installation)

  *[Usage](#usage)

  *[Credits](#credits)

  *[License](#license)


  ## Installation
  \`\`\`md
  ${data.install}
  \`\`\`
  ## Usage
  \`\`\`md
  ${data.usage}
  \`\`\`
  ## Contrigution Guidelines
  \`\`\`md
  ${data.contribution}
  \`\`\`
  ## Testing Instructions
  \`\`\`md
  ${data.test}
  \`\`\`
  ## License
  \`\`\`md
  ${renderLicenseSection(data.license)}
  \`\`\`
  ## Credits
  \`\`\`md
  Github: ${data.github}

  Contact me here: ${data.email}
  \`\`\`
  `;
}

module.exports = generateMarkdown;
