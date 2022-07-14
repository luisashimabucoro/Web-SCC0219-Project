import Header from './header';
import Home from './home';
import Loja from './loja';
import BuscaPersonalizada from './busca_personalizada'
import Sobre from './sobre';
import Produto from './pagina_produto';
import Carrinho from './carrinho';
import AdminProdutos from './admin_products';
import AdminClientes from './admin_clientes';
import EditarProduto from './editar_produto';
import EditarClientes from './popup_admin_cliente';
import CompraFinalizada from './compra_concluida';
import CriarProduto from './criar_produto';
import FinalizarCompra from './finalizarCompra';
import ListaCompras from './lista_compras';
import MeusPedidos from './meus_pedidos';
import VisualizarCompra from './popup_visualizar_compra';
import React from 'react';
import EditarInfoCliente from './editar_info_cliente';

/* eslint-disable */

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
    return (
      <div>
        <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/home" element={<Home />}/>
              
              <Route path="/loja" element={<Loja tipo_produto={'loja'} />}/>
              <Route path="/loja_plantas_interior" element={<Loja tipo_produto={'interior'}/>} />
              <Route path="/loja_plantas_horta" element={<Loja tipo_produto={'horta'}/>} />
              <Route path="/loja_plantas_arvores&amp;arbustos" element={<Loja tipo_produto={'arvore'} />} />
              <Route path="/loja_plantas_bulbos" element={<Loja tipo_produto={'bulbo'} />} />
              <Route path="/loja_plantas" element={<Loja tipo_produto={'planta'} />}/>

              <Route path="/loja_vasos" element={<Loja tipo_produto={'vaso'} />}/>
              <Route path="/loja_vasos_ceramica" element={<Loja tipo_produto={'ceramica'} />}/>
              <Route path="/loja_vasos_plastico" element={<Loja tipo_produto={'plastico'} />}/>

              <Route path="/loja_outros" element={<Loja tipo_produto={'outros'} />}/>
              <Route path="/loja_outros_equipamentos" element={<Loja tipo_produto={'equipamento'} />}/>
              <Route path="/loja_outros_adubos&amp;fertilizantes" element={<Loja tipo_produto={'adubo'} />}/>

              <Route path="/loja_busca/" element={<Loja tipo_produto={'busca'} />}/>
              <Route path="/loja_busca_personalizada" element={<Loja tipo_produto={'busca_personalizada'} />}/>

              <Route path="/sobre" element={<Sobre />}/>
              <Route path="/busca_personalizada" element={<BuscaPersonalizada />}/>
              <Route path="/produto" element={<Produto />}/>
              <Route path="/carrinho" element={<Carrinho />}/>
              <Route path="/admin_products" element={<AdminProdutos />}/>
              <Route path="/admin_clientes" element={<AdminClientes />}/>
              <Route path="/editar_cliente" element={<EditarClientes />}/>

              <Route path="/compra_concluida" element={<CompraFinalizada />}/>
              <Route path="/finalizar_compra" element={<FinalizarCompra />}/>


              <Route path="/editar_produto" element={<EditarProduto />}/>
              <Route path="/criar_produto" element={<CriarProduto />}/>

              <Route path="/lista_compras" element={<ListaCompras />}/>
              <Route path="/meus_pedidos" element={<MeusPedidos />}/>

              <Route path="/visualizar_compra" element={<VisualizarCompra />}/>

              <Route path="/editar_info_cliente" element={<EditarInfoCliente />}/>


            </Routes>
        </BrowserRouter>

      </div>

    );
}

export default App;
