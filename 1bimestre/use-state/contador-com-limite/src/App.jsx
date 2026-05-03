import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  function decrementar() {
    setContador(prev => (prev > 0 ? prev - 1 : prev));
  }

  function incrementar() {
    setContador(prev => (prev < 10 ? prev + 1 : prev));
  }

  return (
    <div>
      <h2>Contador com limite</h2>
      <h1>{contador}</h1>
      <button onClick={decrementar} disabled={contador === 0}>
        −
      </button>
      <button onClick={incrementar} disabled={contador === 10}>
        +
      </button>
      <button onClick={() => setContador(0)}>Resetar</button>
    </div>
  );
}

export default App;