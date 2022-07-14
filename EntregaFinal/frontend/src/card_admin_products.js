import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function card_admin_products(props){
    
    console.log("propss");
    console.log(props);
    Object.size = function(obj) {
        var size = 0,
          key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
    console.log(props);

    const indice = props.indice;
    
    useEffect(() =>{
        fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () =>{
        const data = await fetch('/products');
        // const items = await data.json();
        var produto_aatual = await data.json();
        console.log(produto_aatual);
        console.log("indice:", indice);
        setItems(produto_aatual[indice]);
      };
    
      console.log(Object.size(items));
        console.log(items);
    if(Object.size(items) > 0){
        return (
            <div className="product-element">
                <p className="produto-nome">{items.name.replace(/^(.{20}[^\s]*).*/, "$1")}...</p>
                <p className="produto-estoque">Estoque: {items.estoque}</p>
                <p className="produto-preco">Preço: R${parseInt(items.price).toFixed(2)}</p>
                <p className="produto-quantidadevendida">Qnt vendida:{items.quantidadeVendida}</p>
                <Link to={`/editar_produto?${items.id}`}>
                    <img src={require("./button_images/edit_button.png")} alt="Botão de editar"/>
                </Link>
            </div>
        )
    }
    else{
        return null;
    }
}

export default card_admin_products;