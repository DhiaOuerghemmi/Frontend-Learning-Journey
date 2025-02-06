# Basic Types in TypeScript

TypeScript introduces static typing to JavaScript, helping to catch errors early during development. In this section, we'll explore some of the fundamental types provided by TypeScript, including:

- **String**
- **Number**
- **Boolean**
- **Other types** (e.g., `any`, `unknown`)

Understanding these basic types is essential before moving on to more advanced features in TypeScript.

---

## String

A `string` in TypeScript represents textual data. Strings are a core part of any application, used for everything from user messages to data manipulation. They can be defined using single quotes (`' '`), double quotes (`" "`), or backticks (`` ` ` ``) which allow for template literals.

### Key Points

- **Immutability:** Once created, a string's value cannot be changed. Operations on strings return a new string.
- **Template Literals:** Backticks allow for multi-line strings and string interpolation.
- **Built-in Methods:** Strings come with many methods (e.g., `toUpperCase()`, `slice()`) for common operations.

### Examples

#### Basic String Declaration

```typescript
// Using double quotes
let greeting: string = "Hello, TypeScript!";

// Using single quotes
let farewell: string = 'Goodbye, TypeScript!';

// Using template literals for interpolation
let name: string = "Alice";
let personalizedGreeting: string = `Hello, ${name}! Welcome to TypeScript.`;

console.log(greeting);             // Output: Hello, TypeScript!
console.log(farewell);             // Output: Goodbye, TypeScript!
console.log(personalizedGreeting); // Output: Hello, Alice! Welcome to TypeScript.
