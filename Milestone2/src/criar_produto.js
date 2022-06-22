import './styles/criar_produto.css';
import $ from 'jquery';
import {useState} from 'react'
import React from 'react';


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
    const id_novo_produto = localStorage.getItem("quantidadeProdutosTotal");
    console.log(id_novo_produto);
    var novo_produto; 
    console.log(novo_produto);

    const salvar_criacao = () => {
        
        let tamanho = $('input[name=tamanho]:checked', '.form-criar-produto').val();
        let iluminacao = $('input[name=iluminacao]:checked', '.form-criar-produto').val();
        let temperatura = $('input[name=temperatura]:checked', '.form-criar-produto').val();
        let manutencao = $('input[name=manutencao]:checked', '.form-criar-produto').val();
        let descricao = $('#w3review').val();
        let subtipo = document.getElementById('tipos').value;
        let tipo = define_tipo(subtipo);

        if(!document.getElementById('produtoNome').value || !document.getElementById('produtoImg').value || 
        !document.getElementById('produtoPreco').value || !document.getElementById('produtoEstoque').value || !document.getElementById('tipos').value
        || !descricao){
            alert("Preencha tudo!");
            return;
        }
        novo_produto = new Produto(
            `${id_novo_produto}`,
            document.getElementById('produtoNome').value,
            document.getElementById('produtoImg').value,
            document.getElementById('produtoPreco').value,
            document.getElementById('produtoEstoque').value,
            tipo,
            document.getElementById('tipos').value,
            descricao,
            tamanho,
            iluminacao,
            temperatura,
            manutencao

        )
        console.log(novo_produto);
        localStorage.setItem(`produto${id_novo_produto}`, JSON.stringify(novo_produto));
        localStorage.setItem("quantidadeProdutosTotal", parseInt(localStorage.getItem("quantidadeProdutosTotal"))+1);

    }

    return (
        <div className="janela_criar_produto">

            <div className="criar-info_criar_produto">
                <div className="criar-info-text-fields">
                    <div className="entrada_nome">
                    <p>Nome do Produto</p>
                    <input autoComplete="new-password"  id="produtoNome" className="info-inputs " type="text"/>
                    </div>

                    <div className="entrada_preco">
                    <p>Preço Unitário</p>
                    <input autoComplete="new-password" id="produtoPreco"  className="info-inputs " type="text"/>
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
                                <option value="fertilizante">Equipamentos</option>
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

                <button onClick={salvar_criacao} id="salvar">Salvar</button>
                
            </div>
    )
}

export default criar_produto;