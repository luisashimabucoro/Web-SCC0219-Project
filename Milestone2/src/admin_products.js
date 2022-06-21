import './styles/admin_products.css';
import CardAdminProduct from './card_admin_products';
import {useState} from 'react';
import Footer from './footer';

function edit_products(){

    const [pageAdminProducts, setpageAdminProducts] = useState(0);

    if(pageAdminProducts < 0 ){
        pageAdminProducts = 0;
    }

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

    indexProduto = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => value + (pageAdminProducts*10 ));

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


            <div className="pageButtons">
                <button type="button" onClick={handle_first_page} className="pagebutton">&lt;&lt;-</button>
                <button type="button" onClick={handle_prev_page} className="pagebutton">&lt;</button>
                <button type="button" onClick={handle_next_page} className="pagebutton">&gt;</button>
                <button type="button" onClick={handle_last_page} className="pagebutton">-&gt;&gt;</button>
            </div>

        </div>
            <Footer />


        </div>
    )
}

export default edit_products;