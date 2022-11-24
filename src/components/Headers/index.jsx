import React from 'react'
import LoginForm from './LoginForm';
import Nav from './Nav'

import "./styles.css"

function Headers() {
  const [login, setLogin] = React.useState(true);
  return (
    <header id="login">
      <Nav login={login} setLogin={setLogin}/>
      <div className="p-5 text-center bg-image" id="background-image">
        <div className="mask">
          {
          login ? <>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Zipprich CPAs</h1>
                <h4 className="mb-3">Insert company motto here</h4>
                <a className="btn btn-outline-light btn-lg" href="#!" role="button"
                  onClick={
                    () => setLogin(false)
                }>Login</a>
              </div>
            </div>
          </> : <>
            <div className="justify-content-center align-items-center h-100">
              <LoginForm login={login}
                setLogin={setLogin}/>
            </div>
          </>
        } </div>
      </div>
    </header>
  )
}

export default Headers
