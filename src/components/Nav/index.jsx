import "./nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Mini ERP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/privado/material/Listar"
              >
                MATERIALES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                MM
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/privado/proveedor/Listar">
                PROVEEDORES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/privado/peticionoferta/Nuevo">
                Peticion Oferta
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export { Nav };
