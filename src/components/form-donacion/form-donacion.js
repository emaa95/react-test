import React, { Fragment, useContext, useState } from 'react';
import './form-donacion.css';
import { ProvinciesContext } from '../../contexts/ProvincesContext'

/*

Algunos errores:
el class de html se debe de cambiar por className
cuando haces un {element.map( ()=> ())} lo que devolves va entre () porque devolves html
En general estuvo bien pensado todo solo que la falta de practica genera problemitas pero ya anda todo perfecto
El context y el useContext es siempre igual en todos los casos asi que la proxima podes copiar y pegar. Es facil react pero cuesta jaja
*/
const FormDonacion = ({ title }) => {

    // importamos el contexto, no el provider. El provider es para especificar quienes tiene acceso.
    const { provincies } = useContext(ProvinciesContext);

    const [persona, setPersona] = useState({
        name: '',
        surname: '',
        email: '',
        telephone: 0,
        address: '',
    })

    const [error, setError] = useState(false);

    const handleChange = (event) => {
        // event.target.name devuelve el <name> del html, y el value es el valor que enviamos
        setPersona({
            ...persona,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        let { name, surname, email, telephone, address } = persona;

        // validacion
        if (name.trim() === '' || surname.trim() === '' || email.trim() === '' || telephone < 0 || telephone > 9999999999 || address.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
    }

// hay mucho codigo, siempre es mejor reducirlo lo mas que puedas para evitar problemas
// todo elemento que se mapea o se repite se tiene que poner una KEY
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
                <select className="form-control input-form">
                    <option>Argentina</option>
                    <option>Uruguay</option>
                    <option>Paraguay</option>
                    <option>Chile</option>
                    <option>Brasil</option>
                </select>

                <label>Provincia/Estado</label>
                <select className="form-control input-form">
                    <option>--Seleccione una opción--</option>
                    {provincies.map(pronvincie => (
                        <option key={pronvincie.id}>{pronvincie.nombre}</option>
                    ))}
                </select>

                <label>Barrio</label>
                <select className="form-control input-form">
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