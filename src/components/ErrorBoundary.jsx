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
    console.error('Error boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          border: '1px solid #e74c3c',
          borderRadius: '8px',
          backgroundColor: '#fdf2f2',
          color: '#e74c3c',
          margin: '10px 0'
        }}>
          <h3>⚠️ Algo correu mal</h3>
          <p><strong>Erro:</strong> {this.state.error?.message}</p>
          <details style={{ marginTop: '10px' }}>
            <summary>Detalhes técnicos</summary>
            <pre style={{ 
              fontSize: '12px', 
              overflow: 'auto', 
              marginTop: '5px',
              padding: '10px',
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '4px'
            }}>
              {this.state.error?.stack}
            </pre>
          </details>
          <button 
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              marginTop: '10px',
              padding: '8px 16px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Tentar novamente
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
