/** 
 * arrays.ts 
 * 
 * This file demonstrates the use of arrays in TS .
 * It covers arrays declaration , initialization , type safety and common array methods
 * 
 * Author : Dhia Ouerghemmi
 * Date : February 6th 2024
*/

/* ============================
   Declaring and Initializing Arrays
   ============================ */

// Declare an array of numbers using type annotation with square brackets
let numbers: number[] = [1,2,3,4,5,6]

// Declare an array of strings
let cities: string[] = ["Berlin","Munich","Stutgart", "Bonn", "Frankfort"]

// Declare an array of booleans using generic array syntax 
let booleans: Array<boolean> = [true,false, true]

console.log("Initial Numbers:"+ numbers)
console.log("Cities in Germay:"+ cities)
console.log("Booleans :"+ booleans)

/* ============================
   Type Safety in Arrays
   ============================ */

// Attempting to push a value of the wrong type results in a compile-time error.
// numbers.push("six"); // Uncommenting this line will cause an error

// Valid Operation : adding a number to the array 
numbers.push(7)
console.log("Updated Numbers:"+ numbers)

/* ============================
   Iterating Over Arrays
   ============================ */

// Using foreach loop to iterate and process each element
let num:number
let index:number = 0
numbers.forEach(num,index){
    console.log(`numbers[${index}] * 2 =`, num * 2)
}