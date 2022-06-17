import React from 'react';
import Itemlista from './item_loja';
import  { useState } from 'react';


function fileira (tipo_produto){
  
  console.log(tipo_produto);

  const [numero, setNumero] = useState(0);


  if(numero < 0 ){
    numero = 0;
  }
  const handle_prev = () =>{
    if(numero > 0) setNumero(numero-1);
    else return;
  }
  const handle_next = () =>{
    if(numero < 3) setNumero(numero+1);
    else return;
  }

  var indexProduto;

  indexProduto = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(value => value + (numero*12 ));
  return (
      <div>
        <div className="titulo_loja">
          <h1>{tipo_produto.tipo_produto.toUpperCase()}</h1>
        </div>
      
      <div className="pagina_loja"> 
          <ul>
            <Itemlista index={indexProduto[0]} coluna={1} tipo={tipo_produto.tipo_produto}/>
            <Itemlista index={indexProduto[1]} coluna={2} tipo={tipo_produto.tipo_produto}/>
            <Itemlista index={indexProduto[2]} coluna={3} tipo={tipo_produto.tipo_produto}/>
            <Itemlista index={indexProduto[3]} coluna={4} tipo={tipo_produto.tipo_produto}/>
          </ul>
          <ul>
            <Itemlista index={indexProduto[4]} coluna={1} tipo={tipo_produto.tipo_produto}/>
            <Itemlista index={indexProduto[5]} coluna={2} tipo={tipo_produto.tipo_produto} />
            <Itemlista index={indexProduto[6]} coluna={3} tipo={tipo_produto.tipo_produto}/>
            <Itemlista index={indexProduto[7]} coluna={4} tipo={tipo_produto.tipo_produto}/>
          </ul>
          <ul>
            <Itemlista index={indexProduto[8]} coluna={1} tipo={tipo_produto.tipo_produto}/>
            <Itemlista index={indexProduto[9]} coluna={2} tipo={tipo_produto.tipo_produto}/>
            <Itemlista index={indexProduto[10]} coluna={3} tipo={tipo_produto.tipo_produto}/>
            <Itemlista index={indexProduto[11]} coluna={4} tipo={tipo_produto.tipo_produto}/>
          </ul>
          <div className="menu_categorias">
                <h2>Categorias</h2>
                <a href="#">Plantas de Interior</a><br/>
                <a href="#">Suculentas</a><br/>
                <a href="#">Frutíferas</a><br/>
                <a href="#">Ervas & Vegetais</a><br/>
        </div>
        <div className="loja_ondinha"/>
      </div>
        <div className="paginas">
        <button type="button" onClick={handle_prev} className="loja_pagebutton">Anterior</button>
        <button type="button" onClick={() => setNumero(0)}  className="page_number">1</button>
        <button type="button" onClick={() => setNumero(1)} className="page_number">2</button>
        <button type="button" onClick={() => setNumero(2)}  className="page_number">3</button>
        <button type="button" onClick={() => setNumero(3)}  className="page_number">4</button>
        <button type="button" onClick={handle_next}  className="loja_pagebutton">Próximo</button>

        </div>
      </div>
  )
}


export default fileira;