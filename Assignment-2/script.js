// Smoothie Class
class Smoothie {
    constructor(name, size, base, ingredients, sweetener) {
        this.name = name;
        this.size = size;
        this.base = base;
        this.ingredients = ingredients;
        this.sweetener = sweetener;
    }

    describe() {
        return `
            <h3>${this.name || "Your"} Smoothie</h3>
            <strong>Size:</strong> ${this.size} <br>
            <strong>Base:</strong> ${this.base} <br>
            <strong>Ingredients:</strong> ${this.ingredients.length > 0 ? this.ingredients.join(", ") : "None"} <br>
            <strong>Sweetener:</strong> ${this.sweetener}
        `;
    }
}

// Order Button 
document.getElementById("orderButton").addEventListener("click", function () {

    const name = document.getElementById("customerName").value.trim();
    const size = document.getElementById("size").value;
    const base = document.getElementById("base").value;
    const sweetener = document.getElementById("sweetener").value;

    const ingredients = [];
    document.querySelectorAll(".checkboxes input:checked").forEach(item => {
        ingredients.push(item.value);
    });

    const smoothie = new Smoothie(name, size, base, ingredients, sweetener);

    document.getElementById("output").innerHTML = smoothie.describe();
});
