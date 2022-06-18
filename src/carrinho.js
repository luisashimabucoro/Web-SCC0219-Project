import React from 'react';
import  { useState } from 'react';
import './styles/carrinho.css';
import {returnProduto} from './item_loja';
import Footer from './footer';
import CardProduto from './card_produto';
import PrecoTotal from './preco_total';

function carrinho(){

    let [preco, setPreco] = useState(
        localStorage.getItem('preco_total')
    )
    console.log("preço: " + localStorage.getItem('preco_total'));
    setInterval(() => setPreco(localStorage.getItem('preco_total')), 500);


    return(
        <div className="parent">

        <div className="background_carrinho">
            <div className="janela_carrinho">
                <h1 className="titulo_carrinho">Carrinho</h1>
                <hr/>
                <div className="produtos_carrinho">
                    <CardProduto index={1} />
                    <hr/>
                    <CardProduto index={2} />
                    <hr/>
                </div>
                {/* <PrecoTotal /> */}
                <p className="carrinho_precoFinal">Preço Total: R${preco}</p>
                <a href="finalizar_compra">
                    <div className="botao_finalizar_compra">Finalizar Compra</div>
                </a>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default carrinho;