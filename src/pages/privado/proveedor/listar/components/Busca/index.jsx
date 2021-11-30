import "./busca.css";

function Busca() {
  return (
    <div className="busca ">
      <label for="basic-url" class="form-label">
        Proveedor
      </label>
      <div className="buscar-proveedor">
        <form className="form-proveedor d-flex">
          <input
            type="text"
            class="form-control"
            id="busca"
            placeholder="Buscar"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="busca_proveedor"
          >
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}

export { Busca };
