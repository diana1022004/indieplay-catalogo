// Componente 1: Header (Encabezado)
// Barra superior con el título de la plataforma y un botón estático de inicio de sesión.

function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <div className="header-logo">IP</div>
        <h1 className="header-title">
          IndiePlay <span>- Catálogo</span>
        </h1>
      </div>

      <button className="btn btn-primary">Iniciar Sesión</button>
    </header>
  );
}

export default Header;
