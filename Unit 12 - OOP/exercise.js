// Part One
// Create a class for vehicle. Each vehicle instance should have the following properties:

// make
// model
// year
// Each vehicle instance should have access to a method called honk, which returns the string “Beep.”
// Each vehicle instance should have a method called toString, which returns the string containing the make, model and year.

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() { return "Beep" }
    
    toString() {return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`}
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."

let mySecondVehicle = new Vehicle("Kia", "Niro", 2019);
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."



// Part Two
// Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.

class Car extends Vehicle {
    constructor(make, model, year, numWheels = 4) {
        super(make, model, year);
        this.numWheels = numWheels;
    }
}



let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4


// Part Three
// Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should 
//have a property called numWheels which has a value of 2. It should also have a revEngine method which returns “VROOM!!!”

class Motorcycle extends Vehicle {
    constructor(make, model, year, numWheels = 2) {
        super(make, model, year);
        this.numWheels = numWheels;
    }

    revEngine(){return "VROOM!!!"}
}


let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString(); // "The vehicle is a Honda Nighthawk from 2000."
myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2


// Part Four
// Create a class for a Garage. It should have a property called vehicles which will store an array of vehicles,
// and a property called capacity which is a number indicating how many vehicles will fit in the garage.
//When you create a garage, vehicles will always be empty; you only need to provide the capacity.

// A garage should also have an add method, which attempts to add a vehicle to the array of vehicles. However, 
//if you try to add something which is not a vehicle, the garage should return the message 
//“Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(vehicle) {
        if (vehicle instanceof Vehicle) {
            if (this.vehicles.length < this.capacity) {
                this.vehicles.push(vehicle);
                return "Vehicle Added";
            } else {
                return "Sorry, we're full."
            }         
        }
        else {
            return "Only vehicles are allowed in here!"
        }
    }
}




let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"
garage.add(new Motorcycle("Honda", "Nighthawk", 2000)); // "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]
garage.add(new Motorcycle("Honda", "Nighthawk", 2001)); // "Sorry, we're full."
