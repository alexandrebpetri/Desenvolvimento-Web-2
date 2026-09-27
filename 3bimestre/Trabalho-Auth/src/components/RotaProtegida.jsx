import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RotaProtegida() {
  const { usuario, carregando } = useAuth();

  // Exibe tela de carregamento enquanto o estado da sessão é resolvido pelo Supabase
  if (carregando) {
    return (
      <div className="status-carregando">
        <p>Verificando autenticação...</p>
      </div>
    );
  }

  // Se não estiver autenticado, redireciona para a página de login
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  // Se estiver autenticado, exibe a rota filha (página restrita)
  return <Outlet />;
}