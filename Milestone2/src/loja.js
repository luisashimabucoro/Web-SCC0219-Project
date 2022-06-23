import React from 'react';
import Fileira from './display_loja'
import './styles/loja.css';
import Footer from './footer';

function loja(tipo_produto){
    return (
        <div className="parent">
            <Fileira tipo_produto={tipo_produto.tipo_produto} />
            <Footer />
        </div>
        
    )
}

export default loja;