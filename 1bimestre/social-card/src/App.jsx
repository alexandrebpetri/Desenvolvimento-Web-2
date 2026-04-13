// src/App.jsx

import { ProfileCard } from './components/ProfileCard';
import './App.css';

export default function App() {
  const profiles = [
    {
      id: 1,
      name: "Mateus Silva",
      role: "Dev Front-end",
      status: "online",
      isVerified: true,
      bio: "Apaixonado por React e CSS moderno."
    },
    {
      id: 2,
      name: "Julia Santos",
      role: "UX Designer",
      status: "offline",
      isVerified: false
    },
    {
      id: 3,
      name: "Bruno Costa",
      role: "Engenheiro de Dados",
      status: "online",
      isVerified: true,
      bio: "Transformando dados brutos em decisões inteligentes."
    },
    {
      id: 4,
      name: "Aline Rocha",
      role: "Product Manager",
      status: "online",
      isVerified: false,
      bio: "Organizando o caos para entregar valor."
    },
    {
      id: 5,
      name: "Ricardo Dias",
      role: "Dev Back-end",
      status: "offline",
      isVerified: true
    },
    {
      id: 6,
      name: "Xandoka09",
      role: "Iron 3 on Valorant",
      status: "online",
      isVerified: false,
      bio: "mono Breach."
    }
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Minha Rede de Contatos</h1>
        <p>Conectando talentos no universo tech</p>
      </header>

      <div className="cards-grid">
        {profiles.map((user) => (
          <ProfileCard
            key={user.id}
            name={user.name}
            role={user.role}
            status={user.status}
            isVerified={user.isVerified}
            bio={user.bio}
          />
        ))}
      </div>
    </div>
  );
}