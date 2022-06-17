import './resultado_busca_personalizada.css'

function resultado_busca_personalizada(){
    return(
        <div>

            <div class="header">
                <h1>Recomendações</h1>
            </div>
            
            
            <div class="cards_recomendacoes">

                <forms class="formulario_personalizado">

                    <div class="recomendacao">
                        <div class="imagem_recomendacao">
                            <img src="images/produto.png"></img>
                        </div>
                        
                        <div class="texto_recomendacao">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Suspendisse metus lacus, congue eget fermentum vel, dignissim nec magna.
                            Vivamus eget diam mollis, ultrices purus et, dignissim ex</p>
                        </div>
                    </div>

                    <div class="recomendacao">
                        
                        <div class="texto_recomendacao">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Suspendisse metus lacus, congue eget fermentum vel, dignissim nec magna.
                            Vivamus eget diam mollis, ultrices purus et, dignissim ex</p>
                        </div>
                        
                        <div class="imagem_recomendacao">
                            <img src="images/produto.png"></img>
                        </div>
                    </div>

                    <div class="recomendacao">
                        
                        <div class="imagem_recomendacao">
                            <img src="images/produto.png"></img>
                        </div>
                        
                        <div class="texto_recomendacao">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Suspendisse metus lacus, congue eget fermentum vel, dignissim nec magna.
                            Vivamus eget diam mollis, ultrices purus et, dignissim ex</p>
                        </div>
                    </div>

                    <div class="recomendacao">
                        <div class="texto_recomendacao">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Suspendisse metus lacus, congue eget fermentum vel, dignissim nec magna.
                            Vivamus eget diam mollis, ultrices purus et, dignissim ex</p>
                        </div>
                        
                        <div class="imagem_recomendacao">
                            <img src="images/produto.png"></img>
                        </div>
                        
                    </div>
                    
                </forms>
                
            </div>

            <img class="folha" src="images/folha.png"/>
            
        
        </div>
    )
}

export default resultado_busca_personalizada;