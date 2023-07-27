import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <div className="container">
                <Link className="navbar-brand" to="/">Appointtee</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link>                       
                         </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>                       
                         </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</Link>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <Link className="dropdown-item" to="#">Action 1</Link>
                                <Link className="dropdown-item" to="#">Action 2</Link>
                            </div>
                        </li>
                    </ul>
                    <form class="d-flex my-2 my-lg-0">
                        <input class="form-control me-sm-2" type="text" placeholder="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
          </div>
        </nav>
        
    </div>
  )
}

export default Navbar