import React from 'react';

function card_admin_products(props){

    const indice = props.indice;
    let produto_atual;
    try{
         produto_atual = JSON.parse(localStorage.getItem('produto'+indice));
    }catch(e){
        console.log(e);
    }

    
    if(produto_atual != null){
        return (
            <div className="product-element">
                <p className="produto-nome">{produto_atual.name}</p>
                <p className="produto-estoque">Estoque: {produto_atual.estoque}</p>
                <p className="produto-preco">Preço: R${produto_atual.price}</p>
                <p className="produto-quantidadevendida">Qnt vendida:{produto_atual.quantidadeVendida}</p>
                <a href={`editar_produto?${produto_atual.id}`}>
                    <img src={require("./button_images/edit_button.png")} alt="Botão de editar"/>
                </a>
            </div>
        )
    }
    else{
        return null;
    }
}

export default card_admin_products;