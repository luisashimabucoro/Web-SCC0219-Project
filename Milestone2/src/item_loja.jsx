import React from 'react';
import PaginaProduto from './pagina_produto';
import './styles/item_loja.css';

class Produto {
  constructor(id, name, img, price, estoque, quantidadeVendida, tipo, subtipo, descricao, tamanho, iluminacao, temperatura, manutencao){
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.estoque = estoque;
    this.quantidadeVendida = 0;
    this.tipo = tipo;
    this.subtipo = subtipo;
    this.descricao = descricao;

    this.tamanho = tamanho;
    this.iluminacao = iluminacao;
    this.temperatura = temperatura;
    this.manutencao = manutencao;


  }
}

let products = [

]

function addProduto(){
  for (let i = 0; i < 5; i++) {
    products.push(new Produto(
      `${i}`,
      `Planta de Interior ${i}`,
      'https://cdn.leroymerlin.com.br/products/vaso_com_planta_permanente_1567131065_4a09_600x600.jpg',
      20.00,
      3,
      0,
      "planta",
      "interior",
      "A planta perfeita para colocar na sala de sua casa!",
      "medio",
      "media",
      "media",
      "pouca"
      ))
  }
  for (let i = 5; i < 20; i++) {
    products.push(new Produto(
      `${i}`,
      `Bulbo ${i}`,
      'https://flores.culturamix.com/blog/wp-content/gallery/Como-Cuidar-de-Plantas-Bulbosas-3/Como-Cuidar-de-Plantas-Bulbosas-7.jpg',
      10.00,
      3,
      0,
      "planta",
      "bulbo",
      "Bulbo = nome fofinho, pode comprar",
      "pequeno",
      "pouca",
      "media",
      "pouca"

      ))
  }
  for (let i = 20; i < 30; i++) {
    products.push(new Produto(
      `${i}`,
      `Vaso ${i}`,
      'https://w7.pngwing.com/pngs/112/383/png-transparent-flowerpot-pottery-terracotta-ceramic-garden-vase-furniture-lid-half.png',
      12.00,
      3,
      0,
      "vaso",
      "plastico",
      "Vaso bom !!! nao quebra eu juro"

      ))
  }
  for (let i = 30; i < 42; i++) {
    products.push(new Produto(
      `${i}`,
      `Equipamento ${i}`,
      'https://http2.mlstatic.com/D_NQ_NP_889360-MLB44169787037_112020-O.jpg',
      49.00,
      3,
      0,
      "outros",
      "equipamento",
      "vai fazer exercício sem sair de casa"

      ))
  }

}

function addiProduto(){
  if(localStorage.getItem('quantidadeProdutosTotal') < 1){
    for (let i = 0; i < 42; i++) {
      console.log("readicioandno")
      localStorage.setItem(`produto${i}`, JSON.stringify(products[i]));
    }
    localStorage.setItem('quantidadeProdutosTotal', 42);
  }
}

addProduto();
addiProduto();

function returnProduto(id_produto, ordenacao){
  atualiza_vetor_produtos(ordenacao);
  return products[id_produto];
}

function atualiza_vetor_produtos(ordenacao){
  console.log("atualizando de maneira:", ordenacao);
  for(var i = 0; i < 42; i++){
    try{
      products[i] = JSON.parse(localStorage.getItem(`produto${i}`));
    }catch(e){
      console.log(e)
    }
  }
  if(ordenacao == "crescente"){
    products = products.sort((a, b) => (a.price > b.price) ? 1 : -1);
  }else if(ordenacao == "decrescente"){
    products = products.sort((a, b) => (a.price < b.price) ? 1 : -1);
  }
  // products = products.sort((a, b) => (a.estoque < b.estoque) ? 1 : -1);
}


function buscaCategoria(tipo, indice, ordenacao){
  atualiza_vetor_produtos(ordenacao);
    if(products.filter(produto => produto.tipo == tipo)[indice] != undefined){
      return products.filter(produto => produto.tipo == tipo)[indice]
    }else{
      return null;
    }

}

function buscaSubCategoria(subtipo, indice, ordenacao){
  atualiza_vetor_produtos(ordenacao);
  if(products.filter(produto => produto.subtipo == subtipo)[indice] != undefined){
    return products.filter(produto => produto.subtipo == subtipo)[indice]
  }else{
    return null;
  }
}

