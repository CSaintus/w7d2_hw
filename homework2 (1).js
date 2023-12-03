//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteDiches(person) {
    for (let dish in person) {
        if (dish == "shakes") {
            for (let shake in person[dish]) {
                for (let shake_flavor in person[dish][shake]) {
                    console.log(person[dish][shake][shake_flavor])
                }
            }
        }
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


function person(name, age) {
    person.name = name;
    person.age = age;
}

Person.prototype.printInfo = () => {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
};

Person.prototype.Age = (years) => {
    person.age += years;
};

let person1 = new Person("Cody", 52);
let person2 = new Person("Prez", 25);

person1.printInfo();
person2.printInfo();

person1.Age(3);

person1.printInfo();






// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function stringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}



// Codewars
//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

//Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    // Program Me
    const binary_rep = n.toString(2);
    const bitsOne = binary_rep.split('1').length - 1;
    return bitsOne;
  };


//You are given a string of letters and an array of numbers.
//The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
//After each removal the size of the string decreases (there is no empty space).
//Return the only letter left.

function lastSurvivor(letters, coords) {
    for (let i = 0; i < coords.length; i++) {
      letters = letters.substring(0, coords[i]) + letters.substring(coords[i] + 1);
    }
    
    return letters;
  
  }