// Exercise 1 — Basic Mount/Unmount

// Create a component that logs "Hello! I'm here" on mount and "Goodbye!" on unmount. Wrap it in a parent that shows/hides it with a button.
import { useState, useEffect } from "react";
const Exercise1 = () => {
    useEffect(() => {
        console.log("Hello! I'm here");

        return () => {
            console.log("Goodbye!");
        }
    }, []);

    return (<p>I'm mounted!</p>);
}

const Parent = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Exercise1 />}
        </div>
    )
}

// Exercise 2 — Window Resize Tracker

// Build a component that displays the current window width. Update it when the user resizes the browser. Clean up the event listener on unmount.

const Exercise2 = () =>  {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            <h1>Window Width: {width}px</h1>
        </div>
    )
}

// Build a countdown from 10 to 0. When it hits 0, show "Time's up!" and stop. Make sure the interval cleans up properly.
const Exercise3 = () => {
    const [countdown, setCountdown] = useState(10);
    const [timeUp, setTimeup] = useState(false);

useEffect(() => {
    if (countdown === 0) return;  // stop the timer, do nothing else

    const intervalId = setInterval(() => (
        setCountdown(prev => prev - 1)
    ), 1000);

    return () => clearInterval(intervalId);
}, [countdown]);

// Effect 2: handles the "time's up" flag only
useEffect(() => {
    if (countdown === 0) {
        setTimeup(true); 
    }
}, [countdown]);

    return (
        <div>
            {timeUp ? <h1>Time's up!</h1> : <h1>Countdown: {countdown}</h1>}
        </div>
    )
}

// Exercise 4 — Dependency Array Challenge

// Create a component with a name prop. Use useEffect to update document.title to "Hello, {name}!" every time the name changes. Test it works correctly.

const Exercise4 = ({ name }) => {
    useEffect(() => {
        document.title = `Hello, ${name}!`;
    }, [name]);

    return (
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    )
}

// Exercise 5 — Spot the Bug

// Find and fix all the bugs:

function BuggyComponent({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`/api/users/${userId}`)
        .then( r => {
            if (!r.ok) {
                throw new Error("Network response was not ok");
            }
            return r.json();
        })
        .then(data => setUser(data));
    }, [userId]); 

    useEffect(() => {
        const timer = setInterval(() => {
        console.log("polling...");
        }, 2000);

        return () => clearInterval(timer);
    }, []); 

    return <div>{user?.name}</div>;
}

export default function Cleanup() {
    return (
        <div>
            <Parent />
            <Exercise2 />
            <Exercise3 />
            <Exercise4 name="Alice" />
            <BuggyComponent userId={7} />
        </div>
    )
}