function buscaPersonalizada(aspectos_planta, indice, ordenacao){
  atualiza_vetor_produtos(ordenacao);
  console.log(aspectos_planta);
  console.log(products[5]);
  try{
    console.log("personalizando...");
    return products.filter(produto => produto.tamanho == aspectos_planta.tamanho && produto.iluminacao == aspectos_planta.iluminacao && produto.temperatura == aspectos_planta.temperatura && produto.manutencao == aspectos_planta.manutencao)[indice];
  } catch(e){
    console.log(e);
  }
}

function buscaProduto(termo_buscado, indice, ordenacao){
  atualiza_vetor_produtos(ordenacao);
  try{
    return products.filter(produto => produto.name.toLowerCase().includes(termo_buscado.toLowerCase()) || produto.subtipo.toLowerCase().includes(termo_buscado.toLowerCase()) || produto.tipo.toLowerCase().includes(termo_buscado.toLowerCase())  )[indice];
  } catch(e){
    console.log(e);
  }
}

function produtos(props){

  localStorage.setItem("teste123", JSON.stringify(products));
  // console.log(props);
  let todos_subtipos = ["interior", "horta", "arvore", "bulbo", "ceramica", "plastico", "adubo", "equipamento"];
  const ordenacao = props.ordenacao;
  const indice = props.index;
  const coluna = props.coluna;
  let tipo_produto = props.tipo;
  let produto_atual;
  let subtipo_produto;

  // let produtos_ordenados_crescente = products.sort((a, b) => a.price - b.price);

  
  
  if(todos_subtipos.includes(tipo_produto)){
    subtipo_produto = tipo_produto;
  }
  
  if(tipo_produto == "busca_personalizada"){
    console.log("busca_personalizada")
    let aspectos = JSON.parse(localStorage.getItem('busca_personalizada'));
    produto_atual = buscaPersonalizada(aspectos, indice, ordenacao);
  }else if (subtipo_produto != undefined){
    console.log("buscaSubCategoria")
    produto_atual = buscaSubCategoria(subtipo_produto, indice, ordenacao);
  }else if(tipo_produto == "loja") {
    console.log("Loja")
    try{
      produto_atual = returnProduto(indice, ordenacao);
      // produto_atual = JSON.parse(localStorage.getItem(`produto${indice}`));
      // console.log(produto_atual);
    }catch(err){
      console.log(err);
    }
  }else if(tipo_produto == "busca"){
    console.log("busca por nome")

    let termo_buscado = localStorage.getItem('busca');
    produto_atual = buscaProduto(termo_buscado, indice, ordenacao);
  }else{
    console.log("buscaCategoria")
    produto_atual = buscaCategoria(tipo_produto, indice, ordenacao);
  }


  const adicionar_direto_carrinho = () => {
    if(produto_atual.estoque > 0 ){
      localStorage.setItem('quantidade_no_carrinho', parseInt(localStorage.getItem('quantidade_no_carrinho')) + 1);
      localStorage.setItem('preco_total', parseInt(localStorage.getItem('preco_total')) + produto_atual.price);
      localStorage.setItem(`carrinho_produto${localStorage.getItem('quantidade_no_carrinho')}`, JSON.stringify(produto_atual));

      localStorage.setItem(`quantidade_produto${localStorage.getItem('quantidade_no_carrinho')}`, 1);
      
      let atualiza_estoque =  JSON.parse(localStorage.getItem(`produto${indice}`));
      console.log(atualiza_estoque);
      atualiza_estoque.estoque = parseInt(atualiza_estoque.estoque) - 1;
      localStorage.setItem(`produto${atualiza_estoque.id}`, JSON.stringify(atualiza_estoque));
      produto_atual.estoque = parseInt(produto_atual.estoque) - 1;
    }else{
      alert("Produto sem estoque");
    }

  }
  
  if(indice <= localStorage.getItem("quantidadeProdutosTotal") && produto_atual != null){
    return (
      <li className="li_loja">
      <a href={`produto?${produto_atual.id}`}> 
        <article>
            <div className={`card card${coluna}`}>
              {produto_atual.estoque <= 0 ? 
              <div className="parent-fora-estoque">
                <div className="fora_estoque"></div> 
                <img className="imagem_card_produto" src={produto_atual.img} />
                <p>{produto_atual.name}</p>
                <h3>R$ ---</h3>
                <p>Indisponível</p>
              </div>
              
              : 
              <div>
              <img className="imagem_card_produto" src={produto_atual.img} />
              <p>{produto_atual.name}</p>
              <h3>R$ {produto_atual.price}</h3>
              <a id="botao-carrinho" href="#" onClick={adicionar_direto_carrinho}>Adicionar ao carrinho</a>
              </div>
              }
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
