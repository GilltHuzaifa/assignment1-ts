"use strict";
function createCar(manufacturer, model, otherDetails) {
    const car = { manufacturer, model };
    return Object.assign(Object.assign({}, car), otherDetails);
}
const myCar = createCar("Toyota", "Corolla", color, "Silver", sunroof, true);
console.log("Car information:", myCar);
