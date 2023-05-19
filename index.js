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
];

//initiate questions prompt function
prompt(questions)
  .then((answers) => {
    //answers reference
    const { title } = answers;

    //README content
    const readmeContent = `
# ${title}
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
