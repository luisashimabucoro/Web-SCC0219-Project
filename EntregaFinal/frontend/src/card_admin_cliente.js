import './styles/card_admin_cliente.css';
import {useState, useEffect} from 'react';
import {useRef} from 'react';
import $ from 'jquery';
import React from 'react';
import {Link} from 'react';


function card_admin_cliente(props){

    const indice = props.indice;
    // let cliente_atual;
    
    useEffect(() =>{
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const fetchItems = async () =>{
        const data = await fetch('/accounts');
        // const items = await data.json();
        var cliente_atual = await data.json();
        console.log(cliente_atual);
        console.log(indice);
        setItems(cliente_atual[indice]);
    };

    // console.log("cliente atual: ", localStorage.getItem(`cliente${indice}`))
    // try{
    //      cliente_atual = JSON.parse(localStorage.getItem(`cliente${indice}`));
    // }catch(e){
    //     console.log(e);
    // }

    if(items != null){
        return (
            <div>
            <div className="client-element">
                <p id="admin_cliente_nome">{items.name}</p>
                <p id="admin_cliente_email">{items.email}</p>
                <p id="admin_cliente_telefone">{items.phone}</p>
                <a href={`editar_cliente?${items.id}`}>
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