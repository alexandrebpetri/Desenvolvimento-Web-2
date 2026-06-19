`### 2. 🐛 Sintoma: tela branca quando o localStorage está vazio ou corrompido.

**Dica:** trate separadamente duas situações: a chave pode não existir e o conteúdo existente pode não ser um JSON válido. Depois, confirme se o valor recuperado tem o tipo esperado pela tela.`

//jsx

useEffect(() => {
  const salvas = JSON.parse(localStorage.getItem("notas"));
  setNotas(salvas);
}, []);

// Conserte:
useEffect(() => {
  try {
    const dadosSalvos = localStorage.getItem("notas");
    const notasConvertidas = dadosSalvos ? JSON.parse(dadosSalvos) : [];
    setNotas(Array.isArray(notasConvertidas) ? notasConvertidas : []);
  } catch {
    setNotas([]);
  }
}, []);