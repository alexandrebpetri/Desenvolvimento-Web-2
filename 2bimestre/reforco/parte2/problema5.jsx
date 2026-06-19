`### 5. 🐛 Sintoma: quando a requisição falha, o "Carregando..." fica preso para sempre.

**Dica:** identifique qual linha deixa de ser executada quando a Promise rejeita. Pense em uma estrutura que execute a limpeza tanto no sucesso quanto na falha.`

//jsx

async function buscar() {
  setLoading(true);
  const dados = await fakeApi(["a", "b"]);
  setDados(dados);
  setLoading(false);
}
// Conserte:
async function buscar() {
  setLoading(true);
  try {
    const dados = await fakeApi(["a", "b"]);
    setDados(dados);
  } catch (erro) {
    console.error("Falha na busca:", erro);
  } finally {
    setLoading(false);
  }
}