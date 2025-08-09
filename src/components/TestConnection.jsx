import { useState } from 'react';
import apiService from '../services/apiService';

const TestConnection = () => {
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const testConnection = async () => {
    setIsLoading(true);
    setResult('A testar conexão...');
    
    try {
      const response = await apiService.request('/test');
      setResult(`✅ Sucesso: ${JSON.stringify(response, null, 2)}`);
    } catch (error) {
      setResult(`❌ Erro: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testLogin = async () => {
    setIsLoading(true);
    setResult('A testar login...');
    
    try {
      const response = await apiService.loginUtilizador('user@example.com', '123456789');
      setResult(`✅ Login Sucesso: ${JSON.stringify(response, null, 2)}`);
    } catch (error) {
      setResult(`❌ Erro Login: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🔍 Teste de Conectividade</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={testConnection} 
          disabled={isLoading}
          style={{ marginRight: '10px', padding: '10px 20px' }}
        >
          Testar API
        </button>
        
        <button 
          onClick={testLogin} 
          disabled={isLoading}
          style={{ padding: '10px 20px' }}
        >
          Testar Login
        </button>
      </div>
      
      <div style={{ 
        background: '#f5f5f5', 
        padding: '15px', 
        borderRadius: '5px',
        whiteSpace: 'pre-wrap',
        fontFamily: 'monospace',
        fontSize: '14px'
      }}>
        {result || 'Clique num botão para testar...'}
      </div>
      
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p><strong>Frontend:</strong> http://localhost:5173</p>
        <p><strong>Backend:</strong> http://localhost:3001</p>
        <p><strong>CORS Configurado:</strong> ✅</p>
      </div>
    </div>
  );
};

export default TestConnection;
