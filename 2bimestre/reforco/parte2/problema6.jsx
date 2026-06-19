`### 6. 🐛 Sintoma: o dashboard demora ~6s, mas as três buscas são independentes.

**Dica:** desenhe uma linha do tempo para as três chamadas. Se nenhuma depende do resultado anterior, elas precisam mesmo começar em momentos diferentes?`

//jsx

async function carregarDashboard() {
  const perfil = await fakeApi("perfil", 2000);
  const compras = await fakeApi("compras", 2000);
  const alertas = await fakeApi("alertas", 2000);
  return { perfil, compras, alertas };
}

// Conserte:

async function carregarDashboard() {
  const [perfil, compras, alertas] = await Promise.all([
    fakeApi("perfil", 2000),
    fakeApi("compras", 2000),
    fakeApi("alertas", 2000)
  ]);
  return { perfil, compras, alertas };
}