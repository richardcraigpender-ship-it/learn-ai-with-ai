import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Optionally log to an analytics service here
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '1.5rem',
          maxWidth: '600px',
          margin: '2rem auto',
          textAlign: 'center',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <h1>Something went wrong</h1>
          <p>
            We are sorry—there was an error loading this page.
          </p>
          <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
            {this.state.error?.message || 'Unknown error'}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              background: '#2563eb',
              color: 'white',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;