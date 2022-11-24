import React from 'react'

function LoginForm({login, setLogin}) {
  return (
    <>
      <div class="row justify-content-center my-5">
        <div className="col-6 mt-5 align-self-center text-center">
          <input type="text" id="form6" class="form-control"
            style={
              {
                backgroundColor: "white",
                color: "darkgray"
              }
            }
            placeholder="Email"/>
        </div>
      </div>
      <div class="row justify-content-center" >
        <div className="col-6 align-self-center text-center">
          <input type="password" id="form12" class="form-control"
            style={
              {
                backgroundColor: "white",
                color: "darkgray"
              }
            }
            placeholder="Password"/>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-6 align-self-center text-center">
          <a className="btn btn-outline-light btn-lg" role="button"
            onClick={
              () => setLogin(true)
          }>Login</a>
        </div>
      </div>
    </>
  )
}

export default LoginForm
