import axios from "axios";
const baseURL = "http://192.168.42.112:8000/mensajes/";

export const crearConfiguracion = (metodo, url, informacion) => {
  return {
    method: metodo,
    url: baseURL + url,
    data: informacion,
  };
};

export const hacerPeticionChats = async (informacion) => {
    try {
        const configuracion = crearConfiguracion("post", "chats/", informacion);
        const respuesta = await axios(configuracion);
        if (respuesta.status === 201) {
        console.log(respuesta);
        }
        return respuesta.status;
    } catch (error) {
        console.log(error);
  }
};

export const obtenerMensajesChats = async () => {
  try {
    const configuracion = crearConfiguracion("get", "chats/");
    const respuesta = await axios(configuracion);
    if (respuesta.status === 200) {
      const mensajes = respuesta.data;
      return mensajes;
    }
  } catch (error) {
    console.log(error);
  }
};
