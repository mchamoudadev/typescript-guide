### What is TypeScript?

**TypeScript** is a statically typed superset of JavaScript developed and maintained by Microsoft. It adds static types to JavaScript, which can make it easier to read and less prone to runtime errors. 

#### Why TypeScript?

1. **Early Error Detection:** Catch errors early in development, reducing runtime errors.
2. **Readability:** Type annotations make it easier to understand what values are expected.
3. **Robustness:** The type system ensures more reliable, robust code.
4. **Enhanced Tooling:** Improved autocompletion, type checking, and source documentation.
5. **Scalability:** Facilitates the development of scalable, maintainable codebases.
   

### Installing TypeScript

#### 1. Install Node.js and npm
Ensure that [Node.js](https://nodejs.org/) and npm (Node Package Manager, which comes with Node.js) are installed on your system. You can check their installation by running:
```shell
node -v
npm -v
```

#### 2. Install TypeScript Globally
Install TypeScript globally on your system using npm:
```shell
npm install -g typescript
```
This command installs the TypeScript Compiler (tsc) globally, so it can be accessed from any directory in your command line.

### Compiling TypeScript Code

#### 3. Compile TypeScript to JavaScript
TypeScript (`.ts` files) needs to be compiled to JavaScript (`.js` files) to be run in a JavaScript runtime like Node.js or a web browser. Use the TypeScript Compiler (`tsc`) to compile TypeScript files:
```shell
tsc filename.ts
```
This command compiles `filename.ts` to a JavaScript file named `filename.js`.

### Running TypeScript Code

#### 4. Run Compiled JavaScript
Use Node.js to run the compiled JavaScript file:
```shell
node filename.js
```

### Creating a TypeScript Project

#### 5. Initialize a TypeScript Project
Navigate to your project directory and run:
```shell
tsc --init
```
This command creates a `tsconfig.json` file in your project directory, which configures the TypeScript Compiler options.

#### 6. Configure TypeScript Compiler Options
Open `tsconfig.json` and configure the compiler options as per your project needs. Some commonly used options are:
- `"target": "es6"`: Specifies the ECMAScript target version.
- `"module": "commonjs"`: Specifies the module system.
- `"rootDir": "./src"`: Specifies the root directory of your source files.
- `"outDir": "./dist"`: Redirects the output structure to the directory.

#### 7. Compile and Run TypeScript Code in One Step
For a smoother developer experience, you might want to compile and run TypeScript code in one step. To achieve this, you can use the `ts-node` package:
```shell
npm install -g ts-node
```
Then, you can run TypeScript files directly:
```shell
ts-node filename.ts
```

### Summary

- **Install TypeScript**: Using npm, install TypeScript globally.
- **Compile TypeScript**: Use `tsc` to compile `.ts` files to `.js`.
- **Run JavaScript**: Use `node` to run the compiled `.js` files.
- **TypeScript Project**: Use `tsc --init` to start a new TypeScript project and configure `tsconfig.json`.
- **Run TypeScript Directly**: Use `ts-node` to run TypeScript code without manually compiling it.


### Topic 1: Basic Types and Type Annotations

#### Basic Types in TypeScript
TypeScript includes several basic types which allow developers to specify and validate the data types they expect:

- **`number`**: For numerical values.
- **`string`**: For textual data.
- **`boolean`**: For true/false values.
- **`array`**: For arrays of other types.
- **`tuple`**: For fixed-length arrays with specified types.
- **`enum`**: For enumerated values.
- **`any`**: For unknown or dynamic types.
- **`void`**: For functions that don't return a value.
- **`null`** and **`undefined`**: For values that are null or undefined.



### Topic 2: Deep Dive into Basic Types

#### 1. `number`

- Used for integers and floating-point numbers.
  
  **Example:**
  ```typescript
  let age: number = 30;
  let weight: number = 150.5;
  ```

#### 2. `string`

- Used for textual data.
  
  **Example:**
  ```typescript
  let name: string = "Alice";
  let greeting: string = `Hello, my name is ${name}`;
  ```

#### 3. `boolean`

- Used for true/false values.
  
  **Example:**
  ```typescript
  let isAdult: boolean = true;
  ```

#### 4. `array`

- Used for arrays of other types.
  
  **Example:**
  ```typescript
  let numbers: number[] = [1, 2, 3, 4, 5];
  let names: string[] = ["Alice", "Bob", "Charlie"];
  ```

#### 5. `tuple`

- Used for fixed-length arrays with elements of specified types.
  
  **Example:**
  ```typescript
  let person: [string, number] = ["Alice", 30]; // [name, age]
  ```

#### 6. `enum`

- Used for creating named constants.
  
  **Example:**
  ```typescript
  enum Color {Red, Green, Blue}
  let c: Color = Color.Green;
  ```

#### 7. `any`

- Used when the type is unknown or dynamic.
  
  **Example:**
  ```typescript
  let variable: any = 4;
  variable = "string";
  variable = true;
  ```

#### 8. `void`

- Commonly used as the return type of functions that do not return a value.
  
  **Example:**
  ```typescript
  function logMessage(message: string): void {
      console.log(message);
  }
  ```

#### 9. `null` and `undefined`

- Special types that have only one value each (`null` and `undefined`).
  
  **Example:**
  ```typescript
  let u: undefined = undefined;
  let n: null = null;
  ```

### Topic 3: Functions and Type Annotations

Functions play a critical role in TypeScript, and understanding how to work with types in function parameters and return values is crucial.

#### Typing Function Parameters and Return Values

- **Example:**
  ```typescript
  function greet(name: string): string {
      return `Hello, ${name}`;
  }
  ```

  **Explanation:**
  - `name: string` - The `name` parameter must be a string.
  - `: string` after the parameter list indicates that the function returns a string.


#### 2. **Function Expressions**
Function expressions involve defining a function and assigning it to a variable. This function can be anonymous or named.

```javascript
const add = function(a, b) {
    return a + b;
};
```

In TypeScript, we can add type annotations to function expressions to specify the types of parameters and the return type of the function.

### Typing Function Expressions in TypeScript

When working with function expressions in TypeScript, you can specify the types of parameters and the return type to ensure type safety.

**Example:**
```typescript
const add: (a: number, b: number) => number = function(a, b) {
    return a + b;
};
```

#### Detailed Explanation:

- **`(a: number, b: number) => number`**: This part is a type annotation for the function expression and it provides the following details:
    - **`a: number, b: number`**: The parameters `a` and `b` should be of type `number`.
    - **`=> number`**: The function will return a value of type `number`.

- **`function(a, b)`**: This is the function expression. Notice we didn't have to specify types for `a` and `b` here. TypeScript infers the types from the type annotation we provided.

#### Why is this Useful?

1. **Type Safety:** Ensures that the function parameters and return type are as intended, preventing unintended data types from being passed or returned.
   
2. **Code Intellisense:** Provides better development experience with intelligent code suggestions and parameter hints.
   
3. **Readability:** The type annotations serve as a form of documentation, making the code more readable and understandable to others (and to "future you").

#### Use Cases:

- **API Calls:** When you have a function that makes API calls, defining the expected input and output types can ensure that the data handling throughout the app is consistent and predictable.
  
- **Utility Functions:** For functions that perform calculations or data transformations, specifying types can prevent inadvertent errors due to unexpected data types.


#### Optional and Default Parameters

- **Example:**
  ```typescript
  function createGreeting(name: string, age?: number): string {
      return age 
          ? `Hello, my name is ${name} and I am ${age} years old`
          : `Hello, my name is ${name}`;
  }
  ```

  **Explanation:**
  - `age?: number` indicates that `age` is an optional parameter.
  - The function can be called with either one or two arguments.



### Arrow Functions in TypeScript

Arrow functions, introduced in ECMAScript 2015 (ES6), provide a concise syntax to define functions. They are especially useful for writing shorter function expressions. 

#### Basic Syntax of Arrow Functions

The basic syntax of an arrow function in JavaScript is:

```javascript
const add = (a, b) => {
    return a + b;
};
```

In TypeScript, you can add type annotations to the parameters of arrow functions, just like regular function expressions. Additionally, you can specify the return type of the function.

### Typing Arrow Functions in TypeScript

#### Example 1: Basic Type Annotations

```typescript
const add: (a: number, b: number) => number = (a, b) => {
    return a + b;
};
```

In this example:
- **`(a: number, b: number) => number`**: This is a type annotation indicating the function takes two parameters of type `number` and returns a `number`.
- **`(a, b) => {...}`**: This is the arrow function. The types of `a` and `b` are inferred from the type annotation.

#### Example 2: Implicit Return

If the arrow function body consists of a single expression, you can omit the curly braces and the `return` keyword. This is known as an implicit return.

```typescript
const add: (a: number, b: number) => number = (a, b) => a + b;
```

#### Example 3: Typing the Parameters Directly

You can also apply type annotations directly to the parameters in the function expression if the types are straightforward and the function is not too complex.

```typescript
const add = (a: number, b: number): number => a + b;
```

#### Detailed Explanation:

- **`a: number, b: number`**: The parameters `a` and `b` should be of type `number`.
- **`: number`**: Indicates the function will return a number.
- **`=> a + b`**: The arrow `=>` introduces the function body. Here, `a + b` is the expression whose result will be returned.


###  Objects and Type Aliases

#### Objects
Objects in TypeScript can have specific types assigned to their properties.

**Example:**
```typescript
const user: { name: string; age: number } = { name: 'Alice', age: 30 };
```

#### Type Aliases
Type aliases create a new name for a type and can be used to provide a type to objects, making the code more DRY (Don’t Repeat Yourself).

#### Example: Using Type Aliases with Objects
```typescript
type User = { name: string; age: number };
const user: User = { name: 'Alice', age: 30 };
```
**Explanation:**
- A `User` type is defined using `type User = { name: string; age: number }` to avoid repeating the object structure and to enhance readability.
- The `user` object is typed with `User`, ensuring it adheres to the defined structure.

### 2. Union Types

#### Example: Accepting Multiple Types
```typescript
type StringOrNumber = string | number;
const id: StringOrNumber = 'abc123';
```
**Explanation:**
- The type `StringOrNumber` is defined as a union (`string | number`), indicating `id` can be either a string or a number.
- This provides flexibility while still restricting `id` to the intended types.

### 3. Intersection Types

#### Example: Combining Types
```typescript
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;
const person: Person = { name: 'Alice', age: 30 };
```
**Explanation:**
- `Named & Aged` creates a new type `Person` that combines the properties of `Named` and `Aged`.
- The `person` object must have all properties from both types, ensuring comprehensive typing.

### 4. Nullable Types and Optional Chaining

#### Example: Safe Property Access
```typescript
const user = { profile: { name: 'Alice', age: 30 } };
const age = user?.profile?.age;
```
**Explanation:**
- `user?.profile?.age` utilizes optional chaining (`?.`) to safely access nested properties, preventing runtime errors if `profile` is `null` or `undefined`.
- This results in `age` being `30` if `profile` exists and `undefined` otherwise.

### 5. Nullish Coalescing Operator

#### Example: Default Value Assignment
```typescript
const input = null;
const output = input ?? 'default';
```
**Explanation:**
- `input ?? 'default'` uses the nullish coalescing operator (`??`) to assign a default value of `'default'` if `input` is `null` or `undefined`.
- This ensures `output` is assigned a valid value even when `input` is nullish.

### 6. Type Assertion

#### Example: Asserting Variable Type
```typescript
let unknownVar: unknown = "I am a string";
let strVar: string = (unknownVar as string).toUpperCase();
```
**Explanation:**
- `(unknownVar as string)` tells TypeScript to treat `unknownVar` as a string, allowing the use of string methods like `toUpperCase`.
- This is useful when the developer knows the type but TypeScript does not.# typescript-guide
