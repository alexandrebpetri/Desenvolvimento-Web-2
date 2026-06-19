`### 8. 🐛 Sintoma: warning "useEffect must not return a Promise".

**Dica:** compare o que uma função ``async`` sempre devolve com os únicos dois tipos de retorno aceitos pelo callback de ``useEffect``.`

//jsx

useEffect(async () => {
  const r = await fetch("<https://api.github.com/users/octocat>");
  const dados = await r.json();
  setUsuario(dados);
}, []);

// Conserte:
useEffect(() => {
  async function carregarDados() {
    const r = await fetch("https://api.github.com/users/octocat");
    const dados = await r.json();
    setUsuario(dados);
  }
  carregarDados();
}, []);