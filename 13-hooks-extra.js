// ==========================
// 13-hooks-extra.js
// ==========================

// In previous files we already learned:

// useState
// useEffect
// useContext

// Now we will learn some smaller but useful hooks:

// 1. useRef
// 2. useMemo
// 3. useCallback


// -----------------------------------
// 1. useRef
// -----------------------------------

// useRef is used to:

// 1. Access DOM elements directly
// 2. Store value without re-rendering component

// Example 1: Focus Input

/*

import { useRef } from "react"

function App() {
  const inputRef = useRef()

  function focusInput() {
    inputRef.current.focus()
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

*/

// inputRef.current points to actual input element.

// Example 2: Store Previous Value

/*

import { useRef, useEffect } from "react"

function App() {
  const countRef = useRef(0)

  useEffect(() => {
    countRef.current = countRef.current + 1
    console.log(countRef.current)
  })

  return <h1>Hello</h1>
}

*/

// Changing ref value does not re-render component.

// -----------------------------------
// 2. useMemo
// -----------------------------------

// useMemo is used to save expensive calculation result.

// It only recalculates when dependency changes.

// Without useMemo:

/*

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  const result = expensiveCalculation(count)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

*/

// expensiveCalculation runs on every render,
// even when only text changes.


// With useMemo:

/*

import { useMemo } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  const result = useMemo(() => {
    return expensiveCalculation(count)
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

*/

// Now calculation only runs when count changes.

// -----------------------------------
// 3. useCallback
// -----------------------------------

// useCallback is used to save function reference.

// It prevents function from being recreated
// on every render.

// Without useCallback:

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

// With useCallback:

/*

import { useCallback } from "react"

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log("Clicked")
  }, [])

  return <Child onClick={handleClick} />
}

*/

// Function reference stays same.

// -----------------------------------
// 4. Difference Between useMemo and useCallback
// -----------------------------------

// useMemo saves value
// useCallback saves function

// Example:

/*

const result = useMemo(() => count * 2, [count])

const handleClick = useCallback(() => {
  console.log("Hello")
}, [])

*/

// -----------------------------------
// 5. When to Use These Hooks
// -----------------------------------

// useRef:
// input focus, DOM access, storing values

// useMemo:
// expensive calculations

// useCallback:
// function optimization

// -----------------------------------
// 6. Common Beginner Mistakes
// -----------------------------------

// 1. Using useRef instead of useState
// 2. Overusing useMemo
// 3. Overusing useCallback
// 4. Forgetting dependency array
// 5. Thinking useRef causes re-render
// 6. Using useMemo for small calculations


// Wrong:

/*

const total = useMemo(() => count + 1, [count])

*/

// Not needed for simple calculation.

// Correct:

/*

const total = count + 1

*/

// -----------------------------------
// 7. Interview Questions with Answers
// -----------------------------------

// 1. What is useRef used for ?

// Answer:
// Access DOM elements and store values without re-render.


// 2. Does changing useRef value re-render component ?

// Answer:
// No.

// 3. What is useMemo used for ?

// Answer:
// It stores expensive calculation result.

// 4. What is useCallback used for ?

// Answer:
// It stores function reference.

// 5. Difference between useMemo and useCallback ?

// Answer:
// useMemo stores value.
// useCallback stores function.

// 6. Can useRef access input element ?

// Answer:
// Yes.

// 7. Should we use useMemo everywhere ?

// Answer:
// No. Only for expensive calculations.


// 8. Should we use useCallback everywhere ?

// Answer:
// No. Only when function recreation causes performance issue.
