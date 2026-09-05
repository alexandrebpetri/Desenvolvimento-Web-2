import { Link, useParams } from "react-router";
import ListaReservas from "../components/ListaReservas";
import { useReservas } from "../context/ReservasContext";
import { salas } from "../data/salas";

export default function DetalheSala() {
  const { id } = useParams();
  const { reservas } = useReservas();
  const sala = salas.find((item) => item.id === id);

  if (!sala) {
    return (
      <main>
        <Link to="/salas" className="botao-voltar">
          ← Voltar para salas
        </Link>
        <h1>Sala não encontrada</h1>
        <p>Não existe uma sala com o identificador "{id}".</p>
      </main>
    );
  }

  const reservasDaSala = reservas.filter((item) => item.salaId === sala.id);

  return (
    <main>
      <Link to="/salas" className="botao-voltar">
        ← Voltar para salas
      </Link>
      <p className="sobretitulo">{sala.bloco}</p>
      <h1>{sala.nome}</h1>
      <p>Capacidade para {sala.capacidade} pessoas.</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Reservas desta sala</h2>
        {reservasDaSala.length === 0 ? (
          <p>Esta sala não possui nenhuma reserva agendada no momento.</p>
        ) : (
          <ListaReservas reservas={reservasDaSala} />
        )}
      </section>
    </main>
  );
}