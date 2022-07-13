import React from 'react';
import  { useState } from 'react';
import './styles/finalizar_compra.css';
import {returnProduto} from './item_loja';
import Footer from './footer';
import CardProduto from './card_produto';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import $ from 'jquery';

class Compra {
    constructor(id, num_compra, name, email, produto, preco, endereco, cidade, estado, cep, ultimos_digitos, data_compra) {
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
        this.ultimos_digitos = ultimos_digitos;
        this.data_compra = data_compra;

    }
}

// Checa se os campos de pagamento foram preenchidos
function checa_pagamento_preenchido(){
    var inputs = document.querySelectorAll('.area_pagamento input');
    console.log(inputs);
    for (const input of inputs){
        console.log(input.value);
        if (input.value.length > 1) return true;
        console.log("eh nulo:(" + input.value + ")");
    }
        
    return false;
}

// Checa se os campos de endereço foram preenchidos
function checa_endereco_preenchido(){
    var inputs = document.querySelectorAll('.endereco input');
    
    for (const input of inputs)
        if (input.value !== '') return true;
    
    return false;
}


// Função assíncrona para atualizar o estoque do produto após a compra
async function atualiza_estoque_funcao(produto){

    console.log(localStorage.getItem(`produto${produto.id}`));
    console.log(localStorage.getItem(`produto1`));
    console.log("PRODUTO ATUALIZADO:", produto);
    localStorage.setItem(`produto${produto.id}`, JSON.stringify(produto));

}

