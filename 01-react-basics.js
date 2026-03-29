// ==========================
// 01-react-basics.js
// ==========================

// -----------------------------------
// 1. What is React ?
// -----------------------------------

// React is a JavaScript library used to build user interfaces (UI).

// UI means whatever users see on screen.

// Examples:
// - Navbar
// - Buttons
// - Forms
// - Cards
// - Tables
// - Product list
// - Login page
// - Profile page

// Backend sends data.
// React shows that data on screen.

// Example:

// Backend data:

const users = [
  {
    name: "Aryan",
    age: 21
  },
  {
    name: "Rahul",
    age: 22
  }
]

// React can show this on screen like:

// Aryan - 21
// Rahul - 22

// -----------------------------------
// 2. Why React is Used ?
// -----------------------------------

// Before React, developers used plain JavaScript to update UI.

// Example:

document.getElementById("heading").innerText = "Hello"


// For small projects this is okay.

// But in large projects:
// - Code becomes messy
// - Too much DOM manipulation
// - Hard to manage UI
// - Repeating same code many times

// React solves this problem by giving:

// 1. Reusable components
// 2. Better structure
// 3. Easier state handling
// 4. Faster UI updates
// 5. Cleaner code
// 6. Better developer experience


// Example:

// Without React:

const button = document.createElement("button")
button.innerText = "Click Me"
document.body.appendChild(button)


// With React:
  
// <button>Click Me</button>

// -----------------------------------
// 3. What is SPA ?
// -----------------------------------

// SPA = Single Page Application

// In normal websites:

// Home page -> full page reload
// About page -> full page reload
// Contact page -> full page reload

// In React:

// Only necessary content changes.
// Entire page does not reload.

// This makes website faster and smoother.

// Examples of SPA:

// - Gmail
// - Facebook
// - Instagram
// - Dashboard applications
// - Admin panels



// -----------------------------------
// 4. React is Frontend Only
// -----------------------------------

// React only handles frontend.

// React does NOT do:

// - Database storage
// - API creation
// - Authentication directly
// - Password hashing
// - File upload logic
// - JWT generation

// Those things are done in backend.

// React only talks to backend APIs and shows data.

// Example:

// Backend API:
// GET /api/users

// React fetches data from that API and shows users on screen.

// -----------------------------------
// 5. Create React App vs Vite
// -----------------------------------

// Earlier developers used Create React App (CRA).

// Command:

// npx create-react-app my-app

// Nowadays developers mostly use Vite because it is faster.

// Command:

// npm create vite@latest

// Why Vite is better:

// - Faster startup
// - Faster refresh
// - Smaller setup
// - Better performance
// - Better developer experience

// -----------------------------------
// 6. How to Create React Project Using Vite
// -----------------------------------

// Step 1:
// npm create vite@latest

// Step 2:
// It will ask some questions:

// Project name: react-prep-example
// Framework: React
// Variant: JavaScript

// Step 3:
// Move inside project folder:
// cd react-prep-example

// Step 4:
// Install packages:
// npm install

// Step 5:
// Start frontend server:
// npm run dev

// Usually React app runs on:
// http://localhost:5173



// -----------------------------------
// 7. Folder Structure of React Project
// -----------------------------------

// After creating project, folder structure looks like:

/*

react-prep-example/
│
├── node_modules
├── public
├── src
├── package.json
├── vite.config.js
└── index.html

*/

// Important folders/files:

// 1. src
// Most React code is written here.

// 2. public
// Stores static files like images, favicon etc.

// 3. package.json
// Contains dependencies and scripts.

// 4. index.html
// Main HTML file.

// 5. vite.config.js
// Vite configuration file.


// -----------------------------------
// 8. Important Files Inside src
// -----------------------------------

// Inside src folder:

/*

src/
│
├── App.jsx
├── main.jsx

*/

// main.jsx = Entry point
// App.jsx = Main component


// -----------------------------------
// 9. main.jsx
// -----------------------------------

// main.jsx starts React application.

// Example:

/*

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

*/


// Explanation:

// document.getElementById('root')
// Selects root div from index.html

// createRoot(...)
// Creates React root

// <App />
// Renders App component on screen



// -----------------------------------
// 10. App.jsx
// -----------------------------------

// App.jsx is main component.

// Whatever App component returns is shown on screen.


// Example:
/*

function App() {
  return (
    <h1>Hello React</h1>
  )
}

export default App

*/


// -----------------------------------
// 11. First React Code
// -----------------------------------

// Example:

/*

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <p>This is my first React app</p>
      <button>Click Me</button>
    </div>
  )
}

export default App

*/


// Important things to notice:

