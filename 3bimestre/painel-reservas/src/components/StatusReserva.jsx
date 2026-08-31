export default function StatusReserva({ status }) {
  let classe = "status--confirmada";

  if (status === "em andamento") {
    classe = "status--andamento";
  } else if (status === "concluida") {
    classe = "status--concluida";
  }

  return <span className={`status ${classe}`}>{status}</span>;
}