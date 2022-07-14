import './styles/menu_categorias.css';
import React from 'react';

function menu_categorias(){
    return (
        <div className="menu_categorias">
            <h2>Categorias</h2>
            <a href='loja_plantas'><h3 className="categoria-geral">Plantas</h3></a>
            <a href='loja_plantas_interior'><p className="categoria-especifica">Plantas de Interior</p></a>
            <a href='loja_plantas_horta'><p className="categoria-especifica">Horta</p></a>
            <a href='loja_plantas_arvores&amp;arbustos'><p className="categoria-especifica">Árvores e Arbustos</p></a>
            <a href='loja_plantas_bulbos'><p className="categoria-especifica">Bulbos</p></a>

            <a href="loja_vasos"><h3 className="categoria-geral">Vasos</h3></a>
            <a href="loja_vasos_ceramica" ><p>Cerâmica</p></a>
            <a href="loja_vasos_plastico"><p>Plástico</p></a>

            <a href="loja_outros"><h3 className="categoria-geral">Outros</h3></a>
            <a href="loja_outros_adubos&amp;fertilizantes"><p>Adubos & Fertilizantes</p></a>
            <a href="loja_outros_equipamentos"><p>Equipamentos</p></a>
        </div>
    )
}

export default menu_categorias;