// 1. Function name starts with capital letter
// 2. JSX looks like HTML
// 3. One parent element is required
// 4. export default App is needed
// 5. React components return UI

// -----------------------------------
// 12. Common Beginner Mistakes
// -----------------------------------

// 1. Forgetting export default

// Wrong:

/*

function App() {
  return <h1>Hello</h1>
}

*/

// Correct:
/*

function App() {
  return <h1>Hello</h1>
}

export default App

*/


// 2. Returning multiple parent elements

// Wrong:

/*

return (
  <h1>Hello</h1>
  <p>World</p>
)

*/


// Correct:

/*
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
)

*/

// 3. Using lowercase component name
// Wrong:

/*
function app() {
  return <h1>Hello</h1>
}

*/

// Correct:
/*

function App() {
  return <h1>Hello</h1>
}

*/

// -----------------------------------
// 13. Interview Questions
// -----------------------------------

// 1. What is React ?
// 2. Why React is used ?
// 3. What is SPA ?
// 4. Difference between React and JavaScript ?
// 5. Why Vite is preferred ?
// 6. What is App.jsx ?
// 7. What is main.jsx ?
// 8. What is root div ?
// 9. Difference between Create React App and Vite ?
// 10. Why React is called component-based ?

///////answers///////////
// -----------------------------------
// 13. Interview Questions with Answers
// -----------------------------------

// 1. What is React ?

// Answer:
// React is a JavaScript library used to build user interfaces.
// It helps developers create reusable UI components like buttons,
// forms, cards, navbars, etc.

// 2. Why React is used ?

// Answer:
// React is used because it makes frontend development easier.
// It provides reusable components, faster UI updates,
// cleaner code, better project structure, and easier state handling.

// 3. What is SPA ?

// Answer:
// SPA means Single Page Application.
// In SPA, only required content changes without reloading the full page.
// This makes applications faster and smoother.

// 4. Difference between React and JavaScript ?

// Answer:
// JavaScript is a programming language.
// React is a library built using JavaScript.
// JavaScript can be used without React,
// but React cannot work without JavaScript.


// 5. Why Vite is preferred ?

// Answer:
// Vite is preferred because it is faster than Create React App.
// It has faster startup, faster hot reload, and better performance.

// 6. What is App.jsx ?

// Answer:
// App.jsx is the main component in a React application.
// Whatever is returned inside App component is shown on screen.


// 7. What is main.jsx ?

// Answer:
// main.jsx is the entry point of React application.
// It connects React with the root div in index.html
// and renders the App component.


// 8. What is root div ?

// Answer:
// Root div is the div present inside index.html.
// React renders the entire application inside this root div.


// Example:

/*

<div id="root"></div>

*/

// 9. Difference between Create React App and Vite ?

// Answer:

// Create React App:
// - Older way
// - Slower startup
// - Slower refresh
// - Bigger setup

// Vite:
// - Modern way
// - Faster startup
// - Faster refresh
// - Better developer experience


// 10. Why React is called component-based ?

// Answer:
// React is called component-based because UI is divided into small reusable parts called components.

// Example:
// - Navbar component
// - Footer component
// - ProductCard component
// - LoginForm component

// These components can be reused multiple times.

// -----------------------------------
// 14. What is DOM ?
// -----------------------------------

// DOM stands for Document Object Model.

// Browser converts HTML into a tree-like structure.

// Example HTML:

/*

<body>
  <h1>Hello</h1>
  <button>Click</button>
</body>

*/

// Browser internally creates DOM tree:

/*

body
 ├── h1
 └── button

*/


// JavaScript can access and change these elements using DOM methods.

// Example:

document.getElementById("heading")
document.querySelector(".box")


// -----------------------------------
// 15. What is Virtual DOM ?
// -----------------------------------

// Virtual DOM is a lightweight copy of the real DOM.

// React first updates Virtual DOM.
// Then React compares old Virtual DOM and new Virtual DOM.
// Finally React updates only changed parts in real DOM.

// Example:

// Old UI:
{
  name: "Aryan"
}

// New UI:
{
  name: "Rahul"
}

// React updates only changed text instead of reloading full page.
// This makes React faster.

// -----------------------------------
// 16. Difference Between DOM and Virtual DOM
// -----------------------------------

// Real DOM:
// - Actual browser DOM
// - Slower updates
// - Entire DOM may update
// - More expensive operations

// Virtual DOM:
// - Copy of real DOM
// - Faster updates
// - Only changed part updates
// - Better performance

// -----------------------------------
// 17. Why React is Faster
// -----------------------------------

// React is faster because:

// 1. Uses Virtual DOM
// 2. Updates only changed parts
// 3. Avoids unnecessary DOM operations
// 4. Reuses components

