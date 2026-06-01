import { useEffect, useState } from "react";
import "./App.css";

const NOTES_STORAGE_KEY = "@mini-notes:notas_v1";

export default function App() {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [busca, setBusca] = useState("");
  
  // Desafio 4: Estado para controlar qual nota está sendo editada
  const [notaEditandoId, setNotaEditandoId] = useState(null);

  const [notas, setNotas] = useState(() => {
    const dadosSalvos = localStorage.getItem(NOTES_STORAGE_KEY);

    if (dadosSalvos === null) {
      return [];
    }

    try {
      const notasSalvas = JSON.parse(dadosSalvos);
      if (Array.isArray(notasSalvas)) {
        return notasSalvas;
      }
      return [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notas));
  }, [notas]);

  function salvarNota(event) {
    event.preventDefault();

    const tituloLimpo = titulo.trim();
    const conteudoLimpo = conteudo.trim();

    if (tituloLimpo === "" || conteudoLimpo === "") {
      return;
    }

    // Desafio 4: Lógica de atualização vs criação
    if (notaEditandoId !== null) {
      setNotas((notasAtuais) =>
        notasAtuais.map((nota) =>
          nota.id === notaEditandoId
            ? { ...nota, titulo: tituloLimpo, conteudo: conteudoLimpo }
            : nota
        )
      );
      cancelarEdicao();
      return;
    }

    const novaNota = {
      id: Date.now(),
      titulo: tituloLimpo,
      conteudo: conteudoLimpo,
      criadaEm: new Date().toISOString(),
    };

    setNotas((notasAtuais) => [novaNota, ...notasAtuais]);
    setTitulo("");
    setConteudo("");
  }

  function removerNota(idNota) {
    setNotas((notasAtuais) => notasAtuais.filter((nota) => nota.id !== idNota));
    if (notaEditandoId === idNota) cancelarEdicao();
  }

  // Desafio 4: Funções auxiliares para o fluxo de edição
  function iniciarEdicao(nota) {
    setTitulo(nota.titulo);
    setConteudo(nota.conteudo);
    setNotaEditandoId(nota.id);
  }

  function cancelarEdicao() {
    setTitulo("");
    setConteudo("");
    setNotaEditandoId(null);
  }

  const notasFiltradas = notas.filter((nota) => {
    const termo = busca.toLowerCase();
    return (
      nota.titulo.toLowerCase().includes(termo) ||
      nota.conteudo.toLowerCase().includes(termo)
    );
  });

  return (
    <main className="app-shell">
      <header className="app-header">
        <span className="eyebrow">React Notes</span>
        <h1 className="title">Mini Notes App</h1>
        <p className="subtitle">
          Registre pequenas ideias, lembretes e observações da aula em uma
          interface controlada por estado.
        </p>
      </header>

      <section className="workspace">
        <form className="panel note-form" onSubmit={salvarNota}>
          <div className="field">
            <label htmlFor="titulo">Título</label>
            <input
              className="input"
              id="titulo"
              placeholder="Ex.: Revisar useEffect"
              type="text"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="conteudo">
              Anotação
              {/* Desafio 2: Contador de caracteres */}
              <span className="char-counter">
                {conteudo.length} caractere{conteudo.length !== 1 ? "s" : ""}
              </span>
            </label>
            <textarea
              className="textarea"
              id="conteudo"
              placeholder="Escreva uma observação curta..."
              value={conteudo}
              onChange={(event) => setConteudo(event.target.value)}
            />
          </div>

          <div className="form-actions">
            <button
              className="save-btn"
              type="submit"
              disabled={titulo.trim() === "" || conteudo.trim() === ""}
            >
              {notaEditandoId ? "Atualizar anotação" : "Salvar anotação"}
            </button>

            {notaEditandoId && (
              <button className="clear-btn" type="button" onClick={cancelarEdicao}>
                Cancelar
              </button>
            )}
          </div>
        </form>

        <section className="panel notes-panel">
          <div className="toolbar">
            <div>
              <h2 className="toolbar-title">Minhas anotações</h2>
              <span className="counter">
                {notas.length} anotaç{notas.length === 1 ? "ão" : "ões"} salva{notas.length === 1 ? "" : "s"}
              </span>
            </div>
            
            {/* Desafio 1: Botão Apagar Tudo */}
            {notas.length > 0 && (
              <button className="delete-btn" type="button" onClick={() => setNotas([])}>
                Apagar tudo
              </button>
            )}
          </div>

          <div className="search-row">
            <input
              className="input"
              type="text"
              placeholder="Buscar nas anotações..."
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
            />

            {busca !== "" && (
              <button className="clear-btn" type="button" onClick={() => setBusca("")}>
                Limpar busca
              </button>
            )}
          </div>

          {notas.length === 0 ? (
            <p className="empty-state">
              Nenhuma anotação ainda. Use o formulário ao lado para criar a primeira.
            </p>
          ) : notasFiltradas.length === 0 ? (
            <p className="empty-state">
              Nenhuma anotação encontrada para "{busca}".
            </p>
          ) : (
            <div className="notes-list">
              {notasFiltradas.map((nota) => {
                // Desafio 3: Verificando se a nota tem menos de 60 segundos (60000 ms)
                const isRecente = Date.now() - new Date(nota.criadaEm).getTime() < 60000;

                return (
                  <article 
                    className={`note-card ${notaEditandoId === nota.id ? "editing" : ""}`} 
                    key={nota.id}
                  >
                    <div className="note-card-header">
                      <div>
                        <h3 className="note-title">
                          {nota.titulo}
                          {isRecente && <span className="badge-new">Criada agora</span>}
                        </h3>
                        <span className="note-date">
                          {new Date(nota.criadaEm).toLocaleString("pt-BR")}
                        </span>
                      </div>

                      <div className="card-actions">
                        <button
                          className="edit-btn"
                          type="button"
                          onClick={() => iniciarEdicao(nota)}
                        >
                          Editar
                        </button>
                        <button
                          className="delete-btn"
                          type="button"
                          onClick={() => removerNota(nota.id)}
                        >
                          Excluir
                        </button>
                      </div>
                    </div>

                    <p className="note-content">{nota.conteudo}</p>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}