import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="contenedor-principal">

      {/* ========== HEADER ========== */}
      <div className="header">
        <img
          src="/fotoPerfil.png"
          alt="Foto de perfil"
          className="foto-perfil"
        />
        <div>
          <h1>Máximo Yuste Palacián</h1>
          <h2>Técnico en Desarrollo de Aplicaciones y Sistemas</h2>
          <div className="contacto">
            <span>📧 maximoyustepalacian@gmail.com</span>
            <span>📱 +34 665 925 584</span>
            <span>🔗 github.com/Maximo-Yus</span>
            <span>📍 Zaragoza, España</span>
          </div>
        </div>
      </div>


      <div className="cuerpo">


        <div className="columna-izquierda">

          <h2 className="titulo-seccion">-Sobre Mí-</h2>
          <p className="texto">
            Estudiante de desarrollo de aplicaciones y técnico en administración
            de sistemas informáticos . Con experiencia previa en consultoría, asistencia
            telefónica e informática.
          </p>
           <p className="texto">
            Capaz de adaptarme rápido a cualquier sistema y entorno gracias a una formación
            polivalente en varios campos de la informática.
          </p>

          <h2 className="titulo-seccion">-Habilidades-</h2>

          <h3 className="subtitulo-habilidades">Digital</h3>
            <ul className="lista-capacidades">
              <li>Java (programación informática)</li>
              <li>HTML/CSS</li>
              <li>Bash Script</li>
              <li>Kotlin</li>
              <li>SQL</li>
              <li>Redes Sociales</li>
              <li>C++ Básico</li>
              <li>Excel, Power Query, BI, Pivot Básico</li>
              <li>Herramientas de Google (Gmail, Forms, Drive...)</li>
            </ul>

            <h3 className="subtitulo-habilidades">Personal</h3>
            <ul className="lista-capacidades">
              <li>Responsabilidad en el trabajo</li>
              <li>Minuciosidad y limpieza</li>
              <li>Organización y puntualidad</li>
              <li>Adaptabilidad y tolerancia a la presión en el trabajo</li>
            </ul>


          <h2 className="titulo-seccion">🌍 Idiomas</h2>

          <div className="idioma">
            <span>Español</span>
            <span className="etiqueta etiqueta-morada">Nativo</span>
          </div>
          <div className="idioma">
            <span>Inglés</span>
            <span className="etiqueta etiqueta-azul">Avanzado - B2</span>
          </div>

        </div>



        {/* ----- COLUMNA DERECHA ----- */}
        <div className="columna-derecha">

          <h2 className="titulo-seccion">💼 Experiencia Profesional</h2>

          <div className="item-experiencia">
            <div className="fila-titulo">
              <h3>Consultoría y Administración de Sistemas Informáticos</h3>
              <span className="periodo">03/2025 - 06/2025</span>
            </div>
            <p className="empresa">Centro de Cálculo Bosco</p>
            <p className="texto">
            Revisión de servicios informáticos en diversas empresas cliente y centros educativos. Instalación de nuevos equipos y
servicios, mantenimiento, asesoría, gestión de servidores y servicios remotos...
            </p>
          </div>

          <div className="item-experiencia">
            <div className="fila-titulo">
              <h3>Atención al cliente telefónica a microempresas</h3>
              <span className="periodo">07/2019 - 09/2019</span>
            </div>
            <p className="empresa">Adecco, Majorel</p>
            <p className="texto">
              - Atención al cliente y localización de resolución de problemas en
              facturación o servicios ofrecidos.
              <br />
              - Realizar diversas gestiones en las bases de datos con los perfiles de
              los clientes.
            </p>
          </div>

          <div className="item-experiencia">
            <div className="fila-titulo">
              <h3>Operador de cadena de montaje automatizada</h3>
              <span className="periodo">08/2025 - 09/2025</span>
            </div>
            <p className="empresa">Triangle Solutions</p>
          </div>

          <h2 className="titulo-seccion">🚀 Proyectos Destacados</h2>

          <div className="tarjeta tarjeta-proyecto">
            <h4>Aplicación móvil para inicializarse en la informática</h4>
            <p>💻 Kotlin</p>
          </div>
          <div className="tarjeta tarjeta-proyecto">
            <h4>Sistema de ticketing y monitorización red</h4>
            <p>💻 VMWare</p>
          </div>

          <h2 className="titulo-seccion">🎓 Educación</h2>

          <div className="item-experiencia item-educacion">
            <h3>Técnico Superior en Desarrollo de Aplicaciones Multiplataforma</h3>
            <p className="empresa">CPIFP Los Enlaces</p>
            <p className="texto">2025 - Actual</p>
          </div>

          <div className="item-experiencia item-educacion">
            <h3>Técnico Superior en Administración de Sistemas Informáticos y de Red</h3>
            <p className="empresa">CPIFP Los Enlaces</p>
            <p className="texto">2023 - 2025</p>
          </div>

          <div className="item-experiencia item-educacion">
            <h3>Bachillerato de Ciencias</h3>
            <p className="empresa">Colegio Padre Enrique de Ossó</p>
            <p className="texto">2017 - 2019</p>
          </div>


        </div>
      </div>

      {/* ========== FOOTER ========== */}
      <div className="footer">
        <p>maximoyustepalacian@gmail.com  &emsp; | &emsp; +34 665 925 584</p>
      </div>

    </div>
  );
}

export default App;
