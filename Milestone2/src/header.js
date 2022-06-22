
import React from 'react';
import './styles/header.css'
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import {useRef} from 'react';
import {useState} from 'react';

class Conta{
    constructor(nome_usuario, senha, email, telefone){
        this.id = localStorage.getItem('qtdClientes');
        this.nome_usuario = nome_usuario;
        this.senha = senha;
        this.email = email;
        this.telefone = telefone;
    }
}

var lista_contas = [
    
]

function atualiza_contas(){
    for(let i = 0; i < 10; i++){
        try{
            if(localStorage.getItem(`cliente${i}`)){
                lista_contas[i] = JSON.parse(localStorage.getItem(`cliente${i}`));
            }
        }catch(e){
            console.log(e);
        }
    }
    lista_contas = lista_contas.filter(conta => {return conta != null;});
}

atualiza_contas();


if(localStorage.getItem('serverON') == null){
    console.log("iniciando")
    localStorage.setItem('isLogged', false);
    localStorage.setItem('isAdmin', false);
    localStorage.setItem('clienteAtivo', null);
    localStorage.setItem('qtdClientes', 0);
    localStorage.setItem('serverON', true);
    localStorage.setItem('janela_editar', false);
    localStorage.setItem('ordenacao_produtos', "padrao");


}

