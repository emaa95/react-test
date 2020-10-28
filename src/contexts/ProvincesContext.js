import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'; 

// esto es lo que se exporta para poder acceder a los valores
export const ProvinciesContext = createContext();

const ProvinciesProvider = (props) => {

    const [provincies, setProvincies] = useState([]);

    // useEffect es una funcion, solo hace falta llamarla
    useEffect( () => {

        const SearchProvincies = async () => {
            // hay un plugin llamado JSON view que es para ver mas bonito los json
            const response = await axios.get('https://apis.datos.gob.ar/georef/api/provincias');
            console.log(response.data.provincias);
            setProvincies(response.data.provincias)
        }
        
        SearchProvincies();

    },[])

    // se requiere especificar que valores queres exportar
    return(
        <ProvinciesContext.Provider
            value={{
                provincies
            }}
        > {props.children}</ProvinciesContext.Provider>

    );
}
    export default ProvinciesProvider;
        

    

