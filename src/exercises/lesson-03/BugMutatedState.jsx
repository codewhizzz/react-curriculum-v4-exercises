// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';

export default function BugMutatedState() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The count variable was being incremented directly using count++.
// React state should be updated through its setter function.
// Using setCount(previousCount => previousCount + 1)
// ensures the new count is calculated from the previous state.
