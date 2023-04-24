import React from 'react'

export const EditarPeliculas = ({movie, getMovies, setListadoState, setEditState}) => {
    const titulo = "Editar pelicula"

    const saveEdit = (e, id) => {
        e.preventDefault()
        // Conseguir los valores del formulario
        let target = e.target

        //Buscar la pelicula en el localstorage
        let movies_saved = getMovies()
        let index = movies_saved.findIndex((movie) => movie.id === parseInt(id))

        // Crear objeto de la pelicula a guardar con el index
        let movie_edit = {
            id,
            title: target.title.value,
            description: target.description.value
        }

        // Actualizar el listado de peliculas en nuevo array
        movies_saved[index] = movie_edit

        // Guardar el listado de peliculas en el localstorage
        localStorage.setItem("movie", JSON.stringify(movies_saved))

        // Actualizar el estado del listado de peliculas
        setListadoState(movies_saved)
        setEditState(0)
    }

  return (
    <div className='edit_form'>
        <hr />
        <h3 className='title'>{titulo}</h3>
        <form onSubmit={e => saveEdit(e, movie.id)}>
            <input
                name="title"
                type="text" 
                defaultValue={movie.title}
            />
            <textarea
                name="description"
                id="description"
                rows="5"
                className='description'
                defaultValue={movie.description}
            >
            </textarea>
            <input type="submit" className='editar' value="Actualizar"/>

        </form>
    </div>
  )
}
