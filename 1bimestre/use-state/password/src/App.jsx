import { useState } from 'react';

function App() {
  const [senha, setSenha] = useState('');

  const tem8Chars = senha.length >= 8;
  const temNumero = /\d/.test(senha);
  const temMaiuscula = /[A-Z]/.test(senha);

  const senhaValida = tem8Chars && temNumero && temMaiuscula;

  return (
    <div>
      <h2>Validar Senha em Tempo Real</h2>
      
      <input 
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Digite sua senha..."
      />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ color: tem8Chars ? 'green' : 'red' }}>
          {tem8Chars ? '✓' : '✗'} Pelo menos 8 caracteres
        </li>
        <li style={{ color: temNumero ? 'green' : 'red' }}>
          {temNumero ? '✓' : '✗'} Pelo menos um número
        </li>
        <li style={{ color: temMaiuscula ? 'green' : 'red' }}>
          {temMaiuscula ? '✓' : '✗'} Pelo menos uma letra maiúscula
        </li>
      </ul>

      <button 
        disabled={!senhaValida} 
        onClick={() => alert('Senha aceita!')}
      >
        Salvar
      </button>
    </div>
  );
}

export default App;