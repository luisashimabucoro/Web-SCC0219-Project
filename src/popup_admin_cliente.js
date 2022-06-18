import './styles/popup_editar_cliente.css';
export {atualiza_contas} from './header';

function deletar_cliente(id) {
    
    localStorage.removeItem(`cliente${id}`);
    localStorage.setItem('qtdClientes', parseInt(localStorage.getItem('qtdClientes')) - 1);
    atualiza_contas();
}

function popup_admin_cliente(){

    const id_cliente = window.location.href.substring(window.location.href.lastIndexOf('?') + 1);
    // const id_cliente = 0;
    const cliente_atual = JSON.parse(localStorage.getItem(`cliente${id_cliente}`));
    console.log("cliente atual", cliente_atual);

    const handle_deletar_cliente = () => {
        console.log("id cliente", id_cliente);
        // console.log("cliente atual", cliente_atual);

    }
    return (

        <div className="edit-panel">
            <div className="janela_cliente">
                <a href="admin_clientes"><button>Voltar</button></a>

                <div className="info_cliente">
                    <p className="titulo_exclusao">Excluir Cliente:</p>
                    <div className="popup_info-text-fields">
                        <p><i>Nome do cliente:</i> {cliente_atual.nome_usuario}</p>
                        <br/>
                        <hr/>
                        <p><i>ID do cliente: </i>{id_cliente}</p>
                        <br/>

                        <hr/>
                        <p><i>Email do cliente: </i>{cliente_atual.email}</p>
                        <br/>

                        <hr/>
                        <p><i>Telefone do cliente: </i>{cliente_atual.telefone}</p>
                        <br/>
                        <hr/>
                    </div>
                </div>
                <div className="botoes">
                    <div>
                        <button id="cancel">Cancelar</button>
                    </div>
                    <div>
                        <button onClick={handle_deletar_cliente} href="admin_clientes" id="delete">Excluir</button>
                    </div>
                </div>
            </div>
        
        </div>

    )
}

export default popup_admin_cliente;