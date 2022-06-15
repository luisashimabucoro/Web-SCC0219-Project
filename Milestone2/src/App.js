// import Header from './header';
import Loja from './loja';
import Home from './home';
import Header from './header';
import Sobre from './sobre';
import Produto from './pagina_produto';
import Carrinho from './carrinho';
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
          <Route path="/loja" element={<Loja />}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/produto" element={<Produto />}/>
          <Route path="/carrinho" element={<Carrinho />}/>
        </Routes>
    </BrowserRouter>
      </div>

  );
}

export default App;
