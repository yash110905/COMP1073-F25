// Smoothie Class
class Smoothie {
    constructor(size, base, ingredients, sweetener) {
        this.size = size;
        this.base = base;
        this.ingredients = ingredients;
        this.sweetener = sweetener;
    }

    describe() {
        return `
            <strong>Size:</strong> ${this.size} <br>
            <strong>Base:</strong> ${this.base} <br>
            <strong>Ingredients:</strong> ${this.ingredients.join(", ")} <br>
            <strong>Sweetener:</strong> ${this.sweetener}
        `;
    }
}

