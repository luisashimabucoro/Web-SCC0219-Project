function card_admin_products(props){

    const indice = props.indice;
    const produto_atual = JSON.parse(localStorage.getItem('produto'+indice));

    
    if(produto_atual != null){
        return (
            <div className="product-element">
                <p>{produto_atual.name}</p>
                <p>Estoque: {produto_atual.estoque}</p>
                <p>Preço: R${produto_atual.price}</p>
                <a href={`editar_produto?${produto_atual.id}`}>
                    <img src={require("./button_images/edit_button.png")} alt="Botão de editar"/>
                </a>
            </div>
        )
    }
    else{
        return null;
    }
}

export default card_admin_products;