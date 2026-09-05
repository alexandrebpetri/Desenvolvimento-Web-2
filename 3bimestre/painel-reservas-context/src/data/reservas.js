export const reservas = [
  {
    id: "res-01",
    turma: "DW2 — 2º período",
    sala: "Sala 101",
    salaId: "sala-101",
    horario: "08:00 — 09:40",
    status: "confirmada",
  },
  {
    id: "res-02",
    turma: "Estrutura de Dados — 4º período",
    sala: "Sala 101",
    salaId: "sala-101",
    horario: "10:00 — 11:40",
    status: "confirmada",
  },
  {
    id: "res-03",
    turma: "ADS — 3º período",
    sala: "Sala 204",
    salaId: "sala-204",
    horario: "13:30 — 15:10",
    status: "em andamento",
  },
  {
    id: "res-04",
    turma: "Redes — 5º período",
    sala: "Sala 302",
    salaId: "sala-302",
    horario: "19:00 — 20:40",
    status: "confirmada",
  },
];

export function atualizarStatusReserva(lista, id, novoStatus) {
  return lista.map((item) =>
    item.id === id ? { ...item, status: novoStatus } : item
  );
}