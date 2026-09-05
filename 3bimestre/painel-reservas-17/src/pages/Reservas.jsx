import ListaReservas from "../components/ListaReservas";
import { useReservas } from "../context/ReservasContext";

export default function Reservas() {
  const { reservas } = useReservas();

  return (
    <main>
      <p className="sobretitulo">Agenda do dia</p>
      <h1>Reservas</h1>
      <ListaReservas reservas={reservas} />
    </main>
  );
}