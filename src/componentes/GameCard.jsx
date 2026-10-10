// Componente 3: GameCard (Tarjeta de Contenido)
// Componente reutilizable que recibe los datos de un videojuego por props.
// Cada instancia en App.jsx usa datos fijos (hardcodeados) distintos.

function GameCard({ title, studio, genre, rating, image, description, action = "Ver Detalles" }) {
  return (
    <article className="game-card">
      <div className="game-cover">
        <span className="game-genre">{genre}</span>
        <img className="game-cover-img" src={image} alt={`Carátula de ${title}`} loading="lazy" />
      </div>

      <div className="game-body">
        <h3 className="game-title">{title}</h3>
        <p className="game-studio">{studio}</p>
        {description && <p className="game-desc">{description}</p>}

        <div className="game-footer">
          <span className="game-rating">
            ★ <b>{rating}</b>
          </span>
          <button className="btn btn-primary btn-sm">{action}</button>
        </div>
      </div>
    </article>
  );
}

export default GameCard;
