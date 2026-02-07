import { useState, useEffect, useRef } from "react";

// // Component 1
// function UserProfile() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('/api/user')
//       .then(res => res.json())
//       .then(data => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   // ... rest of component
// }

// // Component 2 - SAME LOGIC AGAIN! 😩
// function PostsList() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('/api/posts')
//       .then(res => res.json())
//       .then(data => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   // ... rest of component
// }

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [refreshTrigger, setRefreshTrigger] = useState(0); // Add this
  
//   useEffect(() => {
//     const abortController = new AbortController();
//     setLoading(true);
//     setError(null);
    
//     fetch(url, { signal: abortController.signal })
//       .then(res => {
//         if (!res.ok) throw new Error('Network response was not ok');
//         return res.json();
//       })
//       .then(data => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         if (err.name !== 'AbortError') {
//           setError(err.message);
//           setLoading(false);
//         }
//       });
    
//     return () => abortController.abort();
//   }, [url, refreshTrigger]); // Watch for refreshTrigger changes
  
//   const refetch = () => {
//     setRefreshTrigger(prev => prev + 1); // Trigger the useEffect
//   };
  
//   return { data, loading, error, refetch };
// }

// // Now ANY component can use it!
// function UserProfile() {
//   const { data, loading, error } = useFetch('/api/user');
  
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   return <div>{data.name}</div>;
// }

// function PostsList() {
//   const { data, loading, error } = useFetch('/api/posts');
  
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   return <ul>{data.map(post => <li key={post.id}>{post.title}</li>)}</ul>;
// }



// 🚀 PRACTICE EXERCISES
// Exercise 1: useCounter Hook
// Create a custom hook that manages a counter with increment, decrement, and reset functions.
// jsx// Expected usage:

function useCounter(initialValues = 0) {
  const [count, setCount] = useState(initialValues)
 
  const increment = () => {
    setCount(prev => prev + 1);
  }

  const decrement = () => {
    setCount(prev => prev - 1);
  }

  const reset = () => {
    setCount(initialValues)
  }

  return {count, increment, decrement, reset}

}
function CounterApp() {
  const { count, increment, decrement, reset } = useCounter();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Exercise 2: useForm Hook
// Build a hook that handles form state for multiple inputs.
// jsx// Expected usage:
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const {name, value} = e.target

    setValues(prev => ({
      ...prev,
      [name]: value
    }) )
  }

  const resetForm = () => {
    setValues(initialValues)
  }

  return {values, handleChange, resetForm}
}

function LoginForm() {
  const { values, handleChange, resetForm } = useForm({
    email: '',
    password: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    resetForm();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

// Exercise 3: useOnClickOutside Hook
// Create a hook that detects clicks outside an element (useful for modals/dropdowns).
// jsx// Expected usage:

function useOnClickOutside(ref, handler) {
  useEffect(()=> {
    const handleClick = (event) => {
      if(ref.current && !ref.current.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }

  }, [ref, handler])
}

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  
  useOnClickOutside(dropdownRef, () => setIsOpen(false));
  
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && (
        <div ref={dropdownRef}>
          Dropdown Content
        </div>
      )}
    </div>
  );
}


// Exercise 4: usePrevious Hook
// Track the previous value of a state or prop.
// jsx// Expected usage:

function usePrevious(count) {
  const ref = useRef();
  
  useEffect(()=> {
    ref.current = count
  })

  // Reading ref during render is intentional for tracking previous value
  // eslint-disable-next-line
  return ref.current
}
function Counter() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);
  
  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


// Exercise 5: useApiWithRefresh Hook
// Combine fetching with automatic refresh capability (refetch every X seconds).
// jsx// Expected usage:

function useApiWithRefresh(url, delay) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error(`https status failed ${response.status}`)
        };

        const result = await response.json()

        if (!ignore) {
          setData(result);
          console.log(result);
          setError(null)
        }
      } catch(err) {
          if(!ignore) {
            setError(err.message)
          }
      } finally {
        setLoading(false)
      }
    }

    fetchUser()

    const intervalId = setInterval(fetchUser, delay)

    return () => {
      ignore = true
      clearInterval(intervalId)
    }

  },[url, delay])

  return {data, loading, error}
}

function LiveScores() {
  const { data, loading, error } = useApiWithRefresh(
    'https://api.example.com/scores',
    5000 
  );
  
  if (loading) return <p>Loading...</p>;
  if (error) return <span>This is an Error: {error}</span>;
  if (!data) return <p>No data available</p>;
  
  return (
    <div>
      {data.map((dataScore) => (
        <div key={dataScore}>
          <p>{dataScore}</p>
        </div>
      ))}
    </div>
  );
}


export default function MainComponent() {
  return (
    <div>
      <CounterApp />
      <LiveScores />
      <Dropdown />
      <LoginForm />
      <Counter />
    </div>
  )
}