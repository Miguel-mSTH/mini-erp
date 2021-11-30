import "./busca.css";

function Busca() {
  return (
    <div className="busca">
      <label for="basic-url" class="form-label">
        Material
      </label>
      <div className="input-group mb-3 col-3">
        <form className="d-flex">
          <input
            type="text"
            class="form-control"
            id="busca"
            placeholder="Buscar"
          />
          <button
            class="btn btn-outline-secondary"
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
