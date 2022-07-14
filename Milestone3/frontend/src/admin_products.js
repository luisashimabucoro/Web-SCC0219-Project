import './styles/admin_products.css';
import CardAdminProduct from './card_admin_products';
import {useState} from 'react';
import Footer from './footer';
import React from 'react';

function edit_products(){

    
    const [pageAdminProducts, setpageAdminProducts] = useState(0);

    if(pageAdminProducts < 0 ){
        pageAdminProducts = 0;
    }

    // botões para mudar a página da loja
    const handle_first_page = () => {
        setpageAdminProducts(0);
    }
    const handle_prev_page = () =>{
        if(pageAdminProducts > 0) setpageAdminProducts(pageAdminProducts-1);
        else return;
    }
    const handle_next_page = () =>{
        if(pageAdminProducts < 4) setpageAdminProducts(pageAdminProducts+1);
        else return;
    }
    const handle_last_page = () =>{
        setpageAdminProducts(4);
    }
    
    
    var indexProduto;

    // index que irá indicar quais produtos serão exibidos
    indexProduto = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

    return (
        <div>

        <div className="edit-panel">
            <div className="panel-header">
                <h1> Produtos </h1>
                <a href="criar_produto">
                    <img src={require('./button_images/add_product_button.png')} alt="Botão para adicionar novo produto"/>
                </a>
            </div>
            
            <CardAdminProduct indice={indexProduto[0]}/>
            <CardAdminProduct indice={indexProduto[1]}/>
            <CardAdminProduct indice={indexProduto[2]}/>
            <CardAdminProduct indice={indexProduto[3]}/>
            <CardAdminProduct indice={indexProduto[4]}/>
            <CardAdminProduct indice={indexProduto[5]}/>
            <CardAdminProduct indice={indexProduto[6]}/>
            <CardAdminProduct indice={indexProduto[7]}/>
            <CardAdminProduct indice={indexProduto[8]}/>
            <CardAdminProduct indice={indexProduto[9]}/>
            <CardAdminProduct indice={indexProduto[10]}/>
            <CardAdminProduct indice={indexProduto[11]}/>
            <CardAdminProduct indice={indexProduto[12]}/>
            <CardAdminProduct indice={indexProduto[13]}/>
            <CardAdminProduct indice={indexProduto[14]}/>
            <CardAdminProduct indice={indexProduto[15]}/>
            <CardAdminProduct indice={indexProduto[16]}/>
            <CardAdminProduct indice={indexProduto[17]}/>
            <CardAdminProduct indice={indexProduto[18]}/>
            <CardAdminProduct indice={indexProduto[19]}/>
            <CardAdminProduct indice={indexProduto[20]}/>

            {/* <div className="pageButtons">
                <button type="button" onClick={handle_first_page} className="pagebutton">&lt;&lt;-</button>
                <button type="button" onClick={handle_prev_page} className="pagebutton">&lt;</button>
                <button type="button" onClick={handle_next_page} className="pagebutton">&gt;</button>
                <button type="button" onClick={handle_last_page} className="pagebutton">-&gt;&gt;</button>
            </div> */}
        </div>
        <div className="finalizar_ondinha">
            <img src={require("./button_images/detalhe.png")} alt="Detalhe onda verde"/>
        </div>
        <Footer />


        </div>
    )
}

export default edit_products;