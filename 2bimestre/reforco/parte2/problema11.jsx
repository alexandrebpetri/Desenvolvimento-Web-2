`### 11. 🐛 Sintoma: ao sair de um campo inválido, nenhuma mensagem aparece; ela só surge depois do envio.

**Dica:** marcar um campo como tocado registra a interação, mas não cria uma mensagem. Localize qual função produz erros e qual estado armazena o erro de cada campo.`

//jsx

function handleBlur(event) {
  const campo = event.target.name;

  setTocados((atuais) => ({
    ...atuais,
    [campo]: true,
  }));
}

// Conserte:

function handleBlur(event) {
  const campo = event.target.name;
  const resultado = validarFormulario(formulario);

  setTocados((atuais) => ({ ...atuais, [campo]: true }));
  setErros((atuais) => ({ ...atuais, [campo]: resultado.erros[campo] }));
}