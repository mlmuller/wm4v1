import { useRef } from "react";
import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";


export const Dashboard = () =>{

    const counterRef = useRef({counter : 0 })
    const usuarioLogadoContext = useUsuarioLogado();
    return(
    <div>
        <p>Dashboard</p>
        <p>{usuarioLogadoContext.nomeDoUsuario}</p>

        <p>Contador: {counterRef.current.counter}</p>

        <button onClick={() => counterRef.current.counter++}>Somar</button>

        <Link to={"/Entrar"}>Login</Link>
    </div>

    );
}