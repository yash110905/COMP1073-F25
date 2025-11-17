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
