import React from 'react';
import  { useState } from 'react';
import './styles/finalizar_compra.css';
import {returnProduto} from './item_loja';
import Footer from './footer';
import CardProduto from './card_produto';
import {useNavigate} from 'react-router-dom';


class Compra {
    constructor(id, num_compra, name, email, produto, preco, endereco, cidade, estado, cep, cartao, ultimos_digitos, data_compra) {
        this.id = id;
        this.num_compra = num_compra;
        this.name = name;
        this.email = email;
        this.produto = produto;
        this.preco = preco;
        this.endereco = endereco;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.cartao = cartao;
        this.ultimos_digitos = ultimos_digitos;
        this.data_compra = data_compra;

    }
}

function checa_pagamento_preenchido(){
    var inputs = document.querySelectorAll('.area_pagamento input');
    
    for (const input of inputs){

        console.log(input);
        if (input.length > 1) return true;
    }
        
    return false;
}

function checa_endereco_preenchido(){
    var inputs = document.querySelectorAll('.endereco input');
    
    for (const input of inputs)
        if (input.value !== '') return true;
    
    return false;
}


function finalizar_compra(){
    const navigate = useNavigate();

    let preco_final = localStorage.getItem('preco_total');

    const handle_finalizar_compra = () => {
        
        let pagamento_preenchido = checa_pagamento_preenchido();
        let endereco_preenchido = checa_endereco_preenchido();
        console.log('pagamento', pagamento_preenchido);
        console.log("endereco", endereco_preenchido);
        if(!pagamento_preenchido && !endereco_preenchido ){
            alert("Favor preencher todos os campos");
        }else{

        
            let cep = document.getElementById('zip').value;
            console.log(cep);
            let rua = document.getElementById('address').value;
            let numero = document.getElementById('number').value;
            let cidade = document.getElementById('city').value;
            let estado = document.getElementById('state').value;
            let cartao = document.getElementById('cartao').value;
            let ultimos_digitos = cartao.substring(cartao.length-4, cartao.length);

            let today = new Date();
            let dia = String(today.getDate()).padStart(2, '0');
            let mes = String(today.getMonth() + 1).padStart(2, '0');
            let horas = `${today.getHours()}:${('0'+today.getMinutes()).slice(-2)}`;
            let data = `${dia}/${mes} (${horas})`

            let endereco = `${rua}, ${numero}`;
            let produtos_comprados = [];
            let quantidade_produto = [];

            for(let i = 0; i < 5; i++) {
                try{
                    if(localStorage.getItem(`carrinho_produto${i}`) != null) {
                        quantidade_produto = localStorage.getItem(`quantidade_produto${i}`);
                        produtos_comprados[i] = JSON.parse(localStorage.getItem(`carrinho_produto${i}`));
                        produtos_comprados[i].quantidade_comprada = quantidade_produto;

                        produtos_comprados[i].ultimos_digitos = ultimos_digitos;
                        produtos_comprados[i].endereco = endereco;
                        produtos_comprados[i].data_compra = data;

                        // produtos_comprados[i].quantidade_comprada = quantidade_produto;
                        // produtos_comprados[i].quantidade_comprada = quantidade_produto;

                        produtos_comprados[i].preco_total = produtos_comprados[i].price * quantidade_produto;

                        let atualiza_estoque = produtos_comprados[i];
                        atualiza_estoque.estoque = parseInt(atualiza_estoque.estoque) - quantidade_produto;
                        atualiza_estoque.quantidadeVendida = parseInt(atualiza_estoque.quantidadeVendida) + quantidade_produto;
                        let id_atualiza_estoque = atualiza_estoque.id;
                        localStorage.setItem(`produto${id_atualiza_estoque}`, JSON.stringify(atualiza_estoque));
                        console.log("PRODUTO ATUALIZADO:", atualiza_estoque);
                        
                    }
                }catch(e){
                    console.log(e);
                }
                localStorage.removeItem(`carrinho_produto${i}`);  
            }

            // Calcula a data da compra
            
            // 

            localStorage.setItem('preco_total', 0);
            localStorage.setItem('quantidade_no_carrinho', 0);
            let id_cliente_ativo = localStorage.getItem("clienteAtivo").substring(localStorage.getItem("clienteAtivo").lastIndexOf('?')+1);
            localStorage.setItem("id_cliente_ativo", id_cliente_ativo);
            let cliente_comprador = JSON.parse(localStorage.getItem(`cliente${id_cliente_ativo}`));
            
            localStorage.setItem(`numero_compras_cliente${id_cliente_ativo}`, parseInt(localStorage.getItem(`numero_compras_cliente${id_cliente_ativo}`))+1);
            let num_compra = localStorage.getItem(`numero_compras_cliente${id_cliente_ativo}`);
            console.log("Numcopmra antes", num_compra);
            if(isNaN(num_compra)) {
                localStorage.setItem(`numero_compras_cliente${id_cliente_ativo}`, 1);
                num_compra = 1;
            }
            console.log("Numcopmra depois", num_compra);

            let compra = new Compra(
                cliente_comprador.id,
                num_compra,
                cliente_comprador.nome_usuario,
                cliente_comprador.email,
                produtos_comprados,
                preco_final,
                endereco,
                cidade,
                estado,
                cep,
                ultimos_digitos,
                data
            )

            localStorage.setItem(`compra_feita${cliente_comprador.id}?${num_compra}`, JSON.stringify(compra));
            console.log("compra:", compra);
            alert("Compra concluída!");
            navigate('/home');
        }
    }

    return(
        <div>

        <div className="background_carrinho">
            
            <div className="janela_finalizar">
                <h1 className="titulo_carrinho">Finalizar Compra</h1>
                <hr/>
                <form name="formulario-compra">
                    <div className="area_pagamento">
                        <div className="pagamento">
                            <fieldset id='inputs'>
                                <h1>Cobrança</h1>
    
                                <div className="titular">
                                <input  id="titular" className="info-inputs " type="text" placeholder='Titular Cartão'/>
                                </div>
    
                                <div className="cartao">
                                <input  id="cartao" className="info-inputs " type="text" placeholder='Número Cartão'/>
                                </div> 
    
                                <div className="row">
                                    <div>
                                    <input  id="expDate" className="info-inputs " type="text" placeholder='MM/AA'/>
                                    </div> 
    
                                    <div>
                                    <input  id="cvv" className="info-inputs " type="text" placeholder='CVV'/>
                                    </div> 
                                </div>
                                
    
                            </fieldset>

                        </div>

                        <div className="endereco">
                            <fieldset id="inputs">
                                
                                <h1>Endereço de entrega</h1>
    
                                <div className="cep">
                                <input  id="zip" className="info-inputs " type="text" placeholder='CEP'/>
                                </div> 
                                
                                <div id="endereco-especifico">
                                    <div className="rua">
                                    <input  id="address" className="info-inputs " type="text" placeholder='Rua'/>
                                    </div> 
        
                                    <div className="numeroCasa">
                                    <input  id="number" className="info-inputs " type="text" placeholder='N°'/>
                                    </div> 
                                </div>
    
                                <div className="complemento">
                                <input  id="reference" className="info-inputs " type="text" placeholder='Complemento'/>
                                </div> 
    
                                <div className="cidade">
                                <input  id="city" className="info-inputs " type="text" placeholder='Cidade'/>
                                </div> 
    
                                <div className="estado">
                                <input  id="state" className="info-inputs " type="text" placeholder='UF'/>
                                </div> 
    
                            </fieldset>

                        </div>

                    </div>

                    <fieldset id='comprar'>
                        <div className="finalizar_final">
                            <div>
                                <p className="finaliza_preco_final">Preço Total: R${preco_final}</p>
                            </div>
                            <div>
                                <p onClick={handle_finalizar_compra} className="botao_finalizar_compra">Finalizar Compra</p>
                            </div>
                        </div>

                    </fieldset>
                    
                </form>
            </div>
            <div className="finalizar_ondinha">
                <img src={require("./button_images/detalhe.png")} alt="Detalhe onda verde"/>
            </div>
        </div>
        
            <Footer />
        </div>
    )
}

export default finalizar_compra;
