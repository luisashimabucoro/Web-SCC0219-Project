import './styles/compra_concluida.css';
import React from 'react';

function compra_concluida(){

    let id_cliente_ativo = localStorage.getItem('id_cliente_ativo');
    console.log("id do cliente ativo:", id_cliente_ativo);
    let compra_finalizada = JSON.parse(localStorage.getItem(`compra_feita${id_cliente_ativo}?${localStorage.getItem('numero_compras_cliente'+id_cliente_ativo)}`));
    console.log("copmrado:", compra_finalizada);
    compra_finalizada.produto = compra_finalizada.produto.filter(produto => {return produto != null;});

    if(compra_finalizada.produto.length > 0) {

        return (    
            <div className="compra-feita-janela">
                <br></br>
                <h1>Compra Nº: {compra_finalizada.num_compra}</h1>
                <h1>Comprador: {compra_finalizada.name}</h1>
                <h1>Produtos Comprados:</h1>
                <div className="produtos_comprados">
                    <p>{compra_finalizada.produto[0].name}</p>
                    <p>Preço individual: {compra_finalizada.produto[0].price}</p>
                    <p>Quantidade comprada: {compra_finalizada.produto[0].quantidade_comprada}</p>
                    <p>Preço Total:{compra_finalizada.produto[0].preco_total}</p>
                </div>
    
    
            </div>
    
        )
    }else{
        return null;
    }
}

export default compra_concluida;