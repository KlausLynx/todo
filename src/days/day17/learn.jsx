import { useRef, useEffect, forwardRef, useImperativeHandle, useState } from 'react';

// ref is a nametag on sthing or a specific html element that make u remember the element whenever u want to do sth
// useRef: you can give useRef a value like useRef(0) or useRef(null)
// It's used for remembering the value between renders
// The difference between it and useState is that it doesn't trigger re-renders
// (so the screen doesn't update when you change it)

// ALSO used for: grabbing actual DOM elements (like <div ref={myRef}>)


function MainComponent () {
    return (
        <>
        <AdvancedStopWatch />
        <AutoSaveForm />
        <ImageGallery/>
        <HighlightText />
        <Parent />
        <LoginForm />
        <ScrollExample />
        <ClickCounter />
        </>
    )
}

const LoginForm = () => {
    const emailInputRef = useRef(null)
    useEffect(()=> {
        emailInputRef.current.focus();
    }, [])

    return (
        <div>
            <input ref={emailInputRef} type="email" placeholder='email' />
            <input type="password" placeholder='Enter password' />
            <button>Login</button>
        </div>
        
    )
}

function ScrollExample() {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <button onClick={scrollToSection}>Scroll to section</button>

            <div style={{height: '1000px'}}>
                some content.....
            </div>

            <section ref={sectionRef}>
                <h2>Important Section!</h2>
                <p>You scrolled here smoothly</p>
            </section>
        </div>
    )
}

// forwardRef:- This let a parent component access a ref to a child component's Dom element
//  useImperativeHandle: Customize what the parent get access to when using forwardRef

// const MyInput = forwardRef((props, ref) => {
//     return (
//         <input ref={ref} type="text" />
//     )
// })

// function Parent() {
//     const inputRef = useRef(null);
//     return (
//         <>
//         <MyInput ref={inputRef} />
//         <button onClick={() => inputRef.current.focus()}>Focus</button>
//         </>
//     )
// }


const MyInput =  forwardRef((props, ref) => {
    const customRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => customRef.current.focus(),
        clear: () => customRef.current.value = '',
        setValue: (value) => customRef.current.value = value,
        color: () => customRef.current.style.color = 'red',
        // u can use cssText for the style string format
        fancyStyle: () => {
            Object.assign(customRef.current.style, {color: 'red', fontSize: '2rem'})
        }
    }));

    return (
        <input ref={customRef} type="text" {...props}/>
    )
})

function Parent() {
    const inputRef =  useRef(null);

    return (
        <>
            <MyInput ref={inputRef}/>
            <button onClick={()=> inputRef.current.focus()}>Focus</button>
            <button onClick={()=> inputRef.current.clear()}>Clear</button>
            <button onClick={()=> inputRef.current.setValue('Hello')}>Say Hello</button>
            <button onClick={()=> inputRef.current.style.color = 'red'}>Change color</button>
        </>
    )
}

// Exercise 1: Click Counter Without Re-render
// Create a component that counts button clicks using useRef but displays the count only when a "Show Count" button is clicked (using useState).

const ClickCounter = () => {
    const [count, setCount] = useState(0);
    const btnClicks = useRef(0);
    
    const handleClick = () => {
        btnClicks.current += 1
        console.log(btnClicks)
    }

    return (
        <div>
            <button onClick={handleClick}>lets go</button>
            <p>{count}</p>
            <button onClick={()=> setCount(btnClicks.current)}>Display</button>
        </div>
    )

}

// Exercise 2: Text Highlighter
// Create an input field with a "Highlight" button that selects all the text in the input when clicked.

const HighlightText = () => {
    const textRef = useRef(null);

    const handleClick = () => {
        textRef.current.focus(),
        textRef.current.style.backgroundColor = 'lightBlue',
        textRef.current.style.padding = '10px'
    }
    return(
        <div>
            <input ref={textRef} type="text" placeholder='typing.....'/>
            <button onClick={handleClick}>highlight</button>
        </div>
    )
}

// Exercise 3: Auto-save Form
// Build a form that automatically saves to localStorage 2 seconds after the user stops typing. Use useRef to store the timeout ID.

const AutoSaveForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })
    const timeoutRef = useRef()

    useEffect(()=> {

        timeoutRef.current = setTimeout(() => {
            localStorage.setItem('formData', JSON.stringify(formData))
            console.log('saved', formData)
            console.log(timeoutRef.current)
        }, 2000)
        
        return () => clearTimeout(timeoutRef.current)

    }, [formData])

    return (
        <form action="">
            <input type="text" name='name' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
            <input type="email" name="email" id="" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
        </form>
    )
}


// Exercise 4: Image Gallery with Auto-scroll
// Create an image gallery where clicking a thumbnail scrolls the main image into view smoothly.

const ImageGallery = () => {
    const [showFull, setShowFull] = useState(false);

    const scrollSection = useRef(null)

    useEffect(() => {
        if (showFull && scrollSection.current) {
            scrollSection.current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }, [showFull]); 
     return (
        <div>
            <figure>
                <img src="https://images.unsplash.com/photo-1767961932888-6bd98b732200" alt="" width={100} height={100} onClick={() => setShowFull(true)}/>
            </figure>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim libero ullam officia aliquam? Maiores sed corporis quam. Facilis quasi tempora dolorum fuga, commodi impedit in qui cumque perspiciatis voluptatem.
                Voluptas fuga dolorem magni recusandae sit obcaecati velit incidunt ut, earum enim officia laboriosam. Unde officia enim quod ipsam aspernatur reiciendis neque. Consequuntur magnam laudantium similique voluptate nobis quasi molestiae!
                Beatae aut qui quos numquam, placeat reprehenderit similique. Id, quasi. Aliquam commodi nisi nihil placeat alias officiis soluta quia perspiciatis vel dolore, recusandae accusantium provident tempore fuga aperiam illo? Nemo.
                Nam esse eos laborum at libero tenetur temporibus nulla incidunt adipisci! Assumenda reprehenderit tempora adipisci? Temporibus tempore omnis eveniet dolorum reprehenderit, vitae totam voluptatem doloribus, esse in, repellat repudiandae eius!     
            </div>
            {showFull && (
                <div ref={scrollSection} style={{height: '1000px'}}>
                    <img src="https://images.unsplash.com/photo-1767961932888-6bd98b732200?q=80&w=647&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            )}
        </div>
     )
}
// Exercise 5: Advanced Stopwatch
// Build a stopwatch that:

// Starts/stops/resets
// Shows lap times (store in state)
// Uses useRef for the interval ID

const AdvancedStopWatch = () => {
    const [Time, setTime] = useState(0);
    const [startValue, setStartValue] =  useState(false);
    const intervalRef = useRef(null);
    const [laps, setLaps] = useState([]);

    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes =  Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const ms = Math.floor((milliseconds % 1000) / 10);

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
    };

    const start = () => {
        if(!startValue) {
            setStartValue(true);
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        }
    }
    const stop = () =>{
        if (startValue) {
            setStartValue(false)
            clearInterval(intervalRef.current)
        }
    }
    const reset = () => {
        setStartValue(false);
        clearInterval(intervalRef.current);
        setTime(0)
        setLaps([])
    }

    const addLap = () => {
        if(Time > 0) {
            setLaps(prevLaps => [...prevLaps, Time])
        }
    }
    return (
        <>
        <div>
            {formatTime(Time)}
        </div>
        <button type='button' onClick={start}>Start</button>
        <button type="button" onClick={stop}>Pause</button>
        <button type="button" onClick={reset}>Reset</button>
        <button
            onClick={addLap}
            disabled={Time === 0}>
                Lap
        </button>

        {/* Lap Times */}
        {laps.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Lap Times</h2>
            <div className="max-h-60 overflow-y-auto space-y-2">
              {laps.map((lapTime, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 flex justify-between items-center shadow-sm"
                >
                  <span className="font-semibold text-gray-600">
                    Lap {index + 1}
                  </span>
                  <span className="font-mono text-lg text-purple-600">
                    {formatTime(lapTime)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        </>
    )
}
export default MainComponent