import Header from "./componentes/Header.jsx";
import Sidebar from "./componentes/Sidebar.jsx";
import GameCard from "./componentes/GameCard.jsx";
import "./App.css";

const gamesImageBase = `${import.meta.env.BASE_URL}games/`;

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />

      <main className="dashboard">
        <div className="dash-head">
          <div>
            <h2>Explorar catálogo</h2>
            <p>7 juegos destacados esta semana</p>
          </div>

          <div className="chip-row">
            <span className="chip active">Todos</span>
            <span className="chip">Terror</span>
            <span className="chip">Acción</span>
            <span className="chip">Plataformas</span>
            <span className="chip">Mesa</span>
          </div>
        </div>

        <div className="game-grid">
          <GameCard
            title="Five Nights at Freddy's"
            studio="Scott Cawthon"
            genre="Terror"
            rating="4.7"
            image={`${gamesImageBase}fnaf.jpg`}
            description="Sobrevive cinco noches vigilando cámaras en una pizzería donde los animatrónicos cobran vida al caer la noche."
            action="Jugar"
          />
          <GameCard
            title="Fortnite"
            studio="Epic Games"
            genre="Battle Royale"
            rating="4.5"
            image={`${gamesImageBase}fortnite.jpg`}
            description="Cien jugadores, una isla que se reduce y la construcción como arma: el battle royale que marcó una generación."
            action="Jugar"
          />
          <GameCard
            title="Halo: Campaign Evolved"
            studio="343 Industries"
            genre="Shooter / Ciencia ficción"
            rating="4.6"
            image={`${gamesImageBase}halo.jpg`}
            description="El Jefe Maestro regresa a enfrentar al Covenant en una campaña épica de ciencia ficción militar."
          />
          <GameCard
            title="Super Mario Bros."
            studio="Nintendo"
            genre="Plataformas"
            rating="4.9"
            image={`${gamesImageBase}mario.jpg`}
            description="Mario, Luigi y Peach corren, saltan y recolectan monedas por reinos llenos de enemigos clásicos."
            action="Jugar"
          />
          <GameCard
            title="Minecraft: Java & Bedrock"
            studio="Mojang Studios"
            genre="Sandbox / Supervivencia"
            rating="4.8"
            image={`${gamesImageBase}minecraft.jpg`}
            description="Construye, explora y sobrevive en un mundo infinito hecho de bloques, totalmente a tu manera."
          />
          <GameCard
            title="Neon Drifter: Cyber Racing"
            studio="Vaporcade Studio"
            genre="Carreras / Arcade"
            rating="4.4"
            image={`${gamesImageBase}neon-drifter.jpg`}
            description="Carreras callejeras de alto voltaje en una ciudad neón, con autos personalizables y nitro infinito."
            action="Jugar"
          />
          <GameCard
            title="Talisman: El Juego de Aventuras y Fantasía"
            studio="Games Workshop · Ed. en español: MasQueOca"
            genre="Juego de mesa"
            rating="4.5"
            image={`${gamesImageBase}talisman.jpg`}
            description="4ª edición revisada del clásico juego de tablero de aventuras: explora, lucha y sé el primero en alcanzar la Corona del Poder."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
