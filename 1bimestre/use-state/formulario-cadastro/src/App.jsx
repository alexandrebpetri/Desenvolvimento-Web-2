import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  const formularioValido = 
    form.nome.trim() !== '' && 
    form.email.trim() !== '' && 
    form.senha.length >= 6;

  function handleCadastrar() {
    alert('Cadastrado!');
  }

  return (
    <div>
      <h2>Cadastro com validação</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
        <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} />
        <input name="senha" type="password" placeholder="Senha" value={form.senha} onChange={handleChange} />
        
        <button disabled={!formularioValido} onClick={handleCadastrar}>
          Cadastrar
        </button>
      </div>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}

export default App;