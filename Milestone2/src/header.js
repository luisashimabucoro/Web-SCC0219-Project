
import React from 'react';
import './styles/header.css'
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

function header(){

    const navigate = useNavigate();

    const trigger_login = () => {
        console.log("trigou")
        $('#login-trigger').next('.login-content').slideToggle(0);
        $('#login-trigger').toggleClass('active');

        if ($('#login-trigger').hasClass('active')) $('#login-trigger').find('span').html('&#x25B2;')
        else $('#login-trigger').find('span').html('&#x25BC;')
    }

    
    const trigger_loja_popup = () => {
        $('.loja-popup-content').show()
    }

    const trigger_loja_popup_leave = () => {
        $('.loja-popup-content').hide()
    }

    const handleKeyPress= (e) =>{
        if (e.key === 'Enter') {
            let busca = $('.buscar').val();
            console.log("enter");
            navigate(`/loja_busca`);
            window.location.reload()
            localStorage.setItem('busca', busca.toLowerCase());
        }
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
                    <a onMouseEnter={trigger_loja_popup} onMouseLeave={trigger_loja_popup_leave}  className="botoes_barra" id="loja" href="loja">Loja</a>
                </li>
                <li>
                    <a className="botoes_barra" href="#busca_personalizada">Busca Personalizada</a>
                </li>
                <li>
                    <a className="botoes_barra" id="sobre" href="sobre">Sobre</a>
                </li>
                <li>
                    <a className="botoes_barra" id="home" href="home">
                        {/* Home */}
                        {/* <img src="images/logo_fundo_branco.png" style="width: 133px; height: 103px; margin-left: 10%;"/> */}
                    </a>
                </li>
                <li>
                    <input onKeyUp={handleKeyPress.bind(this)} type="text" className="botoes_barraDIR buscar" placeholder="Buscar"/>
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
            

            {/* Popup */}
            <div onMouseEnter={trigger_loja_popup} onMouseLeave={trigger_loja_popup_leave} className="loja-popup-content">
                <div id="loja-popup">

                    <div>
                        <a href='loja_plantas'>
                        <p className="categoria-geral">Plantas</p>
                        </a>
                        {/* <p>Plantas de Interior</p> */}
                        {/* <p>Suculentas</p> */}
                        {/* <p>Plantas perenes</p> */}
                        {/* <p>Árvores & arbustos</p> */}
                        {/* <p>Ervas & vegetais</p> */}
                        {/* <p>Plantas frutíferas</p> */}
                    </div>
                    <div>
                        <a href="loja_bulbos">
                        <p className="categoria-geral">Bulbos</p>
                        </a>
                        {/* <p>De outono</p> */}
                        {/* <p>De primavera</p> */}
                        {/* <p>De interior</p> */}
                    </div>
                    <div>
                        <a href="loja_vasos">
                        <p className="categoria-geral">Vasos</p>
                        </a>
                        {/* <p>Cerâmica</p> */}
                        {/* <p>Plástico</p> */}
                        {/* <p>Autoirrigáveis</p> */}
                    </div>
                    {/* <div> */}
                        {/* <p className="categoria-geral">Adubos</p> */}
                        {/* <p>Fertilizantes Químicos</p> */}
                        {/* <p>Fertilizantes Orgânicos</p> */}
                    {/* </div> */}
                    <div>
                        <a href="loja_equipamentos">
                        <p className="categoria-geral">Equipamentos</p>
                        </a>
                        {/* <p>Interior</p> */}
                        {/* <p>Exterior</p> */}
                    </div>
                </div>
        </div>
            {/* Popup */}
        </div>
    )
}

export default header;