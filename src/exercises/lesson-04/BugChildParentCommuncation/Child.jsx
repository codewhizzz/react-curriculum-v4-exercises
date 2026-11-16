export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

// Explanation:
// The Parent passes its increment function to Child as a prop.
// Clicking the Child button calls that function and updates Parent's state.
