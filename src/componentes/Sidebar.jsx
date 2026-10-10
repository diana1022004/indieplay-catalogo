// Componente 2: Sidebar (Menú Lateral)
// Menú de navegación estático con tres opciones visuales.

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-group">
        <p className="sidebar-label">Navegación</p>

        <div className="nav-item active">
          <span className="dot"></span>
          Explorar
        </div>

        <div className="nav-item">
          <span className="dot"></span>
          Géneros
        </div>

        <div className="nav-item">
          <span className="dot"></span>
          Mis Favoritos
        </div>
      </div>

      <div className="sidebar-promo">
        <strong>IndiePlay PRO</strong>
        <p>Accede a betas anticipadas de estudios indie.</p>
        <button className="btn btn-ghost btn-block">Más información</button>
      </div>
    </aside>
  );
}

export default Sidebar;
