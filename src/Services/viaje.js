import axios from 'axios';

export const listarViajes = async () => {
    const response = await axios.get('viaje');
    return response
}

export const agregarViaje = async (viaje) => {
    const data = {
            "nombre": viaje.nombre,
            "descripcion": viaje.descripcion,
            "ubicacion": viaje.ubicacion,
            "fecha": viaje.fecha,
            "avatar":viaje.avatar
    }
    const response = await axios.post('viaje', data);
    return response
}
export const eliminarViaje = async (id) => {
    const response = await axios.delete(`viaje/${id}`);
    return response
}