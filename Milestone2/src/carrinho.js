import React from 'react';
import  { useState } from 'react';
import './styles/carrinho.css';
import {returnProduto} from './item_loja';
import Footer from './footer';
import CardProduto from './card_produto';
import PrecoTotal from './preco_total';
import {useNavigate} from 'react-router-dom';


function carrinho(){

    const navigate = useNavigate();

    let [preco, setPreco] = useState(
        localStorage.getItem('preco_total')
    )

    const handle_proxima_pagina = () => {
        if(preco > 0) {
            navigate('/finalizar_compra');
        }else{
            alert("Você não possui itens no carrinho!")
        }

    }
    console.log("preço: " + localStorage.getItem('preco_total'));
    setInterval(() => setPreco(localStorage.getItem('preco_total')), 500);
    
    return(
        <div className="carrinho_parent">
            <div className="background_carrinho">
                <div className="janela_carrinho">
                    <h1 className="titulo_carrinho">Carrinho</h1>
                    <hr></hr>
                    <div className="produtos_carrinho">
                        <CardProduto index={1} />
                        <CardProduto index={2} />
                        <CardProduto index={3} />
                        <CardProduto index={4} />
                        <CardProduto index={5} />
                        <CardProduto index={6} />
                        <CardProduto index={7} />
                        <CardProduto index={8} />
                        <CardProduto index={9} />
                        <CardProduto index={10} />
                        <CardProduto index={11} />
                    </div>
                    {/* <PrecoTotal /> */}
                    <p className="carrinho_precoFinal">Preço Total: R${preco}</p>
                    <a id="botao_proxima_pagina" onClick={handle_proxima_pagina}>
                        <div className="botao_carrinho_finalizar_compra">Finalizar Compra</div>
                    </a>
                </div>
                <div className="finalizar_ondinha">
                <img src={require("./button_images/detalhe.png")} alt="Detalhe onda verde"/>
                </div>
            </div>
        <Footer />
        </div>
    )
}

export default carrinho;