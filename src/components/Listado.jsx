import React, { useEffect, useState } from 'react'
import { EditarPeliculas } from './EditarPeliculas';

export const Listado = ({listadoState, setListadoState}) => {

    // Estados migrados al 👆🏽 componente padre App
    // const [listadoState, setListadoState] = useState([])

    // Estado para editar peliculas
    const [edittate, setEditState] = useState(0)

    useEffect(() => {
        console.log("Componente del listado de peliculas Cargado");
        getMovies()
    }, [])

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem("movie"))
       
        setListadoState(movies)

        return movies
    }

    const deleteMovie = (id) => {
        // Consegir el listado de peliculas del localstorage
        let movies_saved = getMovies()
        // Filtrar el listado de peliculas para eliminar la pelicula que se quiere borrar
        let new_array_movie = movies_saved.filter((movie) => movie.id !== parseInt(id))
        // Guardar el listado de peliculas en el localstorage
        localStorage.setItem("movie", JSON.stringify(new_array_movie))
        // Actualizar el estado del listado de peliculas
        setListadoState(new_array_movie)
    }

  return (
    <>
        {listadoState != null? 
            listadoState.map((movie) => {
                return (
                    <article className="pelicula-item" key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p className="description">{movie.description}</p>

                        <button className="edit" onClick={() => setEditState(movie.id)}>Editar</button>
                        <button className="delete" onClick={() => deleteMovie(movie.id)}>Borrar</button>
                        {/* aparece formulario a editar */}
                        {edittate === movie.id && (
                            <EditarPeliculas 
                                movie={movie}
                                getMovies={getMovies}
                                setEditState={setEditState}
                                setListadoState={setListadoState}
                            />
                        )}

                    </article>
                )
            }) : <h2 className="error">No hay peliculas para mostrar</h2>
        }
    </>
  )
}
