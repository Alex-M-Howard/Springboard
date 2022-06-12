/*
JavaScript objects are written with curly braces {}.

Object properties are written as name:value pairs, separated by commas.

Example
*/
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log(person.eyeColor)  //returns "blue"

function mpg(){
    return 35;    
}

const car = {
    make: "Ford",
    model: "Escape",
    color: "Red",
    miles_per_gallon: mpg(),
}

console.log(car.miles_per_gallon);  //Returns 35

//OR

console.log(car["miles_per_gallon"]);




const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  // THIS is like SELF in python


  name = person.fullName()  // Method call

  //Do Not Declare Strings, Numbers, and Booleans as Objects!