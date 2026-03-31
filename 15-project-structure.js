// ==========================
// 15-project-structure.js
// ==========================

// -----------------------------------
// 1. Why Project Structure Matters ?
// -----------------------------------

// In small React apps,
// everything can be inside App.jsx.

// But in real projects,
// keeping all code in one file becomes messy.

// Good structure helps in:

// 1. Easier understanding
// 2. Easier debugging
// 3. Easier scaling
// 4. Cleaner imports
// 5. Better teamwork

// -----------------------------------
// 2. Basic Small Project Structure
// -----------------------------------

/*

src/
|
|-- App.jsx
|-- main.jsx
|-- index.css
|-- components/
|     |-- Navbar.jsx
|     |-- Footer.jsx
|     |-- Card.jsx
|
|-- pages/
|     |-- Home.jsx
|     |-- About.jsx
|     |-- Contact.jsx

*/

// Explanation:

// App.jsx
// Main parent component

// main.jsx
// Entry point of app

// index.css
// Global CSS

// components/
// Reusable UI parts

// pages/
// Full page components

// -----------------------------------
// 3. Real World Medium Size Structure
// -----------------------------------

/*

src/
|
|-- assets/
|     |-- images/
|     |-- icons/
|
|-- components/
|     |-- Navbar.jsx
|     |-- Footer.jsx
|     |-- Loader.jsx
|     |-- Button.jsx
|     |-- Input.jsx
|
|-- pages/
|     |-- Home.jsx
|     |-- Login.jsx
|     |-- Register.jsx
|     |-- Profile.jsx
|
|-- layouts/
|     |-- MainLayout.jsx
|
|-- routes/
|     |-- AppRoutes.jsx
|
|-- context/
|     |-- AuthContext.jsx
|     |-- ThemeContext.jsx
|
|-- hooks/
|     |-- useFetch.js
|
|-- services/
|     |-- api.js
|
|-- utils/
|     |-- formatDate.js
|
|-- styles/
|     |-- global.css
|
|-- App.jsx
|-- main.jsx

*/



// -----------------------------------
// 4. Meaning of Each Folder
// -----------------------------------

// assets/
// Stores images, icons, videos, fonts

// components/
// Reusable small UI parts

// pages/
// Full pages used in routing

// layouts/
// Common layout wrappers

// routes/
// All routing related code

// context/
// Global context files

// hooks/
// Custom hooks

// services/
// API calls and backend communication

// utils/
// Small helper functions

// styles/
// CSS files

// -----------------------------------
// 5. Components vs Pages
// -----------------------------------

// Components are reusable small pieces.

// Example:

// Navbar
// Button
// Card
// Loader


// Pages are full screens.

// Example:

// Home page
// Login page
// Profile page


// Example structure:

/*

pages/
|
|-- Home.jsx

components/
|
|-- ProductCard.jsx
|-- Navbar.jsx
|-- Footer.jsx

*/

// Home page can use ProductCard, Navbar and Footer.



// -----------------------------------
// 6. Example App.jsx Structure
// -----------------------------------

/*

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App

*/


// -----------------------------------
// 7. Example Route File
// -----------------------------------

/*

import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Profile from "../pages/Profile"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default AppRoutes

*/


// -----------------------------------
// 8. Example Services Folder
// -----------------------------------

// services/api.js

/*

import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:5000/api"
})

export default api

*/

// Now anywhere in app:

/*

import api from "../services/api"

api.get("/users")

*/

// -----------------------------------
// 9. Example Utils Folder
// -----------------------------------

// utils/formatDate.js

/*

function formatDate(date) {
  return new Date(date).toLocaleDateString()
}

export default formatDate

*/

// Use anywhere:

/*

import formatDate from "../utils/formatDate"

formatDate("2026-03-31")

*/

// -----------------------------------
// 10. Common Beginner Mistakes
// -----------------------------------

// 1. Putting everything inside App.jsx
// 2. Creating huge component files
// 3. Mixing page and component files
// 4. Not creating separate API file
// 5. Bad file naming
// 6. Not grouping related files
// 7. Deep nested folders

// Bad:

/*

src/
|
|-- App.jsx
|-- Login.jsx
|-- Register.jsx
|-- Navbar.jsx
|-- Footer.jsx
|-- Home.jsx
|-- ProductCard.jsx
|-- Loader.jsx
|-- Button.jsx

*/


// Better:

/*

components/
pages/
routes/
services/

*/


// -----------------------------------
// 11. Suggested Structure for Your First Real React Projects
// -----------------------------------

/*

src/
|
|-- assets/
|-- components/
|-- pages/
|-- routes/
|-- context/
|-- hooks/
|-- services/
|-- styles/
|-- App.jsx
|-- main.jsx

*/

// This is enough for most beginner and intermediate projects.


// -----------------------------------
// 12. Interview Questions with Answers
// -----------------------------------

// 1. Why is project structure important ?

// Answer:
// It keeps project organized and scalable.

// 2. Difference between pages and components ?

// Answer:
// Pages are full screens.
// Components are reusable UI parts.

// 3. Where should API calls be stored ?

// Answer:
// Inside services folder.

// 4. Where should global state/context files be stored ?

// Answer:
// Inside context folder.

// 5. Where should custom hooks be stored ?

// Answer:
// Inside hooks folder.

// 6. Where should helper functions be stored ?

// Answer:
// Inside utils folder.

// 7. What should main.jsx contain ?

// Answer:
// ReactDOM render code and BrowserRouter wrapper.