function header(){

    const navigate = useNavigate();

    console.log(localStorage.getItem('qtdClientes'));
    console.log("cliente0:", localStorage.getItem('cliente0'));
    console.log("cliente1:", localStorage.getItem('cliente1'));
    console.log("cliente2:", localStorage.getItem('cliente2'));
    console.log("lista contas:", lista_contas);

    let lista_admins = [
        {login: 'admin@web.com', senha: 'admin'},
        {login: 'admin2@web.com', senha: 'admin2'},
    ]
        
    const isAdmin = useRef(("true" == localStorage.getItem('isAdmin')));
    const isLoggedIn = useRef(("true" == localStorage.getItem('isLogged')));


    let minhaurl = window.location.href.substring(window.location.href.lastIndexOf('/'));

    const handle_login = () => {
        atualiza_contas();
        console.log(lista_contas);
        console.log($('#username').val());
        let login = $('#username').val();
        let senha = $('#password').val();

        for(let i = 0; i < lista_admins.length; i++){
            if(login === lista_admins[i].login && senha === lista_admins[i].senha){
                localStorage.setItem('isLogged', true);
                localStorage.setItem('isAdmin', true);
                isLoggedIn.current = true;
                isAdmin.current = true;
                // navigate(minhaurl);
                return;
            }
        }
        
        for (let i = 0; i < lista_contas.length; i++) {
            if(login === lista_contas[i].email && senha === lista_contas[i].senha){
                localStorage.setItem('isLogged', true);
                localStorage.setItem('isAdmin', false);
                localStorage.setItem('clienteAtivo', `cliente?${i}`);
                localStorage.setItem('id_cliente_ativo', i);
                // localStorage.setItem(`cliente${localStorage.getItem('qtdClientes')}`, JSON.stringify(lista_contas[i]));
                // localStorage.setItem('qtdClientes', parseInt(localStorage.getItem('qtdClientes')) + 1);

                isLoggedIn.current = true;
                isAdmin.current = false;
                // navigate(minhaurl);
                return;
            }
        }
        alert('Login ou senha incorretos');
    }

    const trigger_cadastro = () =>{
        $('#cadastro-popup').show();

    }



    const handle_cadastro = () => {
        if(document.getElementById('cadastro_email').checkValidity()) {

            if ($('#cadastro_senha').val() === $('#confirma_senha').val()){

                if ($('#cadastro_senha').val().length < 8){
                    alert("A senha deve ter no mínimo 8 caracteres!")
                    return;
                }
                if (lista_contas.some(conta => conta.email === $('#cadastro_email').val())){
                    alert('Email já cadastrado');
                    return;
                }
                console.log("entrou");
                let nova_conta = new Conta(
                    $('#cadastro_nome').val(),
                    $('#cadastro_senha').val(),
                    $('#cadastro_email').val(),
                    $('#cadastro_telefone').val()
                );
                
                console.log("nova conta", nova_conta)
                // lista_contas.push(nova_conta);
                localStorage.setItem(`cliente${localStorage.getItem('qtdClientes')}`, JSON.stringify(nova_conta));
                localStorage.setItem('qtdClientes', parseInt(localStorage.getItem('qtdClientes')) + 1);
                localStorage.setItem('isLogged', true);
                localStorage.setItem('isAdmin', false);
                isLoggedIn.current = true;
                isAdmin.current = false;
                atualiza_contas();
                console.log(lista_contas)
                localStorage.setItem('clienteAtivo', `cliente?${localStorage.getItem('qtdClientes') - 1}`);
                console.log("ativou cliente");
                localStorage.setItem(`numero_compras_cliente${localStorage.getItem('qtdClientes')-1}`,0);
                console.log("numero compras cliente novo:", localStorage.getItem(`numero_compras_clientes${localStorage.getItem('qtdClientes')-1}`));
                localStorage.setItem('id_cliente_ativo', localStorage.getItem('qtdClientes'));
                
                // navigate('home');
            }else{
                alert('Senhas não conferem');
            }
        }else{
            alert("Email inválido!")
        }
    }

    const trigger_login = () => {
        console.log("trigou")
        $('#login-trigger').next('.login-content').slideToggle(0);
        $('#login-trigger').toggleClass('active');
        $('#cadastro-popup').hide();

        if ($('#login-trigger').hasClass('active')){
            $('#login-trigger').find('span').html('&#x25B2;')
        } 
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
            localStorage.setItem('busca', busca.toLowerCase());
            console.log("enter");
            navigate(`/loja_busca`);
            window.location.reload()
        }
    }
    const toggleLogin = () => {
        isLoggedIn.current = false;

        localStorage.setItem('preco_total', 0);
        localStorage.setItem('quantidade_no_carrinho', 0);
        for(let i = 0; i < 20; i++){
            localStorage.removeItem(`carrinho_produto${i}`);  
        }
        localStorage.setItem('isLogged', false);
        navigate('home');
    }

        // console.log(isLoggedIn);
    console.log("local storage", localStorage.getItem('isLogged'));

    return (
        <div className="barra_superior">
            <ul>
                <li>
                    <a onMouseEnter={trigger_loja_popup} onMouseLeave={trigger_loja_popup_leave}  className="botoes_barra" id="loja" href="loja">Loja</a>
                </li>
                <li>
                    <a className="botoes_barra" href="busca_personalizada">Busca Personalizada</a>
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
                <div>
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
                                <input onClick={trigger_cadastro} type="submit"
                                id="submit"
                                value="Cadastre-se"/>
                            </fieldset>
                            </form>
                        </div>
                    </li>

                    <li id="cadastro">
                        <div className="login-content" id="cadastro-popup">
                            <form id="form_cadastro">
                            <fieldset id="inputs">
                            <input  id="cadastro_nome"
                            type="text"
                            name="Nome"
                            placeholder="Nome"
                            required/>
                            <input  id="cadastro_email"
                                    type="email"
                                    name="E-mail"
                                    placeholder="Email"
                                    required/>
                            <input  id="cadastro_senha"
                                    type="password"
                                    name="Password"
                                    placeholder="Senha"
                                    required/>
                            <input  id="confirma_senha"
                            type="password"
                            name="Confirm Password"
                            placeholder="Confirme sua senha"
                            required/>
                            <input  id="cadastro_telefone"
                            type="tel"
                            name="Telefone"
                            placeholder="Telefone"
                            required/>
                          </fieldset>
                          <fieldset id="actions">
                            <input onClick={handle_cadastro} type="submit"
                                    id="submit"
                                    value="Cadastrar"/>
                          </fieldset>
                            </form>
                        </div>
                    </li>
                    </div>
                 : 
                    isAdmin.current ?
                   <li>
                        <a className="carrinho adminCliente" href="admin_clientes">Clientes</a>
                        <a className="carrinho adminProdutos" href="admin_products">Produtos</a>
                        <a className="carrinho adminCompras" href="lista_compras">Compras</a>
                        <a className="logout" onClick={toggleLogin}>Logout</a>
                   </li>
                    : 
                    <li>
                        <a className="carrinho pedidos" href="meus_pedidos">Meus Pedidos</a>
                        <a className="carrinho" href="carrinho">
                        <img id="cesta_carrinho" src={require('./button_images/cesta.png')} alt="Carrinho" />
                        </a>
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
export {atualiza_contas};
