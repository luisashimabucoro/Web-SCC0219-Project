import './styles/editar_produto.css';
import $ from 'jquery';
import React from 'react';

class Produto {
    constructor(id, name, img, price, estoque, quantidade_vendida, tipo, subtipo, descricao, tamanho, iluminacao, temperatura, manutencao){
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.estoque = estoque;
        this.quantidadeVendida = quantidade_vendida
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
    var planta_subtipos = ["interior", "horta", "arvore", "bulbo"];
    var vasos_subtipos = ["ceramica", "plastico"];
    var outros_subtipos = ["adubo", "equipamento"];

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
function editar_produto(){

    const id_produto = window.location.href.substring(window.location.href.lastIndexOf('?') + 1);
    const produto_a_ser_editado = JSON.parse(localStorage.getItem(`produto${id_produto}`));
    console.log(produto_a_ser_editado);

    var produto_atualizado; 
    console.log(produto_atualizado);

    const excluir_produto = () => {
        alert("Removendo");
        localStorage.setItem(`produto${id_produto}`, "");
        localStorage.setItem('quantidadeProdutosTotal', parseInt(localStorage.getItem('quantidadeProdutosTotal'))-1);
        navigate('/admin_products')
    }
    
    const salvar_edicao = () => {
        
        if(!document.getElementById('produtoImg').checkValidity()){
            alert("Link de imagem inválido!");
            return;
        }
        
        let tamanho = $('input[name=tamanho]:checked', '.form-editar-produto').val();
        let iluminacao = $('input[name=iluminacao]:checked', '.form-editar-produto').val();
        let temperatura = $('input[name=temperatura]:checked', '.form-editar-produto').val();
        let manutencao = $('input[name=manutencao]:checked', '.form-editar-produto').val();
        let descricao = $('#w3review').val();
        console.log("tamanho", tamanho, "iluminacao:", iluminacao, "temperatura:", temperatura, "manutencao:", manutencao, "descricao:", descricao);
        let subtipo = document.getElementById('tipos').value;
        let tipo = define_tipo(subtipo);

        if(!document.getElementById('produtoNome').value || !document.getElementById('produtoImg').value || 
        !document.getElementById('produtoPreco').value || !document.getElementById('produtoEstoque').value || !document.getElementById('tipos').value
        || !descricao){
            alert("Preencha tudo!");
            return;
        }
        produto_atualizado = new Produto(
            `${id_produto}`,
            document.getElementById('produtoNome').value,
            document.getElementById('produtoImg').value,
            document.getElementById('produtoPreco').value,
            document.getElementById('produtoEstoque').value,
            produto_a_ser_editado.quantidadeVendida,
            tipo,
            document.getElementById('tipos').value,
            descricao,

        )
        console.log(produto_atualizado);
        localStorage.setItem(`produto${id_produto}`, JSON.stringify(produto_atualizado));
    }
    
    console.log(document.getElementsByClassName('editar-aspectos-planta')[0]);

    console.log(produto_a_ser_editado.tipo);
    if(produto_a_ser_editado.tipo != "planta"){
        $('#div_aspectos').hide();
        console.log("nao eh planta")
        
    }

    return (
            <div className="janela_editar_produto">

            <div className="editar-info_editar_produto">
                <div className="editar-info-text-fields">
                    <div className="entrada_nome">
                    <p>Nome do Produto</p>
                    <input defaultValue={produto_a_ser_editado.name} autoComplete="new-password"  id="produtoNome" className="info-inputs " type="text"/>
                    </div>

                    <div className="entrada_preco">
                    <p>Preço Unitário</p>
                    <input defaultValue={produto_a_ser_editado.price}  autoComplete="new-password" id="produtoPreco"  className="info-inputs " type="number"/>
                    </div>

                    <div className="entrada_estoque">
                    <p>Estoque Disponível</p>
                    <input defaultValue={produto_a_ser_editado.estoque}  autoComplete="new-password"  id="produtoEstoque" className="info-inputs " type="number" />
                    </div>

                    <div className="entrada_img">
                    <p>Link da Imagem</p>
                    <input defaultValue={produto_a_ser_editado.img}  autoComplete="new-password" id="produtoImg"  className="info-inputs " type="url" />
                    </div>
                </div>

                <div className="editar-info-buttons">

                    <div className="editar-radio-atributos entrada_tipo">
                        <div className="selecionar-tipo">
                            <p>Tipo</p>
                            <select  defaultValue={produto_a_ser_editado.subtipo} id="tipos">
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


                    {produto_a_ser_editado.tipo == "planta" ?
                        <div id="div_aspectos" className="editar-aspectos-planta">
                        <form className="form-editar-produto">

                            <div className="editar_pergunta">
                                <p>Tamanho</p>
                                <div className="editar-radio-atributos">
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
                            <div className="editar-radio-atributos">
                                <input   type="radio" id="iluminacao-baixa"  name="iluminacao" value="baixa"/>
                                <label htmlFor="iluminacao-baixa">Sombra</label>

                                <input   type="radio" id="iluminacao-media"  name="iluminacao" value="media"/>
                                <label htmlFor="iluminacao-media">Meia-sombra</label>

                                <input   type="radio" id="iluminacao-alta"  name="iluminacao" value="alta"/>
                                <label htmlFor="iluminacao-alta">Sol</label>
                            </div>

                            <p>Temperatura</p>
                            <div className="editar-radio-atributos">
                                <input   type="radio" id="temperatura-baixa"  name="temperatura" value="baixa"/>
                                <label htmlFor="temperatura-baixa">Baixa</label>

                                <input   type="radio" id="temperatura-media"  name="temperatura" value="media"/>
                                <label htmlFor="temperatura-media">Média</label>

                                <input   type="radio" id="temperatura-alta"  name="temperatura" value="alta"/>
                                <label htmlFor="temperatura-alta">Alta</label>
                            </div>

                            <p>Manutenção</p>
                            <div className="editar-radio-atributos">
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
                <div className="editar-descricao_produto">
                    <h1>Descrição:</h1>
                    <textarea defaultValue={produto_a_ser_editado.descricao} id="w3review" name="w3review" rows="4" cols="100" maxLength="1500">
                    </textarea>
                </div>

                <button onClick={salvar_edicao} id="salvar-produto">Salvar</button>
                <button onClick={excluir_produto} id="excluir-produto">Excluir</button>
                
            </div>







        // <div className="janela_editar_produto">

        //     <div className="info_editar_produto">
        //         <div className="info-text-fields">
        //             <div className="entrada_nome">
        //             <p>Nome do Produto</p>
        //             <input defaultValue={produto_a_ser_editado.name} autoComplete="new-password"  id="produtoNome" className="info-inputs " type="text"/>
        //             </div>

        //             <div className="entrada_preco">
        //             <p>Preço Unitário</p>
        //             <input defaultValue={produto_a_ser_editado.price}  autoComplete="new-password" id="produtoPreco"  className="info-inputs " type="text"/>
        //             </div>

        //             <div className="entrada_estoque">
        //             <p>Estoque Disponível</p>
        //             <input defaultValue={produto_a_ser_editado.estoque}  autoComplete="new-password"  id="produtoEstoque" className="info-inputs " type="number" />
        //             </div>

        //             <div className="entrada_img">
        //             <p>Link da Imagem</p>
        //             <input defaultValue={produto_a_ser_editado.img}  autoComplete="new-password" id="produtoImg"  className="info-inputs " type="url" />
        //             </div>

                   

                    
        //         </div>
        //         <div className=" ">

        //             <div className="radio-atributos entrada_tipo">
        //                 <p>Tipo</p>

        //                 <select  selected={produto_a_ser_editado.subtipo} id="tipos">
        //                     <option value="interior">Plantas de Interior</option>
        //                     <option value="horta">Horta</option>
        //                     <option value="arvore">Árvores e Arbustos</option>
        //                     <option value="bulbo">Bulbos</option>
        //                     <option value="ceramica">Cerâmica</option>
        //                     <option value="plastico">Plástico</option>
        //                     <option value="adubo">Adubos & Fertilizantes</option>
        //                     <option value="equipamento">Equipamentos</option>
        //                 </select>
        //             </div>

        //             <div className="aspectos_planta">
        //                 <p>Tamanho</p>
        //                 <div className="radio-atributos">
        //                     <input autoComplete="new-password"  type="radio" id="tamanho-pequeno"  name="tamanho" value="pequeno"/>
        //                     <label htmlFor="tamanho-pequeno">Pequeno</label><br/>
        
        //                     <input autoComplete="new-password"  type="radio" id="tamanho-medio"  name="tamanho" value="medio"/>
        //                     <label htmlFor="tamanho-medio">Médio</label><br/>
        
        //                     <input autoComplete="new-password"  type="radio" id="tamanho-grande"  name="tamanho" value="grande"/>
        //                     <label htmlFor="tamanho-grande">Grande</label>
        //                 </div>
        
        //                 <p>Iluminação</p>
        //                 <div className="radio-atributos">
        //                     <input autoComplete="new-password"  type="radio" id="iluminacao-baixa"  name="iluminacao" value="baixa"/>
        //                     <label htmlFor="iluminacao-baixa">Sombra</label><br/>
        
        //                     <input autoComplete="new-password"  type="radio" id="iluminacao-media"  name="iluminacao" value="media"/>
        //                     <label htmlFor="iluminacao-media">Meia-sombra</label><br/>
        
        //                     <input autoComplete="new-password"  type="radio" id="iluminacao-alta"  name="iluminacao" value="alta"/>
        //                     <label htmlFor="iluminacao-alta">Sol</label>
        //                 </div>
        
        //                 <p>Temperatura</p>
        //                 <div className="radio-atributos">
        //                     <input autoComplete="new-password"  type="radio" id="temperatura-baixa"  name="temperatura" value="baixa"/>
        //                     <label htmlFor="temperatura-baixa">Baixa</label><br/>
        
        //                     <input autoComplete="new-password"  type="radio" id="temperatura-media"  name="temperatura" value="media"/>
        //                     <label htmlFor="temperatura-media">Média</label><br/>
        
        //                     <input autoComplete="new-password"  type="radio" id="temperatura-alta"  name="temperatura" value="alta"/>
        //                     <label htmlFor="temperatura-alta">Alta</label>
        //                 </div>
        
        //                 <p>Manutenção</p>
        //                 <div className="radio-atributos">
        //                     <input autoComplete="new-password"  type="radio" id="manutencao-baixa"  name="manutencao" value="baixa"/>
        //                     <label htmlFor="manutencao-baixa">Baixa</label><br/>
        
        //                     <input autoComplete="new-password"  type="radio" id="manutencao-media"  name="manutencao" value="media"/>
        //                     <label htmlFor="manutencao-media">Média</label><br/>
        
        //                     <input autoComplete="new-password"  type="radio" id="manutencao-alta"  name="manutencao" value="alta"/>
        //                     <label htmlFor="manutencao-alta">Alta</label>
        //                 </div>
        //             </div>

        //         </div>

        //         <div className="descricao_produto">
        //             <h1>Descrição:</h1>
        //             <textarea id="w3review" name="w3review" rows="4" cols="100" maxlength="1500">
                        
        //             </textarea>
        //         </div>
        //         <button onClick={salvar_edicao} className="salvar_produto">Salvar</button>
                  
                

        //     </div>
        // </div>
    )
}

export default editar_produto;
