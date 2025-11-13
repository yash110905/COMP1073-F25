// Smoothie Class
class Smoothie {
    constructor(size, base, ingredients, sweetener) {
        this.name = name; // name property
        this.size = size;
        this.base = base;
        this.ingredients = ingredients;
        this.sweetener = sweetener;
    }

    describe() {
        return `
            <strong>Customer:</strong> ${this.name || "No name provided"} <br>
            <strong>Size:</strong> ${this.size} <br>
            <strong>Base:</strong> ${this.base} <br>
            <strong>Ingredients:</strong> ${this.ingredients.join(", ")} <br>
            <strong>Sweetener:</strong> ${this.sweetener}
        `;
    }
}

// Order Button 
document.getElementById("orderButton").addEventListener("click", function () {
    const name = document.getElementById("customerName").value;
    const size = document.getElementById("size").value;
    const base = document.getElementById("base").value;
    const sweetener = document.getElementById("sweetener").value;

    const ingredients = [];
    document.querySelectorAll(".checkboxes input:checked").forEach(item => {
        ingredients.push(item.value);
    });

    const smoothie = new Smoothie(size, base, ingredients, sweetener);
    
    document.getElementById("output").innerHTML = smoothie.describe();
});//so, when the Order button is clicked, the code collects all selected form values (size, base, ingredients, sweetener), creates a new Smoothie object, and displays its description on the page
