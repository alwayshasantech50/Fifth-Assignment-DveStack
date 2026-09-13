Name:: Dev Stack Builder


Project Description::

Dev Stack Builder is a modern React application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies, add them to a personal stack, remove them, and manage their selected tools through an interactive interface.


Technologies I Used::

React.js
TypeScript
Vite
Tailwind CSS
DaisyUI
React Toastify
JSON


Key Features::

1. Build Your Own Development Stack

Users can browse technologies and add their preferred tools to a personal stack section.

2. Duplicate Technology Protection

The same technology cannot be added more than once. A toast notification appears when a duplicate add is attempted.

3. Responsive Design

The website works smoothly across desktop, tablet, and mobile devices with a responsive navigation menu and layouts.




React Questions & Answers::
1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React components easier to read and build user interfaces faster.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data inside a component and can change over time.

3. What does the useState hook do, and where did you use it in this project?

The useState hook allows us to store and update data in a React component. In this project, I used it to store the selected technologies and the technology data loaded from JSON.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook runs code after a component renders. I used it to fetch the technology data from the JSON file when the page loads.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify which items have changed, been added, or removed. This improves performance and prevents rendering issues.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition. I used it in the Your Stack section to show an empty message when no technology is selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send data back by calling a function that was passed down through props.

