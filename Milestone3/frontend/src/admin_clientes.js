import CardAdminCliente from './card_admin_cliente';
import Footer from './footer';
import React from 'react';

function admin_clientes(){
    return(
        <div>

            <div>
                <div className="edit-panel">
                    <h1> Clientes </h1>
                    <CardAdminCliente indice={0} />
                    <CardAdminCliente indice={1} />
                    <CardAdminCliente indice={2} />
                    <CardAdminCliente indice={4} />
                    <CardAdminCliente indice={5} />
                    <CardAdminCliente indice={6} />
                    <CardAdminCliente indice={7} />
                </div>

                <div className="lista_ondinha">
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default admin_clientes;