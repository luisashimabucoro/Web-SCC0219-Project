import CardMeusPedidos from './card_meus_pedidos';
import './styles/meus_pedidos.css';
import Footer from './footer';
import React from 'react';

function meus_pedidos(){
    return(
        <div>
            <div className="painel-meus-pedidos">
                <h1> Meus Pedidos: </h1>
                <CardMeusPedidos indice={0} />
                {/* <CardMeusPedidos indice={1} /> */}
                {/* <CardMeusPedidos indice={2} /> */}
                {/* <CardMeusPedidos indice={3} /> */}
                {/* <CardMeusPedidos indice={4} /> */}
                {/* <CardMeusPedidos indice={5} /> */}

                {/* <CardListaCompras indice={1} /> */}
                {/* <CardListaCompras indice={2} /> */}
                {/* <CardListaCompras indice={3} /> */}
            </div>

            {/* <div className="ondinha">
                <img src="images/detalhe.png" alt="Detalhe onda verde"/>
            </div> */}
            <Footer />
            <div className="ondinha-meus-pedidos"></div>
        </div>
    )
}

export default meus_pedidos;