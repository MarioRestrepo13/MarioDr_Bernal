import axios from "axios";

const baseurl = "http://localhost:8000/api/";

export const crearConfiguracion = (metodo, url, informacion) => {
    return {
        method : metodo,
        url: baseurl + url,
        data: informacion
    }
}

export const crearConfiguracionSinInformacion = (metodo, url) => {
    return {
        method : metodo,
        url: baseurl + url,
    }
}


export const guardarGenero = async (informacion) => {
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


export const traerGenero = async () => {
    try {
        const configuracion = crearConfiguracionSinInformacion("get" , "musica/")
        const respuesta =await axios(configuracion)
        if(respuesta.status === 200){
            console.log(respuesta.data)
        }
        return respuesta.data;
    } catch(error) {
        console.log(error)
    }
}
export const traerTodosGenero = async (genero) => {
    try {
        const configuracion = crearConfiguracionSinInformacion("get" , "musica/?genero="+genero)
        const respuesta =await axios(configuracion)
        if(respuesta.status === 200){
            console.log(respuesta.data)
        }
        return respuesta.data;
    } catch(error) {
        console.log(error)
    }
}
export const traerTodosGeneroYArtista = async (genero, artista) => {
    try {
        const configuracion = crearConfiguracionSinInformacion("get" , "musica/?genero="+genero+"&artista="+artista)
        const respuesta =await axios(configuracion)
        if(respuesta.status === 200){
            console.log(respuesta.data)
        }
        return respuesta.data;
    } catch(error) {
        console.log(error)
    }
}
    