const coolLicense = ["Apache 2.0 License", "Eclipse Public License 1.0", "GNU GPL v3", "IBM Public License Version 1.0", "The MIT License", "Mozilla Public License 2.0", "Open Database License",]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license===coolLicense[0]) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }else if (license===coolLicense[1]) {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }else if (license===coolLicense[2]) {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }else if (license===coolLicense[3]) {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }else if (license===coolLicense[4]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if (license===coolLicense[5]) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }else if (license===coolLicense[6]) {
    return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"
  }else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===coolLicense[0]) {
    return `[${coolLicense[0]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license===coolLicense[1]){
    return `[${coolLicense[1]}](https://opensource.org/licenses/EPL-1.0)`
  } else if (license===coolLicense[2]){
    return `[${coolLicense[2]}](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license===coolLicense[3]){
    return `[${coolLicense[3]}](https://opensource.org/licenses/IPL-1.0)`
  } else if (license===coolLicense[4]){
    return `[${coolLicense[4]}](https://opensource.org/licenses/MIT)`
  } else if (license===coolLicense[5]){
    return `[${coolLicense[5]}](https://opensource.org/licenses/MPL-2.0)`
  } else if (license===coolLicense[6]){
    return `[${coolLicense[6]}](https://opendatacommons.org/licenses/odbl/)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===coolLicense[0]){
    return `See more information ${coolLicense[0]} here:`
  } else if (license===coolLicense[1]){
    return `See more information ${coolLicense[1]} here:`
  } else if (license===coolLicense[2]){
    return `See more information ${coolLicense[2]} here:`
  } else if (license===coolLicense[3]){
    return `See more information ${coolLicense[3]} here:`
  } else if (license===coolLicense[4]){
    return `See more information ${coolLicense[4]} here:`
  } else if (license===coolLicense[5]){
    return `See more information ${coolLicense[5]} here:`
  } else if (license===coolLicense[6]){
    return `See more information ${coolLicense[6]} here:`
  } else {
    return ""
  }  
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  #Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Title](#title)
  * [Description](#description)
  * [Use](#use)
  * [Installation](#installation)
  * [Questions?](#questions)
  * [Contributions?](#contributions)

  # License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  # Title
  ${data.title}
  
  # Description
  ${data.description}

  # How to Use
  ${data.use}

  # Installation
  ${data.install}

  # Questions?
  ${data.questions}

  # Contributions
  ${data.contributions}
  
  # Let's chat: 
  [${data.username}](https://github.com//${data.username})  
    ${data.email}`;   
  
}

module.exports = generateMarkdown
