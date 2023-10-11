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


### 1. Interfaces

#### Purpose of Interfaces
Interfaces in TypeScript are used to define the contract (shape) of objects, acting as a blueprint that ensures an object adheres to a specific structure. This enables TypeScript to validate that objects have the required shape, enhancing type safety and code intelligibility.

#### Problems Solved by Interfaces
- **Inconsistent Object Structures:** Prevents bugs and errors resulting from objects not adhering to the expected shape.
- **Reusability:** Allows developers to define a structure once and use it across multiple objects, making the code DRY (Don't Repeat Yourself).
- **Enhanced Autocompletion:** Improves developer experience by providing precise autocompletion and inline documentation in IDEs.

### Detailed Explanation and Examples

#### Basic Interface Usage

##### Example: Defining and Using an Interface
```typescript
interface User {
    name: string;
    age: number;
}

const alice: User = { name: 'Alice', age: 30 };
```
##### Explanation
- **Defining:** The `User` interface is defined to prescribe an object shape that includes `name` (string) and `age` (number).
- **Using:** The object `alice` is typed with `User`, ensuring it adheres to the required shape.

#### Extending Interfaces

##### Example: Extending an Interface to Create a New Interface
```typescript
interface Admin extends User {
    permissions: string[];
}

const bob: Admin = { name: 'Bob', age: 35, permissions: ['read', 'write'] };
```
##### Explanation
- **Extending:** The `Admin` interface extends `User`, inheriting its properties and adding a new `permissions` property.
- **Using:** The object `bob` must satisfy the structure of `Admin`, which includes properties from `User` as well.


### Optional Properties

Optional properties in an interface indicate that the property may or may not exist on objects adhering to the interface. They are defined by appending a `?` to the property name.

#### Example: Utilizing Optional Properties
```typescript
interface Product {
    id: number;
    name: string;
    description?: string;
}

const phone: Product = {
    id: 1,
    name: 'Smartphone'
};
```
##### Explanation
- **Defining:** The `description` property is defined as optional (`description?`) in the `Product` interface, indicating it may be omitted.
- **Using:** The `phone` object adheres to `Product` without providing a `description`, and TypeScript doesn’t raise an error due to the property being optional.

#### Scenario: Form Handling
- **Problem:** When handling form submissions, some fields might be optional and should be handled without causing TypeScript errors.
- **Solution:** Define the form data interface with optional properties for fields that are not required.

```typescript
interface FormData {
    username: string;
    email?: string;
}

const handleSubmit = (data: FormData) => {
    // Handle submission
};
```
- The `email` field is not required for form submission, but if provided, must be a string.

### Readonly Properties

Readonly properties can only be assigned when an object is first created and cannot be changed afterward. They are defined by prefixing the property name with `readonly`.

#### Example: Utilizing Readonly Properties
```typescript
interface Configuration {
    readonly apiUrl: string;
    timeout: number;
}

const config: Configuration = {
    apiUrl: 'https://api.example.com',
    timeout: 3000
};

// Error: Cannot assign to 'apiUrl' because it is a read-only property
config.apiUrl = 'https://newapi.example.com';
```
##### Explanation
- **Defining:** `apiUrl` is defined as readonly, meaning it can't be reassigned after object creation.
- **Using:** Trying to change `apiUrl` after the `config` object is created results in a TypeScript error, preventing unintended modifications.

#### Scenario: Configuration Object
- **Problem:** Avoid accidental changes to configuration settings after they have been set initially.
- **Solution:** Define the configuration interface with readonly properties to ensure they are not modified after being initially set.

```typescript
interface AppConfiguration {
    readonly serviceUrl: string;
    readonly maxRetries: number;
}

const appConfig: AppConfiguration = {
    serviceUrl: 'https://myservice.example.com',
    maxRetries: 5
};

// Application code...

// Error: Can't modify readonly property
appConfig.serviceUrl = 'https://newservice.example.com';
```
- The `serviceUrl` and `maxRetries` properties cannot be changed after `appConfig` is initialized, ensuring stability in configuration throughout the application.

### Summary

- **Optional Properties:** Provide flexibility by allowing objects to optionally include certain properties.
- **Readonly Properties:** Ensure stability by preventing properties from being changed after object creation.


### Scenarios and Solutions using Interfaces

#### Scenario: API Data Validation

- **Problem:** When fetching data from an API, ensuring the received data adheres to the expected shape.
- **Solution:** Define an interface representing the expected data shape and type the API response with it.

##### Example: Typing API Data with an Interface
```typescript
interface ApiResponse {
    data: { id: number; name: string };
    status: string;
}

fetch('https://api.example.com/data')
    .then(response => response.json())
    .then((data: ApiResponse) => {
        console.log(data.data.name);
    });
```
##### Explanation
- The `ApiResponse` interface ensures the fetched data adheres to the expected shape, preventing potential runtime errors when accessing properties.

### Introduction to Generics in TypeScript

#### What is a Generic?

Generics allow developers to create functions, classes, and interfaces that work with a variety of data types while preserving the benefits of type safety. Essentially, they provide a way to create reusable components that can operate on different types without sacrificing type information.

#### Why Use Generics?

1. **Type Safety**: Generics ensure that the data types of variables are not lost during operations.
   
2. **Code Reusability**: Write once, use with any type. This prevents code duplication for each data type.
   
3. **Maintainability**: A single, consistent logic to manage and update.

## Example 1: The `contains` Function

#### Without Generics:

##### Code Representation:

```typescript
function contains(arr: any[], item: any): boolean {
    return arr.includes(item);
}
```

##### Compile and Runtime Problems:

- **Compile-Time**: No issues, since the function accepts any type.
- **Runtime**: Possibility of logical errors due to type mismatching (e.g., comparing numbers with strings).

##### Test Example:

```typescript
console.log(contains([1, 2, 3], '2')); // false, but no type error
```

##### Code Duplication:

To maintain type safety, you might create additional functions:

```typescript
function containsNumber(arr: number[], item: number): boolean { /* ... */ }
function containsString(arr: string[], item: string): boolean { /* ... */ }
```

#### With Generics:

##### Code Representation:

```typescript
function contains<T>(arr: T[], item: T): boolean {
    return arr.includes(item);
}
```

##### Compile and Runtime Safety:

- **Compile-Time**: Type errors will be caught.
- **Runtime**: Reduced risk of logical errors due to consistent typing.

##### Test Example:

```typescript
console.log(contains<number>([1, 2, 3], '2')); // Type error
```

### Example 2: The `Pair` Interface

#### Without Generics:

##### Code Representation:

```typescript
interface NumberPair {
    first: number;
    second: number;
}
```

##### Compile and Runtime Problems:

- **Compile-Time**: You will get type errors if you try to assign mismatching types.
- **Runtime**: Type safety is preserved but at the cost of flexibility and code duplication.

##### Test Example:

```typescript
let pair: NumberPair = {first: 1, second: '2'}; // Type error
```

##### Code Duplication:

To allow different types, you create additional interfaces:

```typescript
interface StringPair {
    first: string;
    second: string;
}
```

#### With Generics:

##### Code Representation:

```typescript
interface Pair<T, U> {
    first: T;
    second: U;
}
```

##### Compile and Runtime Safety:

- **Compile-Time**: Errors if assigned types do not match the declared generic types.
- **Runtime**: Safety through consistent typing without sacrificing flexibility.

##### Test Example:

```typescript
let pair: Pair<number, string> = {first: 1, second: '2'}; // No error
let invalidPair: Pair<number, string> = {first: 1, second: 2}; // Type error
```

### Conclusion:

Through the testing examples, we observe that without generics, we either compromise type safety (leading to potential runtime errors) or end up with code duplication to maintain type safety across various data types. With generics, we preserve type safety and prevent code duplication, enhancing code reliability, and maintainability by catching errors during compile time and reducing logical errors at runtime.