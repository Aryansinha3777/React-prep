// ==========================
// 07-forms.js
// ==========================

// -----------------------------------
// 1. What are Forms in React ?
// -----------------------------------

// Forms are used to take input from user.

// Examples:

// - Login form
// - Signup form
// - Contact form
// - Search form
// - Feedback form


// Common form elements:

// input
// textarea
// select
// checkbox
// radio button
// button


// -----------------------------------
// 2. Controlled Components
// -----------------------------------

// In React, form inputs are usually controlled.

// Controlled means:
// input value is controlled by React state.

// Example:

/*

import { useState } from "react"

function App() {
  const [name, setName] = useState("")

  return (
    <input
      type="text"
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  )
}

*/

// value={name} means input value comes from state.
// onChange updates state.


// React state becomes single source of truth.

// -----------------------------------
// 3. Why Controlled Components are Used ?
// -----------------------------------

// Controlled components are useful because:

// 1. React always knows current input value
// 2. Easy validation
// 3. Easy form submission
// 4. Easy reset form
// 5. Easy conditional rendering


// -----------------------------------
// 4. Basic Input Field Example
// -----------------------------------

// Example:

/*

import { useState } from "react"

function App() {
  const [username, setUsername] = useState("")

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <h1>{username}</h1>
    </div>
  )
}

*/


// Whatever user types appears in heading.

// -----------------------------------
// 5. Form Submit Example
// -----------------------------------

// Example:

/*

import { useState } from "react"

function App() {
  const [email, setEmail] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    console.log(email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

*/


// preventDefault() stops page refresh.

// -----------------------------------
// 6. Multiple Input Fields
// -----------------------------------

// Example:

/*

import { useState } from "react"

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    console.log(name)
    console.log(email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

*/

// -----------------------------------
// 7. Using Single Object State for Form
// -----------------------------------

// Instead of multiple useState,
// we can store all form values in one object.

// Example:

/*

const [formData, setFormData] = useState({
  name: "",
  email: ""
})

*/

// Updating object:

/*

onChange={(event) =>
  setFormData({
    ...formData,
    name: event.target.value
  })
}

*/

// -----------------------------------
// 8. Textarea Example
// -----------------------------------

// Example:

/*

const [message, setMessage] = useState("")

<textarea
  value={message}
  onChange={(event) => setMessage(event.target.value)}
/>

*/

// -----------------------------------
// 9. Select Dropdown Example
// -----------------------------------

// Example:

/*

const [city, setCity] = useState("")

<select
  value={city}
  onChange={(event) => setCity(event.target.value)}
>
  <option value="">Select City</option>
  <option value="Delhi">Delhi</option>
  <option value="Mumbai">Mumbai</option>
</select>

*/

// -----------------------------------
// 10. Checkbox Example
// -----------------------------------

// Checkbox uses checked property.

// Example:

/*

const [isChecked, setIsChecked] = useState(false)

<input
  type="checkbox"
  checked={isChecked}
  onChange={(event) => setIsChecked(event.target.checked)}
/>

*/

// event.target.checked gives true or false.

// -----------------------------------
// 11. Radio Button Example
// -----------------------------------

// Example:

/*

const [gender, setGender] = useState("")

<input
  type="radio"
  value="Male"
  checked={gender === "Male"}
  onChange={(event) => setGender(event.target.value)}
/>

<input
  type="radio"
  value="Female"
  checked={gender === "Female"}
  onChange={(event) => setGender(event.target.value)}
/>

*/

// -----------------------------------
// 12. Reset Form Example
// -----------------------------------

// Example:

/*

function handleReset() {
  setName("")
  setEmail("")
}

*/


// Or with object state:

/*

setFormData({
  name: "",
  email: ""
})

*/

// -----------------------------------
// 13. Basic Validation Example
// -----------------------------------

// Example:

/*

function handleSubmit(event) {
  event.preventDefault()

  if (email === "") {
    alert("Email is required")
    return
  }

  console.log(email)
}

*/

// -----------------------------------
// 14. Common Beginner Mistakes
// -----------------------------------

// 1. Forgetting value attribute
// 2. Forgetting onChange
// 3. Forgetting preventDefault
// 4. Using checked incorrectly
// 5. Forgetting event.target.value
// 6. Not updating state properly
// 7. Mutating form object directly


// Wrong:

/*

formData.name = "Aryan"

*/


// Correct:

/*

setFormData({
  ...formData,
  name: "Aryan"
})

*/

// -----------------------------------
// 15. Controlled vs Uncontrolled Components
// -----------------------------------

// Controlled Component:
// Input controlled by React state.

// Example:

/*

<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>

*/

// Uncontrolled Component:
// Input value managed by browser itself.

// Example:

/*

<input type="text" />

*/

// Controlled components are preferred in React.

// -----------------------------------
// 16. Interview Questions with Answers
// -----------------------------------

// 1. What is controlled component ?

// Answer:
// Controlled component is an input
// whose value is controlled by React state.

// 2. Why are controlled components preferred ?

// Answer:
// Because React always knows current input value.

// 3. Why do we use preventDefault() in form ?

// Answer:
// To stop browser page refresh on form submit.

// 4. What is event.target.value ?

// Answer:
// It gives current value of input field.

// 5. What is event.target.checked ?

// Answer:
// It gives true or false for checkbox.

// 6. Can multiple form fields be stored in one object ?

// Answer:
// Yes.
// React forms can use object state.

// 7. Difference between controlled and uncontrolled component ?

// Answer:
// Controlled uses React state.
// Uncontrolled uses browser-managed value.

// 8. Why is form validation important ?

// Answer:
// Validation ensures user enters correct data.

// 9. Why do radio buttons use checked ?

// Answer:
// Because checked decides which radio button is selected.

// 10. What is single source of truth in forms ?

// Answer:
// React state becomes single source of truth
// for form values.
