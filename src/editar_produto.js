import './styles/editar_produto.css';
import $ from 'jquery';
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
    const salvar_edicao = () => {
        
        let subtipo = document.getElementById('tipos').value;
        let tipo = define_tipo(subtipo);
        produto_atualizado = new Produto(
            `${id_produto}`,
            document.getElementById('produtoNome').value,
            document.getElementById('produtoImg').value,
            document.getElementById('produtoPreco').value,
            document.getElementById('produtoEstoque').value,
            tipo,
            document.getElementById('tipos').value

        )
        console.log(produto_atualizado);
        localStorage.setItem(`produto${id_produto}`, JSON.stringify(produto_atualizado));
    }

    return (
        <div className="janela_editar_produto">

            <div className="info_editar_produto">
                <div className="info-text-fields">
                    <div className="entrada_nome">
                    <p>Nome do Produto</p>
                    <input defaultValue={produto_a_ser_editado.name} autoComplete="new-password"  id="produtoNome" className="info-inputs " type="text"/>
                    </div>

                    <div className="entrada_preco">
                    <p>Preço Unitário</p>
                    <input defaultValue={produto_a_ser_editado.price}  autoComplete="new-password" id="produtoPreco"  className="info-inputs " type="text"/>
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
                <div className="info-buttons">

                    <div className="radio-atributos entrada_tipo">
                        <p>Tipo</p>

                        <select  selected={produto_a_ser_editado.subtipo} id="tipos">
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

                    <div className="aspectos_planta">
                        <p>Tamanho</p>
                        <div className="radio-atributos">
                            <input autoComplete="new-password"  type="radio" id="tamanho-pequeno"  name="tamanho" value="pequeno"/>
                            <label htmlFor="tamanho-pequeno">Pequeno</label><br/>
        
                            <input autoComplete="new-password"  type="radio" id="tamanho-medio"  name="tamanho" value="medio"/>
                            <label htmlFor="tamanho-medio">Médio</label><br/>
        
                            <input autoComplete="new-password"  type="radio" id="tamanho-grande"  name="tamanho" value="grande"/>
                            <label htmlFor="tamanho-grande">Grande</label>
                        </div>
        
                        <p>Iluminação</p>
                        <div className="radio-atributos">
                            <input autoComplete="new-password"  type="radio" id="iluminacao-baixa"  name="iluminacao" value="baixa"/>
                            <label htmlFor="iluminacao-baixa">Sombra</label><br/>
        
                            <input autoComplete="new-password"  type="radio" id="iluminacao-media"  name="iluminacao" value="media"/>
                            <label htmlFor="iluminacao-media">Meia-sombra</label><br/>
        
                            <input autoComplete="new-password"  type="radio" id="iluminacao-alta"  name="iluminacao" value="alta"/>
                            <label htmlFor="iluminacao-alta">Sol</label>
                        </div>
        
                        <p>Temperatura</p>
                        <div className="radio-atributos">
                            <input autoComplete="new-password"  type="radio" id="temperatura-baixa"  name="temperatura" value="baixa"/>
                            <label htmlFor="temperatura-baixa">Baixa</label><br/>
        
                            <input autoComplete="new-password"  type="radio" id="temperatura-media"  name="temperatura" value="media"/>
                            <label htmlFor="temperatura-media">Média</label><br/>
        
                            <input autoComplete="new-password"  type="radio" id="temperatura-alta"  name="temperatura" value="alta"/>
                            <label htmlFor="temperatura-alta">Alta</label>
                        </div>
        
                        <p>Manutenção</p>
                        <div className="radio-atributos">
                            <input autoComplete="new-password"  type="radio" id="manutencao-baixa"  name="manutencao" value="baixa"/>
                            <label htmlFor="manutencao-baixa">Baixa</label><br/>
        
                            <input autoComplete="new-password"  type="radio" id="manutencao-media"  name="manutencao" value="media"/>
                            <label htmlFor="manutencao-media">Média</label><br/>
        
                            <input autoComplete="new-password"  type="radio" id="manutencao-alta"  name="manutencao" value="alta"/>
                            <label htmlFor="manutencao-alta">Alta</label>
                        </div>
                    </div>

                </div>
                <button onClick={salvar_edicao} className="salvar_produto">Salvar</button>
                  
                

            </div>
        </div>
    )
}

export default editar_produto;