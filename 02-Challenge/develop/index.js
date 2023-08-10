const inquirer = require('inquirer')
const {Shape, Circle, Triangle} = require('./lib/shapes');
const fs = require('fs');


inquirer.prompt([
    {
        type: 'input',
        name: 'brandInitials',
        message: 'What are the brand initials you would like to use? (Cannot be more than 3 letters)',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['triangle', 'square', 'circle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be?',
    },
]).then((inquirerResponses) => {
    let shape;
    if (inquirerResponses.shape === 'circle') {
        shape = new Circle(inquirerResponses.shapeColor, inquirerResponses.brandInitials, inquirerResponses.textColor)
    }

    if (inquirerResponses.shape === 'triangle') {
        shape = new Triangle(inquirerResponses.shapeColor, inquirerResponses.brandInitials, inquirerResponses.textColor)
    }

    shape.setShape(shape.render()) 
    let SVG = shape.renderSVG()
    
    fs.writeFileSync("./logo.svg", SVG)
})


