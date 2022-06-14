
import React from 'react';

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

  
function header(){
    return (
        <div className="barra_superior">
                <a className="botoes_barra" id="loja" href="loja">Loja</a>
                <a className="botoes_barra" href="#busca_personalizada">Busca Personalizada</a>
                <a className="botoes_barra" id="sobre" href="sobre">Sobre</a>
                <a  className="botoes_barra" id="home" href="home">
                    Home
                </a>
                <input type="text" className="botoes_barraDIR buscar" placeholder="Buscar"/>
                <a className="botoes_barraDIR" href="#login">Login</a>
                <a className="carrinho" href="#carrinho">Carrinho</a>
        </div>
    )
}

export default header;