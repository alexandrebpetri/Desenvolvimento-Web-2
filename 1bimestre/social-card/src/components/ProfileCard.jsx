export const ProfileCard = ({ name, role, status, isVerified, bio }) => {
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`;

  return (
    <div className={`card ${status}`}>
      <div className="card-header">
        <img src={avatarUrl} alt={`Avatar de ${name}`} className="avatar" />
        <span className="status-badge" title={`Status: ${status}`}></span>
      </div>

      <div className="card-body">
        <h3>
          {name}
          {isVerified && <span className="verified-icon">✔</span>}
        </h3>

        <p className="role-chip">{role}</p>

        <p className="status-text">
          {status === "online" ? "🟢 Ativo agora" : "🔴 Ausente"}
        </p>

        <p className="bio-text">
          {bio ?? "Este usuário ainda não escreveu uma bio."}
        </p>
      </div>

      <button className="connect-btn">
        {status === "online" ? "Conectar" : "Enviar E-mail"}
      </button>
    </div>
  );
};