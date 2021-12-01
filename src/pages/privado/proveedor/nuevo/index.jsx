import { useState } from "react";
import axios from "axios";
//import { Guarda } from "./components/Guarda";
import { Lista } from "../conponents/Lista";
import "./nuevo.css";

function PageProvNuevo() {
  const departamentos = [
    {
      title: "Lima",
      value: "lim",
    },
    {
      title: "Ayacucho",
      value: "ayac",
    },
    {
      title: "Cuzco",
      value: "cus",
    },
  ];

  const provincias = [
    {
      title: "Lima",
      value: "lim",
    },
    {
      title: "Ayacucho",
      value: "ayac",
    },
    {
      title: "Cuzco",
      value: "cus",
    },
  ];

  const distritos = [
    {
      title: "Lima",
      value: "lim",
    },
    {
      title: "Ayacucho",
      value: "ayac",
    },
    {
      title: "Cuzco",
      value: "cus",
    },
  ];

  const [form, setForm] = useState({
    codigo: "",
    nombre: "",
    ruc: "",
    departamento: "",
    provincia: "",
    distrito: "",
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
            <select
              required
              class="form-select"
              aria-label="Default select example"
              value={form.departamento}
              onChange={(e) => {
                setForm((state) => {
                  return {
                    ...state,
                    departamento: e.target.value,
                  };
                });
              }}
            >
              <option selected>Departamento</option>
              {departamentos.map((departamento) => (
                <option>{departamento.title}</option>
              ))}
            </select>
            <select
              class="form-select"
              aria-label="Default select example"
              value={form.provincia}
              onChange={(e) => {
                setForm((state) => {
                  return {
                    ...state,
                    provincia: e.target.value,
                  };
                });
              }}
            >
              <option selected>Provincia</option>
              {provincias.map((provincia) => (
                <option>{provincia.title}</option>
              ))}
            </select>
            <select
              class="form-select"
              aria-label="Default select example"
              value={form.distrito}
              onChange={(e) => {
                setForm((state) => {
                  return {
                    ...state,
                    distrito: e.target.value,
                  };
                });
              }}
            >
              <option selected>Distrito</option>
              {distritos.map((distrito) => (
                <option>{distrito.title}</option>
              ))}
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
          <button className="btn btn-success">GUARDAR</button>
        </div>
      </form>
    </div>
  );
}

export { PageProvNuevo };
