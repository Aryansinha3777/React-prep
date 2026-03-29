// ==========================
// 04-props.js
// ==========================

// -----------------------------------
// 1. What are Props ?
// -----------------------------------

// Props means properties.

// Props are used to pass data
// from parent component to child component.

// Example:

/*

function App() {
  return <User name="Aryan" age={21} />
}

*/

// Here:
// name and age are props.

// Child component receives them.

// Example:

/*

function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  )
}

*/

// Output:
// Aryan
// 21

// -----------------------------------
// 2. Why Props are Used ?
// -----------------------------------

// Props are used because:

// 1. To send data from parent to child
// 2. To make components reusable
// 3. To display dynamic data
// 4. To avoid hardcoding values

// Example:

/*

function User(props) {
  return <h1>{props.name}</h1>
}

function App() {
  return (
    <div>
      <User name="Aryan" />
      <User name="Rahul" />
      <User name="Priya" />
    </div>
  )
}

*/

// Output:

// Aryan
// Rahul
// Priya
// Same component reused with different data.

// -----------------------------------
// 3. Parent Component and Child Component
// -----------------------------------

// Parent component:
// Component that sends props.

// Child component:
// Component that receives props.

// Example:

/*

function Child(props) {
  return <h1>{props.message}</h1>
}

function Parent() {
  return <Child message="Hello from Parent" />
}

*/

// Parent sends message prop.
// Child receives message prop.

// -----------------------------------
// 4. Syntax of Props
// -----------------------------------

// Props are passed like HTML attributes.

// Example:

/*

<User name="Aryan" age={21} city="Kolkata" />

*/

// Receiving props:

/*

function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <p>{props.city}</p>
    </div>
  )
}

*/

// -----------------------------------
// 5. String Props
// -----------------------------------

// String props are passed inside quotes.

// Example:

/*

<User name="Aryan" city="Delhi" />

*/

// -----------------------------------
// 6. Number Props
// -----------------------------------

// Numbers are passed inside curly braces.

// Example:

/*

<User age={21} marks={95} />

*/

// Because curly braces mean JavaScript value.


// -----------------------------------
// 7. Boolean Props
// -----------------------------------

// Example:

/*

<User isLoggedIn={true} />
<User isAdmin={false} />

*/

// Receiving:

/*

function User(props) {
  return <h1>{props.isLoggedIn ? "Logged In" : "Logged Out"}</h1>
}

*/

// -----------------------------------
// 8. Array Props
// -----------------------------------

// Example:

/*

function App() {
  const skills = ["HTML", "CSS", "JavaScript"]

  return <User skills={skills} />
}

function User(props) {
  return (
    <div>
      <h1>{props.skills[0]}</h1>
      <h1>{props.skills[1]}</h1>
      <h1>{props.skills[2]}</h1>
    </div>
  )
}

*/

// -----------------------------------
// 9. Object Props
// -----------------------------------

// Example:

/*

function App() {
  const user = {
    name: "Aryan",
    age: 21
  }

  return <Profile user={user} />
}

function Profile(props) {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <h2>{props.user.age}</h2>
    </div>
  )
}

*/


// -----------------------------------
// 10. Passing Function as Props
// -----------------------------------

// Functions can also be passed as props.

// Example:

/*

function App() {
  function showMessage() {
    alert("Button Clicked")
  }

  return <Button handleClick={showMessage} />
}

function Button(props) {
  return <button onClick={props.handleClick}>Click</button>
}

*/

// This is very important in React.
// Parent can send functions to child.

// -----------------------------------
// 11. Destructuring Props
// -----------------------------------

// Instead of writing props.name,
// props.age again and again,
// we can use destructuring.

// Example:

/*

function User({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  )
}

*/


// This is cleaner and commonly used.

// Without destructuring:

/*

function User(props) {
  return <h1>{props.name}</h1>
}

*/

// With destructuring:

/*

function User({ name }) {
  return <h1>{name}</h1>
}

*/

// -----------------------------------
// 12. Default Props Concept
// -----------------------------------

// Sometimes prop may not be passed.

// Example:

/*

function User({ name = "Guest" }) {
  return <h1>{name}</h1>
}

*/


// If no name is passed,
// Guest will be shown.

// Example:

/*

<User />

*/

// Output:
// Guest

// -----------------------------------
// 13. Children Prop
// -----------------------------------

// children is a special prop in React.


// Example:

/*

function Card(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

function App() {
  return (
    <Card>
      <h1>Hello</h1>
      <p>Welcome</p>
    </Card>
  )
}

*/

// Whatever is written inside Card component
// becomes props.children.

// Output inside Card:

// <h1>Hello</h1>
// <p>Welcome</p>


// -----------------------------------
// 14. Props are Read Only
// -----------------------------------

// Props cannot be changed inside child component.


// Wrong Example:

/*

function User(props) {
  props.name = "Rahul"
  return <h1>{props.name}</h1>
}

*/

// Props are immutable.
// Immutable means cannot be changed.


// Parent sends data.
// Child only uses data.

// -----------------------------------
// 15. Common Beginner Mistakes
// -----------------------------------

// 1. Forgetting curly braces for numbers
// 2. Writing prop name wrong
// 3. Trying to modify props
// 4. Forgetting destructuring syntax
// 5. Confusing props with state
// 6. Passing string without quotes
// 7. Using props but not receiving them

// Wrong:

/*

function User() {
  return <h1>{props.name}</h1>
}

*/

// Correct:

/*

function User(props) {
  return <h1>{props.name}</h1>
}

*/


// -----------------------------------
// 16. Props vs State
// -----------------------------------

// Props:
// Passed from parent to child.


// State:
// Managed inside same component.

// Props are read-only.
// State can change.


// Props example:

/*
<User name="Aryan" />
*/

// State example:

/*
const [count, setCount] = useState(0)
*/

// -----------------------------------
// 17. Interview Questions with Answers
// -----------------------------------

// 1. What are props ?

// Answer:
// Props are used to pass data
// from parent component to child component.


// 2. Why are props used ?

// Answer:
// Props are used to make components reusable
// and dynamic.

// 3. Can props be changed inside child component ?

// Answer:
// No.
// Props are read-only and immutable.

// 4. What is destructuring in props ?

// Answer:
// Destructuring means directly extracting values
// from props object.


// Example:
// function User({ name, age }) {}

// 5. What is children prop ?

// Answer:
// children is a special prop that contains
// whatever is written between opening
// and closing component tags.

// 6. Can we pass function as prop ?

// Answer:
// Yes.
// Functions can be passed as props.

// 7. Difference between props and state ?

// Answer:
// Props are passed from parent to child.
// State is managed inside component.

// 8. Why are props called read-only ?

// Answer:
// Because child component cannot modify props.

// 9. Can we pass object and array as props ?

// Answer:
// Yes.
// React props can contain string, number,
// boolean, array, object and function.

// 10. What is parent-child communication ?

// Answer:
// Parent sends data to child using props.
