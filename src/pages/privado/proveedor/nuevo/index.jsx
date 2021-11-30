import { Guarda } from "./components/Guarda";
import { Lista } from "../conponents/Lista";
import "./nuevo.css";

function PageProvNuevo() {
  return (
    <div className="nuevo">
      <h1>Nuevo Proveedor</h1>
      <hr />

      <div class="mb-4">
        <Guarda />
        <Lista />
      </div>

      <div class="mb-3 col-6">
        <label for="codigo" class="form-label">
          Codigo
        </label>
        <input type="text" class="form-control" id="codigo" placeholder="Id" />
      </div>
      <div class="mb-3 col-6">
        <label for="nombreproveedor" class="form-label">
          Nombre
        </label>
        <input
          type="text"
          class="form-control"
          id="nombreproveedor"
          placeholder="Nombre Proveedor"
        />
      </div>
      <div class="mb-3 col-6">
        <label for="ruc" class="form-label">
          Ruc
        </label>
        <input type="text" class="form-control" id="ruc" placeholder="Ruc" />
      </div>
      <div class="mb-3 col-6">
        <label for="ubigeo" class="form-label">
          Ubigeo
        </label>
        <div class="d-flex justify-content-between">
          <select class="form-select" aria-label="Default select example">
            <option selected>Departamento</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select class="form-select" aria-label="Default select example">
            <option selected>Provincia</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select class="form-select" aria-label="Default select example">
            <option selected>Distrito</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="mb-3 col-6">
        <label for="direccion" class="form-label">
          Direccion
        </label>
        <textarea class="form-control" id="direccion" rows="2"></textarea>
      </div>
    </div>
  );
}

export { PageProvNuevo };
