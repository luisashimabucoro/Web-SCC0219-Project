import React from 'react';
import  { useState } from 'react';

function card_produto(index){
    console.log(localStorage.getItem('quantidade_no_carrinho'))
    
    console.log()
    const [qnt, setQnt] = useState(
        localStorage.getItem(`quantidade_produto${index.index}`)
    );

    let [produtoCarrinho, setProduto] = useState(
        JSON.parse(localStorage.getItem(`carrinho_produto${index.index}`))
    )
    
    const deletar_produto = () => {
        setProduto(null);
        localStorage.setItem('preco_total', parseInt(localStorage.getItem('preco_total')) - parseInt(produtoCarrinho.price) * qnt);
        localStorage.setItem('quantidade_no_carrinho', localStorage.getItem('quantidade_no_carrinho') - 1);
        localStorage.removeItem(`carrinho_produto${index.index}`);   
    }
    console.log(produtoCarrinho)
        
    const diminuirQuantidade = () => {
        localStorage.setItem('preco_total', parseInt(localStorage.getItem('preco_total')) - parseInt(produtoCarrinho.price));
        setQnt(parseInt(qnt)-1);
    }   
    
    const aumentarQuantidade = () =>{
        localStorage.setItem('preco_total', parseInt(localStorage.getItem('preco_total')) + parseInt(produtoCarrinho.price));
        setQnt(parseInt(qnt)+1);
    }
    
    if(produtoCarrinho != null){
    const preco = parseInt(produtoCarrinho.price)*qnt;
    console.log(produtoCarrinho.price);

        return (
            <div className="linha_produto">
                <div onClick={deletar_produto} className="botao_apagar">x</div>
                <img className="carrinho_foto_produto" src={produtoCarrinho.img}/>
                <p className="carrinho_nome_produto">{produtoCarrinho.name}</p>
                <p onClick={() => setQnt(diminuirQuantidade)}  className="carrinho_diminuir_quantidade">-</p>
                <p className="carrinho_quantidade_atual">{qnt}</p>
                <p onClick={() => setQnt(aumentarQuantidade)} className="carrinho_aumentar_quantidade">+</p>
                <p className="carrinho_preco_produto">R$ {preco}</p>
            </div>
        )
    }else{
        return(
            null
        )
    }
}

export default card_produto;