import React from 'react';

function preco_total(){

    let preco = localStorage.getItem('preco_total');
    return (
        <p className="carrinho_precoFinal">Preço Total: R${preco}</p>
    )

}

export default preco_total;