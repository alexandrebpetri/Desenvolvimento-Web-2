`### 1. 🐛 Sintoma: ao clicar em remover, a lista na tela não atualiza.

**Dica:** observe se o array entregue ao React é realmente um novo array ou se o original foi alterado no mesmo lugar.`

//jsx
function removerNota(id) {
  const indice = notas.findIndex((n) => n.id === id);
  notas.splice(indice, 1);
  setNotas(notas);
}
// Conserte:

function removerNota(id) {
  setNotas((atuais) => atuais.filter((n) => n.id !== id));
}   