
function createCar(manufacturer: string, model: string, otherDetails: { [key: string]: any }): { manufacturer: string, model: string, otherDetails } {

    const car: { manufacturer: string, model: string, otherDetails } = { manufacturer, model };
    return { ...car, ...otherDetails };
   }
   
   const myCar = createCar("Toyota", "Corolla", color: "Silver", sunroof: true);
   
   console.log("Car information:", myCar);