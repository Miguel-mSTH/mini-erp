//import { Guarda } from "./components/Guarda";
import { Lista } from "../conponents/Lista";
import "./editar.css";
import { api } from "../../../../services/api";
import { useEffect, useState } from "react/cjs/react.development";
import { useParams } from "react-router";
import axios from "axios";
//import { useHistory } from "react-router-dom";

function PageProvEditar() {
  //let history = useHistory();
  const [proveedor, setProveedor] = useState({});
  let { id } = useParams();

  function getProveedor(id) {
    api.get(`proveedor/${id}`).then((response) => setProveedor(response.data));
  }

  useEffect(() => {
    getProveedor(id);
  }, []);

  function updateProveedor(proveedor) {
    axios
      .put(`http://localhost:4000/proveedor/${id}`, proveedor)
      .then((response) => {
        alert("El proveedor se actualizo correctamente");
        //history.goBack();
      })
      .catch(() => {
        alert("Por favor intentalo nuevamente");
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateProveedor(proveedor);
  }

  // useEffect(() => {
  //   updateProveedor();
  // }, []);

  return (
    <div className="editar">
      <h1>Editar Proveedor {id}</h1>
      <hr />
      <form action="" onSubmit={handleSubmit}>
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
            onChange={(e) =>
              setProveedor((state) => ({ ...state, codigo: e.target.value }))
            }
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
            onChange={(e) =>
              setProveedor((state) => ({ ...state, nombre: e.target.value }))
            }
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
            onChange={(e) =>
              setProveedor((state) => ({ ...state, ruc: e.target.value }))
            }
          />
        </div>
        <div class="mb-3 col-6">
          <label for="ubigeo" class="form-label">
            Ubigeo
          </label>
          <div class="d-flex justify-content-between">
            <select class="form-select" aria-label="Default select example">
              <option
                selected
                onChange={(e) => {
                  setProveedor((state) => {
                    return {
                      ...state,
                      departamento: e.target.value,
                    };
                  });
                }}
              >
                {proveedor.departamento}
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select" aria-label="Default select example">
              <option
                selected
                onChange={(e) => {
                  setProveedor((state) => {
                    return {
                      ...state,
                      departamento: e.target.value,
                    };
                  });
                }}
              >
                {proveedor.provincia}
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select" aria-label="Default select example">
              <option
                selected
                onChange={(e) => {
                  setProveedor((state) => {
                    return {
                      ...state,
                      departamento: e.target.value,
                    };
                  });
                }}
              >
                {proveedor.distrito}
              </option>
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
          <textarea
            class="form-control"
            id="direccion"
            rows="2"
            value={proveedor.direccion}
            onChange={(e) =>
              setProveedor((state) => ({ ...state, direccion: e.target.value }))
            }
          ></textarea>
        </div>
        <div>
          <button className="btn btn-success">GUARDAR</button>
        </div>
      </form>
    </div>
  );
}

export { PageProvEditar };
