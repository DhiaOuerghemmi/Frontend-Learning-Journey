/**
 * TypeScript Chapter 3: Advanced Types – Union, Intersection, and Generics
 * Author: Dhia Ouerghemmi
 * Date: 25/02/2025
 */

/* =========================
   1. Union Types
   ========================= */

// A union type variable can be a string or a number
function combine(input: string | number, extra: string): string {
    // Convert both inputs to string for concatenation
    return input.toString() + extra;
  }
  
  const resultUnion = combine(10, " apples");
  console.log("Union Type Example:", resultUnion); // Output: "10 apples"
  
  /* =========================
     2. Intersection Types
     ========================= */
  
  interface BusinessPartner {
    name: string;
    credit: number;
  }
  
  interface Identity {
    id: number;
    name: string;
  }
  
  type EmployeeProfile = BusinessPartner & Identity;
  
  const employee: EmployeeProfile = {
    id: 101,
    name: "Alice",
    credit: 5000,
  };
  
  console.log("Intersection Type Example:", employee);
  
  /* =========================
     3. Generics
     ========================= */
  
  // Generic function to create an array of items
  function createArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
  }
  
  const numberArray = createArray<number>([1, 2, 3, 4]);
  const stringArray = createArray<string>(["a", "b", "c"]);
  
  console.log("Generic Function Example (Numbers):", numberArray);
  console.log("Generic Function Example (Strings):", stringArray);
  
  // Generic interface example
  interface KeyValuePair<K, V> {
    key: K;
    value: V;
  }
  
  const pair: KeyValuePair<string, number> = { key: "age", value: 30 };
  console.log("Generic Interface Example:", pair);
  