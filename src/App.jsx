import { useState } from "react"
import { Buscador } from "./components/Buscador"
import { CrearPeliculas } from "./components/CrearPeliculas"
import { Listado } from "./components/Listado"

function App() {

    const [listadoState, setListadoState] = useState([])

  return (
        <div className="layaut">
          
          {/* Cabecera */}
          <header className="header">
              <div className="logo">
                  <div className="play"></div>
              </div>
              <h1>Mis Pelis</h1>
          </header>

          {/*  Barra de navegacion */}
          <nav className="nav">
              <ul> 
                  <li><a href="/#">Inicio</a></li>
                  <li><a href="/#">Peliculas</a></li>
                  <li><a href="/#">Blog</a></li>
                  <li><a href="/#">Contacto</a></li>
              </ul>
          </nav>

          <div className="web3"><a href="/#">Conect web3</a></div>

          {/* Contenido principal*/}
          <section className="content">
              {/* Aqui va el listado de peliculas */}
              <Listado
              listadoState={listadoState} 
              setListadoState={setListadoState}
              />
          </section>

          <aside className="lateral">
              {/* Aqui van los widgets */}
              {/* Buscador */}
              <Buscador
                listadoState={listadoState} 
                setListadoState={setListadoState}
              />
              {/* Form añadir peliculas */}
              <CrearPeliculas
                setListadoState={setListadoState}
              />
          </aside>

          {/* Pie de pagina */}
          <footer className="footer">
              <p>Todos los derechos reservados &copy; 2021 - www.alfredobravocuero.co</p>
          </footer>
      </div>
  )
}

export default App
