import { 
  Heart, 
  HeartCrack,
  HeartPulse,
  HeartHandshake, 
  Plus, 
  Minus,
  X, 
  Sigma, 
  Pi, 
  Divide,
  Equal
} from "lucide-react"
import {useState} from 'react';
import './Learn.css'

function LikeButtonExample() {
  const [count, setCount] = useState(0);
  return (
    <div style={{
      backgroundColor: 'whitesmoke',
      padding: '1.5rem',
      maxWidth: '300px'
    }}>
      <h2 className="font-extrabold">Like button</h2>

      <div onClick={() => setCount(count + 1)} className="likeCont">
        <div className="likeDiv">
          <Heart className="text-red-500" fill="currentColor" />
          <p>Like</p>
        </div>
        <div>
          {count} {'>'}
        </div>
      </div>

    </div>
  )
}

const ToggleVisibilityExample = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('Click to Show Text');
  const [textColor, setTextColor] = useState('gray');
  const [message, setMessage] = useState('This is some hidden text that can be toggles');

  function handleVisibility() {
    if (isVisible) {
      setIsVisible(false);
      setText('Click to Show Text');
      setTextColor('gray');
      setMessage('The text is now hidden.');
    } else {
      setIsVisible(true);
      setText('Here is the text!');
      setTextColor('black');
      setMessage('You found Out');
    }
  }
  return (
    <div style={{
      backgroundColor: 'whitesmoke',
      padding: '1.5rem',
      maxWidth: '300px'
    }}>
      <h2 className="font-extrabold">Toggle Visibility</h2>

      <div>
        <div>

        </div>
        <div className="textDiv" onClick={handleVisibility}>
          <p>{text}</p>
        </div>
        <div>
          <p style={{color: textColor}}>{message}</p>
        </div>
      </div>
    </div>
  )
}

function ColorChangerExample() {
  const [bgColor, setBgColor] = useState('white');
  const [colorName, setColorName] = useState('White');

  function changeColor(color, name) {
    setBgColor(color);
    setColorName(name);
  }
  return (
    <div style={{
      backgroundColor: 'whitesmoke',
      padding: '1.5rem',
      maxWidth: '300px'
    }}>
      <h2 className="font-extrabold">Color Changer</h2>
      <div
        style={{
          backgroundColor: bgColor,
          height: '100px',
          border: '1px solid black',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <p>{colorName}</p>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => changeColor('red', 'Red')}
          style={{ backgroundColor: 'red', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}
        >Red</button>
        <button
          onClick={() => changeColor('green', 'Green')}
          style={{ backgroundColor: 'green', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}
        >Green</button>
        <button
          onClick={() => changeColor('blue', 'Blue')}
          style={{ backgroundColor: 'blue', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}
        >Blue</button>
      </div>
    </div>
  )
}

function CharacterCounterExample() {
  const [text, setText] = useState('');
  return (
    <div style={{
      backgroundColor: 'whitesmoke',
      padding: '1.5rem',
      maxWidth: '300px'
    }}>
      <h2 className="font-extrabold">Character Counter</h2>
      <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      style={{ width: '100%', height: '100px' }}
      placeholder="Type something..."
      />
      <p>Character Count: {text.length}</p>
    </div>
  )
} 
  
function SimpleCalculatorExample() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  function calculate(operation) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res = 0;
    if (isNaN(number1) || isNaN(number2)) {
      setResult('Please enter valid numbers');
      return;
    }
    switch (operation) {
      case 'add':
        res = number1 + number2;
        break;
      case 'subtract':
        res = number1 - number2;
        break;
      case 'multiply':
        res = number1 * number2;
        break;
      case 'divide':
        res = number1 / number2;
        break;
      default:
        res = 0;
    }
    setResult(res);
  }
  return (
    <div style={{
      backgroundColor: 'whitesmoke',
      padding: '1.5rem',
      maxWidth: '300px'
    }}>
      <h2 className="font-extrabold">Simple Calculator</h2>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First Number"
        style={{ width: '100%', marginBottom: '0.5rem', padding: '8px' }}
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second Number"
        style={{ width: '100%', marginBottom: '0.5rem', padding: '8px' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <Plus onClick={() => calculate('add')} style={{ cursor: 'pointer' }} />
        <Minus onClick={() => calculate('subtract')} style={{ cursor: 'pointer' }} />
        <X onClick={() => calculate('multiply')} style={{ cursor: 'pointer' }} />
        <Divide onClick={() => calculate('divide')} style={{ cursor: 'pointer' }} />
      </div>
      {result !== null && (<p>Result: {result}</p>)}
    </div>
  )
}
const LucideApp = () => {
  const [activeTab, setActiveTab] = useState('likeButton');
  const buttonStyle = {
    padding: '10px 20px',
    marginRight: '10px',
    backgroundColor: ['likeButton', 'toggleVisibility', 'colorChanger', 'characterCounter', 'simpleCalculator' ].includes(activeTab) ? '#007bff' : '#e9ecef',
    color: ['likeButton', 'toggleVisibility', 'colorChanger', 'characterCounter', 'simpleCalculator' ].includes(activeTab) ? 'white' : 'black',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px 4px 0 0'
  }

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setActiveTab('likeButton')}
          style={buttonStyle}>
            Like Button
        </button>
        <button onClick={() => setActiveTab('toggleVisibility')}
          style={buttonStyle}>
            Toggle Visibility
        </button>
        <button onClick={() => setActiveTab('colorChanger')}
          style={buttonStyle}>
            Color Changer
        </button>
        <button onClick={() => setActiveTab('characterCounter')}
          style={buttonStyle}>
            Character Counter
        </button>
        <button onClick={() => setActiveTab('simpleCalculator')}
          style={buttonStyle}>
            Simple Calculator
        </button>
      </div>
      <div>
        {activeTab === 'likeButton' && <LikeButtonExample />}
        {activeTab === 'toggleVisibility' && <ToggleVisibilityExample />}
        {activeTab === 'colorChanger' && <ColorChangerExample />}
        {activeTab === 'characterCounter' && <CharacterCounterExample />}
        {activeTab === 'simpleCalculator' && <SimpleCalculatorExample />}
      </div>
    </div>
  
  )
}

export default LucideApp