import './styles/home.css';
import Footer from './footer';

function home(){
    return (
        <div className="parent">
            <div className="content">

                <div className="foto1">
                    <div className="quiz">
                        <img src="images/logo_fundo_escuro.png"/>
                        <h1>Descubra quais são as melhores plantas
                            para sua casa.
                        </h1>
                        <a href="#" className="buttonQuiz">Fazer o Quiz</a>
                    </div>
                </div>
                
                <div className="ondinha"></div>

                <div className="tipos_produtos">
                    <h1>Produtos</h1>
                    <div className="lista_produtos">
                        <ul>
                            <li>
                                <a className="linkproduto">
                                    <article>
                                        <div className="slide" id="plantasCasa">
                                            <h2>Plantas para casa</h2>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li>
                                <a className="linkproduto">
                                    <article>
                                        <div className="slide" id="suculentas">
                                            <h2>Suculentas</h2>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li>
                                <a className="linkproduto">
                                    <article>
                                        <div className="slide" id="arbustos">
                                            <h2>Arbustos e<br/>Árvores</h2>

                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li>
                                <a className="linkproduto">
                                <article>
                                    <div className="slide" id="hortinha">
                                            <h2>Hortinha</h2>
                                        </div>
                                    </article>
                                </a>
                            </li>
                        </ul>
                        <ul className="lista2">
                            <li>
                                <a className="linkproduto">
                                    <article>
                                        <div className="slide" id="vasos">
                                            <h2>Vasos</h2>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li>
                                <a className="linkproduto">
                                    <article>
                                        <div className="slide" id="equipamentos">
                                            <h2>Equipamentos de<br/>Jardinagem</h2>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li>
                                <a className="linkproduto">
                                    <article>
                                        <div className="slide" id="fertilizantes">
                                            <h2>Adubos e<br/>Fertilizantes</h2>
                                        </div>
                                    </article>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default home;