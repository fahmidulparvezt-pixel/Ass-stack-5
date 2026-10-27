# 🧩 Dev Stack Builder

### Build Your Own Custom Development Stack

Dev Stack Builder is an interactive web application that helps developers explore frontend, backend, database, and development tools and create their own custom technology stack.

Each technology card displays useful information, including its name, category, difficulty level, rating, and description. Users can add technologies to their personal stack, remove them when needed, and explore different tools through a clean, responsive interface.

## 🛠️ Technologies 

- **React.js** — Building reusable UI components
- **Tailwind CSS** — Styling and responsive layouts
- **JavaScript (ES6+)** — Application logic and interactivity
- **React-Toastify** — Toast notifications and user feedback
- **JSON** — Storing technology data
- **Vite** — Development server and build tool

## ✨ Key Features

1. **Custom Stack Builder** — Add technologies to your personal development stack with a single click and remove them whenever needed.

2. **Duplicate Prevention** — Prevents the same technology from being added to the stack more than once. The Add button becomes disabled after a technology is selected.

3. **Real-Time Toast Notifications** — Provides feedback when technologies are added or removed, when duplicate additions are attempted, and when the stack is cleared.

4. **Technology Details** — Explore each technology's name, category, difficulty level, rating, and description.

5. **Responsive Design** — Adapts to mobile, tablet, and desktop screens, including a mobile navigation menu and responsive technology grid.

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension that allows developers to write HTML-like markup inside JavaScript. It makes React components easier to read and maintain by keeping UI structure close to the related logic.

Browsers cannot execute JSX directly. Tools such as Vite transform JSX into JavaScript during the build process.

### 2. What is the difference between props and state?

**Props** are read-only values passed from a parent component to a child component. They allow components to receive and display data from outside.

**State** is data managed by a component or a React hook. When state changes through a state setter, React schedules a re-render so the UI can reflect the updated data.

In short, props are passed into a component, while state stores data that can change over time.

### 3. What does the useState hook do, and where is it used in this project?

`useState` is a React Hook that lets a function component store and update state. When its setter is called, React schedules a re-render with the updated state.

In this project, `useState` can manage the technology list, selected development stack, loading status, and mobile navigation menu state, provided these are the states implemented in the code.
### 4. What does the useEffect hook do, and why is it needed for loading JSON data?

`useEffect` is a React Hook used to synchronize a component with external systems, such as APIs, browser events, and timers.

In this project, it can be used to load technology data when the component mounts and manage a loading state while the data is being prepared. If the JSON data is imported directly into the component, however, `useEffect` may not be necessary.

### 5. Why does each item in a `.map()` list need a unique key prop?

React uses the `key` prop to identify items in a rendered list. When items are added, removed, or reordered, stable keys help React determine which elements need updating.

For example:

```jsx
technologies.map((tech) => (
  <TechCard key={tech.id} tech={tech} />
))
```

A stable, unique ID is preferable to an array index when the list can change.

### 6. What is conditional rendering? Give an example from this project.

Conditional rendering means displaying different UI elements depending on a condition.

For example, the application can display an empty-state message when the user's stack contains no technologies, and display the selected technology cards when the stack has items.

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  stack.map((tech) => (
    <TechCard key={tech.id} tech={tech} />
  ))
)}
```

This allows the interface to respond to the user's current selection.

### 7. How can data be passed from a parent component to a child, and how can a child communicate with the parent?

A parent can send data to a child through props. For example:

<TechCard tech={tech} />

Here, the tech data is passed to the TechCard component.

If the child needs to communicate with the parent, the parent can pass a function as a prop. Then the child can call that function when something happens.

In this project, onAdd={handleAddToStack} is passed to TechCard. When the user clicks "Add to Stack", the child calls the function and the parent's state gets updated.
