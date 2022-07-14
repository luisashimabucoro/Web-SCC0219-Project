import './styles/editar_produto.css';
import $ from 'jquery';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Footer from './footer';

function editar_produto(){
    
    var id_cliente_ativo = localStorage.getItem('id_cliente_ativo');
    console.log(id_cliente_ativo);
    var eh_admin = localStorage.getItem('isAdmin');
    
    useEffect(() =>{
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const fetchItems = async () =>{
            const data = await fetch('http://localhost:3000/accounts/'+id_cliente_ativo);
            console.log(data);
            let itemss = await data.json();
            console.log(itemss);
            setItems(itemss);
        };


    const fazCadastro = async (event) => {

        event.preventDefault();
        if(document.getElementById('cadastro_email').checkValidity()) {

            if ($('#cadastro_senha').val() === $('#confirma_senha').val()){

                if ($('#cadastro_senha').val().length < 8){
                    alert("A senha deve ter no mínimo 8 caracteres!")
                    return;
                }
                console.log("entrou no cadastro!");

                let conta_atual = await fetch('http://localhost:3000/accounts/' + id_cliente_ativo);
                conta_atual = await conta_atual.json();
                console.log(conta_atual);
                conta_atual.name = $('#cadastro_nome').val();
                conta_atual.email = $('#cadastro_email').val();
                conta_atual.password = $('#cadastro_senha').val();
                conta_atual.phone = $('#cadastro_telefone').val();
                conta_atual.cep = $('#cadastro_cep').val();

                console.log(conta_atual);
               
                await fetch(
                    "http://localhost:3000/accounts/" + id_cliente_ativo,
                    {
                        method: "PUT",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(conta_atual),
                    }
                );
                alert("Cadastro realizado com sucesso!");
                return;
            }
            alert("Senhas não conferem!")
        }
        
    }

    return (
        <div className="parent-editar-info-cliente">
            <div className="painel-editar-info-cliente">
            <h1 id="editar-perfil-titulo">Editar Perfil</h1>
            <form id="form_cadastro">
                            <fieldset id="inputs">
                            <input defaultValue={items.name} autoComplete="new-password" id="cadastro_nome"
                            type="text"
                            name="Nome"
                            placeholder="Nome"
                            required/>
                            <input defaultValue={items.email}  autoComplete="new-password" id="cadastro_email"
                                    type="email"
                                    name="E-mail"
                                    placeholder="Email"
                                    required/>
                                    
                            <input  id="cadastro_senha"
                                    type="password"
                                    defaultValue={items.password} 
                                    name="Password"
                                    placeholder="Senha"
                                    required/>
                            <input  id="confirma_senha"
                            type="password"
                            name="Confirm Password"
                            placeholder="Confirme sua senha"
                            required/>
                            <input  autoComplete="new-password" id="cadastro_telefone"
                            type="tel"
                            defaultValue={items.phone} 
                            name="Telefone"
                            placeholder="Telefone"
                            required/>
                            <input defaultValue={items.CEP}  autoComplete="new-password" id="cadastrar_cep"
                            type="text"
                            name="CEP"
                            placeholder="CEP"
                            required/>
                          </fieldset>
                          <fieldset id="actions">
                            <input type="submit"
                            onClick={(event) => fazCadastro(event)}
                                    id="submit-editar-cliente"
                                    value="Salvar"/>
                          </fieldset>

                    </form>
                </div>
                <div className="ondinha-editar-info-cliente"/>
                <Footer />
        </div>
    )
}

export default editar_produto;