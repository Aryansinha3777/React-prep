// ==========================
// 11-routing.js
// ==========================



// -----------------------------------
// 1. What is Routing ?
// -----------------------------------

// Routing means showing different pages
// without refreshing the browser.


// Example:

// /home
// /about
// /contact
// /profile


// In React, routing is usually done using react-router-dom.


// Install:

/*

npm install react-router-dom

*/



// -----------------------------------
// 2. Why Routing is Needed ?
// -----------------------------------

// In normal HTML websites,
// browser loads new page from server every time.

// In React SPA,
// page changes without full refresh.


// Example:

// Clicking About page does not reload browser.
// React only changes component on screen.



// -----------------------------------
// 3. Basic Setup
// -----------------------------------

// Example:

/*

import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

*/


// BrowserRouter should wrap App.



// -----------------------------------
// 4. Routes and Route
// -----------------------------------

// Example:

/*

import { Routes, Route } from "react-router-dom"

function Home() {
  return <h1>Home Page</h1>
}

function About() {
  return <h1>About Page</h1>
}

function Contact() {
  return <h1>Contact Page</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

*/


// Routes contains all Route components.
// Route decides which component to show.



// -----------------------------------
// 5. Link Component
// -----------------------------------

// We should not use <a> tag for routing in React.

// Wrong:

/*

<a href="/about">About</a>

*/


// This reloads browser page.


// Correct:

/*

import { Link } from "react-router-dom"

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>

*/


// Link changes page without reload.



// -----------------------------------
// 6. Full Example
// -----------------------------------

/*

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Home() {
  return <h1>Home Page</h1>
}

function About() {
  return <h1>About Page</h1>
}

function Contact() {
  return <h1>Contact Page</h1>
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

*/



// -----------------------------------
// 7. Route Parameters
// -----------------------------------

// Dynamic routes can take parameters.


// Example URL:

// /user/5
// /product/10


// Example:

/*

import { useParams } from "react-router-dom"

function User() {
  const params = useParams()

  return <h1>User ID: {params.id}</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/user/:id" element={<User />} />
    </Routes>
  )
}

*/


// If URL is /user/5
// params.id becomes 5



// -----------------------------------
// 8. useNavigate Hook
// -----------------------------------

// useNavigate is used for navigation using JavaScript.


// Example:

/*

import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  function goToAbout() {
    navigate("/about")
  }

  return <button onClick={goToAbout}>Go To About</button>
}

*/



// navigate("/about") changes page.



// -----------------------------------
// 9. Not Found Page
// -----------------------------------

// Example:

/*

function NotFound() {
  return <h1>404 Page Not Found</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

*/


// * means all unmatched routes.



// -----------------------------------
// 10. Nested Routes
// -----------------------------------

// Example:

/*

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  )
}

function Profile() {
  return <h1>Profile Page</h1>
}

function Settings() {
  return <h1>Settings Page</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

*/


// URLs:

// /dashboard/profile
// /dashboard/settings



// -----------------------------------
// 11. Outlet Component
// -----------------------------------

// Outlet is placeholder for child routes.


// Example:

/*

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  )
}

*/


// Child routes render where Outlet is placed.



// -----------------------------------
// 12. NavLink Component
// -----------------------------------

// NavLink is like Link,
// but it knows active route.


// Example:

/*

import { NavLink } from "react-router-dom"

<NavLink to="/about">About</NavLink>

*/


// Useful for active menu styling.



// -----------------------------------
// 13. Common Beginner Mistakes
// -----------------------------------

// 1. Forgetting BrowserRouter
// 2. Using a tag instead of Link
// 3. Forgetting Routes wrapper
// 4. Using component instead of element
// 5. Forgetting Outlet in nested routes
// 6. Wrong route path
// 7. Wrong import


// Wrong:

/*

<Route path="/about" component={About} />

*/


// Correct:

/*

<Route path="/about" element={<About />} />

*/



// -----------------------------------
// 14. Interview Questions with Answers
// -----------------------------------

// 1. What is routing in React ?

// Answer:
// Routing means showing different pages
// without refreshing browser.


// 2. Which package is used for routing ?

// Answer:
// react-router-dom.


// 3. Why is Link better than a tag ?

// Answer:
// Link changes route without page refresh.


// 4. What does BrowserRouter do ?

// Answer:
// It enables routing in React app.


// 5. What is useNavigate used for ?

// Answer:
// It is used for navigation through JavaScript.


// 6. What is useParams ?

// Answer:
// It is used to get route parameters.


// 7. What is Outlet ?

// Answer:
// Outlet renders child routes.


// 8. What does * mean in route path ?

// Answer:
// It matches all unknown routes.


// 9. What is NavLink ?

// Answer:
// NavLink is like Link but supports active styling.


// 10. What is wrong with using a tag in React routing ?

// Answer:
// a tag refreshes full page.
