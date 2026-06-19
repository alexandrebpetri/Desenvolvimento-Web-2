`### 4. 🐛 Sintoma: SyntaxError "await is only valid in async functions".

**Dica:** verifique qual declaração permite que uma função pause sua execução enquanto aguarda uma Promise.`

//jsx

function carregarNome() {
  const nome = await fakeApi("Ana");
  console.log(nome);
}
// Conserte:

async function carregarNome() {
  const nome = await fakeApi("Ana");
  console.log(nome);
}