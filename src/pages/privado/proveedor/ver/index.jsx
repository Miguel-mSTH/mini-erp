import { useEffect, useState } from "react/cjs/react.development";
import { useParams } from "react-router";
import { api } from "../../../../services/api";
import { Lista } from "../conponents/Lista";
import "./ver.css";

function PageProvVer() {
  const [proveedor, setProveedor] = useState({});
  let { id } = useParams();

  function getProveedor(id) {
    api.get(`proveedor/${id}`).then((response) => setProveedor(response.data));
  }

  useEffect(() => {
    getProveedor(id);
  }, []);

  return (
    <div className="editar">
      <h1>Ver Proveedor {id}</h1>
      <hr />
      <form action="">
        <div class="mb-4">
          <Lista />
        </div>

        <div class="mb-3 col-6">
          <label for="codigo" class="form-label">
            Codigo
          </label>
          <input
            type="text"
            class="form-control"
            id="codigo"
            placeholder="Id"
            value={proveedor.codigo}
          />
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
            value={proveedor.nombre}
          />
        </div>
        <div class="mb-3 col-6">
          <label for="ruc" class="form-label">
            RUC
          </label>
          <input
            type="text"
            class="form-control"
            id="ruc"
            placeholder="Ruc"
            value={proveedor.ruc}
          />
        </div>
        <div class="mb-3 col-6">
          <label for="ubigeo" class="form-label">
            Ubigeo
          </label>
          <div class="d-flex justify-content-between">
            <select class="form-select" aria-label="Default select example">
              <option selected>{proveedor.departamento}</option>
            </select>
            <select class="form-select" aria-label="Default select example">
              <option selected>{proveedor.provincia}</option>
            </select>
            <select class="form-select" aria-label="Default select example">
              <option selected>{proveedor.distrito}</option>
            </select>
          </div>
        </div>
        <div class="mb-3 col-6">
          <label for="direccion" class="form-label">
            Direccion
          </label>
          <textarea
            class="form-control"
            id="direccion"
            rows="2"
            value={proveedor.direccion}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-success">GUARDAR</button>
        </div>
      </form>
    </div>
  );
}

export { PageProvVer };
