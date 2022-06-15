import React from 'react';
import PaginaProduto from './pagina_produto';
class Produto {
  constructor(id, name, img, price){
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = "R$" + price;
  }
}


const products = [
  {
    id: '0',
    name: 'Produto 0',
    img: 'https://www.imagensempng.com.br/wp-content/uploads/2021/05/Vaso-Planta-Png.png',
    price: 'R$ 18.00'
  }
]

function addProduto(){
  for (let i = 1; i < 42; i++) {
    products.push(new Produto(
      `${i}`,
      `Produto ${i}`,
      'https://www.imagensempng.com.br/wp-content/uploads/2021/05/Vaso-Planta-Png.png',
      18.00
      ))
    }
}

function addiProduto(){
  if(localStorage.getItem('produto1') == null){
    for (let i = 1; i < 42; i++) {
      console.log("readicioandno")
      localStorage.setItem(`produto${i}`, JSON.stringify(products[i]));
    }
}
}

addProduto();
addiProduto();
// localStorage.setItem('produto', JSON.stringify(products[1]));
// localStorage.setItem(1, JSON.stringify(products[2]));

function returnProduto(id_produto){
  return products[id_produto];
}


function editProduto(preco, id){
  products[0].price = "R$ 55.00";
  console.log(products[id]);
}


function produtos(props){

  for (let i =0; i<42; i++){
    console.log("Produtos: " + localStorage.getItem(`produto${i}`));
  }
  // console.log(products);
  const indice = props.index;
  const coluna = props.coluna;
  const produto_atual = JSON.parse(localStorage.getItem('produto'+indice));
  // console.log(produto_atual);
  // console.log("produto: " + products[indice].name+ " coluna: " + coluna); 
  // console.log(indice);
   // console.log(produtos[indice]);

  // console.log(products.length);
  if(indice < products.length){
    return (
      <li>
      <a href={`produto?${produto_atual.id}`}> 
        <article>
            <div className={`card card${coluna}`}>
              <img src={produto_atual.img} />
              <p>{produto_atual.name}</p>
              <h3>{produto_atual.price}</h3>
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