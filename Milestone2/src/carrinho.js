import React from 'react';
import  { useState } from 'react';
import './styles/carrinho.css';
import {returnProduto} from './item_loja';
import Footer from './footer';
import CardProduto from './card_produto';
import PrecoTotal from './preco_total';
import {useNavigate} from 'react-router-dom';

// class Compra {
//     constructor(id, num_compra, name, email, produto, preco) {
//         this.id = id;
//         this.num_compra = num_compra;
//         this.name = name;
//         this.email = email;
//         this.produto = produto;
//         // this.quantidade = quantidade;
//         this.preco = preco;
//         // this.endereco = endereco;
//     }
// }

function carrinho(){

    const navigate = useNavigate();

    let [preco, setPreco] = useState(
        localStorage.getItem('preco_total')
    )

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
                    </div>
                    {/* <PrecoTotal /> */}
                    <p className="carrinho_precoFinal">Preço Total: R${preco}</p>
                    <a href="/finalizar_compra">
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