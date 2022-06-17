import React from 'react';
import  { useState } from 'react';
import './styles/produto.css';
import {returnProduto} from './item_loja';

function iniciaCarrinho(){
    if(localStorage.getItem('quantidade_no_carrinho') == null || localStorage.getItem('quantidade_no_carrinho') <= 0){
      localStorage.setItem('quantidade_no_carrinho', 0);
    }
    if(localStorage.getItem('preco_total') == null || localStorage.getItem('preco_total') <= 0){
        localStorage.setItem('preco_total', 0);
    }
}

iniciaCarrinho();

function pagina_produto() {


    const id_produto = window.location.href.substring(window.location.href.lastIndexOf('?') + 1);
    const [produto, setProduto] = useState(JSON.parse(localStorage.getItem('produto'+id_produto)));
    // const produto = returnProduto(id_produto);
    // const produto = JSON.parse(localStorage.getItem('produto'+id_produto));

    console.log(produto);
    console.log(id_produto);    
    const [quantidade, setQuantidade] = useState(1);
    const estoque = produto.estoque;
    const diminuirQuantidade = () => {
        if(quantidade > 0) setQuantidade(quantidade-1);
        else setQuantidade(0);
    }   
    
    const aumentarQuantidade = () =>{
        if(quantidade < estoque) setQuantidade(quantidade+1);
        else setQuantidade(quantidade);
    }
    const submeter = () => {
        const produtoAtual = JSON.parse(localStorage.getItem('produto1'));
        produtoAtual.price = document.getElementById('editaPreco').value;
        console.log(produtoAtual)
    
        localStorage.setItem('produto1', JSON.stringify(produtoAtual));
        console.log(localStorage.getItem('produto1'));
        setProduto((produtoAtual));
        console.log(produto);
    }

    const adicionarProduto = () => {
        // const produtoAtual = JSON.parse(localStorage.getItem('produto1'));
        // produtoAtual.quantidade = quantidade;
        console.log(produto.price*quantidade);
        localStorage.setItem('quantidade_no_carrinho', parseInt(localStorage.getItem('quantidade_no_carrinho')) + 1);
        localStorage.setItem('preco_total', parseInt(localStorage.getItem('preco_total')) + produto.price * quantidade);
        localStorage.setItem(`carrinho_produto${localStorage.getItem('quantidade_no_carrinho')}`, JSON.stringify(produto)); 
        localStorage.setItem(`quantidade_produto${localStorage.getItem('quantidade_no_carrinho')}`, quantidade); 
    }
    
    return (
        <div className="janela_produto">
            <div className="foto_produto">
            <img className="foto_produto" src={ produto.img} alt=""/>
            </div>
            <div className="info_produto">
                <h1 className="nome_produto">{produto.name}</h1>
                <br/><br/>
                <p className="preco_produto">R$ {produto.price}</p>
                <hr/>
                <p className="estoque_produto">Estoque atual: {estoque}</p>
                <div className="quantidade_produto">
                    <button onClick={() => setQuantidade(diminuirQuantidade)}  className="diminuir_quantidade">-</button>
                    <p className="quantidade_atual">{quantidade}</p>
                    <button onClick={() => setQuantidade(aumentarQuantidade)} className="aumentar_quantidade">+</button>
                </div>
                <button onClick={adicionarProduto}className="adicionar_carrinho">Adicionar ao carrinho</button>
            </div>
            <div className="descricao_produto">
                <h1>Descrição:</h1>
                <p>O Musgo de Clube não é exatamente um musgo nem uma samambaia, mas tem parentesco com o último. Essa planta incomum e exótica se faz uma planta de interior exelente em ambientes de luz indireta. Elas amam água então é recomendado mantê-las com a terra sempre úmida. O Musgo do Clube é muito fácil de cuidar! Elas são ótimas para terrários e pequenos jardins. Essa planta é classificada como uma Lycopodiophyta, uma descendente de plantas produtoras de esporos que datam de aproximadamente</p>
            </div>
        </div>
    )
}

export default pagina_produto;