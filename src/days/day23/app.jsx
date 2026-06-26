import { useState, lazy, Suspense,} from 'react'
import { BrowserRouter as Router, Routes, Route, Link,  } from 'react-router-dom'
const HeavyComponent = lazy(() => import('./HeavyComponent'))
const Home = lazy(()=> import('./home'))
const About = lazy(()=> import('./about'))
const Contact = lazy(()=> import('./contact'))
const AreaChart = lazy(() => import('./Chart').then(module => ({default: module.AreaChart})))
const LineChart = lazy(() => import('./Chart').then(module => ({default: module.LineChart})))
const Broken = lazy(() => import('./brokenComponent').then(module => ({default: module.BrokenComponent})))
import ErrorBoundary from './ErrorBoundary'

// Exercise 1 — Basic lazy + Suspense
// Create two components: HeavyComponent.jsx that returns a simple <div>Loaded!</div>, 
// then in App.jsx lazy-load it and wrap it in a Suspense with the text "Loading component..." as fallback. 
// Render it conditionally with a button toggle.
function Exercise1() {
    const [showHeavyComponent, setShowHeavyComponent] = useState(false)
    return(
        <div>
            <button onClick={() => setShowHeavyComponent(prev => !prev)}>
                {!showHeavyComponent ? 'Show Details': 'Hide Details'}
            </button>
            <Suspense fallback='Loading component...'>
                { showHeavyComponent && <HeavyComponent />}
            </Suspense>
        </div>
    )
}

// Exercise 2 — Route-based splitting
// Set up React Router with 3 routes: /, /about, /contact. Lazy-load each page component. 
// Put ONE Suspense wrapping all Routes. 
// Add a simple <nav> with <Link> tags to navigate between them.
function Exercise2() {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>

            <Suspense fallback="Page Loading........">
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
            </Suspense>
        </div>
    )
}

// Exercise 3 — Named export fix
// You have a file utils.jsx that exports export const Chart = () => <div>Chart</div> (named export, not default). 
// Write the intermediate module wrapper needed to make React.lazy() work with it, then use it.
function Exercise3() {
    return(
        <>
            <AreaChart />
            <LineChart />
        </>
    )
}

// Exercise 4 — ErrorBoundary
// Copy the ErrorBoundary class. 
// Then create a lazy component that throws an error inside it: throw new Error('Failed!'). 
// Wrap it with both ErrorBoundary and Suspense. 
// Confirm the error UI shows instead of a crash.
function Exercise4() {
    return(
        <>
            <ErrorBoundary>
                <Suspense fallback="Loading...">
                    <Broken />
                </Suspense>
            </ErrorBoundary>
        </>
    )
}

// Exercise 5 — Dynamic import on demand
// Write a button that, when clicked, 
// dynamically imports the lodash debounce function using await import('lodash') inside an async function (
// don't install lodash — just write the code structure and console.log "lodash loaded" when it resolves).
function Exercise5() {

    async function handleImport() {
        const { default: _ } = await import('https://cdn.skypack.dev/lodash')
        console.log("lodash loaded")
    }
    return (
        <button onClick={handleImport}>Dynamic Import</button>
    )
}

export default function App () {
    return (
        <>
            <Router>
                <Exercise1 />
                <Exercise2 />
                <Exercise3 />
                <Exercise4 />
                <Exercise5 />
            </Router>
            
        </>
    )
}