`### 12. 🐛 Sintoma: a validação passa, mas a API recebe nome com espaços, e-mail com maiúsculas e idade como string.

**Dica:** compare as duas partes devolvidas por ``validarFormulario``. Qual delas representa os valores preparados para uso fora do formulário?`

//jsx

async function handleSubmit(event) {
  event.preventDefault();

  const resultado = validarFormulario(formulario);
  const possuiErros = Object.keys(resultado.erros).length > 0;

  setErros(resultado.erros);

  if (possuiErros) return;

  await enviarParaApi(formulario);
}

// Conserte:

async function handleSubmit(event) {
  event.preventDefault();

  const resultado = validarFormulario(formulario);
  const possuiErros = Object.keys(resultado.erros).length > 0;

  setErros(resultado.erros);

  if (possuiErros) return;

  await enviarParaApi(resultado.dados); // Alterado de 'formulario' para 'resultado.dados'
}