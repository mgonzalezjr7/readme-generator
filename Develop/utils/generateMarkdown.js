// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license === "GNU GPLv3") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      } else if (license === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        } else if (license === "Boost") {
          return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
          } else if (license === "None") {
            return ""
            }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
    } else if (license === "GNU GPLv3") {
      return "https://www.gnu.org/licenses/gpl-3.0"
      } else if (license === "Apache 2.0") {
        return "https://opensource.org/licenses/Apache-2.0"
        } else if (license === "Boost") {
          return "https://www.boost.org/LICENSE_1_0.txt"
          } else if (license === "None") {
            return ""
            }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This project is covered under the MIT License."
    } else if (license === "GNU GPLv3") {
      return "This project is covered under the GNU General Public License v3."
      } else if (license === "Apache 2.0") {
        return "This project is covered under the Apache License 2.0."
        } else if (license === "Boost") {
          return "This project is covered under the Boost Software License 1.0."
          } else if (license === "None") {
            return ""
            }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
 
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
 
  ## Description
  ${data.description}
 
  ## Installation
  ${data.installation}
 
  ## Usage
  ${data.usage}
 
  ## License
  ${data.license}
 
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions, please contact me at:
  - Email: ${data.email}
  - Github: https://github.com/${data.username}
  `;
}

module.exports = generateMarkdown;
