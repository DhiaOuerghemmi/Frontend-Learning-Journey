
// String 
let greeting: string = "hello"
console.log(greeting)
greeting = "guten tag"
console.log(greeting)

// Number
let age: number = 34 
console.log(age)

// Boolean
let isActive: boolean = true 
if(isActive) {
    console.log("System is active")
}else{
    console.log("System is inactive")
}

// Any Type 
let randomValue: any = "software engineering "
console.log(randomValue)
randomValue = 43
console.log(randomValue)
randomValue = true
console.log(randomValue)

// Unknown
let value: unknown = "TS is awesome"
if (typeof value === "string"){
    console.log(value.toUpperCase())
}
