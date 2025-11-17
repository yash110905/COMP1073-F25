function ToyCar(
    brand,
    model,
    color,
    decade,
    packaging,
    scale,
    vehicleType,
    sku,
    upc,
    price,
    length,
    width,
    height,
    features,
    quantity
) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.decade = decade;
    this.packaging = packaging;
    this.scale = scale;
    this.vehicleType = vehicleType;
    this.sku = sku;
    this.upc = upc;
    this.price = price;
    this.length = length;
    this.width = width;
    this.height = height;
    this.features = features;
    this.quantity = quantity;

    this.displayInfo = function () {
        return `${this.brand} ${this.model} (${this.scale}) - $${this.price}`;
    };
}
const mclarenCar = new ToyCar(
    "McLaren",
    "MCL38 Miami GP, #81 Oscar Piastri",
    "Orange",
    "After 2000",
    "Window Box",
    "1/43 Scale",
    "Race Car",
    "18-38214/81-BGO-OSCAR",
    "694365750238",
    10.99,
    5,
    1.75,
    1,
    "Extensive detail, electrostatic paint coating, diecast metal & plastic parts",
    1
);

const carContainer = document.getElementById("carContainer");
function displayCar(car) {
    const card = document.createElement("div");
    card.className = "carCard";

    card.innerHTML = `
        <h2>${car.brand} - ${car.model}</h2>
        <p><strong>Color:</strong> ${car.color}</p>
        <p><strong>Decade:</strong> ${car.decade}</p>
        <p><strong>Packaging:</strong> ${car.packaging}</p>
        <p><strong>Scale:</strong> ${car.scale}</p>
        <p><strong>Vehicle Type:</strong> ${car.vehicleType}</p>
        <p><strong>SKU:</strong> ${car.sku}</p>
        <p><strong>UPC:</strong> ${car.upc}</p>
        <p><strong>Price:</strong> $${car.price}</p>
        <p><strong>Size:</strong> ${car.length}" L × ${car.width}" W × ${car.height}" H</p>
        <p><strong>Features:</strong> ${car.features}</p>
        <p><strong>Quantity Left:</strong> <span id="qty">${car.quantity}</span></p>
    `;
    const increaseBtn = document.createElement("button");
    increaseBtn.textContent = "Increase Quantity";
    increaseBtn.onclick = () => {
        car.quantity++;
        document.getElementById("qty").textContent = car.quantity;
    };

    const decreaseBtn = document.createElement("button");
    decreaseBtn.textContent = "Decrease Quantity";
    decreaseBtn.onclick = () => {
        if (car.quantity > 0) car.quantity--;
        document.getElementById("qty").textContent = car.quantity;
    };

    card.appendChild(increaseBtn);
    card.appendChild(decreaseBtn);

    carContainer.appendChild(card);
}