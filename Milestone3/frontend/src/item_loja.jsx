import React from 'react';
import PaginaProduto from './pagina_produto';
import './styles/item_loja.css';
import  {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

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

// Funções para inicializar os carrinhos na mão
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

// function addiProduto(){
//   if(localStorage.getItem('quantidadeProdutosTotal') < 1){
//     for (let i = 0; i < 42; i++) {
//       console.log("readicioandno")
//       localStorage.setItem(`produto${i}`, JSON.stringify(products[i]));
//     }
//     localStorage.setItem('quantidadeProdutosTotal', 42);
//   }
// }

// addProduto();
// addiProduto();

// function returnProduto(id_produto, ordenacao){
//   atualiza_vetor_produtos(ordenacao);
//   return products[id_produto];
// }


// function atualiza_vetor_produtos(ordenacao){
//   console.log("atualizando de maneira:", ordenacao);
//   for(var i = 0; i < localStorage.getItem('quantidadeProdutosTotal'); i++){
//     try{
//       products[i] = JSON.parse(localStorage.getItem(`produto${i}`));
//     }catch(e){
//       console.log(e)
//     }
//   }
//   if(ordenacao == "crescente"){
//     products = products.sort((a, b) => (a.price > b.price) ? 1 : -1);
//   }else if(ordenacao == "decrescente"){
//     products = products.sort((a, b) => (a.price < b.price) ? 1 : -1);
//   }
// }


// function buscaCategoria(tipo, indice, ordenacao){
//   atualiza_vetor_produtos(ordenacao);
//   try{
//     if(products.filter(produto => produto.tipo == tipo)[indice] != undefined){
//       return products.filter(produto => produto.tipo == tipo)[indice]
//     }else{
//       return null;
//     }

//   }catch(e){
//     console.error(e);
//   }

// }

// function buscaSubCategoria(subtipo, indice, ordenacao){
//   atualiza_vetor_produtos(ordenacao);
//   try{
//     if(products.filter(produto => produto.subtipo == subtipo)[indice] != undefined){
//       return products.filter(produto => produto.subtipo == subtipo)[indice]
//     }else{
//       return null;
//     }
//   }catch(e){
//     console.error(e);
//   }
// }

// function buscaPersonalizada(aspectos_planta, indice, ordenacao){
//   atualiza_vetor_produtos(ordenacao);
//   console.log(aspectos_planta);
//   console.log(products[5]);
//   try{
//     console.log("personalizando...");
//     return products.filter(produto => produto.tamanho == aspectos_planta.tamanho && produto.iluminacao == aspectos_planta.iluminacao && produto.temperatura == aspectos_planta.temperatura && produto.manutencao == aspectos_planta.manutencao)[indice];
//   } catch(e){
//     console.log(e);
//   }
// }

// function buscaProduto(termo_buscado, indice, ordenacao){
//   atualiza_vetor_produtos(ordenacao);
//   try{
//     return products.filter(produto => produto.name.toLowerCase().includes(termo_buscado.toLowerCase()) || produto.subtipo.toLowerCase().includes(termo_buscado.toLowerCase()) || produto.tipo.toLowerCase().includes(termo_buscado.toLowerCase())  )[indice];
//   } catch(e){
//     console.log(e);
//   }
// }

function produtos(props){

  let first = true;
  let todos_subtipos = ["interior", "horta", "arvore", "bulbo", "ceramica", "plastico", "adubo", "equipamento"];
  let ordenacao = props.ordenacao;

  // let ordenacao = localStorage.getItem("ordenacao_padrao");
  console.log(ordenacao);
  const indice = props.index;
  const coluna = props.coluna;
  let tipo_produto = props.tipo;
  let produto_atual;
  let subtipo_produto;

  console.log(tipo_produto);
  if(todos_subtipos.includes(tipo_produto)){
    subtipo_produto = tipo_produto;
  }
  

  // if(tipo_produto == "busca_personalizada"){
  //   console.log("busca_personalizada")
  //   let aspectos = JSON.parse(localStorage.getItem('busca_personalizada'));
  //   produto_atual = buscaPersonalizada(aspectos, indice, ordenacao);
  // }else if (subtipo_produto != undefined){
  //   console.log("buscaSubCategoria")
  //   produto_atual = buscaSubCategoria(subtipo_produto, indice, ordenacao);
  // }else if(tipo_produto == "loja") {
  //   console.log("Loja")
  //   try{
  //     produto_atual = returnProduto(indice, ordenacao);
  //   }catch(err){
  //     console.log(err);
  //   }
  // }else if(tipo_produto == "busca"){
  //   console.log("busca por nome")

  //   let termo_buscado = localStorage.getItem('busca');
  //   produto_atual = buscaProduto(termo_buscado, indice, ordenacao);
  // }else{
  //   console.log("buscaCategoria")
  //   produto_atual = buscaCategoria(tipo_produto, indice, ordenacao);
  // }

  const busca_personalizada = (produtos) =>{
    console.log("busca_personalizada")
    let aspectos_planta = JSON.parse(localStorage.getItem('busca_personalizada'));
      try{
        console.log("personalizando...");
        return produtos.filter(produto => produto.tamanho == aspectos_planta.tamanho && produto.iluminacao == aspectos_planta.iluminacao && produto.temperatura == aspectos_planta.temperatura && produto.manutencao == aspectos_planta.manutencao);
      } catch(e){
        console.log(e);
      }
  }
  
  const filtra_produtos = async (produtos, filtro) =>{
    console.log("filtrando");
    console.log(produtos);
    console.log(filtro);
    if(filtro == "loja"){
      console.log("retornando a loja");
      return produtos;
    }else if(todos_subtipos.includes(filtro)){
      console.log("retornando subitpo");
      return produtos.filter(produto => produto.subtipo == filtro);
    }else{
      console.log("retornando tipoo");
      return produtos.filter(produto => produto.tipo == filtro);
    }
  }

  const busca_produto = (produtos) => {
    console.log("buscando...");
    let termo_buscado = localStorage.getItem('busca');
    
    return produtos.filter(produto => produto.name.toLowerCase().includes(termo_buscado.toLowerCase()) 
    || produto.subtipo.toLowerCase().includes(termo_buscado.toLowerCase()) 
    || produto.tipo.toLowerCase().includes(termo_buscado.toLowerCase()))

  }
    useEffect(() =>{
        // console.log("ordenando");
        fetchItems();
    }, []);
    
  const [items, setItems] = useState([]);
  const fetchItems = async () =>{
        const data = await fetch('/products');
        var produto_aatual = await data.json();
        console.log(data);
        console.log("chamando funcao")
        console.log(subtipo_produto);
        if(tipo_produto == "busca_personalizada"){
          produto_aatual = await busca_personalizada(produto_aatual);
        }else if (tipo_produto == "busca"){
          produto_aatual = await busca_produto(produto_aatual);
        }
        else{
          produto_aatual = await filtra_produtos(produto_aatual, tipo_produto);
        }
        setItems(produto_aatual);
      };
  // console.log(items);
  var teste = items;
  // console.log(teste);
  // console.log(ordenacao);

  if(ordenacao == -1){
    console.log("ordenando -1");
    teste = items.sort((a, b) => (a.price > b.price) ? -1 : 1);
    console.log(teste[indice]); 
  }else if(ordenacao == 1){
    console.log("ordenando 1");
    teste = items.sort((a, b) => (a.price > b.price) ? 1 : -1);
    // console.log(teste[0]); 
  }else{
    console.log("ordenando 0");
    teste = items.sort((a, b) => (a.tipo > b.tipo) ? -1 : 1);
  }
  teste = teste[indice];

  if(teste != null){
    console.log("NAO EH NULOOOO")
    console.log(teste);
  return(
    <li className="li_loja">
      <Link to={`/produto?${ teste.id}`}> 
        <article>
          <div className={`card card${coluna}`}>
          {teste.estoque > 0 ?
          
              <div>
                <img className="imagem_card_produto" src={teste.img} />
                <p>{teste.name}</p>
                <h3>R$ {teste.price.toFixed(2)}</h3>
              </div>
          : 
          <div className="parent-fora-estoque">
            <div className="fora_estoque"></div> 
            <img className="imagem_card_produto" src={teste.img} />
            <p>{teste.name}</p>
            <h3>R$ ---</h3>
            <p>Indisponível</p>
          </div>      
        }
          </div>  

        </article>
      </Link>
    </li>
  )     
  }else{
    console.log("eh nulo :((")
    return (
      <li>
        <a> 
          <article>
              <div className={`card${coluna} hidden`}>
              </div>
          </article>
        </a>
      </li>
    );
  }
}

export default produtos;