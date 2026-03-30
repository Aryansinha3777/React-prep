// ==========================
// 09-conditional-rendering.js
// ==========================

// -----------------------------------
// 1. What is Conditional Rendering ?
// -----------------------------------

// Conditional rendering means showing different UI
// based on some condition.

// Example:

// If user is logged in -> show Dashboard
// If user is not logged in -> show Login button


// -----------------------------------
// 2. Basic if Condition
// -----------------------------------

// Example:

/*

function App() {
  const isLoggedIn = true

  if (isLoggedIn) {
    return <h1>Welcome User</h1>
  }

  return <h1>Please Login</h1>
}

*/

// -----------------------------------
// 3. if else Example
// -----------------------------------

// Example:

/*

function App() {
  const age = 20

  if (age >= 18) {
    return <h1>Adult</h1>
  } else {
    return <h1>Minor</h1>
  }
}

*/

// -----------------------------------
// 4. Conditional Rendering Inside JSX
// -----------------------------------

// We cannot directly write full if statement inside JSX.


// Wrong:

/*

return (
  <div>
    if (isLoggedIn) {
      <h1>Welcome</h1>
    }
  </div>
)

*/

// Correct ways are:

// 1. Ternary Operator
// 2. && Operator
// 3. Variable Method


// -----------------------------------
// 5. Ternary Operator
// -----------------------------------

// Syntax:

/*

condition ? truePart : falsePart

*/


// Example:

/*

function App() {
  const isLoggedIn = true

  return (
    <div>
      {isLoggedIn ? <h1>Welcome</h1> : <h1>Please Login</h1>}
    </div>
  )
}

*/

// -----------------------------------
// 6. && Operator
// -----------------------------------

// Used when you only want to show something
// if condition is true.


// Example:

/*

function App() {
  const isAdmin = true

  return (
    <div>
      {isAdmin && <h1>Admin Panel</h1>}
    </div>
  )
}

*/

// If isAdmin is true -> show Admin Panel
// If false -> show nothing


// -----------------------------------
// 7. Variable Method
// -----------------------------------

// Example:

/*

function App() {
  const isLoggedIn = false

  let message

  if (isLoggedIn) {
    message = <h1>Welcome User</h1>
  } else {
    message = <h1>Please Login</h1>
  }
  
  return <div>{message}</div>
}

*/

// -----------------------------------
// 8. Multiple Conditions
// -----------------------------------

// Example:

/*

function App() {
  const role = "admin"

  return (
    <div>
      {role === "admin" ? (
        <h1>Admin Dashboard</h1>
      ) : role === "user" ? (
        <h1>User Dashboard</h1>
      ) : (
        <h1>Guest Dashboard</h1>
      )}
    </div>
  )
}

*/

// -----------------------------------
// 9. Loading Example
// -----------------------------------

// Example:

/*

function App() {
  const loading = true

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h1>Data Loaded</h1>}
    </div>
  )
}

*/

// -----------------------------------
// 10. Showing Error Message
// -----------------------------------

// Example:

/*

function App() {
  const error = "Something went wrong"

  return (
    <div>
      {error && <h1>{error}</h1>}
    </div>
  )
}

*/


// -----------------------------------
// 11. Conditional Button Example
// -----------------------------------

// Example:

/*

function App() {
  const isLoggedIn = true

  return (
    <div>
      {isLoggedIn ? (
        <button>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </div>
  )
}

*/

// -----------------------------------
// 12. Conditional Class Name
// -----------------------------------

// Example:

/*

function App() {
  const isActive = true

  return (
    <button className={isActive ? "active" : "inactive"}>
      Click Me
    </button>
  )
}

*/

// -----------------------------------
// 13. Return null
// -----------------------------------

// Returning null means render nothing.

// Example:

/*

function App() {
  const show = false

  if (!show) {
    return null
  }

  return <h1>Hello</h1>
}

*/

// If show is false, nothing appears on screen.

// -----------------------------------
// 14. Common Beginner Mistakes
// -----------------------------------

// 1. Writing if directly inside JSX
// 2. Forgetting curly braces
// 3. Using && when ternary is needed
// 4. Nested ternary becoming messy
// 5. Returning multiple elements without wrapper
// 6. Forgetting return null

// Wrong:

/*

<div>
  if (loading) {
    <h1>Loading</h1>
  }
</div>

*/

// Correct:

/*

<div>
  {loading ? <h1>Loading</h1> : <h1>Done</h1>}
</div>

*/

// -----------------------------------
// 15. Interview Questions with Answers
// -----------------------------------

// 1. What is conditional rendering ?

// Answer:
// Showing different UI based on condition.

// 2. Which operators are commonly used for conditional rendering ?

// Answer:
// Ternary operator and && operator.

// 3. When should we use && operator ?

// Answer:
// When we only want to show something if condition is true.

// 4. When should we use ternary operator ?

// Answer:
// When we need both true part and false part.

// 5. Can we write if statement directly inside JSX ?

// Answer:
// No.
// We use ternary, && or variable method.

// 6. What does returning null mean ?

// Answer:
// It means render nothing.

// 7. Why can nested ternary be bad ?

// Answer:
// Because code becomes hard to read.

// 8. What is difference between && and ternary ?

// Answer:
// && only handles true case.
// Ternary handles both true and false case.

// 9. Can className be conditional ?

// Answer:
// Yes.
// We can conditionally apply class names.
// 10. What happens if false is rendered in JSX ?

// Answer:
// React ignores false and shows nothing.
