import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <h1>
            <Link to="/">COVID-19</Link>
          </h1>
        </div>
        <ul>
          <li>
            <a href="/#">Nyumbani</a>
          </li>
          <li>
            <a href="#facts">Taarifa</a>
          </li>
          <li>
            <a href="#symptoms">Dalili</a>
          </li>
          <li>
            <a href="#prevention">Kuzuia</a>
          </li>
          <li>
            <Link to="/all-countries">Nchi zote</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
