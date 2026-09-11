import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import "./App.css";

export default function App() {
  // 1. Estados da aplicação
  const [recados, setRecados] = useState([]);         
  const [carregando, setCarregando] = useState(true); 
  const [erro, setErro] = useState("");               

  // 2. Efeito de busca de dados na inicialização
  useEffect(() => {
    async function buscarRecados() {
      try {
        const { data, error } = await supabase
          .from("recados") 
          .select("*")
          .order("data_criacao", { ascending: false }); 

        if (error) {
          throw new Error(error.message);
        }

        setRecados(data);
      } catch (e) {
        setErro("Não foi possível conectar ao banco de dados.");
        console.error("Detalhes do erro:", e);
      } finally {
        setCarregando(false);
      }
    }

    buscarRecados();
  }, []);

  // Exercício 1: Cálculo dinâmico do texto do contador
  const textoContador =
    recados.length === 0
      ? "Nenhuma mensagem cadastrada"
      : `Mostrando ${recados.length} ${
          recados.length === 1 ? "recado cadastrado" : "recados cadastrados"
        }`;

  return (
    <main className="container">
      <h1>Mural de Recados</h1>

      {!carregando && !erro && (
        <p className="contador-recados">{textoContador}</p>
      )}

      {carregando && <p>Buscando mensagens no Supabase...</p>}
      {erro && <p className="erro">{erro}</p>}
      {!carregando && !erro && recados.length === 0 && (
        <p>O mural está vazio no momento. Seja o primeiro a postar!</p>
      )}

      {!carregando && !erro && recados.length > 0 && (
        <ul className="lista-recados">
          {recados.map((recado) => (
            <li key={recado.id} className="cartao-recado">
              <strong>{recado.autor} diz:</strong>
              <p>{recado.mensagem}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}