import "./Analitica.css"
import { Link } from "react-router-dom";
export function Analitica() {
  return (
    <>
      <section className="container">
        <section className="row">
          <section className="col-12 text-center">
            <h1>Analisis de Datos</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, labore. Eligendi nesciunt non consectetur rem? Neque, doloremque. Accusantium aliquid eos provident voluptate dignissimos illum maxime cum voluptatum corporis repellat. Aliquam.

            </p>
            <hr />
          </section>
        </section>
        <section className="row row-cold-1 row-cols-md-2">
            <div className="col">
                <div className="card my-3 shadow h-100 padding 100">
                    <h3>Asistencia vs Medio de trasporte</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facilis quos exercitationem natus neque, ipsum quas veniam vel cupiditate, nesciunt officia! Consectetur corporis perspiciatis mollitia odio qui reiciendis rerum dolor.
                      
                    </p>
                    <img src="../../../../src/assets/Imagenes/graficabarras.webp" alt="barras" className="img-fluid"/>
                </div>
                <Link to= "/" >
                <button>regresar</button>
                </Link>
            </div>
        </section>
      </section>
    </>
  );
}
