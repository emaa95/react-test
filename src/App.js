import React, { Fragment } from 'react';
import Button from './components/button/button';
import Navbar from './components/navbar/navbar';
import FormDonacion from './components/form-donacion/form-donacion';
import SlideButton from './components/slide-button/slide-button'
import ProvinciesProvider from './contexts/ProvincesContext';


// Con el provider todos los elementos hijos pueden tener la 'posibilidad' de acceder
// elimine codigo para ver mejor los objetos
// title es una variable que se pide, y no estaba siendo mandada
function App() {
  return (
    <ProvinciesProvider>
      <FormDonacion title='Titulo'></FormDonacion>
    </ProvinciesProvider>





  );
}

export default App;
