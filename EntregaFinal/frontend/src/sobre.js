import './styles/sobre.css'
import Footer from './footer';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function sobre(){

   
    useEffect(() =>{
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('/sobre');
        const items = await data.json();
        setItems(items);
    };

    return (

        <div>

            <div className="parent">
                <div className="titulo_sobre">

                    <h1>Sobre</h1>
                </div>
                
                <div style={{ fontFamily: 'Segoe UI' }} className="texto_sobre">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse metus lacus, congue eget fermentum vel, dignissim nec magna.
                Vivamus eget diam mollis, ultrices purus et, dignissim ex. Fusce sollicitudin
                felis non risus semper tincidunt. In sit amet lacus risus. Ut ultrices id velit a facilisis.
                Mauris luctus in tortor finibus varius. Maecenas euismod nibh enim, non tristique nisl 
                interdum sit amet. Duis nibh dolor, ultrices gravida ultricies ac, placerat at lorem. 
                Suspendisse luctus mi quis metus consectetur scelerisque. Sed blandit ante facilisis pretium tristique. 
                Nam semper, elit sed placerat fermentum, elit velit hendrerit turpis, a volutpat arcu dui a lectus. 
                Curabitur eget tellus ex. Cras commodo suscipit mauris, ut ullamcorper nunc finibus id.
                Mauris et tortor ligula. Phasellus eu libero dictum, commodo nibh in, mattis nisl.
                </div>
                
                <div className="titulo_fundadores">
                    <h1>Fundadores</h1>
                </div>

                <div className="cards_fundadores">
                    <div className="fundador">
                        <img src="images/luisa.png"/>
                        <h1>Luísa<br/>Shimabucoro</h1>
                        <p>-</p>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="fundador">
                        <img src="images/matheus.jpg"/>
                        <h1>Matheus<br/>Bermudes</h1>
                        <p>-</p>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="fundador">
                        <img src="images/wictor.png"/>
                        <h1>Wictor<br/>Dalbosco</h1>
                        <p>-</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <img className="folha" src="images/folha.png"/>
                <div className="sobre_ondinha"></div>

        <Footer />
            </div>
        </div>

    )
}

export default sobre;