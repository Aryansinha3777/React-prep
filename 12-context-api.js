// ==========================
// 12-context-api.js
// ==========================

// -----------------------------------
// 1. What is Context API ?
// -----------------------------------

// Context API is used to share data
// between multiple components
// without passing props manually at every level.

// Example:

// App
//   -> Parent
//       -> Child
//           -> GrandChild

// Suppose GrandChild needs user data.

// Without Context API:

// App -> Parent -> Child -> GrandChild

// We have to pass props through every component.

// This is called prop drilling.

// Context API helps avoid prop drilling.

// -----------------------------------
// 2. Problem Without Context API
// -----------------------------------

// Example:

/*

function App() {
  const user = "Aryan"

  return <Parent user={user} />
}

function Parent({ user }) {
  return <Child user={user} />
}

function Child({ user }) {
  return <GrandChild user={user} />
}

function GrandChild({ user }) {
  return <h1>{user}</h1>
}

*/

// Even if Parent and Child do not need user,
// they still have to pass it down.

// -----------------------------------
// 3. Creating Context
// -----------------------------------

// Context is created using createContext().

// Example:

/*

import { createContext } from "react"

const UserContext = createContext()

*/

// UserContext is now created.

// -----------------------------------
// 4. Provider
// -----------------------------------

// Provider is used to give data
// to all child components.

// Example:

/*

import { createContext } from "react"

const UserContext = createContext()

function App() {
  const user = "Aryan"

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  )
}

*/

// value={user} means user data is available
// to all child components inside Provider.

// -----------------------------------
// 5. useContext Hook
// -----------------------------------

// useContext is used to receive data
// from Context.

// Example:

/*

import { createContext, useContext } from "react"

const UserContext = createContext()

function App() {
  const user = "Aryan"

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  )
}

function Parent() {
  return <Child />
}

function Child() {
  return <GrandChild />
}

function GrandChild() {
  const user = useContext(UserContext)

  return <h1>{user}</h1>
}

*/

// GrandChild directly gets user
// without props.

// -----------------------------------
// 6. Full Example with Object
// -----------------------------------

/*

import { createContext, useContext } from "react"

const UserContext = createContext()

function App() {
  const userData = {
    name: "Aryan",
    age: 22
  }

  return (
    <UserContext.Provider value={userData}>
      <Profile />
    </UserContext.Provider>
  )
}

function Profile() {
  const user = useContext(UserContext)

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
    </div>
  )
}

*/

// -----------------------------------
// 7. Context File Structure
// -----------------------------------

// Usually context is kept in separate file.

// Example structure:

/*

src/
|
|-- context/
|     |-- UserContext.js
|
|-- components/
|     |-- Navbar.jsx
|     |-- Profile.jsx
|
|-- App.jsx

*/


// Example UserContext.js

/*

import { createContext } from "react"

const UserContext = createContext()

export default UserContext

*/

// Then import it wherever needed.


// -----------------------------------
// 8. Multiple Values in Context
// -----------------------------------

// We can pass multiple values.

// Example:

/*

<UserContext.Provider
  value={{
    user: "Aryan",
    age: 22,
    city: "Kolkata"
  }}
>
  <App />
</UserContext.Provider>

*/

// Then access like:

/*

const data = useContext(UserContext)

console.log(data.user)
console.log(data.age)
console.log(data.city)

*/

// -----------------------------------
// 9. Passing State in Context
// -----------------------------------

// We can also pass state and setter function.


// Example:

/*

import { createContext, useState, useContext } from "react"

const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
    </ThemeContext.Provider>
  )
}

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div>
      <h1>{theme}</h1>

      <button onClick={() => setTheme("dark")}>
        Dark Mode
      </button>
    </div>
  )
}

*/

// Context can also update state globally.

// -----------------------------------
// 10. Real World Uses
// -----------------------------------

// Context API is commonly used for:

// 1. Logged in user
// 2. Theme (dark/light)
// 3. Language
// 4. Cart data
// 5. Authentication
// 6. Notifications
// 7. Global settings

// -----------------------------------
// 11. Common Beginner Mistakes
// -----------------------------------

// 1. Forgetting Provider
// 2. Using useContext outside Provider
// 3. Passing too much data in one context
// 4. Not exporting context
// 5. Confusing Context API with props
// 6. Using Context for everything

// Wrong:

/*

const user = useContext(UserContext)

return <h1>{user.name}</h1>

*/

// But if component is not inside Provider,
// it will give error or undefined.


// Correct:

/*

<UserContext.Provider value={userData}>
  <Profile />
</UserContext.Provider>

*/


// -----------------------------------
// 12. Context API vs Props
// -----------------------------------

// Props:
// Used when parent sends data to direct child.

// Context API:
// Used when many components need same data.

// Props are better for small component communication.
// Context is better for global shared data.

// -----------------------------------
// 13. Context API vs Redux
// -----------------------------------

// Context API is simpler.
// Redux is more powerful for very large apps.

// Context is enough for:

// theme
// auth
// language
// small cart

// Redux is useful when app becomes very complex.

// -----------------------------------
// 14. Interview Questions with Answers
// -----------------------------------

// 1. What is Context API ?

// Answer:
// Context API is used to share data globally
// without prop drilling.

// 2. What problem does Context API solve ?

// Answer:
// It solves prop drilling.

// 3. Which hook is used with Context API ?

// Answer:
// useContext hook.

// 4. Which function creates context ?

// Answer:
// createContext().

// 5. What is Provider ?

// Answer:
// Provider supplies data to child components.

// 6. What is prop drilling ?

// Answer:
// Passing props through many unnecessary components.

// 7. Can Context store state ?

// Answer:
// Yes, we can pass state and setter function.


// 8. Is Context API replacement for Redux ?

// Answer:
// No. Context is simpler, Redux is for larger apps.

// 9. Can we have multiple contexts ?

// Answer:
// Yes.

// 10. What happens if useContext is used outside Provider ?

// Answer:
// It gives undefined or error.
