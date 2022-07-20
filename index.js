const inquirer = require('inquirer')
const fs = require('fs')

const licenses = ['MIT', 'GPL', 'LGPL', 'non-commercial', 'No-Derivatives']



inquirer.prompt([
    {
        type: 'input',
        name: "title",
        message: "What is the project called?",
    },
    {
        type: 'input',
        name: "description",
        message: "Desribe the project.",
    },
    {
        type: 'input',
        name: "installation",
        message: "Provide installation instructions.",
    },
    {
        type: 'list',
        name: "licenses",
        message: "Select the licenses you will be using",
        choices: (licenses),
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'List any contributioners of note and what they did.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'List any tests that are needed.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'please provide youe github account.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'please provide email',
    },

])
    .then((ans) => {

        fs.writeFile('README.md',

            `[![Generic badge](https://img.shields.io/badge/<Liscense>-<${ans.licenses}>-<COLOR>.svg)](https://shields.io/)
# ${ans.title} 
---
## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Contributions](#contributions)
- [Licenses](#licenses)
- [Tests](#tests)
- [Questions](#questions)
---
## Description 
- ${ans.description} 
## Installation
- ${ans.installation}
## Contributions
- Many thanks to ${ans.contributions}
## Licenses 
- ${ans.licenses}
## Tests
- ${ans.tests}
---
## Questions
If there are any questions feel free to contact me at either:
- [Github](https:// ${ans.github})
- [E-mail](mailto: ${ans.email})
---
`,


            (err) => {
                return err ? console.log(err) : console.log("it worked!")
            })
    })