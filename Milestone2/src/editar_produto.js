import './styles/editar_produto.css';
import $ from 'jquery';
class Produto {
    constructor(id, name, img, price, estoque, tipo){
      this.id = id;
      this.name = name;
      this.img = img;
      this.price = price;
      this.estoque = estoque;
      this.tipo = tipo;
    }
  }

function editar_produto(){

    const id_produto = window.location.href.substring(window.location.href.lastIndexOf('?') + 1);
    var produto_atualizado;
    
    const salvar_edicao = () => {
        produto_atualizado = new Produto(
            `${id_produto}`,
            document.getElementById('produtoNome').value,
            document.getElementById('produtoImg').value,
            document.getElementById('produtoPreco').value,
            document.getElementById('produtoEstoque').value,
            document.getElementById('produtoTipo').value,
        )

        localStorage.setItem(`produto${id_produto}`, JSON.stringify(produto_atualizado));
    }

    console.log(produto_atualizado);

    return (
        <div className="janela_editar_produto">

            <div className="info_editar_produto">
                <div className="info-text-fields">
                    <div className="entrada_nome">
                    <p>Nome do Produto</p>
                    <input autoComplete="new-password"  id="produtoNome" className="info-inputs " type="text"/>
                    </div>
                    <div className="entrada_preco">
                    <p>Preço Unitário</p>
                    <input autoComplete="new-password" id="produtoPreco"  className="info-inputs " type="text" />
                    </div>

                    <div className="entrada_estoque">

                    <p>Estoque Disponível</p>
                    <input autoComplete="new-password"  id="produtoEstoque" className="info-inputs " type="number" />
                    </div>

                    <div className="entrada_img">

                    <p>Link da Imagem</p>
                    <input autoComplete="new-password" id="produtoImg"  className="info-inputs " type="url" />
                    </div>

                    <div className="entrada_tipo">
                    <p>Tipo</p>
                    <label for="browser">Choose your browser from the list:</label>


                    <input list="browsers" name="browser" id="browser"/>

                    <datalist id="browsers">
                        <option value="Internet Explorer"/>
                        <option value="Firefox"/>
                        <option value="Chrome"/>
                        <option value="Opera"/>
                        <option value="Safari"/>
                    </datalist>

                    {/* <input autoComplete="new-password" id="produtoTipo"  className="info-inputs " type="text" /> */}
                    </div>

                    
                </div>
                <div className="info-buttons">

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
                <button onClick={salvar_edicao} className="salvar_produto">Salvar</button>
                  
                

            </div>
        </div>
    )
}

export default editar_produto;