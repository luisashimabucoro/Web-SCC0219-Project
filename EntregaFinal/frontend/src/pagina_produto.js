import React from 'react';
import './styles/produto.css';
import {returnProduto} from './item_loja';
import Footer from './footer';
import  {useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';

// Inicio o carrinho zerado 

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

    
    // A URL possui o ID do produto que queremos visualizar na página
    const id_produto = window.location.href.substring(window.location.href.lastIndexOf('?') + 1);
    useEffect(() =>{
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const fetchItems = async () =>{
            const data = await fetch('http://localhost:3000/products/'+id_produto);
            // const items = await data.json();
            var produto_aatual = await data.json();
            console.log(produto_aatual);
            setItems(produto_aatual);
        };

    
    // const [produto, setProduto] = useState(JSON.parse(localStorage.getItem('produto'+id_produto)));
    console.log(id_produto);
    const [produto, setProduto] = useState(
        fetch("http://localhost:3000/products/" + id_produto)
    );
    console.log(produto);

    const [quantidade, setQuantidade] = useState(1);
    const estoque = items.estoque;

    // Funções para editar a quantidade que o usuário deseja ao carrinho
    const diminuirQuantidade = () => {
        if(quantidade > 1) setQuantidade(quantidade-1);
        else setQuantidade(1);
    }   
    
    const aumentarQuantidade = () =>{
        if(quantidade < estoque) setQuantidade(quantidade+1);
        else setQuantidade(quantidade);
    }
    const submeter = () => {
        
        const produtoAtual = JSON.parse(localStorage.getItem('produto1'));
        produtoAtual.price = document.getElementById('editaPreco').value;
        console.log(produtoAtual)
    
        console.log(localStorage.getItem('produto1'));
        setProduto((produtoAtual));
        console.log(produto);
    }


    // Função para adicionar o produto ao carrinho
    const adicionarProduto = () => {
        let carrinho = JSON.parse(localStorage.getItem('carrinho'));
        if (carrinho == null) {
            console.log("nulo");
            carrinho = [];
        }
        console.log("carrinho");
        let added = false;
        for (let item of carrinho) {
            console.log(item);
            if (item.id == id_produto) {
                if((item.quantity+quantidade) > items.estoque){
                    alert("Não há quantidade suficiente no estoque");
                    return;
                }
                console.log(item.quantity);
                console.log(quantidade);
                item.quantity += quantidade;
                added = true;
            }
        }
        console.log(added);
        if (!added) {
            console.log("entrou added");
            if(quantidade <= items.estoque){
                carrinho.push({
                    id: id_produto,
                    quantity: quantidade,
                });

                console.log(items.price*quantidade);
                localStorage.setItem('quantidade_no_carrinho', parseInt(localStorage.getItem('quantidade_no_carrinho')) + 1);
                localStorage.setItem('preco_total', parseInt(localStorage.getItem('preco_total')) + produto.price * quantidade);
                localStorage.setItem(`carrinho_produto${localStorage.getItem('quantidade_no_carrinho')}`, JSON.stringify(produto)); 
                localStorage.setItem(`quantidade_produto${localStorage.getItem('quantidade_no_carrinho')}`, quantidade); 
            }else{
                alert('Quantidade indisponível no estoque');
            }
        }
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

    }
    console.log(items);
    let display_preco = parseInt(items.price);
    return (
        <div className="pagina-produto-parent">
            <div className="janela_produto">
                <div className="foto_produto">
                <img className="foto_produto" src={ items.img} alt=""/>
                </div>
                <div className="info_produto">
                    <h1 className="nome_produto">{items.name}</h1>
                    <br/><br/>
                    <p className="preco_produto">R$ {display_preco.toFixed(2)}</p>
                    <hr/>
                    <p className="estoque_produto">Estoque atual: {items.estoque}</p>
                    <div className="quantidade_produto">
                        <button onClick={() => setQuantidade(diminuirQuantidade)}  className="diminuir_quantidade">-</button>
                        <p className="quantidade_atual">{quantidade}</p>
                        <button onClick={() => setQuantidade(aumentarQuantidade)} className="aumentar_quantidade">+</button>
                    </div>
                    <button onClick={adicionarProduto}className="adicionar_carrinho">Adicionar ao carrinho</button>
                </div>
                <div className="descricao_produto">
                    <h1>Descrição:</h1>
                    <p >{items.descricao}</p>
                </div>
            </div>
            <div className="ondinha-pagina-produto"></div>
                <Footer />
        </div>
    )
}

export default pagina_produto;