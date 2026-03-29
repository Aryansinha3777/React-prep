// ==========================
// 03-components.js
// ==========================

// -----------------------------------
// 1. What is a Component ?
// -----------------------------------

// A component is a reusable piece of UI.

// Examples of components:

// - Navbar
// - Footer
// - Sidebar
// - Login Form
// - Product Card
// - User Card
// - Button
// - Search Bar

// Example:

// Instead of writing same HTML again and again,
// we create one component and reuse it multiple times.

// Example:

// One ProductCard component can be used for:
// - Product 1
// - Product 2
// - Product 3
// - Product 100

// -----------------------------------
// 2. Why Components are Used ?
// -----------------------------------

// Components are used because:

// 1. Code becomes reusable
// 2. Code becomes cleaner
// 3. Large UI can be divided into small parts
// 4. Easier debugging
// 5. Easier maintenance
// 6. Easier team collaboration

// Example:

// Instead of writing full website code in App.jsx,
// we split it into:

// - Navbar component
// - Hero section component
// - Product list component
// - Footer component

// -----------------------------------
// 3. Functional Components
// -----------------------------------

// Functional components are normal JavaScript functions
// that return JSX.

// Example:

/*

function Header() {
  return <h1>Welcome</h1>
}

*/

// This component returns a heading.

// Example:

/*

function Footer() {
  return <p>Copyright 2026</p>
}

*/

// React mostly uses functional components nowadays.

// -----------------------------------
// 4. Component Naming Rules
// -----------------------------------

// Rule 1:
// Component name must start with capital letter.

// Correct:

/*

function Header() {
  return <h1>Hello</h1>
}

*/

// Wrong:

/*

function header() {
  return <h1>Hello</h1>
}

*/

// React treats lowercase names as normal HTML tags.

// Rule 2:
// Use PascalCase naming style.

// Correct:

// UserCard
// ProductList
// LoginForm
// NavbarMenu

// Wrong:

// userCard
// productlist
// login_form

// -----------------------------------
// 5. How to Use a Component ?
// -----------------------------------

// Step 1:
// Create component

/*

function Header() {
  return <h1>Welcome to React</h1>
}

*/


// Step 2:
// Use component inside another component


/*

function App() {
  return (
    <div>
      <Header />
    </div>
  )
}

*/


// Output:
// Welcome to React

// -----------------------------------
// 6. Multiple Components in Same File
// -----------------------------------

// Example:

/*

function Header() {
  return <h1>Header</h1>
}

function Footer() {
  return <p>Footer</p>
}

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

*/

// Output:
// Header
// Footer

// -----------------------------------
// 7. Component Inside Component
// -----------------------------------

// One component can use another component.

// Example:

/*

function Navbar() {
  return <h1>Navbar</h1>
}

function Home() {
  return (
    <div>
      <Navbar />
      <h2>Home Page</h2>
    </div>
  )
}

*/

// Home component is using Navbar component.

// This is called nested components.


// -----------------------------------
// 8. Reusable Component Example
// -----------------------------------

// Example:

/*

function Button() {
  return <button>Click Me</button>
}

function App() {
  return (
    <div>
      <Button />
      <Button />
      <Button />
    </div>
  )
}

*/

// Output:
// Three buttons will appear.
// This shows reusability.


// -----------------------------------
// 9. Separate Component File
// -----------------------------------

// Usually every component is stored in separate file.


// Example folder structure:

/*

src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── Button.jsx
│
├── App.jsx

*/


// Example Header.jsx:

/*

function Header() {
  return <h1>Welcome</h1>
}

export default Header

*/


// Example App.jsx:

/*

import Header from "./components/Header"

function App() {
  return (
    <div>
      <Header />
    </div>
  )
}

export default App

*/


// -----------------------------------
// 10. Exporting Components
// -----------------------------------

// To use a component in another file,
// we must export it.

// Example:

/*

function Header() {
  return <h1>Hello</h1>
}

export default Header

*/

// export default allows component to be imported elsewhere.


// Example import:
/*

import Header from "./Header"
*/

// -----------------------------------
// 11. Importing Components
// -----------------------------------

// Example:

/*

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

*/

// Important:

// Header component name and imported name
// should generally match for readability.

// -----------------------------------
// 12. Difference Between HTML Tags and Components
// -----------------------------------

// HTML tags start with lowercase letter.

// Example:

/*

<div>
<h1>
<p>

*/

// Components start with capital letter.

// Example:

/*

<Header />
<Navbar />
<ProductCard />

*/

// React uses this difference to identify
// whether something is HTML tag or custom component.

// -----------------------------------
// 13. Returning JSX from Components
// -----------------------------------

// Component must return JSX.

// Example:

/*

function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

*/

// Wrong:

/*

function App() {
  <h1>Hello</h1>
}

*/

// Because return keyword is missing.



// -----------------------------------
// 14. Common Beginner Mistakes
// -----------------------------------

// 1. Using lowercase component name
// 2. Forgetting return keyword
// 3. Forgetting export default
// 4. Forgetting to import component
// 5. Wrong import path
// 6. Returning multiple parent elements
// 7. Using component like normal function call

// Wrong:

/*
Header()
*/

// Correct:

/*
<Header />
*/

// -----------------------------------
// 15. Interview Questions with Answers
// -----------------------------------

// 1. What is a component ?

// Answer:
// A component is a reusable piece of UI in React.


// 2. Why components are used ?

// Answer:
// Components are used to make code reusable,
// cleaner, and easier to manage.


// 3. What is functional component ?

// Answer:
// Functional component is a JavaScript function
// that returns JSX.

// 4. Why should component names start with capital letter ?

// Answer:
// Because React treats lowercase names as HTML tags.
// Capital letters help React identify custom components.

// 5. What is PascalCase ?

// Answer:
// PascalCase means every word starts with capital letter.

// Example:
// UserCard
// LoginForm
// ProductList


// 6. Why export default is used ?

// Answer:
// export default is used so that component
// can be imported into another file.

// 7. Difference between component and normal JavaScript function ?

// Answer:
// A React component returns JSX,
// while normal JavaScript function can return anything.

// 8. Can one component use another component ?

// Answer:
// Yes.
// One component can use another component.
// This is called nested component structure.

// 9. Difference between HTML tag and React component ?

// Answer:
// HTML tags start with lowercase letters.
// React components start with capital letters.

// 10. Why components are called reusable ?

// Answer:
// Because same component can be used multiple times
// in different places without rewriting code.
