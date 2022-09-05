import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="container_navbar">
        <header>
          <nav className="nav_navbar">
            <ul className="lista">
              <li className="listas Bano">
                <Link to="/BathRoom" className="listas Cocina">Baño</Link>
              </li>
              <li className="listas Cocina">
                <Link to="/kitchen" className="listas Cocina">Cocina</Link>
              </li>
              <li className="listas Patio">
                <Link to="/patio" className="listas Cocina">Patio/Antejardin</Link>
              </li>
              <li className="listas Casa">
                <Link to="/house" className="listas Cocina">Casa</Link>
              </li>
              <li className="listas Accesorios">
                <Link to="/Accesory" className="listas Cocina">Accesorios</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
