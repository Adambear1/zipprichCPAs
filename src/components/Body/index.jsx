import React from 'react'
import AboutUs from './AboutUs'
import Clients from './Clients';
import Services from './Services';

import "./styles.css";

function Body() {
  return (
    <div className='container-fluid p-5'>
      <Services/>
      <AboutUs/>
      <Clients/>
    </div>
  )
}

export default Body
