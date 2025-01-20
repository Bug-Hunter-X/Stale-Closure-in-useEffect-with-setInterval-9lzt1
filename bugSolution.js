```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Correctly using the previous state value
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```