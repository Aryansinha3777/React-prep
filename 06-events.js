// ==========================
// 06-events.js
// ==========================

// -----------------------------------
// 1. What are Events in React ?
// -----------------------------------

// Events are actions performed by the user.

// Examples:

// - Clicking a button
// - Typing in input
// - Submitting a form
// - Hovering on an element
// - Pressing a key
// - Changing select option

// React listens to these actions using event handlers.

// -----------------------------------
// 2. Event Handler
// -----------------------------------

// Event handler is a function
// that runs when event happens.

// Example:

/*

function App() {
  function handleClick() {
    alert("Button Clicked")
  }

  return <button onClick={handleClick}>Click Me</button>
}

*/


// Here:
// onClick is event
// handleClick is event handler


// -----------------------------------
// 3. onClick Event
// -----------------------------------

// onClick runs when user clicks element.

// Example:

/*

function App() {
  function showMessage() {
    alert("Hello")
  }

  return <button onClick={showMessage}>Click</button>
}

*/

// -----------------------------------
// 4. Passing Function Reference
// -----------------------------------

// Correct:

/*
<button onClick={showMessage}>Click</button>
*/


// Wrong:

/*
<button onClick={showMessage()}>Click</button>
*/


// Why wrong?

// Because showMessage() runs immediately
// when component renders.

// Correct version only passes function reference.

// -----------------------------------
// 5. Inline Function in Event
// -----------------------------------

// Example:

/*

<button onClick={() => alert("Hello")}>
  Click
</button>

*/

// Arrow function runs only after click.

// -----------------------------------
// 6. Passing Value in Event Handler
// -----------------------------------

// Example:

/*

function App() {
  function greet(name) {
    alert(`Hello ${name}`)
  }

  return (
    <button onClick={() => greet("Aryan")}>
      Click
    </button>
  )
}

*/

// We use arrow function when passing arguments.

////////////////////////////////////////////////////NOTE/////////////////////////////////////////////////////////////
Because React first evaluates everything inside {} before rendering JSX.

When React sees:

<button onClick={greet("Aryan")}>
  Click
</button>

it does this first:

greet("Aryan")

Suppose:

function greet(name) {
  alert(`Hello ${name}`)
}

This function does not return anything.

So internally:

greet("Aryan")

becomes:

undefined

So React finally gets:

<button onClick={undefined}>
  Click
</button>

That is why:

alert appears immediately during render
onClick no longer has a function to run later

React is not asking permission from onClick.

It is simply evaluating the JavaScript expression inside {}.

Same example:

<h1>{2 + 3}</h1>

React first calculates:

2 + 3

Then renders:

<h1>5</h1>

Similarly:

onClick={greet("Aryan")}

first runs greet immediately, then whatever greet returns is assigned to onClick.

// -----------------------------------
// 7. onChange Event
// -----------------------------------

// onChange is used mainly with input fields.


// Example:

/*

function App() {
  function handleChange(event) {
    console.log(event.target.value)
  }

  return <input type="text" onChange={handleChange} />
}

*/

// event.target.value gives input value.

////////////////////////////////////////////note//////////////////////////////////////////////
Because onClick={handleClick} and onClick={handleClick()} are two different things.

This:

<button onClick={handleClick}>
  Click
</button>

means:

"React, when click happens later, then run handleClick"

So React stores function reference.

But this:

<button onClick={handleClick()}>
  Click
</button>

means:

"Run handleClick right now while rendering"

Because of ().

Same with onChange:

Correct:

<input onChange={handleChange} />

Wrong:

<input onChange={handleChange()} />

handleChange() would also run immediately during render.

So it is not special behavior of onClick.

Any event behaves like this:

onClick={func} → pass function reference
onClick={func()} → run immediately
onChange={func} → pass function reference
onChange={func()} → run immediately

// -----------------------------------
// 8. Event Object
// -----------------------------------

// React automatically passes event object.

// Example:

/*

function handleChange(event) {
  console.log(event)
}

*/


// Event object contains details about event.


// Common properties:

// event.target
// event.target.value
// event.target.name
// event.target.checked



