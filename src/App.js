import React, { Fragment } from 'react';
import Button from './components/button/button';
import Navbar from './components/navbar/navbar';
import FormDonacion from './components/form-donacion/form-donacion';
import SlideButton from './components/slide-button/slide-button'



function App() {
  return (
    <Fragment>
      <div>
        <SlideButton></SlideButton>
      </div>
    <FormDonacion></FormDonacion>
    <Navbar></Navbar>
    <Button></Button>
    </Fragment>

    
   
    
    
  );
}

export default App;
