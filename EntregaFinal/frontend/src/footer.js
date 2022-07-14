import './styles/footer.css';
import React from 'react';


function footer(){
    return (
        <div className="rodape">
            <div className="textinhos">
                <div className="atendimento">
                    <h3>ATENDIMENTO</h3>
                    <h6><b>Email:</b> plantcare@gmail.com</h6>
                    <h6><b>Tel:</b> (16) 99999 - 9999</h6>
                    <br/>
                    <h6>Disponível de segunda à <br/>sexta, 8h00-18h00</h6>
                </div>
                <div className="localizacao">
                    <h3>LOCALIZAÇÃO</h3>
                    <h6><b>Endereço:</b> Rua das Florestas São Carlenses, 48   - São Carlos, SP - 19816-000</h6>
                    <br/>
                    <h6><b>Ponto de Referência:</b> Savegnago (Loja 2) </h6>
                </div>
            </div>
            <div className="logomarca"></div>
            {/* <img src="../../public/images/logo_fundo_branco.png"/> */}
        </div>
    )
}

export default footer;