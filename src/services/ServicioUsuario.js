export async function consultarUsuarios(){
    const URL="http://localhost:8080/usuarios"

    const PETICION={
        method:"GET"
    }
    let respuestaAPI=await fetch(URL,PETICION)

    let usuariosConsultados=await respuestaAPI.json()
    return usuariosConsultados
}
export async function agregarUsuario(datosUsuarios){
    const URL="http://localhost:8080/usuarios"

    const PETICION={
        method:"POST",
        headers:{"Content-Type":"aplication/json"},
        body:JSON.stringify(datosUsuarios)
    }
    let respuestaAPI=await fetch(URL,PETICION)
    let respuestafinal=await respuestaAPI.json()
    return respuestafinal

}