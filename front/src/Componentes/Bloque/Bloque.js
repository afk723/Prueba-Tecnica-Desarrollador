import React from 'react';

// Componente reutilizable pasandole atributos que se van a necesitar
const Bloque = ({ img, titulo, informacion }) => (

    <div className="Bloque">
        <img id="O-Logos" src={img} />
        <div className="DatosBloque">
            <p className="TextoInformacion">{titulo}</p>
            <p className="TextoInformacion">{informacion}</p>
        </div>
    </div>
)

export default Bloque;
