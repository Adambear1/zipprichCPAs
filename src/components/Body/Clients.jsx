import React from 'react'
import Header from './Header'

import logo1 from "../../utils/placeholderlogo.webp"
import logo2 from "../../utils/placeholderlogo21.png"
import logo3 from "../../utils/placeholderlogo3.png"

import Image from './Image'
function Clients() {
  return (
    <>
      <Header title={"Clients"}/>
      <div className='row justify-content-center'>
        <div className="col-lg-9 align-self-center text-center mb-5">
          Zipprich CPAs has serviced thousands of clients over their 25 years in existence, currently helping and maintaining tax records for over 250 clients today. All clients vary in size from sole proprietors to international corporations.
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className="col-lg-9 align-self-center text-center mb-5">
          <Image src={logo1}
            styles={
              {width: "33%"}
            }/>
          <Image src={logo2}
            styles={
              {width: "33%"}
            }/>
          <Image src={logo3}
            styles={
              {width: "33%"}
            }/>
        </div>
      </div>
    </>
  )
}

export default Clients
