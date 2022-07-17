import React from 'react'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'


export default function navig() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <img src="https://pune365.com/wp-content/uploads/2017/06/booksoldlibraryreferenceclassics.jpg" alt="Girl in a jacket" width="50" height="40"></img>

        <NavLink className="navbar-brand" to="/"> KNOWLEDGE REPOSITORY </NavLink >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" to="/"> Home </a> */}
              <NavLink  className="navbar-brand" to="/"> HOME</NavLink>
            </li>

          </ul>
          <form className="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>

      


      </div>
    </nav>
    


  )
}
