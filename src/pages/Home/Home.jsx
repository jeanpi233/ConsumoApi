import "./Home.css";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
      <section className="banner"></section>
      <section className="my-5 container">
        <section className="row">
          <section className="col-12 col-md-6 align-self-center">
            <img
              src="../../../../src/assets/Imagenes/estudiante.png"
              alt="foto"
              className="img-fluid"
            />
          </section>
          <section className="col-12 col-md-6">
            <h2>CLAASROOM APP &copy;</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              praesentium, quas facere laborum vel corrupti nihil amet
              dignissimos, doloribus fugiat fugit natus nisi accusantium!
              Laborum molestiae aperiam pariatur nisi provident.
            </p>
            <hr />
            <Link to="/Analitica">
              <button> Ver mas !</button>
            </Link>
          </section>
        </section>
      </section>
    </>
  );
}
