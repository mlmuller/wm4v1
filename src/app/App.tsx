import { Routes } from "./routes";
import { UsuarioLogadoProvedor } from "./shared/contexts";

export const  App = () => {
  return (
    <div className="App">
      <UsuarioLogadoProvedor>
       <Routes />
      </UsuarioLogadoProvedor>
    </div>
  );
}

