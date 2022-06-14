import React from 'react';
import PaginaProduto from './pagina_produto';


class Produto {
  constructor(id, name, img, price){
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
  }
}


const products = [
    

]

function addProduto(){
  for (let i = 0; i < 42; i++) {
    products.push(new Produto(
      `${i}`,
      `Produto ${i}`,
      'https://www.imagensempng.com.br/wp-content/uploads/2021/05/Vaso-Planta-Png.png',
      'R$ 18.00'
    ))
  }
}

function returnProduto(id_produto){
  return products[id_produto];
}

addProduto();

function produtos(props){
  const indice = props.index;
  const coluna = props.coluna;
  // console.log("produto: " + products[indice].name+ " coluna: " + coluna); 
  console.log(indice);
   // console.log(produtos[indice]);

  console.log(products.length);
  if(indice < products.length){
    return (
      <li>
      <a href={`produto?${products[indice].id}`}> 
        <article>
            <div className={`card card${coluna}`}>
              <img src={products[indice].img} />
              <p>{products[indice].name}</p>
              <h3>{products[indice].price}</h3>
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