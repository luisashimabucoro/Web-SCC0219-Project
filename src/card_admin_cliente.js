import './styles/card_admin_cliente.css';
import {useState} from 'react';
import {useRef} from 'react';
import $ from 'jquery';


function card_admin_cliente(props){

    const indice = props.indice;
    let cliente_atual;
    

    console.log("cliente atual: ", localStorage.getItem(`cliente${indice}`))
    try{
         cliente_atual = JSON.parse(localStorage.getItem(`cliente${indice}`));
    }catch(e){
        console.log(e);
    }


    if(cliente_atual != null){
        return (
        <div>
            <div className="client-element">
                <p>{cliente_atual.nome_usuario}</p>
                <p>{cliente_atual.email}</p>
                <p>{cliente_atual.telefone}</p>
                <a href={`editar_cliente?${indice}`}>
                    <img src={require("./button_images/edit_button.png")} alt="Botão de editar"/>
                </a>
            </div>
        </div>
        )
    }else{
        return null;
    }
}

export default card_admin_cliente;