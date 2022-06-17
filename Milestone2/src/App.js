// import Header from './header';
import Loja from './loja';
import Home from './home';
import Header from './header';
import Sobre from './sobre';
import Produto from './pagina_produto';
import Carrinho from './carrinho';
import EditProducts from './admin_products';
import EditarProduto from './editar_produto';
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
          <Route path="/loja_plantas" element={<Loja tipo_produto={'planta'} />}/>
          <Route path="/loja_bulbos" element={<Loja tipo_produto={'bulbo'} />}/>
          <Route path="/loja_vasos" element={<Loja tipo_produto={'vaso'} />}/>
          <Route path="/loja_equipamentos" element={<Loja tipo_produto={'equipamento'} />}/>
          <Route path="/loja_busca/" element={<Loja tipo_produto={'busca'} />}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/produto" element={<Produto />}/>
          <Route path="/carrinho" element={<Carrinho />}/>
          <Route path="/admin_products" element={<EditProducts />}/>
          <Route path="/editar_produto" element={<EditarProduto />}/>
        </Routes>
    </BrowserRouter>

      </div>

  );
}

export default App;
