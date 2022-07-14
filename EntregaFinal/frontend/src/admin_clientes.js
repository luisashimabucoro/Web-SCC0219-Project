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
                    <CardAdminCliente indice={8} />
                    <CardAdminCliente indice={9} />
                    <CardAdminCliente indice={10} />
                    <CardAdminCliente indice={11} />
                    <CardAdminCliente indice={12} />
                    <CardAdminCliente indice={13} />
                    <CardAdminCliente indice={14} />
                    <CardAdminCliente indice={15} />
                    <CardAdminCliente indice={16} />
                    <CardAdminCliente indice={17} />
                    <CardAdminCliente indice={18} />
                    <CardAdminCliente indice={19} />
                    <CardAdminCliente indice={20} />
                    <CardAdminCliente indice={21} />
                    <CardAdminCliente indice={22} />
                    <CardAdminCliente indice={23} />
                    <CardAdminCliente indice={24} />
                    <CardAdminCliente indice={25} />
                    <CardAdminCliente indice={26} />
                    <CardAdminCliente indice={27} />
                    <CardAdminCliente indice={28} />
                    <CardAdminCliente indice={29} />
                    <CardAdminCliente indice={30} />
                </div>

                <div className="lista_ondinha">
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default admin_clientes;