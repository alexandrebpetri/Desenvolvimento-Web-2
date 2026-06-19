`### 9. 🐛 Sintoma: aceitaTermos guarda "on"; a regra nunca acusa erro nos termos.

**Dica:** inspecione ``event.target`` no console para um campo de texto e para um checkbox. Qual propriedade representa se o checkbox está marcado?`

//jsx

function handleChange(event) {
  const { name, value } = event.target;
  setFormulario((atual) => ({ ...atual, [name]: value }));
}

// Conserte:
function handleChange(event) {
  const { name, value, type, checked } = event.target;
  const novoValor = type === "checkbox" ? checked : value;
  setFormulario((atual) => ({ ...atual, [name]: novoValor }));
}