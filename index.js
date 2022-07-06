/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
console.log("\n--------------EXERCISE 1--------------");

let firstArray = [1, 2, 3, 4, 5]

console.log(firstArray)

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

console.log("\n--------------EXERCISE 2--------------");

let firstObject = {
  firstname: "Tereza",
  secondname: "Dankova",
  email: "google@gmail.com",
  address: "via Dante Alighieri n.105, Milan",
  age: 23
}

console.log("BIO", firstObject)

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

console.log("\n--------------EXERCISE 3--------------");

firstObject.hasDrivingLicense = true

console.log(firstObject)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

console.log("\n--------------EXERCISE 4--------------");

delete firstObject.age

console.log(firstObject)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

console.log("\n--------------EXERCISE 5--------------");

let secondObject = Object.assign({}, firstObject, { email: "webex@gmail.com" });

console.log(secondObject)

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

console.log("\n--------------EXERCISE 6--------------");

let totalShoppingCart = 30;

if(totalShoppingCart > 50){
  console.log("You have to pay:", totalShoppingCart,"which encludes a free shipping.")
} else {
  (totalShoppingCart < 50)
  console.log("You have to pay:", totalShoppingCart,"plus shipping costs",10, "that means the total amount is:", 40)
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

console.log("\n--------------EXERCISE 7--------------");



/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

console.log("\n--------------EXERCISE 8--------------");

let car = {
  brand: "Ferrari",
  model: "Ferrari Portofino",
  licencePlate: "448AA",
}

console.log("car number one:", car)

let carTwo = Object.assign({}, car, { licencePlate: "559BB"});
console.log("car number two:", carTwo)

let carThree = Object.assign({}, car, { licencePlate: "447FF"});
console.log("car number three:", carThree)

let carFour = Object.assign({}, car, { licencePlate: "332DD"});
console.log("car number four:", carFour)

let carFive = Object.assign({}, car, { licencePlate: "225JJ"});
console.log("car number five:", carFive)

let carSix = Object.assign({}, car, { licencePlate: "995ZZ"});
console.log("car number six:", carSix)

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

console.log("\n--------------EXERCISE 9--------------");

let carsForRent = ["car number one:", car, "car number two:", carTwo, "car number three:", carThree, "car number four:", carFour, "car number five:", carFive, "car number six:", carSix]

console.log(carsForRent)

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log("\n--------------EXERCISE 10--------------");

let removeFirstCar = carsForRent.splice(0, 2);
console.log(carsForRent);

carsForRent.pop();
console.log(carsForRent);


/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */


// Additional assignments for Day 4


/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
/* let firstArray = [1, 3, 5]

console.log(firstArray.reverse())*/

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

/* let firstArray = [1, 3, 5]

console.log(firstArray.reverse())*/

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */