import CardListaCompras from './card_lista_compras';
import Footer from './footer';
import React from 'react';

function lista_compras(){
    return(
        <div>
            <div className="edit-panel">
                <h1> Compras: </h1>
                <CardListaCompras indice={0} />
            </div>

            <Footer />
        </div>
    )
}

export default lista_compras;