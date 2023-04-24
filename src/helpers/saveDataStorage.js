export const saveDataStorage = (clave, elemento) => {
    // Comprobar si hay peliculas en el localstorage
    let elementos = JSON.parse(localStorage.getItem(clave))

    // Si hay peliculas en el localstorage
    if (Array.isArray(elementos)) {
        // Agregar la pelicula al array
        elementos.push(elemento)
    } else {
        // Si no hay peliculas en el localstorage
        // Crear un array con la pelicula
        elementos = [elemento]
    }

    // Guardar la pelicula en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos))

    // Devolver mensaje de exito
    return "Pelicula guardada correctamente "+elemento;
}