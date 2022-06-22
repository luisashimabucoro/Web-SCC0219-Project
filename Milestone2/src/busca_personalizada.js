import './styles/busca_personalizada.css'
import $ from 'jquery'
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import React from 'react';

function busca_personalizada(){
    const navigate = useNavigate();

    const handle_pesquisa = () => { 
        let tamanho = $('input[name=espaco]:checked', '.formulario_personalizado').val();
        let iluminacao = $('input[name=iluminacao]:checked', '.formulario_personalizado').val();
        let temperatura = $('input[name=temperatura]:checked', '.formulario_personalizado').val();
        let manutencao = $('input[name=manutencao]:checked', '.formulario_personalizado').val();
        
        if(tamanho && iluminacao && temperatura && manutencao){
            let objeto_busca_personalizada = {
                tamanho, iluminacao, temperatura, manutencao
            }
            localStorage.setItem('busca_personalizada', JSON.stringify(objeto_busca_personalizada));
            navigate('/loja_busca_personalizada');
        }else{
            alert('Por favor, preencha todos os campos')
        }
    }

    return(
        <div className="content contentbusca">
            <div className="busca-header">

                <div className="titulo_busca_personalizada">
                    <h1>Busca Personalizada</h1>
                </div>
                
                <div className="texto_busca_personalizada">
                    Precisamos de algumas informações para decidir qual o melhor tipo de planta para seu espaço
                </div>

            </div>
            
            
            <div className="cards_perguntas">

                <form className="formulario_personalizado">

                    <div className="pergunta">
                        <label>Quanto <strong>espaço</strong> você tem disponível para plantas?</label>
                        
                        <div className="resposta">
                                <div>
                                    <input type="radio" value="pequeno" id="rad1" name="espaco"></input>
                                    <label htmlFor="rad1"> Pouco (Apartamento)</label>
                                </div>

                                <div>
                                    <input type="radio" value="medio" id="rad2" name="espaco"></input>
                                    <label htmlFor="rad2"> Médio (Quintal Modesto)</label>
                                </div>  

                                <div>
                                    <input type="radio" value="grande" id="rad3" name="espaco"></input>
                                    <label htmlFor="rad3"> Muito (Jardinzão)</label>
                                </div> 

                            
                        </div>
                    </div>

                    <div className="pergunta">
                        <label>Quão <strong>iluminado</strong> é o ambiente?</label>
                        
                        <div className="resposta">

                            <div>
                                <input type="radio" value="pouca" id="rad4" name="iluminacao"></input>
                                <label htmlFor="rad4"> Pouco (Sombra)</label>
                            </div>

                            <div>
                                <input type="radio" value="media" id="rad5" name="iluminacao"></input>
                                <label htmlFor="rad5"> Médio (Luz Indireta)</label>
                            </div>  

                            <div>
                                <input type="radio"value="muita" id="rad6" name="iluminacao"></input>
                                <label htmlFor="rad6"> Muito (Luz Direta)</label>
                            </div> 
                            
                        </div>
                    </div>

                    <div className="pergunta">
                        <label>Qual a <strong>temperatura</strong> do ambiente?</label>

                        <div className="resposta">
                            <div>
                                <input type="radio"value="baixa" id="rad7" name="temperatura"></input>
                                <label htmlFor="rad7"> Baixa (Friozinho)</label>
                            </div>

                            <div>
                                <input type="radio"value="media" id="rad8" name="temperatura"></input>
                                <label htmlFor="rad8"> Média (Amena)</label>
                            </div>  

                            <div>
                                <input type="radio" value="alta" id="rad9" name="temperatura"></input>
                                <label htmlFor="rad9"> Alta (Calor)</label>
                            </div>  
                        </div>
                    </div>

                    <div className="pergunta">
                        <label>Quanta <strong>manutenção</strong> você pode dar à planta?</label>
                        
                        <div className="resposta">    
                            <div>
                                <input type="radio" value="pouca" id="rad10" name="manutencao"></input>
                                <label htmlFor="rad10"> Pouco (Quinzenal)</label>
                            </div>

                            <div>
                                <input type="radio" value="media" id="rad11" name="manutencao"></input>
                                <label htmlFor="rad11"> Médio (Toda Semana)</label>
                            </div>  

                            <div>
                                <input type="radio" value="muita" id="rad12" name="manutencao"></input>
                                <label htmlFor="rad12"> Muito (Diária)</label>
                            </div>   
                        </div>
                    </div>

                    <div className="botao_pesquisa">
                        <button type="button" onClick={handle_pesquisa} id="btn_buscapersonalizada">
                        Pesquisar
                        </button>
                    </div>
                    

                </form>
                
            </div>

            <img className="folha" src="images/folha.png"/>
            
        <Footer />
        </div>
    )
}

export default busca_personalizada;