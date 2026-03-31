// ==========================
// 17-performance-optimization.js
// ==========================

// -----------------------------------
// 1. What is Performance Optimization ?
// -----------------------------------

// Performance optimization means making React app:

// 1. Faster
// 2. Smoother
// 3. Less unnecessary rendering
// 4. Better user experience

// -----------------------------------
// 2. Why Unnecessary Re-rendering Happens
// -----------------------------------

// In React, when state changes,
// component renders again.

// Example:

/*

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <Child />
    </div>
  )
}

*/

// When count changes,
// App renders again,
// so Child also renders again.

// Even if Child data did not change.

// This can reduce performance in large apps.

// -----------------------------------
// 3. React.memo
// -----------------------------------

// React.memo prevents unnecessary re-render
// of child component.

// Example:

/*

const Child = React.memo(function Child() {
  console.log("Child Rendered")

  return <h1>Child Component</h1>
})

*/

// Now Child only re-renders
// if its props change.

// -----------------------------------
// 4. Problem with Functions in Props
// -----------------------------------

// Even if component uses React.memo,
// new function reference causes re-render.

// Example:

/*

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    console.log("Clicked")
  }

  return <Child onClick={handleClick} />
}

*/

// Every render creates new handleClick function.
// Child receives new prop reference.
// So Child re-renders again.

// -----------------------------------
// 5. useCallback
// -----------------------------------

// useCallback saves function reference.

// Example:

/*

const handleClick = useCallback(() => {
  console.log("Clicked")
}, [])

*/

// Now function reference stays same.

// -----------------------------------
// 6. useMemo
// -----------------------------------

// useMemo saves expensive calculation result.


// Example:

/*

const total = useMemo(() => {
  return expensiveCalculation(items)
}, [items])

*/

// Calculation only runs when items change.

// -----------------------------------
// 7. Lazy Loading
// -----------------------------------

// Lazy loading loads component only when needed.

// Example:

/*

import { lazy, Suspense } from "react"

const Profile = lazy(() => import("./Profile"))

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Profile />
    </Suspense>
  )
}

*/

// Profile component is loaded only when required.

// -----------------------------------
// 8. Debouncing
// -----------------------------------

// Debouncing means delaying function call
// until user stops typing/clicking.

// Example:

// Search input should not call API
// on every key press.

// Instead wait 500ms after user stops typing.

// Example logic:

/*

useEffect(() => {
  const timer = setTimeout(() => {
    console.log("API Call")
  }, 500)

  return () => {
    clearTimeout(timer)
  }
}, [search])

*/

// Useful in search bars.

// -----------------------------------
// 9. Avoid Unnecessary State
// -----------------------------------

// Do not store values in state
// if they can be calculated.

// Wrong:

/*

const [fullName, setFullName] = useState("")

*/

// Better:

/*

const fullName = firstName + " " + lastName

*/

// -----------------------------------
// 10. Key Optimization in Lists
// -----------------------------------

// Always use proper unique key in map.

// Wrong:

/*

{users.map((user, index) => (
  <h1 key={index}>{user.name}</h1>
))}

*/

// Better:

/*

{users.map((user) => (
  <h1 key={user.id}>{user.name}</h1>
))}

*/

// Stable unique keys improve rendering.

// -----------------------------------
// 11. Splitting Large Components
// -----------------------------------

// Huge components are hard to maintain
// and may re-render too much.

// Better:

// Navbar component
// Sidebar component
// ProductList component
// ProductCard component

// -----------------------------------
// 12. Common Beginner Mistakes
// -----------------------------------

// 1. Overusing useMemo
// 2. Overusing useCallback
// 3. Using index as key
// 4. Keeping too much state
// 5. Not using React.memo
// 6. Making API call on every key press
// 7. Creating very large components

// Important:

// Optimization is useful only when needed.
// Small apps usually do not need heavy optimization.

// -----------------------------------
// 13. Interview Questions with Answers
// -----------------------------------

// 1. What is React.memo ?

// Answer:
// Prevents unnecessary re-render of component.

// 2. What is useMemo used for ?

// Answer:
// Stores expensive calculation result.

// 3. What is useCallback used for ?

// Answer:
// Stores function reference.

// 4. What is lazy loading ?

// Answer:
// Loading component only when needed.

// 5. What is debouncing ?

// Answer:
// Delaying function call until user stops typing.

// 6. Why should unique keys be used ?

// Answer:
// Helps React identify list items correctly.

// 7. Why is using index as key bad ?

// Answer:
// Because order may change and React can update wrong item.


// 8. Should we optimize everything from beginning ?

// Answer:
// No. Optimize only when necessary.
