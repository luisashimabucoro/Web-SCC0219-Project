
import React from 'react';
import './styles/header.css'
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import {useRef} from 'react';

if(localStorage.getItem('isLogged') == null){
    console.log("resetou")
    localStorage.setItem('isLogged', false);
    // localStorage.setItem('isAdmin', false);
}

function header(){

    const navigate = useNavigate();
    const conta_admin = {login: 'admin', senha: 'admin'};
    const conta_user = {login: 'user', senha: 'user'};
    
    const [isAdmin, isAdminSet]= React.useState(localStorage.getItem('isAdmin'));

    const isLoggedIn = useRef(("true" == localStorage.getItem('isLogged')));
    let minhaurl = window.location.href.substring(window.location.href.lastIndexOf('/'));
    // const [isLoggedIn, isLoggedInSet] = React.useState(localStorage.getItem('isLogged'));

    const handle_login = () => {
        let login = $('#username').val();
        let senha = $('#password').val();
        if(login === conta_admin.login && senha === conta_admin.senha){
            // isLoggedInSet(true);
            console.log("correto");
            isLoggedIn.current = true;
            console.log(isLoggedIn)
            localStorage.setItem('isLogged', true);
            navigate(minhaurl);
        }
        else if(login === conta_user.login && senha === conta_user.senha){
            isLoggedIn.current = true;
            localStorage.setItem('isLogged', true);
            navigate(minhaurl);

        }
        else{
            alert('Login ou senha incorretos');
        }
    }

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
    const toggleLogin = () => {
        isLoggedIn.current = false;

        localStorage.setItem('isLogged', false);
        let minhaurl = window.location.href.substring(window.location.href.lastIndexOf('/'));
        navigate(minhaurl);
    }

    console.log(isLoggedIn);
    console.log("local storage", localStorage.getItem('isLogged'));

    return (
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

                {!isLoggedIn.current ?
                
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
                                <input  onClick={handle_login} type="submit"
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
                 :

                    <li>
                        <a className="carrinho" href="carrinho">Carrinho</a>
                        <a className="logout" onClick={toggleLogin}>Logout</a>
                    </li>
                }
            </ul>
            

            {/* Popup */}
            <div onMouseEnter={trigger_loja_popup} onMouseLeave={trigger_loja_popup_leave} className="loja-popup-content">
               
                <div id="loja-popup">

                    <div>
                        <a href='loja_plantas'><p className="categoria-geral">Plantas</p></a>
                        <a href='loja_plantas_interior'><p className="categoria-especifica">Plantas de Interior</p></a>
                        <a href='loja_plantas_horta'><p className="categoria-especifica">Horta</p></a>
                        <a href='loja_plantas_arvores&amp;arbustos'><p className="categoria-especifica">Árvores e Arbustos</p></a>
                        <a href='loja_plantas_bulbos'><p className="categoria-especifica">Bulbos</p></a>
                    </div>

                    <div>
                        <a href="loja_vasos">
                        <p className="categoria-geral">Vasos</p>
                        </a>
                        <a href="loja_vasos_ceramica" ><p>Cerâmica</p></a>
                        <a href="loja_vasos_plastico"><p>Plástico</p></a>
                    </div>
                    {/* <div> */}
                        {/* <p className="categoria-geral">Adubos</p> */}
                        {/* <p>Fertilizantes Químicos</p> */}
                        {/* <p>Fertilizantes Orgânicos</p> */}
                    {/* </div> */}
                    <div>
                        <a href="loja_outros"><p className="categoria-geral">Outros</p></a>
                        <a href="loja_outros_adubos&amp;fertilizantes"><p>Adubos & Fertilizantes</p></a>
                        <a href="loja_outros_equipamentos"><p>Equipamentos</p></a>
                    </div>
                </div>
        </div>
            {/* Popup */}
        </div>
    )
}

export default header;