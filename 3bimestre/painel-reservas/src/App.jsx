import { useState } from "react";
import { Route, Routes } from "react-router";
import Cabecalho from "./components/Cabecalho";
import { reservas as reservasIniciais } from "./data/reservas";
import DetalheReserva from "./pages/DetalheReserva";
import DetalheSala from "./pages/DetalheSala";
import Inicio from "./pages/Inicio";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import Reservas from "./pages/Reservas";
import Salas from "./pages/Salas";

export default function App() {
  const [reservasAtuais, setReservasAtuais] = useState(reservasIniciais);

  function mudarStatus(id, novoStatus) {
    setReservasAtuais((estadoAnterior) =>
      estadoAnterior.map((reserva) =>
        reserva.id === id ? { ...reserva, status: novoStatus } : reserva
      )
    );
  }

  return (
    <>
      <Cabecalho reservas={reservasAtuais} />

      <Routes>
        <Route path="/" element={<Inicio reservas={reservasAtuais} />} />
        <Route
          path="/reservas"
          element={
            <Reservas
              reservas={reservasAtuais}
              onAlterarStatus={mudarStatus}
            />
          }
        />
        <Route
          path="/reservas/:id"
          element={
            <DetalheReserva
              reservas={reservasAtuais}
              onAlterarStatus={mudarStatus}
            />
          }
        />
        <Route path="/salas" element={<Salas />} />
        <Route
          path="/salas/:id"
          element={
            <DetalheSala
              reservas={reservasAtuais}
              onAlterarStatus={mudarStatus}
            />
          }
        />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </>
  );
}