import { Link } from "react-router";
import { salas } from "../data/salas";

export default function Salas() {
  return (
    <main>
      <p className="sobretitulo">Espaços disponíveis</p>
      <h1>Salas de aula</h1>
      <ul className="lista-salas">
        {salas.map((sala) => (
          <li key={sala.id}>
            <div>
              <strong>
                <Link to={`/salas/${sala.id}`}>{sala.nome}</Link>
              </strong>
              <p>
                {sala.bloco} · capacidade para {sala.capacidade} pessoas
              </p>
            </div>
            <Link to={`/salas/${sala.id}`}>Ver agenda →</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}   