import React, { useState } from 'react';
import './navbar.css';

export const name = 20;


const Navbar = () => {


    // Hook
    // variable, funcion
    const [ search, setSearch ] = useState('');


    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const handleKeyDonw = () => {
        console.log('Buscando');
        //TODO:
    }

    return (
        <div className='navbar'>
            <div className='search-container'>
                <i className='fas fa-search icon'></i>
                <input
                    className='search'
                    type='text'
                    placeholder='Buscar...'
                    name='search'
                    value={search}
                    onChange={ handleSearch }
                    onKeyPress={ (event)=> {
                        if(event.key === 'Enter')
                            return handleKeyDonw()
                        else
                            return null
                    } }
                    />
            </div>
        </div>
    );

}

export default Navbar;