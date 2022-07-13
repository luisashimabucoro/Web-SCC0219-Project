import './styles/popup_visualizar_compra.css';
import {atualiza_contas} from './header';
import {useNavigate} from 'react-router-dom';
import React from 'react';
import Footer from './footer';
import {useEffect, useState} from 'react';

function popup_admin_cliente(){

    const navigate = useNavigate();

    // const id_cliente = window.location.href.substring(window.location.href.lastIndexOf('?') + 1);
    const id_cliente = window.location.href.substring(window.location.href.lastIndexOf('?') - 1);
    let idAtual = id_cliente.split('?')[0];
    let idCompraAtual = id_cliente.split('?')[1];
    console.log(idAtual);
    console.log(idCompraAtual);
    console.log("id_cliente:", id_cliente);
    // const id_cliente = 0;
    // const cliente_atual = JSON.parse(localStorage.getItem(`cliente${id_cliente}`));
    // console.log("cliente atual", cliente_atual);

    
    useEffect(() =>{
        fetchItems();
    }, []);

    var [cliente_atual, setItems] = useState([]);
    var [cliente_comprador, set_cliente_comprador] = useState([]);
    var [produto, setProduto] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('/compras/'+idAtual);
        console.log(data);
        // const items = await data.json();
        var cliente_aatual = await data.json();
        console.log("cliente atual:", cliente_aatual);
        console.log(cliente_aatual[idCompraAtual]);
        console.log(cliente_aatual[0].produto[0].name);
        setProduto(cliente_aatual[idCompraAtual].produto[0]);
        setItems(cliente_aatual[idCompraAtual]);
        calcula_cep(cliente_aatual[idCompraAtual]);  
        let new_cliente_comprador = await fetch('http://localhost:3000/accounts/'+idAtual);
        new_cliente_comprador = await new_cliente_comprador.json();
        set_cliente_comprador(new_cliente_comprador);
    }

    const [city, setCity] = useState('Não consta');
    const [UF, setUF] = useState('Não consta');
    const [street, setStreet] = useState('Não consta');
    
    const calcula_cep = async (cliente_aatual) =>{
        let cep = cliente_aatual.cep;
        console.log(cliente_aatual);
        console.log(cep);

        let url = `https://viacep.com.br/ws/${cep}/json/`;
        let response = await fetch(url)
        .then(response => response.json())
        .catch( (e) =>{
            console.log(e);
            return;
        });
        console.log(response);
        // let data = await response.json();
        if(response != undefined){
            if(response.erro){
                console.log("CEP não encontrado");
                return;
            }
            console.log(response);
            console.log("nao eh undefined!!")
            setCity(response.localidade);
            setUF(response.uf);
            setStreet(response.logradouro);
        }
    }

    console.log(produto);
    console.log(cliente_atual);
    console.log(cliente_comprador);
    return (

        <div className="parent-editar-cliente">
            <div className="popup_edit-panel">
                <div className="janela_compra">

                    <div className="info_compra">
                        <p className="titulo_info_comprador">Informações do Comprador:</p>
                        <div className="popup_info-comprador">
                            <p><i>Comprador:</i> {cliente_atual.name}</p>
                            <br/>
                            <hr/>
                            <p><i>E-mail do comprador:</i> {cliente_atual.email}</p>
                            <br/>
                            <hr/>
                            <p><i>Telefone: </i>{cliente_comprador.phone}</p>
                            <br/>
                            <hr/>
                            <p><i>Estado: </i>{UF}</p>
                            <br/>
                            <hr/>
                            <p><i>Cidade: </i>{city}</p>
                            <br/>
                            <hr/>
                            <p><i>Rua: </i>{cliente_atual.endereco}</p>
                            <br/>
                            <hr/>

                        </div>
                        <p className="titulo_info_compra">Informações da Compra:</p>
                        <div className="popup_info-compra">
                            <p><i>Produto: </i>{produto.name}</p>
                            <br/>
                            <hr/>
                            <p><i>Quantidade: </i>{produto.quantity}</p>
                            <br/>
                            <hr/>
                            <p><i>Valor Total: </i>R${cliente_atual.preco}</p>
                            <br/>
                            <hr/>
                            
                            {cliente_atual.admin == true ? <h1 class="destaque-admin">ADMIN</h1> : null}
                        </div>
                    </div>
                    <div className="botoes">
                        <div>
                            <a href="lista_compras">
                            <button href="lista_compras" id="cancel">Voltar</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </div>

    )
}

export default popup_admin_cliente;