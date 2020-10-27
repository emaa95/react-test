import React, { Fragment, useState } from 'react';
import './form-donacion.css';
import PronvinciesProvider from '../../contexts/ProvincesContext'


const FormDonacion = ({ title }) => {

    const [persona, setPersona] = useState({
        name: '',
        surname: '',
        email: '',
        telephone: 0,
        address: '', 
    })

    const [error, setError] = useState(false);

    const handleChange = (event) => {
        setPersona({
            ...persona,
            [event.target.name]: event.target.value,
            [event.target.surname]: event.target.value,
            [event.target.email]: event.target.value,
            [event.target.telephone]: event.target.value,
            [event.target.address]: event.target.value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        let { name, surname, email, telephone, address} = persona;

        // validacion
        if (name.trim() === '' || surname.trim() === '' || email.trim() === '' || telephone < 0 || telephone > 9999999999 || address.trim() === '')  {
            setError(true);
            return;
        }
        setError(false);
    }


        return (
            <Fragment>
                <h2>{title}</h2>
                <form onSubmit={handleSubmit} className="form-donacion">
                    {error ? <h3>Hay un error en los datos</h3> : null}
                    <label className="label-form">Nombre</label>
                    <input
                        className="input-form"
                        type='text'
                        placeholder='Ingrese Nombre...'
                        name='name'
                        value={persona.name}
                        onChange={(event) => handleChange(event)}
                    />
                    <label>Apellido</label>
                    <input
                    className="input-form"
                        type='text'
                        placeholder='Ingrese Apellido...'
                        name='surname'
                        value={persona.surname}
                        onChange={handleChange}
                    />
                    <label>Email</label>
                    <input
                    className="input-form"
                        type='text'
                        placeholder='Ingrese Email...'
                        name='email'
                        value={persona.email}
                        onChange={handleChange}
                    />
                    <label>Teléfono</label>
                    <input
                    className="input-form"
                        type='number'
                        placeholder='Ingrese Teléfono...'
                        name='telephone'
                        value={persona.telephone}
                        onChange={handleChange}
                    />
                    <label>País</label>
                    <select class="form-control" className="input-form">
                        <option>Argentina</option>
                        <option>Uruguay</option>
                        <option>Paraguay</option>
                        <option>Chile</option>
                        <option>Brasil</option>
                    </select>

                    <label>Provincia/Estado</label>
                    <select class="form-control" className="input-form">
                        <option>--Seleccione una opción</option>
                        {provincies.map(pronvincie => {
                                <option>{provincies.setProvincies}</option>
                        }
                        ) 
                        }

                    </select>

                    <label>Barrio</label>
                    <select class="form-control" className="input-form">
                        <option>Cofico</option>
                        <option>Villa Cabrera</option>
                        <option>Nueva Córdoba</option>
                        <option>Alta Córdoba</option>
                        <option>Alberdi</option>
                    </select>

                    <label>Dirección</label>
                    <input
                        className="input-form"
                        type='text'
                        placeholder='Ingrese Dirección...'
                        name='address'
                        value={persona.address}
                        onChange={handleChange}
                    />
                    <button type='submit' className="input-form">Guardar</button>
                </form>
            </Fragment>
        )

    }

export default FormDonacion;