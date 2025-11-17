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
