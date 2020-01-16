// 1. Declare and initialise a variable with a string value.
var pet = "pig";
console.log(pet);

// 2. Create an object variable called person and give it two properties (a key and a value) of your choice.
var person = {
    name: "Camilla"
};
console.log(person.name);

// 3. Create a variable called outOfStock and assign it a boolean value.

// Create an if else statement that checks the value of outOfStock.

// If it is true, console log "Out of stock". Otherwise log "In stock".
var outOfStock = true;

if(outOfStock) {
    console.log("Out of stock");
}else {
    console.log("In stock");
}
// 4. Create an array of five numbers.

//Loop through the array and console log each value.

var numbers = [24, 36, 2, 5, 7];
var firstNumber = numbers[0];
console.log(firstNumber);
var secoundNumber = numbers[1];
console.log(secoundNumber);
var therdNumber = numbers[2];
console.log(therdNumber);
var forthNumber = numbers[3];
console.log(forthNumber);
var lastNumber = numbers[4];
console.log(lastNumber);

// 5. Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.
for(var i = 15; i <= 25; i++) {
    console.log(i);
}

// 6. Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.
/**/ 

// 7. Create an array of two objects. Each object must have the same three properties (with different values):

//one property with a string value
//one property with a number value
//one property with a boolean value
//Loop through the array and console log the number value and the boolean value.

var pet = [
    {
       whatPet: "cat",
       numberOfAge: 3,
       itsPet: true,
    },
    {
        whatPet: "dog",
        numberOfAge: 6,
        itsPet: true,
    }
];

for(var i = 0; i < pet.length; i++) {
    console.log(pet[i].numberOfAge);
}
