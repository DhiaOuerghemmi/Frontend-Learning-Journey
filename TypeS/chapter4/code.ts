/**
 * TypeScript Chapter 4: Utility Types & Advanced Type Manipulations
 * Author: Dhia Ouerghemmi
 * Date: 25/02/2025
 */

/* =========================
   1. Partial & Required
   ========================= */

   interface User {
    id: number;
    name: string;
    email?: string;
  }
  
  // Partial makes all properties optional
  const updateUser = (user: Partial<User>): User => {
    return { id: 1, name: "Alice", email: "alice@example.com", ...user };
  };
  
  const userUpdated = updateUser({ email: "alice.new@example.com" });
  console.log("Partial Example:", userUpdated);
  
  // Required makes all properties required (inverse of Partial)
  type CompleteUser = Required<User>;
  const completeUser: CompleteUser = { id: 2, name: "Bob", email: "bob@example.com" };
  
  /* =========================
     2. Pick & Omit
     ========================= */
  
  // Pick: create a type with a subset of properties
  type UserName = Pick<User, "name">;
  const userName: UserName = { name: "Charlie" };
  
  // Omit: create a type without specific properties
  type UserWithoutEmail = Omit<User, "email">;
  const userWithoutEmail: UserWithoutEmail = { id: 3, name: "Dana" };
  
  console.log("Pick Example:", userName);
  console.log("Omit Example:", userWithoutEmail);
  
  /* =========================
     3. Record
     ========================= */
  
  // Record: construct a type with a set of properties of a specific type
  type Role = "admin" | "user";
  type UserRoleMapping = Record<Role, User>;
  const userRoles: UserRoleMapping = {
    admin: { id: 1, name: "Alice", email: "alice@example.com" },
    user: { id: 2, name: "Bob", email: "bob@example.com" },
  };
  
  console.log("Record Example:", userRoles);
  
  /* =========================
     4. Conditional and Mapped Types
     ========================= */
  
  // Conditional type to extract the return type of a function
  type CustomReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
  const fn = (x: number): string => x.toString();
  type FnReturnType = CustomReturnType<typeof fn>; // string
  
  console.log("Conditional Type Example, FnReturnType is:", typeof fn(123));
  
  /* =========================
     Summary
     =========================
     Utility types streamline type management and enhance code maintainability.
     Combining these with conditional and mapped types creates powerful type definitions.
  */
  