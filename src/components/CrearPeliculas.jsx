import React, { useState } from 'react'
import { saveDataStorage } from '../helpers/saveDataStorage'

export const CrearPeliculas = ({setListadoState}) => {

    const titulo = "Añadir pelicula"
    const [moviesState, setMoviesState] = useState({
        title: '',
        description: ''
    })

    const getFormValue = (e) => {
        e.preventDefault()

        // consegir los valores del formulario
        let target = e.target
        let title = target.title.value
        let description = target.description.value

        // Crear objeto de la pelicula a guardar
        let movie = {
            id: new Date().getTime(),
            title,
            description
        }

        // Guardar la pelicula en el estado
        setMoviesState(movie)

        // Actualizar el estado del listado principal, para que se muestren los datos   
        setListadoState((prevState) => {
            return [movie, ...prevState]
        })

        // Guardar la pelicula en el localstorage
        saveDataStorage("movie", movie);

    }

    
  return (
    <>
        <div className="add">
            <h3 className='title'>{titulo}</h3>

            {moviesState.title && <p className='success'>Pelicula guardada correctamente {moviesState.title}</p>}
            <form onSubmit={getFormValue}>
                <input 
                    name='title'
                    type="text" 
                    id='title' 
                    placeholder="Titulo"
                />
                <textarea 
                    name="" 
                    id="description" 
                    rows="5"
                    placeholder="Descripcion">
                </textarea>
                <input type="submit" value="Guardar"/>
            </form>
        </div>
    </>
  )
}
