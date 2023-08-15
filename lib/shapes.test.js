const {Circle, Square} = require('./shapes');
const {Triangle} = require('./shapes')

describe('Shapes', () => {
    it('renders a circle', () => {
        const newSVG = new Circle('red', 'ltw', 'blue')
        newSVG.setShape(newSVG.render())
        expect(newSVG.renderSVG()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ltw</text></svg>')
    })

    it('renders a triangle', () => {
        const newSVG = new Triangle('red', 'ltw', 'blue')
        newSVG.setShape(newSVG.render())
        expect(newSVG.renderSVG()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="250, 20 300, 220 160, 210" fill="red" /><text x="240" y="175" font-size="60" text-anchor="middle" fill="blue">ltw</text></svg>')
    })

    it('renders a square', () => {
        const newSVG = new Square('red', 'ltw', 'blue')
        newSVG.setShape(newSVG.render())
        expect(newSVG.renderSVG()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="150" height="150" fill="red" /><text x="125" y="125" font-size="60" text-anchor="middle" fill="blue">ltw</text></svg>')
    })
})