// ==========================
// 08-useeffect-api.js
// ==========================

// -----------------------------------
// 1. What is useEffect ?
// -----------------------------------

// useEffect is a React Hook.

// It is used to perform side effects in components.

// Examples of side effects:

// 1. API calls
// 2. Fetching data
// 3. setTimeout
// 4. setInterval
// 5. Updating document title
// 6. Adding event listeners
// 7. Local storage
// 8. Running code after component renders


// Syntax:

/*

useEffect(() => {
  // code here
}, [])

*/


// -----------------------------------
// 2. Why useEffect is Needed ?
// -----------------------------------

// React components render many times.

// If we directly write side effect code inside component body,
// it may run again and again on every render.


// Wrong:

/*

function App() {
  console.log("API call")

  return <h1>Hello</h1>
}

*/

// Here "API call" code runs every render.

// Correct:

/*

useEffect(() => {
  console.log("API call")
}, [])

*/

// Now it runs only once after first render.


// -----------------------------------
// 3. useEffect Runs After Render
// -----------------------------------

// Example:

/*

function App() {
  console.log("Component rendered")

  useEffect(() => {
    console.log("useEffect ran")
  }, [])

  return <h1>Hello</h1>
}

*/

// Output:

/*

Component rendered
useEffect ran

*/


// Component renders first.
// Then useEffect runs.

// -----------------------------------
// 4. Dependency Array
// -----------------------------------

// Dependency array decides when useEffect runs.

// Case 1: Empty Dependency Array

/*

useEffect(() => {
  console.log("Runs once")
}, [])

*/

// Runs only once after first render.


// Case 2: No Dependency Array

/*

useEffect(() => {
  console.log("Runs every render")
})

*/

// Runs after every render.


// Case 3: With Dependency

/*

useEffect(() => {
  console.log("Runs when count changes")
}, [count])

*/

// Runs when count changes.


// -----------------------------------
// 5. Example with Count
// -----------------------------------

/*

import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Count changed")
  }, [count])

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

// -----------------------------------
// 6. API Call using fetch()
// -----------------------------------

// fetch() is browser built-in function.
// It is used to make API requests.


// Example:

/*

import { useEffect } from "react"

function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, [])

  return <h1>Users</h1>
}

*/


// Flow:

// 1. Component renders
// 2. useEffect runs
// 3. fetch sends request
// 4. response comes
// 5. response.json() converts JSON into JavaScript object
// 6. data is printed


// -----------------------------------
// 7. Storing API Data in State
// -----------------------------------

/*

import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div>
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  )
}

*/


// users starts as empty array.
// After API data comes, users state updates.
// React re-renders UI.


// -----------------------------------
// 8. Loading State
// -----------------------------------

// API takes time.
// So we often show loading text.

// Example:

/*

import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  )
}

*/


// -----------------------------------
// 9. Error Handling
// -----------------------------------

// API request can fail.
// So we can handle errors.

// Example:

/*

import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://wrong-url.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => setError("Something went wrong"))
  }, [])

  return (
    <div>
      {error && <h1>{error}</h1>}

      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  )
}

*/

// -----------------------------------
// 10. Async Await Version
// -----------------------------------

// Many developers prefer async await.

// Example:

/*

import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()

      setUsers(data)
    }

    getUsers()
  }, [])

  return (
    <div>
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  )
}

*/

// -----------------------------------
// 11. Cleanup Function
// -----------------------------------

// Cleanup function runs before component unmounts
// or before effect runs again.

// Example:

/*

useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running")
  }, 1000)

  return () => {
    clearInterval(timer)
  }
}, [])

/////note/////

clearInterval(timer) should not run immediately.

It should run later:
when component unmounts
or before effect runs again

That is why we return a cleanup function.

useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running")
  }, 1000)

  return () => {
    clearInterval(timer)
  }
}, [])

React stores this returned function.
Later, when component is removed, React runs:
clearInterval(timer)

*/

// clearInterval prevents memory leak.

// -----------------------------------
// 12. Document Title Example
// -----------------------------------

/*

useEffect(() => {
  document.title = `Count: ${count}`
}, [count])

*/

// -----------------------------------
// 13. Common Beginner Mistakes
// -----------------------------------

// 1. Forgetting dependency array
// 2. Causing infinite re-render
// 3. Forgetting cleanup
// 4. Updating wrong state
// 5. Using map without key
// 6. Writing async directly in useEffect


// Wrong:

/*

useEffect(async () => {
  const data = await fetch(...)
}, [])

*/

// Correct:

/*

useEffect(() => {
  async function getData() {
    const response = await fetch(...)
  }

  getData()
}, [])

*/

// -----------------------------------
// 14. Infinite Re-render Example
// -----------------------------------

// Wrong:

/*

useEffect(() => {
  setCount(count + 1)
}, [count])

*/

// This creates infinite loop because:

// 1. count changes
// 2. useEffect runs
// 3. setCount changes count again
// 4. useEffect runs again

// -----------------------------------
// 15. Interview Questions with Answers
// -----------------------------------

// 1. What is useEffect ?

// Answer:
// useEffect is used to perform side effects in React.

// 2. What are side effects ?

// Answer:
// API calls, timers, local storage,
// event listeners, document title etc.


// 3. When does useEffect run ?

// Answer:
// It runs after component render.

// 4. What does [] mean in useEffect ?

// Answer:
// Empty dependency array means
// effect runs only once.

// 5. What happens if dependency array is missing ?

// Answer:
// useEffect runs after every render.


// 6. What is cleanup function ?

// Answer:
// Cleanup function removes timers,
// listeners, intervals before component unmounts.


// 7. Why do we use loading state ?

// Answer:
// Because API data takes time to come.


// 8. Why do we use error state ?

// Answer:
// To show user that request failed.


// 9. Why should async not be written directly in useEffect ?

// Answer:
// Because useEffect expects callback to return cleanup function,
// not Promise.

// 10. What causes infinite loop in useEffect ?

// Answer:
// Updating a dependency state inside same effect repeatedly.
