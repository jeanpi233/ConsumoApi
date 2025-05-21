import "./Menu.css";
import { Link } from "react-router-dom";
export function Menu() {
  return(
  <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          CLASROMM APP
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="#" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#" to="/Analitica">
                Analisis de datos
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Consumo API
              </a>
            </li>
          </ul>
          <span class="navbar-text">BARRA DE NAVEGACION</span>
        </div>
      </div>
    </nav>
  </>
  );
}
