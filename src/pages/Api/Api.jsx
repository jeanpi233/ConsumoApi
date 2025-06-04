import {  useState,useEffect } from "react"
import { consultarUsuarios } from "../../services/ServicioUsuario"

export function Api(){
    const[usuarios, setUsuarios]=useState(null)
    const[estaCargandoAPI, setCargandoAPI]=useState(true)

    useEffect(function(){
        consultarUsuarios()
        .then(function(respuesta){
            console.log(respuesta)
            setUsuarios(respuesta)
            setCargandoAPI(false)
        })
    },[])
    return(
        <>
        <section className="container">
            <section className="row">
                <section className="col-12">
                    <h3>Control de asistecias</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempore provident expedita explicabo a fugiat, beatae, fuga id, pariatur ullam illo magni delectus dignissimos facere nisi. Eveniet voluptas recusandae deserunt.

                    </p>
                    <hr />

                </section>
            </section>
            <section className="row justify-content-center">
                <section className="col-12 col-md-8">
                    <form className="p-4 shadow my-3 border rounded">
                        <input type="text" placeholder="estudiante" className="form-control mb-3"/>
                        <input type="text" placeholder="curso" className="form-control mb-3"/>
                        <input type="date" placeholder="fecha" className="form-control mb-3"/>
                        <button className="btn-btn-primary"> Enviar </button>
                    </form>
                </section>
            </section>
        </section>
        </>
    )
}