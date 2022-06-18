import CardAdminCliente from './card_admin_cliente';

function admin_clientes(){
    return(
        <div>
            <div className="edit-panel">
                <h1> Clientes </h1>
                <CardAdminCliente indice={0} />
                <CardAdminCliente indice={1} />
                <CardAdminCliente indice={2} />
                <CardAdminCliente indice={3} />
            </div>

            <div className="ondinha">
                <img src="images/detalhe.png" alt="Detalhe onda verde"/>
            </div>
        </div>
    )
}

export default admin_clientes;