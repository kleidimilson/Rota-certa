import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Chatbot from './pages/Chatbot/chatbot';
import Login from './pages/Login/login';
import Cadastro from './pages/Cadastro/cadastro';
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact/>
                <Route path="/chatbot" component={Chatbot} />
                <Route path="/cadastro" component={Cadastro} />

       
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

