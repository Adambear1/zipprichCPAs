import React from 'react'

function Header({title}) {
  return (
    <div className='row justify-content-center mt-5' id={title.toLowerCase().replace(" ", "-")}>
        <h1 className='col-9 align-self-center'>{title}</h1>
      </div>
  )
}

export default Header