import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RotaProtegida from "./components/RotaProtegida";
import { AuthProvider } from "./context/AuthContext";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Restrita from "./pages/Restrita";
import "./App.css";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <main className="conteudo-principal">
          <Routes>
            {/* Rotas Públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />

            {/* Rota Restrita Protegida */}
            <Route element={<RotaProtegida />}>
              <Route path="/restrita" element={<Restrita />} />
            </Route>

            {/* Redirecionamento padrão para rotas não encontradas */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}