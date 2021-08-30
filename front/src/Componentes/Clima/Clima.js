import React, { useEffect, useState } from "react";
import axios from "axios";

// Importación de Css y Componente reutilizable
import './Clima.css';
import Bloque from '../Bloque/Bloque';

// Importación de imagenes
import FondoCiudad from "../Imagenes/background.png";
import Temperatura from "../Imagenes/temp.png";
import Humedad from "../Imagenes/humidity.png";
import Viento from "../Imagenes/wind.png";

// Constante para conectar con la base de datos
const baseURL = "http://localhost:8080";

const Clima = () => {

    // Estado de weather inicializada vacía
    const [weather, setweather] = useState({});
    
    // Estado de ready inicializada False
    const [ready, setReady] = useState(false);

    // Puente entre Front/Back y cambio de estados en las variables
    useEffect(() => {
        axios.get(baseURL, { params: { key: 123 } }).then((response) => {
            setweather(response.data);
            setReady(true);
        });
    }, [])

    // Funcion Para cambiar la temperatura de Kelvin a Celsius
    const parseTemperatura = k => `${k - 273.15}°`;

    // Hash Table para indicar estado del clima
    const climas = {
        Clouds: "Nublado",
        Rainy: "Lluvioso",
        Sunny: "Soleado"
    }

    return <div className="Card">

        <div className="CardTop">
            <img id="O-FondoCiudad" src={FondoCiudad} />
            <div className="Datos">
                <h1 className="Ciudad">{weather?.name || "..."}</h1>
                <h1 className="Fecha">16 Abril 2021</h1>
                <h1 className="Grados">{ready && parseTemperatura(weather?.main?.temp) || "..."}</h1>
            </div>
            <div className="boxClima">
                <div className="Clima">
                    {ready && `Clima / ${climas[weather?.weather[0]?.main] || "..."}`}
                </div>
            </div>
        </div>

        <div className="CardBot">

            <Bloque
                img={Temperatura}
                titulo="Temperatura"
                informacion={ready && parseTemperatura(weather?.main?.temp) || "..."}
            />

            <hr className="Line" />

            <Bloque
                img={Humedad}
                titulo="Humedad"
                informacion={ready && `${weather?.main?.humidity || "..."}%`}
            />

            <hr className="Line" />

            <Bloque
                img={Viento}
                titulo="Velocidad Viento"
                informacion={ready && `${weather?.wind?.speed || "..."} m/s`}
            />
        </div>

    </div>
};

export default Clima;
