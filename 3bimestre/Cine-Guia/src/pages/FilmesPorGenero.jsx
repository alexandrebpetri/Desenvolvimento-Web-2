import { Link, useParams } from "react-router";
import CartaoFilme from "../components/CartaoFilme";
import { filmes } from "../data/filmes";

export default function FilmesPorGenero() {
  const { genero } = useParams();
  const generoNome = decodeURIComponent(genero);

  const filmesFiltrados = filmes.filter(
    (item) => item.genero.toLowerCase() === generoNome.toLowerCase()
  );

  return (
    <main>
      <h1>Gênero: {generoNome}</h1>

      {filmesFiltrados.length === 0 ? (
        <div>
          <p>Não existem filmes cadastrados para o gênero “{generoNome}”.</p>
          <Link to="/filmes">Voltar para a lista geral</Link>
        </div>
      ) : (
        <>
          <p>Exibindo {filmesFiltrados.length} filme(s) pertencente(s) a este gênero.</p>
          <section className="lista-filmes" aria-label={`Filmes de ${generoNome}`}>
            {filmesFiltrados.map((filme) => (
              <CartaoFilme key={filme.id} filme={filme} />
            ))}
          </section>
        </>
      )}
    </main>
  );
}