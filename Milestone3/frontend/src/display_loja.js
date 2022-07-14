import React from 'react';
import Itemlista from './item_loja';
import  { useState, useEffect, useRef} from 'react';
import MenuCategorias from './menu_categorias';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

function fileira (props){
  const navigate = useNavigate();
  console.log(props)
  let tipo_produto = props.tipo_produto;


  var [numero, setNumero] = useState(0);
  const [ordem, setOrdem] = useState(0);

  if(numero < 0 ){
    numero = 0;
  }
  const handle_prev = () =>{
    if(numero > 0) setNumero(numero-1);
    else return;
  }
  const handle_next = () =>{
    if(numero < 1) {
      console.log("passando pagina");
      setNumero(numero+1);
    }
    else return;
  }

  const handle_ordem = () =>{
    console.log("ordenando");
    let ordenacao = document.getElementById('ordenacao_produtos').value;
    console.log(ordenacao);
    if(ordenacao == 'crescente'){
      console.log("crescente");
      localStorage.setItem("ordenacao_padrao", 1);
      setOrdem(1);
    }
    else if(ordenacao == 'decrescente'){
      console.log("decrescente");
      setOrdem(-1);
      localStorage.setItem("ordenacao_padrao", -1);
    }else{
      setOrdem(0);
      localStorage.setItem("ordenacao_padrao", 0);
    }
  }

  var indexProduto;
  console.log(ordem);
  console.log(tipo_produto);
  console.log(numero);

  indexProduto = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(value => value + (numero*12 ));
  return (
      <div className="janela-loja">
        <div className="header-loja"/>
        <div className="titulo_loja">
          {tipo_produto == "busca_personalizada" ? <h1>Busca Personalizada</h1> : tipo_produto == "busca" ? <h1>Busca por: {localStorage.getItem('busca')}</h1> : <h1>{tipo_produto.charAt(0).toUpperCase() + tipo_produto.slice(1)}</h1>}

        </div>

        <div className="select-ordem-produtos">
          <p>Ordenar Por:</p>

          <select onChange={handle_ordem} selected="padrão" id="ordenacao_produtos">
              <option value="padrão">Padrão</option>
              <option value="crescente">Mais baratos primeiro</option>
              <option value="decrescente">Mais caros primeiro</option>
          </select>
        </div>      
        <div className="pagina_loja"> 
            <ul>
              <Itemlista index={indexProduto[0]} coluna={1} tipo={tipo_produto} ordenacao={ordem}/>
              <Itemlista index={indexProduto[1]} coluna={2} tipo={tipo_produto} ordenacao={ordem}/>
              <Itemlista index={indexProduto[2]} coluna={3} tipo={tipo_produto} ordenacao={ordem}/>
              <Itemlista index={indexProduto[3]} coluna={4} tipo={tipo_produto} ordenacao={ordem}/>
            </ul>
            <ul>
              <Itemlista index={indexProduto[4]} coluna={1} tipo={tipo_produto} ordenacao={ordem} />
              <Itemlista index={indexProduto[5]} coluna={2} tipo={tipo_produto} ordenacao={ordem} /> 
              <Itemlista index={indexProduto[6]} coluna={3} tipo={tipo_produto} ordenacao={ordem} />
              <Itemlista index={indexProduto[7]} coluna={4} tipo={tipo_produto} ordenacao={ordem} />
            </ul>
            <ul>
              <Itemlista index={indexProduto[8]} coluna={1} tipo={tipo_produto} ordenacao={ordem} />
              <Itemlista index={indexProduto[9]} coluna={2} tipo={tipo_produto} ordenacao={ordem} />
              <Itemlista index={indexProduto[10]} coluna={3} tipo={tipo_produto} ordenacao={ordem} />
              <Itemlista index={indexProduto[11]} coluna={4} tipo={tipo_produto} ordenacao={ordem} />
            </ul>
            <MenuCategorias />
          <div className="loja_ondinha"/>
        </div>
        
        <div className="paginas">
        <button type="button" onClick={handle_prev} className="loja_pagebutton">Anterior</button>
        <button type="button" onClick={() => setNumero(0)}  className="page_number">1</button>
        <button type="button" onClick={() => setNumero(1)} className="page_number">2</button>
        {/* <button type="button" onClick={() => setNumero(2)}  className="page_number">3</button> */}
        {/* <button type="button" onClick={() => setNumero(3)}  className="page_number">4</button> */}
        <button type="button" onClick={handle_next}  className="loja_pagebutton">Próximo</button>
        </div>

      </div>
  )
}


export default fileira;