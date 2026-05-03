import { useState } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novoTexto, setNovoTexto] = useState('');

  function adicionar() {
    if (novoTexto.trim() === '') return;
    const nova = { id: Date.now(), texto: novoTexto, concluida: false };
    setTarefas(prev => [...prev, nova]);
    setNovoTexto('');
  }

  function alternarConcluida(id) {
    setTarefas(prev => prev.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t));
  }

  function remover(id) {
    setTarefas(prev => prev.filter(t => t.id !== id));
  }

  const total = tarefas.length;
  const concluidas = tarefas.filter(t => t.concluida).length;

  return (
    <div>
      <h2>To-Do list</h2>

      <input 
        value={novoTexto} 
        onChange={e => setNovoTexto(e.target.value)} 
        placeholder="Nova tarefa" 
      />
      <button onClick={adicionar}>Adicionar</button>

      <ul>
        {tarefas.map(t => (
          <li key={t.id}>
            <input type="checkbox" checked={t.concluida} onChange={() => alternarConcluida(t.id)} />
            <span style={{ textDecoration: t.concluida ? 'line-through' : 'none' }}>
              {t.texto}
            </span>
            <button onClick={() => remover(t.id)}>Remover</button>
          </li>
        ))}
      </ul>

      {total === 0 && <p>Nenhuma tarefa ainda</p>}
      
      {total > 0 && (
        <p>{concluidas} de {total} tarefas concluídas</p>
      )}

      {total > 0 && total === concluidas && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>Parabéns! Todas as tarefas concluídas!</p>
      )}
    </div>
  );
}

export default App;