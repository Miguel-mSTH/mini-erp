import { Guarda } from "./components/Guarda";
import { Lista } from "../conponents/Lista";
import "./editar.css";

function Editar(){
    return(
        <div className="editar">
            <h1>Editar Material</h1>
            <hr />

            <div class="mb-4">
              <Guarda />
              <Lista />
            </div>

            <div class="mb-3 col-6">
              <label for="codigo" class="form-label">Codigo</label>
              <input
                type="text"
                class="form-control"
                id="codigo"
                placeholder="Id"
              />
            </div>
            <div class="mb-3 col-6">
                <label for="codigo" class="form-label">SKU</label>
                <input
                  type="text"
                  class="form-control"
                  id="codigo"
                  placeholder="sku"
                />
              </div>
            <div class="mb-3 col-6">
              <label for="nombreproveedor" class="form-label">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="nombrematerial"
                placeholder="Nombre Material"
              />
            </div>
            <div class="mb-3 col-6">
              <label for="ruc" class="form-label">Grupo Articulo</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Grp Articulo</option>
                <option value="1">Tecnologia</option>
                <option value="2">Oficina</option>
              </select>
            </div>
        </div>
    );
}

export { Editar }