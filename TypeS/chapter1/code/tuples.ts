/** 
 * 
 * tuples.ts
 * 
 * This file demonstrates the use of tuples in TS
 * It covers how to define , access and manipulate tuples ,
 * as well as how to use tuples as function return types.
 * 
 * Author : Dhia Ouerghemmi 
 * Date : February 7th 2025
*/

/* ============================
   Defining Tuples
   ============================ */

// define basic tuple presenting a person : [name,  age]
let person:[string,number] = ["Alice",34]

// more complex tuple representing a product : 
let product:[string, number , boolean] =['Laptop',2000.45 , true]


console.log("Person:"+ person)
console.log("Product:"+ product)

/* ============================
   Accessing and Modifying Tuples
   ============================ */

// Accessing tuples elements using their index 
let personName : string = person[0]
let personAge : number = person[1]
console.log(`Name:${personName} , Age:${personAge}`)

// Modifying tuples elements 
person[1] = 23 
console.log(`Name:${personName} , Age:${personAge}`)

// Trying to assign a wrong type would result in an error:
// person[0] = 100; // Error: Type 'number' is not assignable to type 'string'

/* ============================
   Tuples in Function Return Types
   ============================ */


/** 
 * Function that return a tuple containing status message and a success flag
 *  @return [string, boolean] -The first element is a status message and the second element is a success flag. 
 */

function getOperationStatus():[string,boolean]{
    return ["Operation Successful ",true]
}

const [statusMessage,isSuccess] = getOperationStatus()
console.log(`Status: ${statusMessage}`)
console.log(`Status:${isSuccess}`)

/* ============================
   Benefits and Limitations of Tuples
   ============================ */

/**
 * Benefits:
 * - Enforce a fixed number of elements.
 * - Each element can be of a different type.
 * - Useful for representing a fixed structure, such as function return values.
 *
 * Limitations:
 * - Less flexible than arrays when the size or types of elements vary.
 * - Overuse in complex data structures can reduce readability.
 */

/* ============================
   Summary
   ============================
   Tuples in TypeScript provide a concise way to group values of different types.
   They are best used when the number and types of elements are known and fixed.
*/


