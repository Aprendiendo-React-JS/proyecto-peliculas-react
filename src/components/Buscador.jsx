import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('')
  const [noEncontrado, setNoEncontrado] = useState(false)

  const buscarMovie = (e) => {
    e.preventDefault()
    // Crear estado y actualizarlo
    setBusqueda(e.target.value)

    // El listado completo de peliculas
    let movies_found = listadoState.filter((movie) => {
      return movie.title.toLowerCase().includes(busqueda.toLowerCase())
    })

    // Filtar el listado de peliculas para buscar icoincidencias
    if (busqueda.length <= 1 || movies_found <= 0) {
      movies_found = JSON.parse(localStorage.getItem("movie"))
      setNoEncontrado(true)
    } else {
      setNoEncontrado(false)
    }

    // Actualizar el estado del listado de peliculas con lo filtrado
    setListadoState(movies_found)
  }

  return (
    <>
        <div className="search">
            <h3 className="title">Buscador: {busqueda}</h3> 
            {(noEncontrado && busqueda.length > 1 ) && <p className='no-encontrado'>No se hay coincidencia</p>}
            <form>
                <input 
                  type="text"
                  id='search_field' 
                  placeholder="Buscar"
                  name='busqueda'
                  autoComplete='off'
                  onChange={buscarMovie}
                />
                <button>Buscar</button>
            </form>
        </div>
    </>
  )
}
