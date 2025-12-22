import { useState } from 'react';

export default function EventHandlingLessons() {
  const [activeTab, setActiveTab] = useState('example1');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Day 8: Event Handling in React</h1>

      {/* Tab Navigation */}
      <div style={{ marginBottom: '30px', borderBottom: '2px solid #007bff' }}>
        <button
          onClick={() => setActiveTab('example1')}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: activeTab === 'example1' ? '#007bff' : '#e9ecef',
            color: activeTab === 'example1' ? 'white' : 'black',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px 4px 0 0'
          }}
        >
          Example 1: Click Events
        </button>
        <button
          onClick={() => setActiveTab('example2')}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: activeTab === 'example2' ? '#007bff' : '#e9ecef',
            color: activeTab === 'example2' ? 'white' : 'black',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px 4px 0 0'
          }}
        >
          Example 2: Input Events
        </button>
        <button
          onClick={() => setActiveTab('example3')}
          style={{
            padding: '10px 20px',
            backgroundColor: activeTab === 'example3' ? '#007bff' : '#e9ecef',
            color: activeTab === 'example3' ? 'white' : 'black',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px 4px 0 0'
          }}
        >
          Example 3: Form Submission
        </button>
      </div>

      {/* Example 1: Click Events */}
      {activeTab === 'example1' && <ClickEventExample />}

      {/* Example 2: Input Events */}
      {activeTab === 'example2' && <InputEventExample />}

      {/* Example 3: Form Submission */}
      {activeTab === 'example3' && <FormSubmissionExample />}
    </div>
  );
}

// Example 1: Click Events
function ClickEventExample() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  function handleClick() {
    setCount(count + 1);
  }

  function handleGreeting(name) {
    setMessage(`Hello, ${name}!`);
  }

  function handleReset() {
    setCount(0);
    setMessage('');
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <h2>Example 1: Click Events</h2>

      <div style={{ marginBottom: '20px' }}>
        <p>Click count: <strong>{count}</strong></p>
        <button
          onClick={handleClick}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
            marginRight: '10px'
          }}
        >
          Increment Count
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>Message: <strong>{message || 'No message yet'}</strong></p>
        <button
          onClick={() => handleGreeting('Alice')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#17a2b8',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
            marginRight: '10px'
          }}
        >
          Greet Alice
        </button>
        <button
          onClick={() => handleGreeting('Bob')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#17a2b8',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
            marginRight: '10px'
          }}
        >
          Greet Bob
        </button>
      </div>

      <button
        onClick={handleReset}
        style={{
          padding: '10px 20px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '4px'
        }}
      >
        Reset
      </button>

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
        <p><strong>💡 What's happening:</strong></p>
        <p>Each button has an onClick handler. When you click, the function runs and updates state.</p>
      </div>
    </div>
  );
}

// Example 2: Input Events
function InputEventExample() {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  function handleInputChange(event) {
    // event.target is the input element
    // event.target.value is what the user typed
    setInputValue(event.target.value);
  }

  function handleMouseEnter() {
    setDisplayValue('🎯 You hovered over me!');
  }

  function handleMouseLeave() {
    setDisplayValue('');
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <h2>Example 2: Input Events</h2>

      <div style={{ marginBottom: '20px' }}>
        <p>Type something:</p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here..."
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            width: '100%',
            maxWidth: '300px'
          }}
        />
        <p>You typed: <strong>{inputValue}</strong></p>
      </div>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: '20px',
          backgroundColor: '#fff',
          border: '2px solid #007bff',
          borderRadius: '4px',
          textAlign: 'center',
          cursor: 'pointer'
        }}
      >
        <p>Hover over me!</p>
        <p>{displayValue}</p>
      </div>

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
        <p><strong>💡 What's happening:</strong></p>
        <p>onChange fires every time the user types a character. We read event.target.value to get what they typed.</p>
      </div>
    </div>
  );
}

// Example 3: Form Submission
function FormSubmissionExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    // This is like event.preventDefault() for form submission
    
    if (name.trim() === '' || email.trim() === '') {
      alert('Please fill in all fields!');
      return;
    }

    setSubmitted(true);
    console.log('Form submitted with:', { name, email });

    // Reset form
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubmitted(false);
    }, 2000);
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <h2>Example 3: Form Submission</h2>

      {submitted ? (
        <div style={{
          padding: '20px',
          backgroundColor: '#d4edda',
          color: '#155724',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          <p>✅ Form submitted successfully!</p>
          <p>Name: <strong>{name}</strong></p>
          <p>Email: <strong>{email}</strong></p>
          <p style={{ fontSize: '12px', marginTop: '10px' }}>Resetting form in 2 seconds...</p>
        </div>
      ) : (
        <div style={{ maxWidth: '400px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              style={{
                padding: '10px',
                fontSize: '16px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                width: '100%'
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                padding: '10px',
                fontSize: '16px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                width: '100%'
              }}
            />
          </div>

          <button
            onClick={handleSubmit}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          >
            Submit Form
          </button>
        </div>
      )}

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
        <p><strong>💡 What's happening:</strong></p>
        <p>When you click submit, our handleSubmit function runs. We validate the data, show a success message, then reset the form after 2 seconds.</p>
      </div>
    </div>
  );
}