// -----------------------------------
// 9. onSubmit Event
// -----------------------------------

// onSubmit is used with forms.


// Example:

/*

function App() {
  function handleSubmit(event) {
    event.preventDefault()
    alert("Form Submitted")
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  )
}

*/


// preventDefault() stops page refresh.



// -----------------------------------
// 10. preventDefault()
// -----------------------------------

// By default form refreshes page on submit.


// Example:

/*

event.preventDefault()

*/


// This prevents page reload.



// -----------------------------------
// 11. onMouseOver Event
// -----------------------------------

// Runs when mouse enters element.


// Example:

/*

<div onMouseOver={() => alert("Mouse Over")}>
  Hover Here
</div>

*/



// -----------------------------------
// 12. onMouseOut Event
// -----------------------------------

// Runs when mouse leaves element.


// Example:

/*

<div onMouseOut={() => alert("Mouse Out")}>
  Hover Here
</div>

*/



// -----------------------------------
// 13. onKeyDown Event
// -----------------------------------

// Runs when key is pressed.


// Example:

/*

<input
  type="text"
  onKeyDown={() => console.log("Key Pressed")}
/>

*/



// Example with key name:

/*

function handleKey(event) {
  console.log(event.key)
}

<input type="text" onKeyDown={handleKey} />

*/


// If Enter key pressed:

// Output:
// Enter



// -----------------------------------
// 14. onFocus Event
// -----------------------------------

// Runs when input gets focus.


// Example:

/*

<input
  type="text"
  onFocus={() => console.log("Input Focused")}
/>

*/



// -----------------------------------
// 15. onBlur Event
// -----------------------------------

// Runs when input loses focus.


// Example:

/*

<input
  type="text"
  onBlur={() => console.log("Input Lost Focus")}
/>

*/



// -----------------------------------
// 16. Multiple Events Together
// -----------------------------------

// Example:

/*

<input
  type="text"
  onFocus={() => console.log("Focus")}
  onBlur={() => console.log("Blur")}
  onChange={(event) => console.log(event.target.value)}
/>

*/



// -----------------------------------
// 17. Common Beginner Mistakes
// -----------------------------------

// 1. Calling function directly inside event
// 2. Forgetting event parameter
// 3. Forgetting preventDefault in form
// 4. Writing onclick instead of onClick
// 5. Using wrong camelCase event name


// Wrong:

/*

<button onclick={showMessage}>Click</button>

*/


// Correct:

/*

<button onClick={showMessage}>Click</button>

*/


// Wrong:

/*

<form onSubmit={handleSubmit()}>
</form>

*/


// Correct:

/*

<form onSubmit={handleSubmit}>
</form>

*/



// -----------------------------------
// 18. Important React Event Naming
// -----------------------------------

// React uses camelCase event names.


// Examples:

// onClick
// onChange
// onSubmit
// onFocus
// onBlur
// onMouseOver
// onMouseOut
// onKeyDown



// HTML uses lowercase:

// onclick
// onchange


// React uses camelCase:

// onClick
// onChange



// -----------------------------------
// 19. Interview Questions with Answers
// -----------------------------------

// 1. What are events in React ?

// Answer:
// Events are user actions like click,
// typing, submit, hover etc.


// 2. What is event handler ?

// Answer:
// Event handler is a function
// that runs when event happens.


// 3. Why do we use preventDefault() ?

// Answer:
// preventDefault() stops default browser action,
// like form page refresh.


// 4. Difference between onClick={handleClick}
// and onClick={handleClick()} ?

// Answer:
// handleClick passes function reference.
// handleClick() runs immediately.


// 5. What is event.target.value ?

// Answer:
// It gives current value of input field.


// 6. Why do React events use camelCase ?

// Answer:
// React event names follow camelCase convention.


// 7. What is onChange used for ?

// Answer:
// onChange is used to detect input value changes.


// 8. What is event object ?

// Answer:
// Event object contains information about event.


// 9. What is onSubmit used for ?

// Answer:
// onSubmit is used when form is submitted.


// 10. Can we pass arguments in event handler ?

// Answer:
// Yes.
// Usually by using arrow function.
