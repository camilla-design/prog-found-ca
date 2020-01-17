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
if(i === 20) {
    console.log(i);
}else {
    console.log("not equal to 20");
}
// 7. Create an array of two objects. Each object must have the same three properties (with different values):

//one property with a string value
//one property with a number value
//one property with a boolean value
//Loop through the array and console log the number value and the boolean value.

var pet = [
    {
       whatPet: "cat",
       numberOfAge: 3,
       itsPet: true
    },
    {
        whatPet: "car",
        numberOfAge: 6,
        itsPet: false
    }
];

for(var i = 0; i < pet.length; i++) {
    console.log(pet[i].numberOfAge);
    console.log(pet[i].itsPet);
}

// 8. Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.

//Inside the function, log the string "I don't like " together with the argument.

//Call the function and pass in a value of your choice.

//Example:
//If you pass in the value "giraffes", the function should log: "I don't like giraffes".
function whatIDontLike(spiders) {
    console.log(spiders);
}
console.log("I don't like spiders ")

//9. Create a function that accepts two arguments.

//Inside the function, subtract the second argument from the first and console log the result.
function AddTwoNumbers(number1, number2) {
    var sum = number1 + number2;
    console.log(sum)
}
AddTwoNumbers(7,9);

//10. Create an empty array.

//Create a function that accepts one argument.

//Inside the function, add the argument to the array.

//Call the function and pass in a value of any type.
var emptyArray = []

function OneArgument(hello) {
emptyArray = hello; 
  
}
OneArgument("Have a nice day, Manny! \u{1F47E}"); 
console.log(emptyArray);
