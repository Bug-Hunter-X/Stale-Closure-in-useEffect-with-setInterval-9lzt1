# Stale Closure in useEffect with setInterval
This example demonstrates a common error when using the `useEffect` hook with `setInterval` in React.  The problem stems from the closure capturing the initial state value, leading to incorrect updates.  The solution shows how to correctly update state based on its current value.

## Bug
The provided `bug.js` shows a component that updates its count every second. However, due to a stale closure issue, the count might not increment correctly. 

## Solution
The `bugSolution.js` file provides a corrected version of the component that uses the `prevCount` parameter of the `setCount` function to ensure the count is updated correctly.