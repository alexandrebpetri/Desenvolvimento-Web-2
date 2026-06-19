`### 10. 🐛 Sintoma: ao corrigir um campo já tocado, a mensagem fica sempre um caractere atrasada.

**Dica:** durante o evento, ``formulario`` ainda representa o snapshot da renderização atual. A validação precisa receber um objeto que já contenha o valor recém-digitado.`

//jsx

function handleChange(event) {
  const { name, value } = event.target;
  setFormulario((atual) => ({ ...atual, [name]: value }));

  if (tocados[name]) {
    const resultado = validarFormulario(formulario);
    setErros((atuais) => ({ ...atuais, [name]: resultado.erros[name] }));
  }
}

// Conserte:

function handleChange(event) {
  const { name, value } = event.target;
  const formularioAtualizado = { ...formulario, [name]: value };
  setFormulario(formularioAtualizado);

  if (tocados[name]) {
    const resultado = validarFormulario(formularioAtualizado);
    setErros((atuais) => ({ ...atuais, [name]: resultado.erros[name] }));
  }
}