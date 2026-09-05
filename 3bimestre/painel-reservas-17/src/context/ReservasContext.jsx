import { createContext, useContext, useState } from "react";
import { atualizarStatusReserva, reservas } from "../data/reservas";

const ReservasContext = createContext(null);

export function ReservasProvider({ children }) {
  const [reservasAtuais, setReservas] = useState(reservas);

  function reservaPorId(id) {
    return reservasAtuais.find((reserva) => reserva.id === id);
  }

  function alterarStatus(id, novoStatus) {
    setReservas((estadoAnterior) =>
      atualizarStatusReserva(estadoAnterior, id, novoStatus)
    );
  }

  return (
    <ReservasContext.Provider
      value={{
        reservas: reservasAtuais,
        reservaPorId,
        alterarStatus,
      }}
    >
      {children}
    </ReservasContext.Provider>
  );
}

export function useReservas() {
  const contexto = useContext(ReservasContext);

  if (!contexto) {
    throw new Error("useReservas deve ser usado dentro de ReservasProvider");
  }

  return contexto;
}