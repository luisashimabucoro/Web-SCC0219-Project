
import React from 'react';
import './styles/header.css'
import $ from 'jquery';
  
function header(){

    $('#login-trigger').click(function(){
        $(this).next('.login-content').slideToggle(0);
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
        else $(this).find('span').html('&#x25BC;')
    })
    
    const trigger_login = () => {
        console.log("trigou")
        $('#login-trigger').next('.login-content').slideToggle(0);
        $('#login-trigger').toggleClass('active');

        if ($('#login-trigger').hasClass('active')) $('#login-trigger').find('span').html('&#x25B2;')
        else $('#login-trigger').find('span').html('&#x25BC;')
    }

    return (
        // <div className="barra_superior">
        //         <a className="botoes_barra" id="loja" href="loja">Loja</a>
        //         <a className="botoes_barra" href="#busca_personalizada">Busca Personalizada</a>
        //         <a className="botoes_barra" id="sobre" href="sobre">Sobre</a>
        //         <a  className="botoes_barra" id="home" href="home">
        //             Home
        //         </a>
        //         <input type="text" className="botoes_barraDIR buscar" placeholder="Buscar"/>
        //         <a className="botoes_barraDIR" href="#login">Login</a>
        //         <a className="carrinho" href="carrinho">Carrinho</a>
        // </div>
        <div className="barra_superior">
            <ul>
                <li>
                    <a className="botoes_barra" id="loja" href="loja">Loja</a>
                </li>
                <li>
                    <a className="botoes_barra" href="#busca_personalizada">Busca Personalizada</a>
                </li>
                <li>
                    <a className="botoes_barra" id="sobre" href="sobre">Sobre</a>
                </li>
                <li>
                    <a className="botoes_barra" id="home" href="home">
                        Home
                        {/* <img src="images/logo_fundo_branco.png" style="width: 133px; height: 103px; margin-left: 10%;"/> */}
                    </a>
                </li>
                <li>
                    <input type="text" className="botoes_barraDIR buscar" placeholder="Buscar"/>
                </li>
                <li id="login">
                    <a onClick={trigger_login} className="botoes_barraDIR" id="login-trigger" href="#">Login <span>▼</span></a>
                    <div className="login-content" id="login-popup">
                        <form>
                          <fieldset id="inputs">
                            <input  id="username"
                                    type="email"
                                    name="E-mail"
                                    placeholder="Email"
                                    required/>
                            <input  id="password"
                                    type="password"
                                    name="Password"
                                    placeholder="Senha"
                                    required/>
                          </fieldset>
                          <fieldset id="actions">
                            <input  type="submit"
                                    id="submit"
                                    value="Login"/>
                            <p id="legenda-cadastro"> Não tenho conta ainda</p>
                            <input  type="submit"
                            id="submit"
                            value="Cadastre-se"/>
                          </fieldset>
                        </form>
                    </div>
                </li>
                <li>
                    <a className="carrinho" href="carrinho">Carrinho</a>
                </li>
            </ul>
        </div>
    )
}

export default header;