import React from 'react';
import  { useState } from 'react';
import './styles/carrinho.css';
import {returnProduto} from './item_loja';
import Footer from './footer';
import CardProduto from './card_produto';
import PrecoTotal from './preco_total';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

function carrinho(){
    useEffect(() =>{
        carrega_carrinho();
    }, []);
    const [items, setItems] = useState([]);


    let cart = JSON.parse(localStorage.getItem('carrinho'));
    console.log("rodou dnv");
    if (cart == null) cart = [];

    const carrega_carrinho = async () => {
        for (let item of cart) {
            console.log("carregandoo");
            console.log(item);
                let response = await fetch(
                    "http://localhost:3000/products/" + item.id
                );
                let product = await response.json();
                product.quantity = item.quantity;
                console.log(product);
                setItems(
                    current => [...current, product]
                )

        }
    }
    
    console.log(items);
    const navigate = useNavigate();

    let [preco, setPreco] = useState(
        localStorage.getItem('preco_total')
    )
    let sum = 0;
    for (let item of items) {
        console.log(item)
        sum += item.quantity * item.price;
    }
    console.log(sum);

    const handle_proxima_pagina = () => {
        if(sum > 0) {
            navigate('/finalizar_compra');
        }else{
            alert("Você não possui itens no carrinho!")
        }

    }
    console.log("preço: " + localStorage.getItem('preco_total'));
    setInterval(() => setPreco(localStorage.getItem('preco_total')), 500);
    
    const atualiza_carrinho = async () => {
        let newCart = [];
			for (let item of cart) {
				newCart.push({
					id: item.id,
					quantity: item.quantity,
				});
			}
			localStorage.setItem("carrinho", JSON.stringify(newCart));
    }

    const aumentar_quantidade = async (id) => {
        console.log("aumentando quantidade");

        cart.forEach((p) => {
            if (p.id == id){
            items.forEach((item) => {
                if(item.id == p.id){
                    if(item.quantity < item.estoque){
                        item.quantity += 1;
                        setItems(current => [...current]);
                        p.quantity++;
                    }else{
                        alert("Não há quantidade suficiente no estoque");
                    }
                }
            })
                
                localStorage.setItem('carrinho', JSON.stringify(cart));
                console.log(cart);
            }
        });
    }

    const diminuir_quantidade = async (id) => {
        console.log("diminuindo quantidade");
        cart.forEach((p) => {
            console.log("entrou no each");
            if (p.id == id){
            console.log("deu")
            console.log(p);
            items.forEach((item) => {
                if(item.id == p.id){
                    console.log("entrou no if");
                    console.log(item);
                    if(item.quantity > 1){
                        item.quantity -= 1;
                        setItems(current => [...current]);
                        p.quantity--;
                    }
                }
            })
                localStorage.setItem('carrinho', JSON.stringify(cart));
                console.log(cart);
            }
        });
    }
    const [seed, setSeed] = useState(1);
    const reset = () => {
         setSeed(Math.random());
     }

    const remover_produto = async (id) => {
        let i = 0;
			for (; i < cart.length; i++) {
				if (cart[i].id == id) break;
			}
			cart.splice(i, 1);
            console.log(cart);
            setItems([]);
            localStorage.setItem('carrinho', JSON.stringify(cart));
            await carrega_carrinho();
    }
    localStorage.setItem('preco_final', sum);

    return(
        <div className="carrinho_parent">
            <div className="background_carrinho">
                <div className="janela_carrinho">
                    <h1 className="titulo_carrinho">Carrinho</h1>
                    <hr></hr>
                    <div className="produtos_carrinho">
                        {items.map(item => (
                        <div className="linha_produto">
                            <div onClick={() => remover_produto(item.id)}  className="botao_apagar">x</div>
                            <img className="carrinho_foto_produto" src={item.img}/>
                            <p className="carrinho_nome_produto">{item.name.replace(/^(.{20}[^\s]*).*/, "$1")}...</p>
                            <p onClick={() => diminuir_quantidade(item.id)}className="carrinho_diminuir_quantidade">-</p>
                            <p className="carrinho_quantidade_atual">{item.quantity}</p>
                            <p onClick={() => aumentar_quantidade(item.id)} className="carrinho_aumentar_quantidade">+</p>
                            <p className="carrinho_preco_produto">R$ {(item.price*item.quantity).toFixed(2)}</p>
                        </div>
                        ))}
                        {/* <CardProduto index={1} />
                        <CardProduto index={2} />
                        <CardProduto index={3} />
                        <CardProduto index={4} />
                        <CardProduto index={5} />
                        <CardProduto index={6} />
                        <CardProduto index={7} />
                        <CardProduto index={8} />
                        <CardProduto index={9} />
                        <CardProduto index={10} />
                        <CardProduto index={11} /> */}
                    </div>
                    {/* <PrecoTotal /> */}
                    <p className="carrinho_precoFinal">Preço Total: R${sum.toFixed(2)}</p>
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