// -----------------------------------
// 18. What is Component-Based Architecture ?
// -----------------------------------

// React applications are divided into small reusable pieces called components.

// Example:

// App
// ├── Navbar
// ├── Sidebar
// ├── ProductCard
// ├── Footer

// Each component does one small job.

// Benefits:
// - Reusable
// - Easy to manage
// - Cleaner code
// - Easier debugging

// -----------------------------------
// 19. What is Rendering ?
// -----------------------------------

// Rendering means showing UI on screen.

// Example:

/*

function App() {
  return <h1>Hello</h1>
}

*/

// React renders "Hello" on screen.

// -----------------------------------
// 20. What is Re-rendering ?
// -----------------------------------

// Re-rendering means React updates UI again when data changes.

// Example:
/*

const [count, setCount] = useState(0)

*/

// When count changes, component renders again with updated value.

// Example:

// Before:
// Count = 0

// After button click:
// Count = 1

// React updates only changed text.

// -----------------------------------
// 21. Difference Between Library and Framework
// -----------------------------------

// Library:
// You control flow.
// You choose where to use it.

// Framework:
// Framework controls flow.
// You follow framework rules.


// React is a library, not a framework.

// Because React only handles UI.
// For routing, state management, forms etc,
// developers choose their own libraries.


// -----------------------------------
// 22. Why React Uses JSX
// -----------------------------------

// JSX makes code easier to read and write.

// Without JSX:
/*
React.createElement("h1", null, "Hello")
*/

// With JSX:
/*
<h1>Hello</h1>
*/


// JSX looks similar to HTML, so frontend code becomes cleaner.

// React eventually converts JSX into normal JavaScript.

// -----------------------------------
// 23. What is Babel ?
// -----------------------------------

// Babel is a JavaScript compiler.

// It converts modern JavaScript and JSX into browser-understandable JavaScript.

// Example:

// JSX:

/*
<h1>Hello</h1>
*/

// Babel converts it into:

/*

React.createElement("h1", null, "Hello")

*/

// -----------------------------------
// 24. What is Bundler ?
// -----------------------------------

// Bundler combines many files into fewer optimized files.

// Example:
// - JS files
// - CSS files
// - Images

// Bundler helps improve performance.

// Examples of bundlers:

// - Vite
// - Webpack
// - Parcel


// -----------------------------------
// 25. What is npm ?
// -----------------------------------

// npm stands for Node Package Manager.

// npm is used to install packages.

// Example:

// npm install axios
// npm install react-router-dom

// npm also helps run scripts.

// Example:
// npm run dev
// npm run build


// -----------------------------------
// 26. What is package.json ?
// -----------------------------------

// package.json contains project information.

// Example:

// - Project name
// - Version
// - Dependencies
// - Scripts

// Example:

/*
{
  "name": "react-prep",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite"
  }
}
*/



// -----------------------------------
// 27. What is node_modules ?
// -----------------------------------

// node_modules contains all installed packages.

// Example:

// If you install axios:

// npm install axios

// Then axios package is stored inside node_modules.


// node_modules can become very large.

// That is why we usually do not upload node_modules to GitHub.

// -----------------------------------
// 28. What is Dependency ?
// -----------------------------------

// Dependency means package required by project.

// Example:

// - react
// - react-dom
// - axios
// - react-router-dom

// These packages help add extra features to project.

// -----------------------------------
// 29. Important Interview Questions with Answers
// -----------------------------------

// 1. What is DOM ?

// Answer:
// DOM is Document Object Model.
// Browser converts HTML into a tree-like structure.
// JavaScript uses DOM to access and change elements.

// 2. What is Virtual DOM ?

// Answer:
// Virtual DOM is a lightweight copy of real DOM.
// React first updates Virtual DOM, compares changes,
// then updates only changed parts in real DOM.

// 3. Why React is faster ?

// Answer:
// React is faster because it uses Virtual DOM
// and updates only necessary parts of UI.

// 4. Difference between DOM and Virtual DOM ?

// Answer:
// Real DOM directly changes browser elements and is slower.
// Virtual DOM is a copy used by React for faster updates.

// 5. What is rendering ?

// Answer:
// Rendering means showing UI on screen.

// 6. What is re-rendering ?

// Answer:
// Re-rendering means updating UI again when data changes.

// 7. Is React a library or framework ?

// Answer:
// React is a library because it mainly handles UI only.

// 8. What is Babel ?

// Answer:
// Babel converts JSX and modern JavaScript
// into browser-understandable JavaScript.

// 9. What is npm ?

// Answer:
// npm is Node Package Manager.
// It is used to install packages and run scripts.

// 10. What is dependency ?

// Answer:
// Dependency is a package required by project functionality.
