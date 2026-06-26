// ErrorBoundary.jsx  — must be a class component (no hook equivalent yet)
import React from 'react';

class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
            <h2>Something went wrong loading this section.</h2>
            <button onClick={() => this.setState({ hasError: false })}>
                Try again
            </button>
            </div>
        );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
