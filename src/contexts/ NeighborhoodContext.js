import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'; 


export const NeighborhoodContext = createContext();

const NeighborhoodProvider = (props) => {
   
    const [neighborhoods, setNeighborhood] = useState([]);

    
    useEffect( () => {

        const SearchNeighborhood = async () => {
            const response = await axios.get('https://gobiernoabierto.cordoba.gob.ar/api/v2/barrios/barrios');
            console.log(response.data.barrios);
            setNeighborhood(response.data.barrios)
        }
        
        SearchNeighborhood();

    },[])

    // se requiere especificar que valores queres exportar
    return(
        <NeighborhoodContext.Provider
            value={{
                neighborhoods
            }}
        > {props.children}</NeighborhoodContext.Provider>

    );
}
    export default NeighborhoodProvider;