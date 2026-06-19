`## Parte 3 - Desafio de síntese do Roteiro 13

O formulário recebeu um campo controlado chamado ``confirmarEmail``. Implemente a regra completa para que:

1. o campo faça parte de ``valoresIniciais``;
2. a validação produza um erro quando os dois e-mails forem diferentes, desconsiderando espaços e maiúsculas;
3. o campo seja marcado como tocado em uma tentativa de envio;
4. o erro seja atualizado no ``onBlur`` e durante a correção, depois que o campo já tiver sido tocado;
5. ``confirmarEmail`` não seja enviado para a API.`


// 1. Inclusão nos valores iniciais
const valoresIniciais = {
  nome: "",
  email: "",
  confirmarEmail: "", // Adicionado
  // ... demais campos
};

// 2. Lógica interna da função validarFormulario(valores)
// Validação do campo comparativo
if (!valores.confirmarEmail.trim()) {
  errosEncontrados.confirmarEmail = "Confirme o seu e-mail.";
} else if (
  valores.confirmarEmail.trim().toLowerCase() !== valores.email.trim().toLowerCase()
) {
  errosEncontrados.confirmarEmail = "Os e-mails precisam ser iguais.";
}

// 3. Exclusão no objeto retornado para a API (dadosNormalizados)
const dadosNormalizados = {
  nome: valores.nome.trim(),
  email: valores.email.trim().toLowerCase(),
  idade: Number(valores.idade),
  portfolio: valores.portfolio.trim(),
  trilha: valores.trilha,
  aceitaTermos: valores.aceitaTermos
};