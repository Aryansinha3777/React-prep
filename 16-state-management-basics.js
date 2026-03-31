// ==========================
// 16-state-management-basics.js
// ==========================

// -----------------------------------
// 1. What is State Management ?
// -----------------------------------

// State management means managing data
// inside React application.

// Example state:

// Logged in user
// Cart items
// Theme
// Search text
// Notifications
// Counter value

// -----------------------------------
// 2. Local State
// -----------------------------------

// Local state belongs to one component.

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

// count only belongs to Counter component.

// -----------------------------------
// 3. Shared State
// -----------------------------------

// Sometimes multiple components need same state.

// Example:

// Navbar needs cart count
// Cart page needs cart items
// Checkout page needs cart items

// If same state is needed in many places,
// it becomes shared state.

// -----------------------------------
// 4. Lifting State Up
// -----------------------------------

// When multiple child components need same data,
// move state to common parent.

// Example:

/*

function App() {
  const [name, setName] = useState("")

  return (
    <div>
      <Input name={name} setName={setName} />
      <Preview name={name} />
    </div>
  )
}

*/

// App owns state.
// Child components receive props.

// -----------------------------------
// 5. Prop Drilling
// -----------------------------------

// Prop drilling means passing props
// through many unnecessary components.


// Example:

/*

<App user={user}>
  <Parent user={user}>
    <Child user={user}>
      <GrandChild user={user} />
    </Child>
  </Parent>
</App>

*/

// This becomes messy in large apps.


// -----------------------------------
// 6. Context API for Global State
// -----------------------------------

// Context API helps share state globally.

// Example:

/*

const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
      <Profile />
    </ThemeContext.Provider>
  )
}

*/

// Navbar and Profile can both use same state.

// -----------------------------------
// 7. State Management Libraries
// -----------------------------------

// For very large apps,
// Context API may not be enough.

// Popular state management libraries:

// Redux
// Redux Toolkit
// Zustand
// Recoil

// Most common:

// Redux Toolkit


// -----------------------------------
// 8. When Context API is Enough
// -----------------------------------

// Context API is enough for:

// User authentication
// Theme
// Language
// Small cart
// Notifications

// -----------------------------------
// 9. When Redux is Better
// -----------------------------------

// Redux is useful when:

// App has lots of global state
// Many components use same data
// State updates are complex
// Large e-commerce app
// Large dashboard
// Big social media app

// -----------------------------------
// 10. Example Problem Without State Management
// -----------------------------------

// Suppose:

// Product page updates cart
// Navbar shows cart count
// Checkout page shows total items

// Without shared state,
// syncing data becomes difficult.

// With Context or Redux,
// all components can use same cart data.

// -----------------------------------
// 11. Example Cart State with Context
// -----------------------------------

/*

const CartContext = createContext()

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <Navbar />
      <Products />
      <Cart />
    </CartContext.Provider>
  )
}

*/

// Navbar can show count.
// Products can add item.
// Cart can display items.

// -----------------------------------
// 12. Common Beginner Mistakes
// -----------------------------------

// 1. Using Context for everything
// 2. Keeping too much state globally
// 3. Not lifting state up properly
// 4. Creating unnecessary state
// 5. Duplicating same state in many components


// Wrong:

/*

const [fullName, setFullName] = useState(
  firstName + " " + lastName
)

*/

// fullName can be calculated,
// so separate state is unnecessary.

// Better:

/*

const fullName = firstName + " " + lastName

*/

// -----------------------------------
// 13. Interview Questions with Answers
// -----------------------------------

// 1. What is state management ?

// Answer:
// Managing data inside React app.

// 2. What is local state ?

// Answer:
// State used only inside one component.

// 3. What is shared state ?

// Answer:
// State needed by multiple components.

// 4. What is lifting state up ?

// Answer:
// Moving state to common parent component.

// 5. What is prop drilling ?

// Answer:
// Passing props through many unnecessary components.

// 6. Which built-in feature solves prop drilling ?

// Answer:
// Context API.

// 7. Name some state management libraries.

// Answer:
// Redux, Redux Toolkit, Zustand, Recoil.

// 8. When should Redux be used ?

// Answer:
// In large applications with complex shared state.


// 9. Is Context API enough for small projects ?

// Answer:
// Yes.
