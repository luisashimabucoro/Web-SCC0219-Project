import React from 'react';
import  { useState } from 'react';
import './styles/carrinho.css';
import {returnProduto} from './item_loja';
import Footer from './footer';


function carrinho(){
    const [qnt, setQnt] = useState(1);
    const preco = 9*qnt;
    const diminuirQuantidade = () => {
        setQnt(qnt-1);
    }   
    
    const aumentarQuantidade = () =>{
        setQnt(qnt+1);
    }

    return(
        <div>

        <div className="background_carrinho">
            <div className="janela_carrinho">
                <h1 className="titulo_carrinho">Carrinho</h1>
                <hr/>
                <div className="produtos_carrinho">
                    <div className="linha_produto">
                        <div className="botao_apagar">x</div>
                        <img className="carrinho_foto_produto" src="https://static3.tcdn.com.br/img/img_prod/475075/vaso_decorativo_planta_podocarpus_verde_13cm_23325_1_20201213202627.jpg"/>
                        <p className="carrinho_nome_produto">Planta AA</p>
                        <p onClick={() => setQnt(diminuirQuantidade)}  className="carrinho_diminuir_quantidade">-</p>
                        <p className="carrinho_quantidade_atual">{qnt}</p>
                        <p onClick={() => setQnt(aumentarQuantidade)} className="carrinho_aumentar_quantidade">+</p>
                        <p className="carrinho_preco_produto">R$ {preco}</p>
                    </div>

                    <hr/>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default carrinho;