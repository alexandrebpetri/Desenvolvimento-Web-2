import { useState } from 'react';

const PRODUTOS = [
  { id: 1, nome: 'Teclado Mecânico', preco: 350 },
  { id: 2, nome: 'Mouse Gamer', preco: 150 },
  { id: 3, nome: 'Monitor 144hz', preco: 1200 },
  { id: 4, nome: 'Mousepad Gigante', preco: 80 }
];

function Loja({ aoAdicionar }) {
  return (
    <div style={{ flex: 1, borderRight: '1px solid #ccc', padding: '10px' }}>
      <h3>Produtos</h3>
      {PRODUTOS.map(p => (
        <div key={p.id} style={{ marginBottom: '10px' }}>
          <strong>{p.nome}</strong> — R$ {p.preco}
          <br />
          <button onClick={() => aoAdicionar(p)}>Adicionar</button>
        </div>
      ))}
    </div>
  );
}

function Carrinho({ carrinho }) {
  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);

  return (
    <div style={{ flex: 1, padding: '10px' }}>
      <h3>Seu Carrinho</h3>
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {carrinho.map((item, index) => (

            <li key={index}>{item.nome} — R$ {item.preco}</li>
          ))}
        </ul>
      )}
      <h4>Total: R$ {total}</h4>
    </div>
  );
}

function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
    setCarrinho(prev => [...prev, produto]);
  }

  return (
    <div>
      <h2>Lojinha simplificada</h2>
      <div style={{ display: 'flex' }}>
        <Loja aoAdicionar={adicionarAoCarrinho} />
        <Carrinho carrinho={carrinho} />
      </div>
    </div>
  );
}

export default App;