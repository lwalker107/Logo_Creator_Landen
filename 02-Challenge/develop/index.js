const inquirer = require('inquirer')

init(() => {})
inquirer.prompt([
    {
        type: 'input',
        name: 'brandInitials',
        message: 'What is are the brand initials you would like to use? (Cannot be more than 3 letters)',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?',
    },
    {
        type: 'input',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['triangle', 'square', 'circle'],
    },
])