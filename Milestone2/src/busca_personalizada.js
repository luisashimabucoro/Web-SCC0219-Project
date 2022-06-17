import './busca_personalizada.css'
function busca_personalizada(){
    return(
        <div>

            <div class="header">

                <div class="titulo_busca_personalizada">
                    <h1>Busca Personalizada</h1>
                </div>
                
                <div class="texto_sobre">
                    Precisamos de algumas informações para decidir qual o melhor tipo de planta para seu espaço
                </div>

            </div>
            
            
            <div class="cards_perguntas">

                <forms class="formulario_personalizado">

                <div class="pergunta">
                        <label>Quanto <strong>espaço</strong> você tem disponível para plantas?</label>
                        
                        <div class="resposta">
                            
                            <div>
                                <input type="radio" id="rad1" name="espaco"></input>
                                <label for="rad1"> Pouco (Apartamento)</label>
                            </div>

                            <div>
                                <input type="radio" id="rad2" name="espaco"></input>
                                <label for="rad2"> Médio (Quintal Modesto)</label>
                            </div>  

                            <div>
                                <input type="radio" id="rad3" name="espaco"></input>
                                <label for="rad3"> Muito (Jardinzão)</label>
                            </div> 
                            
                        </div>
                    </div>

                    <div class="pergunta">
                        <label>Quão <strong>iluminado</strong> é o ambiente?</label>
                        
                        <div class="resposta">

                            <div>
                                <input type="radio" id="rad4" name="iluminacao"></input>
                                <label for="rad4"> Pouco (Sombra)</label>
                            </div>

                            <div>
                                <input type="radio" id="rad5" name="iluminacao"></input>
                                <label for="rad5"> Médio (Luz Indireta)</label>
                            </div>  

                            <div>
                                <input type="radio" id="rad6" name="iluminacao"></input>
                                <label for="rad6"> Muito (Luz Direta)</label>
                            </div> 
                            
                        </div>
                    </div>

                    <div class="pergunta">
                        <label>Qual a <strong>temperatura</strong> do ambiente?</label>

                        <div class="resposta">
                            <div>
                                <input type="radio" id="rad7" name="temperatura"></input>
                                <label for="rad7"> Baixa (Friozinho)</label>
                            </div>

                            <div>
                                <input type="radio" id="rad8" name="temperatura"></input>
                                <label for="rad8"> Média (Amena)</label>
                            </div>  

                            <div>
                                <input type="radio" id="rad9" name="temperatura"></input>
                                <label for="rad9"> Alta (Calor)</label>
                            </div>  
                        </div>
                    </div>

                    <div class="pergunta">
                        <label>Quanta <strong>manutenção</strong> você pode dar à planta?</label>
                        
                        <div class="resposta">    
                            <div>
                                <input type="radio" id="rad10" name="manutencao"></input>
                                <label for="rad10"> Pouco (Quinzenal)</label>
                            </div>

                            <div>
                                <input type="radio" id="rad11" name="manutencao"></input>
                                <label for="rad11"> Médio (Toda Semana)</label>
                            </div>  

                            <div>
                                <input type="radio" id="rad12" name="manutencao"></input>
                                <label for="rad12"> Muito (Diária)</label>
                            </div>   
                        </div>
                    </div>

                    <div class="botao_pesquisa">
                        <button id="btn">
                        Pesquisar
                        </button>
                    </div>
                    

                </forms>
                
            </div>

            <img class="folha" src="images/folha.png"/>
            
        
        </div>
    )
}

export default busca_personalizada;