// Função principal do componente
function finalizar_compra(){

    useEffect(() =>{
        calcula_preco();
    }, []);
    const [items, setItems] = useState([]);
    const [newItems, setNewItems] = useState([]);
    const [city, setCity] = useState('Cidade');
    const [UF, setUF] = useState('UF');
    const [street, setStreet] = useState('Rua');



    const calcula_cep = async () =>{
        let cep = document.getElementById('zip').value;
        if (cep.length > 7){
            let url = `https://viacep.com.br/ws/${cep}/json/`;
            let response = await fetch(url)
            .then(response => response.json())
            .catch( (e) =>{
                console.log(e);
                return;
            });
            console.log(response);
            // let data = await response.json();
            if(response != undefined){
                if(response.erro){
                    console.log("CEP não encontrado");
                    return;
                }
                console.log(response);
                console.log("nao eh undefined!!")
                setCity(response.localidade);
                setUF(response.uf);
                setStreet(response.logradouro);
            }

        }
    }

    const navigate = useNavigate();
    let [preco_final, setpreco_final] = useState(
        localStorage.getItem('preco_total'),
    );
    let cart = JSON.parse(localStorage.getItem('carrinho'));
    const calcula_preco = async () => {
        if (cart == null) {
            console.log('carrinho eh nulo')
            cart = [];
        }
        // Get product details from API
        for (let item of cart) {
            console.log("entrou no for");
            console.log(item);
            let response = await fetch(
                "http://localhost:3000/products/" + item.id
            );
            let product = await response.json();
            product.quantity = item.quantity;
            // preco_final += item.quantity * product.price;
            setpreco_final(item.quantity * product.price);
            console.log(preco_final);
            setItems(
                current => [...current, product]
            )
            let new_product = product;
            new_product.quantidadeVendida += item.quantity;
            new_product.estoque -= item.quantity;
            setNewItems(
                current => [...current, new_product]
            );

            console.log("::::NOVO::::::")
            console.log(newItems);

            // return preco_final;
            // console.log(preco_final);
        }
        // return preco_final;
    }
    console.log("AQUIII>:::::")
    console.log(items);
    // let preco_final = localStorage.getItem('preco_total');
    console.log(preco_final);

    const handle_finalizar_compra = async _ => {
        
        

        
        // console.log(cliente);

        let pagamento_preenchido = checa_pagamento_preenchido();
        let endereco_preenchido = checa_endereco_preenchido();
        console.log('pagamento', pagamento_preenchido);
        console.log("endereco", endereco_preenchido);
        // Se todos os campos NÃO forem preenchidos, é feito um alert avisando o usuário
        if(!pagamento_preenchido || !endereco_preenchido ){
            alert("Favor preencher todos os campos");
        }else{
        // Se todos os campos forem preenchidos, a compra é realizada

        
            // Instancio as variáveis responsáveis por armazenar os dados da compra:
            let cep = document.getElementById('zip').value;    
            let dados_endereco = await fetch(`https://viacep.com.br/ws/${cep}/json/`); 
            console.log(dados_endereco);
            // let dados_endereco_json = await dados_endereco.json();
            let rua = document.getElementById('address').value;
            let numero = document.getElementById('number').value;
            let cidade = document.getElementById('city').value;
            let estado = document.getElementById('state').value;
            let cartao = document.getElementById('cartao').value;
            let ultimos_digitos = cartao.substring(cartao.length-4, cartao.length);
            console.log(ultimos_digitos);
            let today = new Date();
            let dia = String(today.getDate()).padStart(2, '0');
            let mes = String(today.getMonth() + 1).padStart(2, '0');
            let horas = `${today.getHours()}:${('0'+today.getMinutes()).slice(-2)}`;
            let data = `${dia}/${mes} (${horas})`
            console.log(data);

            let endereco = `${street}, ${numero}`;
            let produtos_comprados = [];
            let quantidade_produto = [];




            // Pego todos os produtos que foram adicionados ao carrinho
            // e armazeno os dados em variáveis
            // para que possa ser passado para a função de atualização do estoque
            // e para que possa ser exibido na tela de compras

            localStorage.setItem('preco_total', 0);

            // Atribuo a compra ao cliente que a realizou, e atualizo a quantidade de compras do usuário
            let id_cliente_ativo = localStorage.getItem("clienteAtivo").substring(localStorage.getItem("clienteAtivo").lastIndexOf('?')+1);
            localStorage.setItem("id_cliente_ativo", id_cliente_ativo);
            // let cliente_comprador = JSON.parse(localStorage.getItem(`cliente${id_cliente_ativo}`));
            localStorage.setItem(`numero_compras_cliente${id_cliente_ativo}`, parseInt(localStorage.getItem(`numero_compras_cliente${id_cliente_ativo}`))+1);
            let num_compra = localStorage.getItem(`numero_compras_cliente${id_cliente_ativo}`);
            let quantidade_compras = await fetch(`http://localhost:3000/compras/${id_cliente_ativo}`);
            let quantidade_compras_json = await quantidade_compras.json();
            let numero_da_compra = quantidade_compras_json.length;
            console.log("Numcopmra antes", num_compra);
            if(isNaN(numero_da_compra)) {
                localStorage.setItem(`numero_compras_cliente${id_cliente_ativo}`, 0);
                numero_da_compra = 0;
            }
            console.log("Numcopmra depois", numero_da_compra);

            let response = await fetch("http://localhost:3000/accounts/"+id_cliente_ativo);
            let cliente_comprador = await response.json();
            console.log(response);
            let mudanca = await fetch("http://localhost:3000/accounts/4");
            // response = await response.json();
            console.log(document.getElementById('address').value);
            // Crio o objeto da compra feita
            items.quantidade = items.price
            let compra = new Compra(
                id_cliente_ativo,
                numero_da_compra,
                cliente_comprador.name,
                cliente_comprador.email,
                items,
                preco_final,
                endereco,
                city,
                UF,
                cep,
                ultimos_digitos,
                data
            )
            console.log(compra);
            await fetch(
                "http://localhost:3000/compras/" + cliente_comprador.id,
                {
                    method: "PUT",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(compra),
                }
            );
            
            console.log("zerando carrinho");
            // Armazeno a compra localmente
            localStorage.setItem(`compra_feita${cliente_comprador.id}?${num_compra}`, JSON.stringify(compra));
            localStorage.setItem('carrinho', null);
            for (let prod of newItems){
                console.log("DANDO FETCH!");
                console.log(prod);
                await fetch(
                    "http://localhost:3000/products/" + prod.id,
                    {
                        method: "PUT",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(prod),
                    }
                );
           
            } 

            console.log("atualizando cliente");

            
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
                                <input maxLength={8} onChange={calcula_cep} id="zip" className="info-inputs " autoComplete="new-password"   type="text" placeholder='CEP'/>
                                </div> 
                                
                                <div id="endereco-especifico">
                                    <div className="rua">
                                    <input  id="address" className="info-inputs " type="text" placeholder={street}/>
                                    </div> 
        
                                </div>
    
                               
    
                                <div className="cidade">
                                <input  id="city" className="info-inputs " type="text" placeholder={city}/>
                                </div> 
    
                                <div className="estado">
                                <input  id="state" className="info-inputs " type="text" placeholder={UF}/>
                                </div> 
    
                                <div className="numeroCasa">
                                    <input  id="number" className="info-inputs " type="text" placeholder='N°'/>
                                </div> 

                                <div className="complemento">
                                    <input  id="reference" className="info-inputs " type="text" placeholder='Complemento'/>
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