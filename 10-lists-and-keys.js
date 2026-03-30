// ==========================
// 10-lists-and-keys.js
// ==========================

// -----------------------------------
// 1. What are Lists in React ?
// -----------------------------------

// Lists are used when we want to show
// multiple similar items on screen.

// Examples:

// - List of users
// - List of products
// - List of comments
// - List of tasks
// - List of movies

// -----------------------------------
// 2. map() in JavaScript
// -----------------------------------

// In React, lists are usually rendered using map().

// map() creates a new array.

// Example:

/*

const numbers = [1, 2, 3]

const doubled = numbers.map((num) => {
  return num * 2
})

console.log(doubled)

// [2, 4, 6]

*/

// -----------------------------------
// 3. Rendering List in React
// -----------------------------------

// Example:

/*

function App() {
  const fruits = ["Apple", "Banana", "Mango"]

  return (
    <div>
      {fruits.map((fruit) => (
        <h1>{fruit}</h1>
      ))}
    </div>
  )
}

*/

// React loops through array
// and renders one h1 for each item.

// -----------------------------------
// 4. Why Key is Needed ?
// -----------------------------------

// React needs a unique key for each item in list.

// Key helps React identify
// which item changed, removed or added.

// Without key, React gives warning.

// -----------------------------------
// 5. Basic Key Example
// -----------------------------------

// Example:

/*

function App() {
  const fruits = ["Apple", "Banana", "Mango"]

  return (
    <div>
      {fruits.map((fruit, index) => (
        <h1 key={index}>{fruit}</h1>
      ))}
    </div>
  )
}

*/

// key={index} removes warning.

// But using index as key is not best in all cases.

// -----------------------------------
// 6. Better Key Example
// -----------------------------------

// If data has unique id,
// always use id as key.

// Example:

/*

function App() {
  const users = [
    { id: 1, name: "Aryan" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Priya" }
  ]

  return (
    <div>
      {users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </div>
  )
}

*/

// user.id is better than index.

// -----------------------------------
// 7. Why Index is Sometimes Bad ?
// -----------------------------------

// Example:

// Initial list:

/*

[
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" }
]

*/

// If first item is removed:

/*

[
  { id: 2, name: "B" },
  { id: 3, name: "C" }
]

*/

// Index changes:

// Before:
// A -> 0
// B -> 1
// C -> 2

// After:
// B -> 0
// C -> 1

// React may think items changed incorrectly.

// Use index only if:

// 1. List never changes
// 2. Items never reorder
// 3. Items never delete

// -----------------------------------
// 8. Rendering Objects in List
// -----------------------------------

// Example:

/*

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 }
  ]

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

*/

// -----------------------------------
// 9. Filtering Before Mapping
// -----------------------------------

// Example:

/*

function App() {
  const users = [
    { id: 1, name: "Aryan", isAdmin: true },
    { id: 2, name: "Rahul", isAdmin: false }
  ]

  return (
    <div>
      {users
        .filter((user) => user.isAdmin)
        .map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
    </div>
  )
}

*/

// First filter runs.
// Then map runs.

// -----------------------------------
// 10. Empty List Example
// -----------------------------------

// Example:

/*

function App() {
  const users = []

  return (
    <div>
      {users.length === 0 ? (
        <h1>No Users Found</h1>
      ) : (
        users.map((user) => <h1 key={user.id}>{user.name}</h1>)
      )}
    </div>
  )
}

*/

// -----------------------------------
// 11. Nested map Example
// -----------------------------------

// Example:

/*

function App() {
  const categories = [
    {
      id: 1,
      title: "Fruits",
      items: ["Apple", "Banana"]
    },
    {
      id: 2,
      title: "Vegetables",
      items: ["Potato", "Tomato"]
    }
  ]

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <h1>{category.title}</h1>

          {category.items.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ))}
    </div>
  )
}

*/

// -----------------------------------
// 12. Common Beginner Mistakes
// -----------------------------------

// 1. Forgetting key
// 2. Using same key for all items
// 3. Using index in dynamic lists
// 4. Forgetting return inside map
// 5. Using curly braces without return

// Wrong:

/*

users.map((user) => {
  <h1>{user.name}</h1>
})

*/

// Correct:

/*

users.map((user) => {
  return <h1>{user.name}</h1>
})

*/


// Or:

/*

users.map((user) => (
  <h1>{user.name}</h1>
))

*/

// -----------------------------------
// 13. Interview Questions with Answers
// -----------------------------------

// 1. Why do we use map() in React ?

// Answer:
// To render multiple items from array.

// 2. What is key in React ?

// Answer:
// Key is unique identifier for list items.

// 3. Why are keys important ?

// Answer:
// Keys help React track items efficiently.

// 4. Why is id better than index as key ?

// Answer:
// Because id stays stable even if list changes.

// 5. When can index be used as key ?

// Answer:
// When list never changes or reorders.

// 6. What happens if key is missing ?

// Answer:
// React gives warning in console.

// 7. Can we use map() on array of objects ?

// Answer:
// Yes.

// 8. Can filter and map be used together ?

// Answer:
// Yes.
// Usually filter runs first, then map.

// 9. What is nested map ?

// Answer:
// Mapping inside another map.
// 10. What is common mistake inside map ?

// Answer:
// Forgetting return statement.
