import { Route, Routes } from "react-router";
import Cabecalho from "./components/Cabecalho";
import { ReservasProvider } from "./context/ReservasContext";
import DetalheReserva from "./pages/DetalheReserva";
import DetalheSala from "./pages/DetalheSala";
import Inicio from "./pages/Inicio";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import Reservas from "./pages/Reservas";
import Salas from "./pages/Salas";

export default function App() {
  return (
    <ReservasProvider>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/reservas/:id" element={<DetalheReserva />} />
        <Route path="/salas" element={<Salas />} />
        <Route path="/salas/:id" element={<DetalheSala />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </ReservasProvider>
  );
}