import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';
function Login() {
    return (
        <>
            <main>
               
                <div className="formulario">
                    <h2>Acesse sua conta</h2>
                    <form>
                        <input type="text" placeholder="Digite seu email"/>
                        <input type="password" placeholder="Digite sua senha"/>
                        <Link to="/chatbot" className="btn">Entrar</Link>
                        <Link to="/cadastro" className="criar-conta">Criar Conta</Link>
                    </form>
                </div>
            </main>
        </>
    )
}
export default Login;