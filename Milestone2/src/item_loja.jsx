import React from 'react';
import PaginaProduto from './pagina_produto';

var aviso_produtoNaoEncontrado = false;

class Produto {
  constructor(id, name, img, price, estoque, tipo, subtipo){
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.estoque = estoque;
    this.tipo = tipo;
    this.subtipo = subtipo;
  }
}


const products = [

]

function addProduto(){
  for (let i = 0; i < 5; i++) {
    products.push(new Produto(
      `${i}`,
      `Planta de Interior ${i}`,
      'https://cdn.leroymerlin.com.br/products/vaso_com_planta_permanente_1567131065_4a09_600x600.jpg',
      20.00,
      3,
      "planta",
      "interior"
      ))
  }
  for (let i = 5; i < 20; i++) {
    products.push(new Produto(
      `${i}`,
      `Bulbo ${i}`,
      'https://flores.culturamix.com/blog/wp-content/gallery/Como-Cuidar-de-Plantas-Bulbosas-3/Como-Cuidar-de-Plantas-Bulbosas-7.jpg',
      10.00,
      3,
      "planta",
      "bulbo"
      ))
  }
  for (let i = 20; i < 30; i++) {
    products.push(new Produto(
      `${i}`,
      `Vaso ${i}`,
      'https://w7.pngwing.com/pngs/112/383/png-transparent-flowerpot-pottery-terracotta-ceramic-garden-vase-furniture-lid-half.png',
      12.00,
      3,
      "vaso",
      "plastico"
      ))
  }
  for (let i = 30; i < 42; i++) {
    products.push(new Produto(
      `${i}`,
      `Equipamento ${i}`,
      'https://http2.mlstatic.com/D_NQ_NP_889360-MLB44169787037_112020-O.jpg',
      49.00,
      3,
      "outros",
      "equipamento"
      ))
  }


  
}

function addiProduto(){
  if(localStorage.getItem('produto1') == null){
    for (let i = 0; i < 42; i++) {
      console.log("readicioandno")
      localStorage.setItem(`produto${i}`, JSON.stringify(products[i]));
    }
    localStorage.setItem('quantidadeProdutosTotal', 42);
  }
}

addProduto();
addiProduto();

function returnProduto(id_produto){
  return products[id_produto];
}

function atualiza_vetor_produtos(){
  for(var i = 0; i < localStorage.getItem('quantidadeProdutosTotal'); i++){
    try{
      products[i] = JSON.parse(localStorage.getItem(`produto${i}`));
    }catch(e){
      console.log(e)
    }
  }
}


function buscaCategoria(tipo, indice){
  atualiza_vetor_produtos();
  if(products.filter(produto => produto.tipo == tipo)[indice] != undefined){
    return products.filter(produto => produto.tipo == tipo)[indice]
  }else{
    return null;
  }
}

function buscaSubCategoria(subtipo, indice){
  atualiza_vetor_produtos();
  if(products.filter(produto => produto.subtipo == subtipo)[indice] != undefined){
    return products.filter(produto => produto.subtipo == subtipo)[indice]
  }else{
    return null;
  }
}


function buscaProduto(termo_buscado, indice){
  // console.log(products);
  atualiza_vetor_produtos();
  try{
    return products.filter(produto => produto.name.toLowerCase().includes(termo_buscado.toLowerCase()))[indice];
  } catch(e){
    console.log("IRRAAAAAAAAAAAAA")
    console.log(e);
  }
}

function produtos(props){

  // console.log(props);
  let todos_subtipos = ["interior", "horta", "arvore", "bulbo", "ceramica", "plastico", "adubo", "equipamento"];
  const indice = props.index;
  const coluna = props.coluna;
  const tipo_produto = props.tipo;

  let subtipo_produto;
  if(todos_subtipos.includes(tipo_produto)){
    subtipo_produto = tipo_produto;
  }

  // let produtos_selecionados = [];
  let produto_atual;

  // console.log(subtipo_produto);

  if (subtipo_produto != undefined){
    produto_atual = buscaSubCategoria(subtipo_produto, indice);
  }else if(tipo_produto == "loja") {
    try{
      produto_atual = JSON.parse(localStorage.getItem(`produto${indice}`));
    }catch(err){
      console.log(err);
    }
  }else if(tipo_produto == "busca"){
    let termo_buscado = localStorage.getItem('busca');
    produto_atual = buscaProduto(termo_buscado, indice);
  }else{
    produto_atual = buscaCategoria(tipo_produto, indice);
  }

  if(indice < products.length && produto_atual != null){
    return (
      <li>
      <a href={`produto?${produto_atual.id}`}> 
        <article>
            <div className={`card card${coluna}`}>
              <img className="imagem_card_produto" src={produto_atual.img} />
              <p>{produto_atual.name}</p>
              <h3>R$ {produto_atual.price}</h3>
            </div>
        </article>
        </a>
    </li>
    )
  }else{
    return (
      <li>
      <a> 
        <article>
            <div className={`card${coluna} hidden`}>
              {/* <img src={products[indice].img} /> */}
              {/* <p>{products[indice].name}</p> */}
              {/* <h3>{products[indice].price}</h3> */}
            </div>
        </article>
        </a>
    </li>
    )
  }
}
export default produtos;
export {returnProduto};