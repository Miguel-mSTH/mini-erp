import { useState } from "react";
import axios from "axios";
//import { Guarda } from "./components/Guarda";
import { Lista } from "../conponents/Lista";
import "./nuevo.css";

function PageProvNuevo() {
  const [form, setForm] = useState({
    codigo: "",
    nombre: "",
    ruc: "",
    direccion: "",
  });

  function saveProveedor(proveedor) {
    axios
      .post("http://localhost:4000/proveedor", proveedor)
      .then((response) => {
        alert("El proveedor se guardo correctamente");
      })
      .catch(() => {
        alert("Por favor intentalo nuevamente");
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveProveedor(form);
  }

  return (
    <div className="nuevo">
      <h1>Nuevo Proveedor</h1>
      <hr />

      <div class="mb-4">
        {/* <Guarda /> */}
        <Lista />
      </div>

      <form onSubmit={handleSubmit}>
        <div class="mb-3 col-6">
          <label for="codigo" class="form-label">
            Codigo
          </label>
          <input
            type="text"
            class="form-control"
            id="codigo"
            placeholder="Id"
            required
            value={form.codigo}
            onChange={(e) =>
              setForm((state) => ({ ...state, codigo: e.target.value }))
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
            required
            value={form.nombre}
            onChange={(e) =>
              setForm((state) => ({ ...state, nombre: e.target.value }))
            }
          />
        </div>
        <div class="mb-3 col-6">
          <label for="ruc" class="form-label">
            Ruc
          </label>
          <input
            type="text"
            class="form-control"
            id="ruc"
            placeholder="Ruc"
            required
            value={form.ruc}
            onChange={(e) =>
              setForm((state) => ({ ...state, ruc: e.target.value }))
            }
          />
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
          <textarea
            class="form-control"
            id="direccion"
            rows="2"
            value={form.direccion}
            onChange={(e) =>
              setForm((state) => ({ ...state, direccion: e.target.value }))
            }
          ></textarea>
        </div>
        <div>
          <button>GUARDAR</button>
        </div>
      </form>
    </div>
  );
}

export { PageProvNuevo };
