import React from 'react';
import  { useState } from 'react';

function card_produto(index){
    // console.log(localStorage.getItem('quantidade_no_carrinho'))
    
    // console.log()
    const [qnt, setQnt] = useState(
        localStorage.getItem(`quantidade_produto${localStorage.getItem('quantidade_no_carrinho')}`)
    );

    console.log("qnt:", qnt);
    let [produtoCarrinho, setProduto] = useState(
        JSON.parse(localStorage.getItem(`carrinho_produto${index.index}`))
        )

    console.log("´produto::", produtoCarrinho)
    
    try{
        var estoque_atual = produtoCarrinho.estoque;
    }catch(e){
        console.log(e);
    }
    
    
    const deletar_produto = () => {
        let novo_estoque = produtoCarrinho;
        localStorage.setItem(`produto${index.index}`, JSON.stringify(novo_estoque));
        setProduto(null);
        localStorage.setItem('preco_total', parseInt(localStorage.getItem('preco_total')) - parseInt(produtoCarrinho.price) * qnt);
        localStorage.setItem('quantidade_no_carrinho', localStorage.getItem('quantidade_no_carrinho') - 1);
        localStorage.removeItem(`carrinho_produto${index.index}`);  
        
    }
        
    const diminuirQuantidade = () => {
        if (qnt > 1){
            let novo_estoque = produtoCarrinho;
            novo_estoque.estoque += 1;
            localStorage.setItem(`produto${index.index}`, JSON.stringify(novo_estoque));
            localStorage.setItem(`quantidade_produto${index.index}`, parseInt(localStorage.getItem(`quantidade_produto${index.index}`))- 1);
            localStorage.setItem('preco_total', parseInt(localStorage.getItem('preco_total')) - parseInt(produtoCarrinho.price));
            setQnt(parseInt(qnt)-1);
        }else{
            setQnt(qnt);
            localStorage.setItem('preco_total', parseInt(localStorage.getItem('preco_total')));
        }
    }   
    
    const aumentarQuantidade = () =>{
        console.log("estoque atual:", estoque_atual);
        console.log("qnt:", qnt);
        if (qnt <= estoque_atual){
            console.log("AUMENTOU");
            localStorage.setItem(`quantidade_produto${index.index}`, parseInt(localStorage.getItem(`quantidade_produto${index.index}`)) + 1);
            localStorage.setItem('preco_total', parseInt(localStorage.getItem('preco_total')) + parseInt(produtoCarrinho.price));
            let novo_estoque = produtoCarrinho;
            novo_estoque.estoque -= 1;
            localStorage.setItem(`produto${index.index}`, JSON.stringify(novo_estoque));
            setQnt(parseInt(qnt)+1);
        }else{
            setQnt(qnt);
            localStorage.setItem('preco_total', parseInt(localStorage.getItem('preco_total')));
            alert("Não temos tantos produtos no estoque");
        }
    }
    
    console.log("produto carrinho", produtoCarrinho);
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