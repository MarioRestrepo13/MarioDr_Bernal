import axios from "axios";

const baseurl = "http://localhost:8000/api/";

export const crearConfiguracion = (metodo, url, informacion) => {
    return {
        method : metodo,
        url: baseurl + url,
        data: informacion
    }
}

export const hacerPeticion = async (informacion) => {
    try {
        const configuracion = crearConfiguracion("post" , "musica/", informacion)
        const respuesta =await axios(configuracion)
        if(respuesta.status === 201){
            console.log(respuesta)
        }
    } catch(error) {
        console.log(error)
    }
}
    