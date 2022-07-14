import './styles/criar_produto.css';
import $ from 'jquery';
import {useState} from 'react'
import React from 'react';
import Footer from './footer';


var planta_subtipos = ["interior", "horta", "arvore", "bulbo"];
var vasos_subtipos = ["ceramica", "plastico"];
var outros_subtipos = ["adubo", "equipamento"];

class Produto {
    constructor(id, name, img, price, estoque, tipo, subtipo, descricao, tamanho, iluminacao, temperatura, manutencao){
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

function define_tipo(subtipo){
    

    if(planta_subtipos.includes(subtipo)){
        return "planta";
    }
    else if(vasos_subtipos.includes(subtipo)){
        return "vaso";
    }
    else if(outros_subtipos.includes(subtipo)){
        return "outros";
    }
}

function criar_produto(){


    var [id_novo_produto, set_id_novo_produto] = useState(100);

    const testee = async () => {
        const data = await fetch('http://localhost:3000/nextid');
        const items = await data.json();
        console.log(items);
        var id = items.nextid;
        set_id_novo_produto(id);
        console.log(id);
        console.log(id_novo_produto);
    }
    testee();

    console.log(id_novo_produto);
    const [eh_planta, set_eh_planta] = useState(true);

    const handle_eh_planta = () => {
        if(planta_subtipos.includes(document.getElementById('tipos').value)){
            console.log("eh planta")
            set_eh_planta(1);
        }else{
            console.log("num ehh")
            set_eh_planta(0);
        }
    }
    // const id_novo_produto = localStorage.getItem("quantidadeProdutosTotal");
    console.log(id_novo_produto);
    var novo_produto; 
    console.log(novo_produto);

    const salvar_criacao = async (event) => {
        event.preventDefault();
        if(!document.getElementById('produtoImg').checkValidity()){
            alert("Link de imagem inválido!");
            return;
        }
        let tamanhoo = $('input[name=tamanho]:checked', '.form-criar-produto').val();
        let iluminacaoo = $('input[name=iluminacao]:checked', '.form-criar-produto').val();
        let temperaturao = $('input[name=temperatura]:checked', '.form-criar-produto').val();
        let manutencaoo = $('input[name=manutencao]:checked', '.form-criar-produto').val();
        let descricaoo = $('#w3review').val();
        let subtipoo = document.getElementById('tipos').value;
        let tipoo = define_tipo(subtipoo);
        console.log("terminou os lets");
        if(!document.getElementById('produtoNome').value || !document.getElementById('produtoImg').value || 
        !document.getElementById('produtoPreco').value || !document.getElementById('produtoEstoque').value || !document.getElementById('tipos').value
        || !descricaoo){
            alert("Preencha tudo!");
            return;
        }
        novo_produto = new Produto(
            `${id_novo_produto}`,
            document.getElementById('produtoNome').value,
            document.getElementById('produtoImg').value,
            document.getElementById('produtoPreco').value,
            document.getElementById('produtoEstoque').value,
            tipoo,
            subtipoo,
            descricaoo,
            tamanhoo,
            iluminacaoo,
            temperaturao,
            manutencaoo

        )
        console.log("criou o produto");
        console.log(novo_produto.id);

        let response = await fetch("http://localhost:3000/products/");
        let products = await response.json();
        let id = 1;
        console.log(tipoo);
        while (true) {
            let used = false;
            for (let product of products) {
                if (product.id == id) used = true;
            }
            if(!used){
                console.log("used falso!");
                let produto_criado = {
                    id: id_novo_produto,
                    name:  document.getElementById('produtoNome').value,
                    img: document.getElementById('produtoImg').value,
                    price: document.getElementById('produtoPreco').value,
                    estoque: document.getElementById('produtoEstoque').value,
                    quantidadeVendida: 0,
                    tipo: tipoo,
                    subtipo: subtipoo,
                    descricao: descricaoo,
                    tamanho: tamanhoo,
                    iluminacao: iluminacaoo,
                    temperatura: temperaturao,
                    manutencao: manutencaoo
                };
                console.log(produto_criado);
                await fetch(
                    "http://localhost:3000/products/" + id,
                    {
                        method: "PUT",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(produto_criado),
                    }
                );
                localStorage.setItem(`produto${id_novo_produto}`, JSON.stringify(novo_produto));
                localStorage.setItem("quantidadeProdutosTotal", parseInt(localStorage.getItem("quantidadeProdutosTotal"))+1);
                alert("Produto criado com sucesso!");
                let proximo_id = parseInt(id_novo_produto) + 1;
                let atualiza_id = {
                    nextid: proximo_id
                };

                await fetch('http://localhost:3000/nextid/'+ id_novo_produto,
                    {
                        method: "PUT",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(atualiza_id),
                    }
                );

                break;
            } else id++;
        }


    }

    return (
        <div className="parent-editar-produto">
        <div className="janela_criar_produto">
            <div className="criar-info_criar_produto">
                <div className="criar-info-text-fields">
                    <div className="entrada_nome">
                    <p>Nome do Produto</p>
                    <input autoComplete="new-password"  id="produtoNome" className="info-inputs " type="text"/>
                    </div>

                    <div className="entrada_preco">
                    <p>Preço Unitário</p>
                    <input autoComplete="new-password" id="produtoPreco"  className="info-inputs " type="number"/>
                    </div>

                    <div className="entrada_estoque">
                    <p>Estoque Disponível</p>
                    <input autoComplete="new-password"  id="produtoEstoque" className="info-inputs " type="number" />
                    </div>

                    <div className="entrada_img">
                    <p>Link da Imagem</p>
                    <input  autoComplete="new-password" id="produtoImg"  className="info-inputs " type="url" />
                    </div>
                </div>

                <div className="criar-info-buttons">


                    
                    <div className="criar-radio-atributos entrada_tipo">
                        <div className="selecionar-tipo">
                            <p>Tipo</p>
                            <select onChange={handle_eh_planta} id="tipos">
                                <option value="interior">Plantas de Interior</option>
                                <option value="horta">Horta</option>
                                <option value="arvore">Árvores e Arbustos</option>
                                <option value="bulbo">Bulbos</option>
                                <option value="ceramica">Cerâmica</option>
                                <option value="plastico">Plástico</option>
                                <option value="adubo">Adubos & Fertilizantes</option>
                                <option value="equipamento">Equipamentos</option>
                            </select>
                        </div>
                    </div>

                    {eh_planta?
                        <div className="criar-aspectos-planta">
                            <form className="form-criar-produto">

                                <div className="criar_pergunta">
                                    <p>Tamanho</p>
                                    <div className="criar-radio-atributos">
                                            {/* <div></div> */}
                                            <input   type="radio" value="pequeno" id="tamanho-pequeno"  name="tamanho"></input>
                                            <label htmlFor="tamanho-pequeno">Pequeno</label>

                                            <input   type="radio" value="medio" id="tamanho-medio"  name="tamanho"></input>
                                            <label htmlFor="tamanho-medio">Médio</label>

                                            <input   type="radio" value="grande" id="tamanho-grande"  name="tamanho"></input>
                                            <label htmlFor="tamanho-grande">Grande</label>
                                    </div>
                                </div>

                                <p>Iluminação</p>
                                <div className="criar-radio-atributos">
                                    <input   type="radio" id="iluminacao-baixa"  name="iluminacao" value="baixa"/>
                                    <label htmlFor="iluminacao-baixa">Sombra</label>

                                    <input   type="radio" id="iluminacao-media"  name="iluminacao" value="media"/>
                                    <label htmlFor="iluminacao-media">Meia-sombra</label>

                                    <input   type="radio" id="iluminacao-alta"  name="iluminacao" value="alta"/>
                                    <label htmlFor="iluminacao-alta">Sol</label>
                                </div>

                                <p>Temperatura</p>
                                <div className="criar-radio-atributos">
                                    <input   type="radio" id="temperatura-baixa"  name="temperatura" value="baixa"/>
                                    <label htmlFor="temperatura-baixa">Baixa</label>

                                    <input   type="radio" id="temperatura-media"  name="temperatura" value="media"/>
                                    <label htmlFor="temperatura-media">Média</label>

                                    <input   type="radio" id="temperatura-alta"  name="temperatura" value="alta"/>
                                    <label htmlFor="temperatura-alta">Alta</label>
                                </div>

                                <p>Manutenção</p>
                                <div className="criar-radio-atributos">
                                    <input   type="radio" id="manutencao-baixa"  name="manutencao" value="baixa"/>
                                    <label htmlFor="manutencao-baixa">Baixa</label>

                                    <input   type="radio" id="manutencao-media"  name="manutencao" value="media"/>
                                    <label htmlFor="manutencao-media">Média</label>

                                    <input   type="radio" id="manutencao-alta"  name="manutencao" value="alta"/>
                                    <label htmlFor="manutencao-alta">Alta</label>
                                </div>
                            </form>

                        </div>
                    : null}

                </div>

            </div>
                <div className="criar-descricao_produto">
                    <h1>Descrição:</h1>
                    <textarea id="w3review" name="w3review" rows="4" cols="100" maxLength="1500">
                    </textarea>
                </div>

                <button onClick={(event)=>salvar_criacao(event)} id="salvar">Salvar</button>
                
            </div>
            <Footer />
        </div>
    )
}

export default criar_produto;