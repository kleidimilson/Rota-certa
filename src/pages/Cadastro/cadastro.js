import React from 'react';
import {Link} from 'react-router-dom';
import './cadastro.css';
function Cadastro() {
    return (
        <>
            <main>
               
                <div className="formulario">
                    <h2>Fazer cadastro</h2>
                    <form>
                        <input type="text" placeholder="Digite seu nome"/>
                        <input type="text" placeholder="Digite seu email"/>
                        <input type="password" placeholder="Digite sua senha"/>
                        <Link to="/chatbot" className="btn">Cadastrar</Link>
                        
                    </form>
                </div>
            </main>
        </>
    )
}
export default Cadastro;