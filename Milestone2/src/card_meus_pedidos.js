// import './styles/card_admin_cliente.css';
import {useState} from 'react';
import {useRef} from 'react';
import $ from 'jquery';
import './styles/card_lista_compras.css';

var compra_atual = [];

function atualiza_compras(indice){
    for(let i = 1; i < 40; i++){
        console.log("indice atualizando:", indice);
        try{
            if(JSON.parse(localStorage.getItem(`compra_feita${indice}?${i}`)) != null){
            compra_atual[i] = JSON.parse(localStorage.getItem(`compra_feita${indice}?${i}`));
            compra_atual[i].produto = compra_atual[i].produto.filter(produto => {return produto != null;});
            }

        }catch(e){
            console.log(e);
        }
    }
    console.log("compra atual antes:", compra_atual);
    console.log("compra atual depois:", compra_atual);
}

function card_lista_compras(){

    
   
    
    const indice = localStorage.getItem('id_cliente_ativo');
    console.log("indice:", indice);

    // if(compra_atual == 0 || compra_atual == null){
        atualiza_compras(indice);
    // }    
    
    const exibe_info = () => {
        alert("a")
        document.getElementById('endereco-compra').style.display = 'none';
    }
    compra_atual = compra_atual.filter(conta => {return conta != null;});
    console.log("compra atual:::", compra_atual);
    console.log("quantidade de produtos:", compra_atual.length);

    var array_teste = [];
    for(let i = 0; i < compra_atual.length; i++) {
        for(let j = 0; j < compra_atual[i].produto.length; j++) {
            console.log("printando compra:")
            console.log(compra_atual[i].produto[j]);
            array_teste.push(compra_atual[i].produto[j]);
        }
    }
    console.log("lenth array_teste", array_teste.length);
    var array_html = [];
    console.log("compra display email", compra_atual[0]);

    console.log("COMPRAS:::", compra_atual);
    for (let i = 0; i < array_teste.length; i++) {
        console.log("i", i)
        try{
            
            array_html.push(
        <div key={compra_atual[0].email+i} className="lista-compra-element">
            <p className="lista-compra-data">{array_teste[i].data_compra}</p>
            <p className="lista-compra-produto">{array_teste[i].name}</p>
            <p className="lista-compra-quantidade">Quantidade: {array_teste[i].quantidade_comprada}</p>
            <p className="lista-compra-preco">Preço: R${array_teste[i].price*array_teste[i].quantidade_comprada}</p>
            <p className="lista-compra-endereco">{array_teste[i].endereco}</p>
            <p className="lista-compra-digitos">****{array_teste[i].ultimos_digitos}</p>

        </div>
       )}catch(e){
            console.log(e);
        }
       
    }




    console.log("ARRAY PRODUTOS", array_teste);
    console.log("ARRAY HTML", array_html);
    let retorno = compra_atual.filter(conta => {return conta != null;});
    console.log("lente", retorno.length)

    let compra_display = [];
    for(let i = 0; i < retorno.length; i++){
        compra_display[i] = retorno[i];
    }

    
    var retorno_compras = []
    for (let i = 0; i < compra_atual.length; i++) {
        console.log("i", i)
        // console.log("qnt produtos:", compra_display[1].produto.length);
        try{
            
       retorno_compras.push(
        <div key={compra_display[i].num_compra+i} className="compra-element">
            <p className="compra-nome">{compra_display[i].email}</p>
            <p className="compra-produto">Prod: {compra_display[i].produto[0].name}</p>
            <p className="compra-quantidade">Preço: R${compra_display[i].preco}</p>
        </div>
       )}catch(e){
            console.log(e);
        }
       
    }

    compra_atual = [];

    console.log("indice agora;", indice)
    console.log("retorno_compras", retorno_compras);
    if(retorno_compras != null){
        return (
            <div>
                {array_html}
            </div>
        )

    }else{
        return null;
    }
}

export default card_lista_compras;