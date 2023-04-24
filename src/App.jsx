function App() {


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

          {/* Contenido principal*/}
          <section className="content">
              {/* Aqui van las peliculas */}
              <article className="pelicula-item">
                  <h2>Titulo pelicula</h2>
                  <p className="description">Lorem ipsum dolor sit.</p>
                  <button className="edit">Editar</button>
                  <button className="delete">Borrar</button>
              </article>

              <article className="pelicula-item">
                  <h2>Titulo pelicula</h2>
                  <p className="description">Lorem ipsum dolor sit.</p>
                  <button className="edit">Editar</button>
                  <button className="delete">Borrar</button>
              </article>

              <article className="pelicula-item">
                  <h2>Titulo pelicula</h2>
                  <p className="description">Lorem ipsum dolor sit.</p>
                  <button className="edit">Editar</button>
                  <button className="delete">Borrar</button>
              </article>

              <article className="pelicula-item">
                  <h2>Titulo pelicula</h2>
                  <p className="description">Lorem ipsum dolor sit.</p>
                  <button className="edit">Editar</button>
                  <button className="delete">Borrar</button>
              </article>

              <article className="pelicula-item">
                  <h2>Titulo pelicula</h2>
                  <p className="description">Lorem ipsum dolor sit.</p>
                  <button className="edit">Editar</button>
                  <button className="delete">Borrar</button>
              </article>

              <article className="pelicula-item">
                  <h2>Titulo pelicula</h2>
                  <p className="description">Lorem ipsum dolor sit.</p>
                  <button className="edit">Editar</button>
                  <button className="delete">Borrar</button>
              </article>

          </section>

          <aside className="lateral">
              {/* Aqui van los widgets */}
              <div className="search">
                  <h3 className="title">Widget 1</h3>
                  <form>
                      <input type="text" placeholder="Buscar"/>
                      <button>Buscar</button>
                  </form>
              </div>
              <div className="add">
                  <h3>Añadir pelicula</h3>
                  <form>
                      <input type="text" placeholder="Titulo"/>
                      <textarea name="" id="" cols="30" rows="10" placeholder="Descripcion"></textarea>
                      <input type="submit" value="Guardar"/>
                  </form>
              </div>
          </aside>

          {/* Pie de pagina */}
          <footer className="footer">
              <p>Todos los derechos reservados &copy; 2021 - www.alfredobravocuero.co</p>
          </footer>
      </div>
  )
}

export default App
