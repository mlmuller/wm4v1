import { useCallback, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { useUsuarioLogado } from "../../shared/hooks";

export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const {nomeDoUsuario} = useUsuarioLogado();
    
    const [password,setPassword] = useState('');
    
    const [email,setEmail] = useState('');

    const emaillength = useMemo(()=>{
        return email.length*1000;
    },[email.length])

    const handleEntrar = useCallback(() =>{
        console.log(email);
        console.log(password);
           if (inputPasswordRef != null){
                inputPasswordRef.current?.focus()
            }
    },[email, password]);

 
    return(

        <div>
            <form>
                <p>Quantidade de caracteres informado:{emaillength}</p>
                <InputLogin 
                label="Email"
                value={email}
                onChange={newValor => setEmail(newValor)}
                onPressEnter={()=>inputPasswordRef.current?.focus()}/>
               
                <InputLogin
                label="Senha" 
                type="password"
                value={password}
                ref={inputPasswordRef}
                onChange={newValue => setPassword(newValue)}/>

                {/* <button type="button" onClick={handleEntrar}>
                    Entrar
                </button> */}

                <ButtonLogin type="button" onClick={handleEntrar}> 
                    Entrar
                </ButtonLogin>
                <ButtonLogin type="button" onClick={handleEntrar}>
                    Cadastrar
                </ButtonLogin> 
                
         </form>
        </div>
    );
}