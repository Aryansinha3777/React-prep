// ==========================
// 02-jsx.js
// ==========================

// -----------------------------------
// 1. What is JSX ?
// -----------------------------------

// JSX stands for JavaScript XML.
// JSX allows us to write HTML-like code inside JavaScript.

// Example:

const heading = <h1>Hello</h1>

// JSX is not actual HTML.
// It only looks similar to HTML.

// React converts JSX into JavaScript behind the scenes.

// JSX code:

/*
<h1>Hello</h1>
*/

// Converted JavaScript:
/*
React.createElement("h1", null, "Hello")
*/

// -----------------------------------
// 2. Why JSX is Used ?
// -----------------------------------

// JSX makes React code easier to read and write.

// Without JSX:
/*
const element = React.createElement(
  "h1",
  null,
  "Hello"
)
*/

// With JSX:
/*
const element = <h1>Hello</h1>
*/

// JSX looks cleaner and easier.

// Benefits of JSX:
// 1. Easier to read
// 2. Easier to write
// 3. Looks similar to HTML
// 4. Better developer experience
// 5. Helps write UI faster

// -----------------------------------
// 3. JSX Rules
// -----------------------------------

// Rule 1:
// JSX must return only one parent element.

// Wrong:

/*
return (
  <h1>Hello</h1>
  <p>World</p>
)
*/

// Correct:

/*
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
)
*/


// Rule 2:
// All tags must be closed.

// Wrong:
  
/*
<input>
<img>
*/

// Correct:

/*
<input />
<img />
*/

// Rule 3:
// Use className instead of class.

// Wrong:

/*
<div class="box">Hello</div>
*/

// Correct:
/*
<div className="box">Hello</div>
*/

// Rule 4:
// Use htmlFor instead of for in label.

// Wrong:

/*
<label for="email">Email</label>
*/

// Correct:

/*
<label htmlFor="email">Email</label>
*/

// Rule 5:
// JavaScript inside JSX must be written inside curly braces.


// Example
const name = "Aryan"

// Correct:

/*
<h1>Hello {name}</h1>
*/

// Rule 6:
// CSS properties in inline styling use camelCase.


// Wrong:

/*
<h1 style={{ background-color: "red" }}>
  Hello
</h1>
*/

// Correct:

/*
<h1 style={{ backgroundColor: "red" }}>
  Hello
</h1>
*/

// -----------------------------------
// 4. Writing JavaScript Inside JSX
// -----------------------------------

// We can use variables inside JSX with curly braces.

const userName = "Aryan"
const age = 21

// Example:

/*

function App() {
  return (
    <div>
      <h1>Name: {userName}</h1>
      <p>Age: {age}</p>
    </div>
  )
}

*/

// We can also use expressions.

const a = 10
const b = 20

// Example:

/*
<h1>{a + b}</h1>
*/

// Output:
// 30


// -----------------------------------
// 5. JSX with Arrays
// -----------------------------------

const fruits = ["Apple", "Banana", "Mango"]

// Example:

/*

function App() {
  return (
    <div>
      <h1>{fruits}</h1>
    </div>
  )
}

*/

// Output:
// Apple,Banana,Mango

// -----------------------------------
// 6. JSX with Objects
// -----------------------------------

// Objects cannot be directly rendered in JSX.

const user = {
  name: "Aryan",
  age: 21
}

// Wrong:

/*
<h1>{user}</h1>
*/

// This gives error.

// Correct:

/*
<h1>{user.name}</h1>
<p>{user.age}</p>
*/

// -----------------------------------
// 7. Inline Styling in JSX
// -----------------------------------

// In React, inline styling is written as object.

// Example:

/*

function App() {
  return (
    <h1 style={{ color: "red", backgroundColor: "yellow" }}>
      Hello
    </h1>
  )
}

*/


// Important things:

// 1. style takes object
Breakdown:
<h1 style={ ... }>
This first {} tells JSX that JavaScript is coming.
Inside that, we pass an object:
{
  backgroundColor: "red"
}
// 2. Double curly braces are used
// 3. CSS properties use camelCase


// -----------------------------------
// 8. Ternary Operator in JSX
// -----------------------------------

// We cannot directly write if statement inside JSX.

// Wrong:

/*

return (
  <div>
    if(isLoggedIn){
      <h1>Welcome</h1>
    }
  </div>
)

*/

// Correct:

const isLoggedIn = true


// Example:

/*

function App() {
  return (
    <div>
      {
        isLoggedIn
          ? <h1>Welcome User</h1>
          : <h1>Please Login</h1>
      }
    </div>
  )
}

*/

// -----------------------------------
// 9. Using Functions Inside JSX
// -----------------------------------

function greetUser(name) {
  return `Hello ${name}`
}

// Example:

/*

function App() {
  return (
    <h1>{greetUser("Aryan")}</h1>
  )
}

*/

// Output:
// Hello Aryan


// -----------------------------------
// 10. Comments Inside JSX
// -----------------------------------

// Normal JavaScript comments do not work inside JSX.

// Wrong:

/*

return (
  <div>
    // This is heading
    <h1>Hello</h1>
  </div>
)

*/

// Correct:

/*

return (
  <div>
    { /* This is heading */ }
    <h1>Hello</h1>
  </div>
)

*/


// -----------------------------------
// 11. Fragment in JSX
// -----------------------------------

// Instead of using extra div, we can use Fragment.

// Example:

/*

function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  )
}

*/

// Fragment avoids unnecessary div in DOM.

// -----------------------------------
// 12. Common Beginner Mistakes
// -----------------------------------

// 1. Using class instead of className
// 2. Using for instead of htmlFor
// 3. Forgetting to close tags
// 4. Returning multiple parent elements
// 5. Forgetting curly braces around JavaScript
// 6. Trying to render objects directly
// 7. Using normal CSS property names instead of camelCase
// 8. Writing if statements directly inside JSX
// 9. Using comments incorrectly

// -----------------------------------
// 13. Interview Questions with Answers
// -----------------------------------

// 1. What is JSX ?

// Answer:
// JSX stands for JavaScript XML.
// It allows us to write HTML-like code inside JavaScript.

// 2. Why JSX is used ?

// Answer:
// JSX is used because it makes React code easier to read,
// write, and understand.

// 3. Can browsers understand JSX directly ?

// Answer:
// No.
// Browsers cannot understand JSX directly.
// Babel converts JSX into normal JavaScript.

// 4. Why className is used instead of class ?

// Answer:
// Because class is reserved keyword in JavaScript.
// So React uses className instead.

// 5. Why htmlFor is used instead of for ?

// Answer:
// Because for is reserved keyword in JavaScript.
// So React uses htmlFor.

// 6. Why JSX needs one parent element ?

// Answer:
// Because React component can return only one element.

// 7. Why objects cannot be rendered directly in JSX ?

// Answer:
// Because JSX can only render values like string, number,
// array, and React elements.
// Objects are not directly renderable.

// 8. What is Fragment ?

// Answer:
// Fragment allows returning multiple elements
// without adding extra div in DOM.

// 9. What is the use of curly braces in JSX ?

// Answer:
// Curly braces are used to write JavaScript inside JSX.

// 10. Can we write if statement directly inside JSX ?

// Answer:
// No.
// We usually use ternary operator or logical operators instead.
