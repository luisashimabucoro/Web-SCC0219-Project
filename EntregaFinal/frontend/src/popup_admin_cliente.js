import './styles/popup_editar_cliente.css';
import {atualiza_contas} from './header';
import {useNavigate} from 'react-router-dom';
import React from 'react';
import Footer from './footer';
import {useEffect, useState} from 'react';

function popup_admin_cliente(){

    const navigate = useNavigate();

    const id_cliente = window.location.href.substring(window.location.href.lastIndexOf('?') + 1);
    // const id_cliente = 0;
    // const cliente_atual = JSON.parse(localStorage.getItem(`cliente${id_cliente}`));
    // console.log("cliente atual", cliente_atual);

    const handle_deletar_cliente = async () => {


        console.log("id cliente", id_cliente);

        if(window.confirm("Você tem certeza que deseja remover este cliente?")){
            await fetch("http://localhost:3000/accounts/"+id_cliente, {
                method: "DELETE",                                       
            });
            
            navigate('/admin_clientes')
        }

    }

    useEffect(() =>{
        fetchItems();
    }, []);

    var [cliente_atual, setItems] = useState([]);
    const fetchItems = async () =>{
        const data = await fetch('/accounts/'+id_cliente);
        console.log(data);
        // const items = await data.json();
        var cliente_aatual = await data.json();
        console.log(cliente_aatual);
        setItems(cliente_aatual);
        calcula_cep(cliente_aatual);  
    }

    const [city, setCity] = useState('Não consta');
    const [UF, setUF] = useState('Não consta');
    const [street, setStreet] = useState('Não consta');
    
    const calcula_cep = async (cliente_aatual) =>{
        let cep = cliente_aatual.CEP;

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

    return (
        <div className="parent-editar-cliente">
        <div className="popup_edit-panel">
            <div className="janela_cliente">

                <div className="info_cliente">
                    <p className="titulo_exclusao">Excluir Cliente:</p>
                    <div className="popup_info-text-fields">
                        <p><i>Nome:</i> {cliente_atual.name}</p>
                        <br/>
                        <hr/>
                        <p><i>CEP: </i>{cliente_atual.CEP}</p>
                        <br/>
                        <hr/>
                        <p><i>Estado: </i>{UF}</p>
                        <br/>
                        <hr/>
                        <p><i>Cidade: </i>{city}</p>
                        <br/>
                        <hr/>
                        <p><i>Rua: </i>{street}</p>
                        <br/>

                        <hr/>
                        <p><i>Email: </i>{cliente_atual.email}</p>
                        <br/>

                        <hr/>
                        <p><i>Telefone: </i>{cliente_atual.phone}</p>
                        <br/>
                        <hr/>
                        {cliente_atual.admin == true ? <h1 class="destaque-admin">ADMIN</h1> : null}

                    </div>
                </div>
                <div className="botoes">
                    <div>
                        <a href="admin_clientes">

                        <button href="admin_clientes" id="cancel">Cancelar</button>
                        </a>
                    </div>
                    <div>
                        <button onClick={handle_deletar_cliente} id="delete-cliente">Excluir</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>

    )
}

export default popup_admin_cliente;