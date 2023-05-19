const fs = require('fs');
const { createPromptModule } = require('inquirer');

const prompt = createPromptModule();

//adding question object array
const questions = [
  {
    //data input
    type: 'input',
    //variable reference
    name: 'title',
    //command line text
    message: 'Enter the title of your project:',
  },

  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },

  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation steps for your project:',
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Enter the purpose of your project:',
  },

  {
    type: 'input',
    name: 'contributing',
    message: 'Enter the contibuters:',
  },

  {
    type: 'input',
    name: 'test',
    message: 'Enter testing details:',
  },
  
  //adding an option to select license choices
  {
    //data type 'list' allows choice selection
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: [
      //randomly chosen licenses
      'MIT License',
      'Apache License 2.0',
      'GNU GPLv3',
      'ISC License',
    ],
  },
];

//initiate questions prompt function
prompt(questions)
  .then((answers) => {
    //answers reference
    const { title, description, installation, usage, contributing, test, license } = answers;

//adding table of contents var for README content
const tableOfContents = `
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  `;

//README content
const readmeContent = `
# ${title}

## Description
${description}

## ${tableOfContents}


## Installation
${installation}

## Usage
${usage}

## License
${license}


## Contributing
${contributing}

## Tests
${test}

## Questions

`;
    
//write the README content to a file named README.md
fs.writeFile('README.md', readmeContent, (err) => {
  if (err) {
    console.error('Error creating README file:', err);
  } else {
    console.log('README file created successfully!');
  }
});
})
.catch((error) => {
console.error('Error:', error);
});
