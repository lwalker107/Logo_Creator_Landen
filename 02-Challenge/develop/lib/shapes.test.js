const {Circle} = require('./shapes');

describe('Shapes', () => {
    it('renders a circle', () => {
        const newSVG = new Circle('red', 'ltw', 'blue')
        newSVG.setShape(newSVG.render())
        expect(newSVG.renderSVG()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ltw</text></svg>')
    })
})