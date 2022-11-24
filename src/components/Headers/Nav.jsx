import React from 'react'

function Nav({login, setLogin}) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarExample01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about-us">About Us</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#clients">Clients</a>
            </li>
            <li class="nav-item"
              onClick={
                () => setLogin(false)
            }>
              <a class="nav-link" href="#login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
