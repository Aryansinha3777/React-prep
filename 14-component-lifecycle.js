// ==========================
// 14-component-lifecycle.js
// ==========================

// -----------------------------------
// 1. What is Component Lifecycle ?
// -----------------------------------

// Lifecycle means different stages of a component.

// A component mainly has 3 stages:

// 1. Mounting
// 2. Updating
// 3. Unmounting

// -----------------------------------
// 2. Mounting
// -----------------------------------

// Mounting means component appears on screen
// for first time.

// Example:

/*

function App() {
  return <Profile />
}

*/

// When Profile appears for first time,
// it is mounting.

// Example with useEffect:

/*

useEffect(() => {
  console.log("Component Mounted")
}, [])

*/

// Empty dependency array means
// effect runs only once after first render.

// -----------------------------------
// 3. Updating
// -----------------------------------

// Updating means component re-renders
// because state or props changed.

// Example:

/*

function App() {
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

// When count changes,
// component updates and re-renders.

// Example:

/*

useEffect(() => {
  console.log("Count Changed")
}, [count])

*/

// This runs whenever count changes.


// -----------------------------------
// 4. Unmounting
// -----------------------------------

// Unmounting means component is removed from screen.

// Example:

/*

function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <Profile />}
    </div>
  )
}

*/

// If show becomes false,
// Profile component disappears.

// That means Profile unmounted.

// -----------------------------------
// 5. Cleanup Function
// -----------------------------------

// Cleanup runs before component unmounts.

// Example:

/*

useEffect(() => {
  console.log("Mounted")

  return () => {
    console.log("Unmounted")
  }
}, [])

*/

// First it prints Mounted.
// When component is removed,
// it prints Unmounted.

// -----------------------------------
// 6. Real Example with Timer
// -----------------------------------

/*

useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running")
  }, 1000)

  return () => {
    clearInterval(interval)
  }
}, [])

*/

// When component mounts,
// interval starts.

// When component unmounts,
// interval stops.

// -----------------------------------
// 7. Real Example with Event Listener
// -----------------------------------

/*

useEffect(() => {
  function handleResize() {
    console.log(window.innerWidth)
  }

  window.addEventListener("resize", handleResize)

  return () => {
    window.removeEventListener("resize", handleResize)
  }
}, [])

*/

// Listener added when component mounts.
// Listener removed when component unmounts.

// -----------------------------------
// 8. Lifecycle in Class Components
// -----------------------------------

// Old React class components had:

// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()

// Example:

/*

componentDidMount() {
  console.log("Mounted")
}

componentDidUpdate() {
  console.log("Updated")
}

componentWillUnmount() {
  console.log("Unmounted")
}

*/

// In functional components,
// useEffect handles all these.

// -----------------------------------
// 9. Lifecycle with Different useEffect Forms
// -----------------------------------

// Runs only once on mount:

/*

useEffect(() => {
  console.log("Mounted")
}, [])

*/

// Runs on every render:

/*

useEffect(() => {
  console.log("Every Render")
})

*/

// Runs when specific value changes:

/*

useEffect(() => {
  console.log("Count Changed")
}, [count])

*/


// Runs cleanup on unmount:

/*

useEffect(() => {
  return () => {
    console.log("Unmounted")
  }
}, [])

*/

// -----------------------------------
// 10. Common Beginner Mistakes
// -----------------------------------

// 1. Forgetting dependency array
// 2. Forgetting cleanup function
// 3. Thinking useEffect runs before render
// 4. Creating infinite loops
// 5. Not removing event listeners
// 6. Not clearing interval/timer

// Wrong:

/*

useEffect(() => {
  setCount(count + 1)
})

*/


// This causes infinite re-render.

// Correct:

/*

useEffect(() => {
  setCount(count + 1)
}, [])

*/

// -----------------------------------
// 11. Interview Questions with Answers
// -----------------------------------

// 1. What are lifecycle stages of component ?

// Answer:
// Mounting, Updating, Unmounting.

// 2. What is mounting ?

// Answer:
// Component appears on screen for first time.

// 3. What is updating ?

// Answer:
// Component re-renders because props or state changed.

// 4. What is unmounting ?

// Answer:
// Component is removed from screen.

// 5. Which hook is used for lifecycle in functional components ?

// Answer:
// useEffect.

// 6. How to run effect only once ?

// Answer:
// Use empty dependency array [].

// 7. What is cleanup function ?

// Answer:
// Function returned from useEffect that runs before unmount.

// 8. Why cleanup is important ?

// Answer:
// To remove listeners, intervals, timers and avoid memory leaks.

// 9. Which lifecycle methods existed in class components ?

// Answer:
// componentDidMount, componentDidUpdate, componentWillUnmount.
