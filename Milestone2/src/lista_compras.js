import CardListaCompras from './card_lista_compras';
import Footer from './footer';

function lista_compras(){
    return(
        <div>
            <div className="edit-panel">
                <h1> Compras: </h1>
                <CardListaCompras indice={0} />
                {/* <CardListaCompras indice={1} /> */}
                {/* <CardListaCompras indice={2} /> */}
                {/* <CardListaCompras indice={3} /> */}
            </div>

            <Footer />
        </div>
    )
}

export default lista_compras;