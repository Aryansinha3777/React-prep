// ==========================
// 05-state.js
// ==========================

// -----------------------------------
// 1. What is State ?
// -----------------------------------

// State is data stored inside a component.

// State is used when data changes over time.

// Example:

// Counter value
// Form input value
// Logged in status
// Theme mode
// Show/Hide password
// Cart item count

// Example:

/*
let count = 0
*/

// But normal variables do not re-render UI.

// React state re-renders UI whenever state changes.

// -----------------------------------
// 2. Why State is Used ?
// -----------------------------------

// State is used because:

// 1. UI changes dynamically
// 2. React re-renders component automatically
// 3. User interaction can update UI
// 4. Data can change without refreshing page

// Example:

// Clicking button increases count
// Typing input changes value
// Login button changes login status

// -----------------------------------
// 3. useState Hook
// -----------------------------------

// React provides useState hook to create state.

// Syntax:

/*

const [stateName, setStateName] = useState(initialValue)

*/

// Example:

/*

const [count, setCount] = useState(0)

*/

// count = current value
// setCount = function to update value
// 0 = initial value


// -----------------------------------
// 4. Importing useState
// -----------------------------------

// Before using useState,
// we must import it.

// Example:

/*

import { useState } from "react"

*/

// -----------------------------------
// 5. Basic Counter Example
// -----------------------------------

// Example:

/*

import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

*/

// Initial count = 0
// After click = 1
// After next click = 2

// -----------------------------------
// 6. Understanding Array Destructuring
// -----------------------------------

// useState returns an array.

// Example:

/*

const data = useState(0)

*/

// data[0] = current value
// data[1] = update function

// Example:

/*

const [count, setCount] = useState(0)

*/

// Same as:

/*

const data = useState(0)

const count = data[0]
const setCount = data[1]

*/

// -----------------------------------
// 7. Updating State
// -----------------------------------

// State should be updated using setter function.

// Correct:

/*

setCount(10)

*/

// Wrong:

/*

count = 10

*/

// React will not re-render if state variable
// is changed directly.


// -----------------------------------
// 8. State with String
// -----------------------------------

// Example:

/*

const [name, setName] = useState("Aryan")

*/

// Example:

/*

<button onClick={() => setName("Rahul")}>
  Change Name
</button>

*/

// -----------------------------------
// 9. State with Boolean
// -----------------------------------

// Example:
/*

const [isLoggedIn, setIsLoggedIn] = useState(false)

*/

// Example:

/*

<button onClick={() => setIsLoggedIn(true)}>
  Login
</button>

*/


// -----------------------------------
// 10. State with Array
// -----------------------------------

// Example:

/*

const [fruits, setFruits] = useState(["Apple", "Mango"])

*/


// Adding new fruit:

/*

setFruits([...fruits, "Banana"])

*/

// ...fruits means copy old array items.

// -----------------------------------
// 11. State with Object
// -----------------------------------

// Example:

/*

const [user, setUser] = useState({
  name: "Aryan",
  age: 21
})

*/

// Updating object state:

/*

setUser({
  ...user,
  age: 22
})

*/


// ...user copies old object values.

// -----------------------------------
// 12. Multiple State Variables
// -----------------------------------

// Example:

/*

const [name, setName] = useState("Aryan")
const [age, setAge] = useState(21)
const [city, setCity] = useState("Kolkata")

*/

// -----------------------------------
// 13. Previous State Value
// -----------------------------------

// Sometimes new value depends on previous value.

// Example:

/*
setCount(count + 1)
*/

// Better way:
/*
setCount((prevCount) => prevCount + 1)
*/

// This is safer for multiple fast updates.

// -----------------------------------
// 14. Decrease Counter Example
// -----------------------------------

// Example:

/*

<button onClick={() => setCount(count - 1)}>
  Decrease
</button>

*/

// -----------------------------------
// 15. Reset Counter Example
// -----------------------------------

// Example:

/*

<button onClick={() => setCount(0)}>
  Reset
</button>

*/

// -----------------------------------
// 16. Toggle Example
// -----------------------------------

// Example:

/*

const [show, setShow] = useState(false)

<button onClick={() => setShow(!show)}>
  Toggle
</button>

*/

// If false -> true
// If true -> false


// -----------------------------------
// 17. State Causes Re-render
// -----------------------------------

// When state changes,
// React re-renders component.

// Example:

/*

const [count, setCount] = useState(0)

*/

// Clicking button updates count,
// React automatically updates UI.

// -----------------------------------
// 18. Common Beginner Mistakes
// -----------------------------------

// 1. Forgetting to import useState
// 2. Directly changing state variable
// 3. Using wrong setter function name
// 4. Forgetting curly braces in JSX
// 5. Updating array/object incorrectly
// 6. Using state before defining it
// 7. Not using previous value when needed


// Wrong:

/*
count = count + 1
*/

// Correct:

/*
setCount(count + 1)
*/


// -----------------------------------
// 19. Props vs State
// -----------------------------------

// Props:
// Passed from parent to child.

// State:
// Managed inside same component.

// Props are read-only.
// State can change.

// Example:
/*

<User name="Aryan" />

*/


// Example State:

/*

const [count, setCount] = useState(0)

*/


// -----------------------------------
// 20. Interview Questions with Answers
// -----------------------------------

// 1. What is state in React ?

// Answer:
// State is data stored inside component
// that can change over time.


// 2. Why is state used ?

// Answer:
// State is used to make UI dynamic
// and update automatically.

// 3. What is useState ?

// Answer:
// useState is a React hook used
// to create state in functional components.

// 4. What does useState return ?

// Answer:
// useState returns an array containing:
// current value and update function.

// 5. Why should state not be changed directly ?

// Answer:
// Because direct change does not re-render component.

// 6. Difference between props and state ?

// Answer:
// Props come from parent.
// State is managed inside component.

// 7. Can state store arrays and objects ?

// Answer:
// Yes.
// State can store string, number, boolean,
// array and object.

// 8. What is re-rendering ?

// Answer:
// Re-rendering means React updates component UI
// when state changes.

// 9. Why is previous state callback useful ?

// Answer:
// Because it safely updates state
// using old value.

// Example:
// setCount((prev) => prev + 1)

// 10. What is the role of setter function ?

// Answer:
// Setter function updates state
// and triggers re-render.
