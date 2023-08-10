class Shape {
    constructor() {
        this.shape = null;
    }

    setShape(shape) {
        this.shape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape}</svg>`;

    }

    renderSVG() {
        return this.shape;
    }
}

class Circle extends Shape {
    constructor(shapeColor, shapeText, shapeTextColor) {
        super() 
            this.shapeColor = shapeColor;
            this.shapeText = shapeText;
            this.shapeTextColor = shapeTextColor;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.shapeTextColor}">${this.shapeText}</text>`
    }
}

class Triangle extends Shape {
    constructor(shapeColor, shapeText, shapeTextColor) {
        super()
            this.shapeColor = shapeColor;
            this.shapeText = shapeText;
            this.shapeTextColor = shapeTextColor;
    }

    render() {
        return `<polygon points="250, 20 300, 220 160, 210" fill="${this.shapeColor}" /><text x="240" y="175" font-size="60" text-anchor="middle" fill="${this.shapeTextColor}">${this.shapeText}</text>`
    }
}

class Square extends Shape {
    
}
module.exports = {Shape, Circle, Triangle}