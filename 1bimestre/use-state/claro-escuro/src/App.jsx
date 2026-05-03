import { useState } from 'react';

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const estiloPagina = {
    backgroundColor: temaEscuro ? '#000' : '#fff',
    color: temaEscuro ? '#fff' : '#000',
    padding: '20px',
    minHeight: '100vh', 
    transition: '0.3s'
  };

  return (
    <div style={estiloPagina}>
      <h2>Tema Claro/Escuro</h2>
      <button onClick={() => setTemaEscuro(prev => !prev)}>
        {temaEscuro ? 'Modo claro' : 'Modo escuro'}
      </button>
    </div>
  );
}

export default App;