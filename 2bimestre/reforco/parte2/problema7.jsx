`### 7. 🐛 Sintoma: a aba trava; as requisições disparam sem parar.

**Dica:** descubra quando um efeito sem lista de dependências é executado. Depois acompanhe o ciclo iniciado por ``setUsuario``.`

//jsx

useEffect(() => {
  fetch("<https://api.github.com/users/octocat>")
    .then((r) => r.json())
    .then((dados) => setUsuario(dados));
});

// Conserte:

useEffect(() => {
  fetch("https://api.github.com/users/octocat")
    .then((r) => r.json())
    .then((dados) => setUsuario(dados));
}, []); // Lista de dependências vazia adicionada