// Kes Wilbur 2417297

let age = 25;
let name = "Paul 'Kes' Wilbur";
let isEnrolled = true;
let hasCompletedAssignment = false;
let futureGoal;
let completedCourse = null;

//Display variable name, value, and type
console.log("Age: " + age + " Type: " + " " + typeof age + "");
console.log("name: " + name + " Type: " + " " + typeof name + "");
console.log("enrolled: " + isEnrolled + " Type: " + " " + typeof isEnrolled + "");
console.log("futureGoal: " + futureGoal + " Type: " + " " + typeof futureGoal + "");
console.log("completedCourse: " + completedCourse + " Type: " + " " + typeof completedCourse + "");

/*
What I learned
I learned how to properly comment multiple lines, display data in the console, and how to display data type.
I also learned that the difference between undefined and null is intention. An undefined variable is one that 
has not been assigned a value. A variable assigned a null value is explicitly unvalued. 
The typeof function will return object on null variables. 
 */

//convert age to string, display original value, and the converted value and its type
const ageAsString = String(age);
console.log("Original (number): " + (age) + ", Conversion: " + (ageAsString + " Type: " +  " " + typeof ageAsString + ""));

const nameAsBoolean = Boolean(name);
console.log("Original (string): " + (name) + ", Conversion: " + (nameAsBoolean + " Type: " +  " " + typeof nameAsBoolean + ""));

const isEnrolledAsNumber = Number(isEnrolled);
console.log("Original: (boolean) " + (isEnrolled) + ", Conversion: " + (isEnrolledAsNumber + " Type: " + " " + typeof isEnrolledAsNumber + ""));

const completedCourseAsNumber = Number(completedCourse);
console.log(completedCourseAsNumber);

/*
Converting null to a number resulted in 0.
Null means "no value", it converts to 0 so that it can be involved in mathematics. 
*/

x = 1
y = 1


console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)

//divide by zero test
console.log(x / 0)

//dividing by zero in javascript results in "infinity". Traditionally in mathematics, it is termed "undefined".

//get results for each logical operator scenario
const andResult = isEnrolled && hasCompletedAssignment;
const orResult = isEnrolled || hasCompletedAssignment;
const notIsEnrolled = !isEnrolled;
const notHasCompleted = !hasCompletedAssignment;

//display results 
console.log("isEnrolled && hasCompletedAssignment: " + andResult);
console.log("isEnrolled || hasCompletedAssignment: " + orResult);
console.log("!isEnrolled: " + notIsEnrolled);
console.log("!hasCompletedAssignment: " + notHasCompleted);

/*
Truth Table

| A     | B     | A && B | A || B |
|-------|-------|--------|--------|
| true  | true  | true   | true   |
| true  | false | false  | true   |
| false | true  | false  | true   |
| false | false | false  | false  |
*/

