import React from 'react'
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { getCategorias, agregarCategoria } from '../Services/categoria'
import { listarViajes } from '../Services/viaje'
import { agregarViaje } from '../Services/viaje';
import Button from '@mui/material/Button';
import { Co2Sharp } from '@mui/icons-material';

export const Formulario = () => {
    const [categoria, setCategoria] = useState();
    const [viaje, setViaje] = useState();
    const [categorias, setViajes] = useState([]);
    const [open, setOpen] = useState(false);;
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false);
    const [listado, setListado] = useState();
    const handleClose = () => {
        setOpen(!open);
    }

    useEffect(() => {
        setLoading(true)
        const obtenerViajes = async () => {
            const list = await listarViajes()
            setListado(list.data)
            setLoading(false)
        }
        obtenerViajes()
    }, [])
    console.log(listado)

    const handleSubmitAddCategory = async (e) => {
        e.preventDefault();
        try {
            const response = await agregarCategoria(categoria);
            console.log(response)
            if (response.status === 200) {
                handleClose()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleChangeAddCategory = (e) => {
        setCategoria({ ...categoria, [e.target.name]: e.target.value })
    }
    const handleChangeAddViaje = (e) => {
        setViaje({ ...viaje, [e.target.name]: e.target.value })
    }
    const handleSubmitAddViaje = async (e) => {
        e.preventDefault();
        console.log(viaje)
        try {
            const response = await agregarViaje(viaje);
            console.log(response)
            if (response.status === 200) {
                handleClose()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h2>Registrar Categoria</h2>
            <form onSubmit={handleSubmitAddCategory}>
                <TextField id="outlined-basic" onChange={handleChangeAddCategory} label="nombre" className='form-control' name='nombre' variant="outlined" />
                <Button
                    type='submit'
                    variant="contained"
                    color="success"
                    fullWidth
                >
                    Agregar
                </Button>
            </form>
            <h2>Registrar Viaje</h2>
            <form onSubmit={handleSubmitAddViaje}>
                <TextField onChange={handleChangeAddViaje} type='text' label="Titulo" variant="outlined" name='nombre' />
                <TextField onChange={handleChangeAddViaje} type='text' label="Descripcion" variant="outlined" name='descripcion' />
                <TextField onChange={handleChangeAddViaje} type='text' label="Ubicacion" variant="outlined" name='ubicacion' />
                <TextField onChange={handleChangeAddViaje} type='text' label="Fecha" variant="outlined" name='fecha' />
                <TextField onChange={handleChangeAddViaje} label="" variant="outlined" type="file" helperText='Imagen del Lugar' name='avatar' />
                <Button
                    type='submit'
                    variant="contained"
                    color="success"
                    fullWidth
                >
                    Agregar
                </Button>
            </form>

            <h1>Viajes</h1>
            <table>
                <thead>
                    <tr>
                        <th>nombre</th>
                        <th>descripcion</th>
                        <th>ubicacion</th>
                        <th>fecha</th>
                    </tr>
                </thead>
                {!loading && listado && <tbody>
                    {listado.map(item => (
                        <tr key={item.nombre}>
                            <td>{item.nombre}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.ubicacion}</td>
                            <td>{item.fecha}</td>
                            <td className="text-center">
                            </td>
                        </tr>
                    ))}
                </tbody>}
            </table>
        </div>
    )
}
