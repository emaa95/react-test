import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'; 
export const ProvinciesContext = createContext();

const ProvinciesProvider = (props) => {
    const [provincies, setProvincies] = useState([]);

    useEffect = () => {

        const SearchProvincies = async () => {
            const response = await axios.get('https://apis.datos.gob.ar/georef/api/provincias?');
            console.log(response.data.provincias);
        }
        
        SearchProvincies();

    },[]

    return(
        <ProvinciesProvider> {props.children}</ProvinciesProvider>

    );
}
    export default ProvinciesProvider
        

    

