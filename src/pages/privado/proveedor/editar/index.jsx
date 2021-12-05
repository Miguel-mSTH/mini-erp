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
  const [departamentos, setDepartamento] = useState([]);
  const [response, setResponse] = useState([]);
  const [provincias, setProvincia] = useState([]);

  let { id } = useParams();

  function getProveedores(id) {
    api.get(`proveedor/${id}`).then((response) => setProveedor(response.data));
  }

  function getDepartamento() {
    axios
      .get("http://localhost:4000/departamentos")
      .then((response) => {
        setResponse(response.data);
      })
      .catch((e) => {});
  }

  useEffect(() => {
    getDepartamento();
  }, []);

  useEffect(() => {
    setDepartamento(
      response.filter((dep) => {
        return dep.nombre === proveedor.departamento;
      })
    );
    setProvincia(
      departamentos[0]
        ? departamentos[0].provincias.filter(
            (prov) => prov.nombre === proveedor.provincia
          )
        : []
    );
  }, [proveedor.departamento, proveedor.provincia, proveedor.distrito]);

  useEffect(() => {
    getProveedores(id);
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
            <select
              required
              className="form-select"
              aria-label="Default select example"
              value={proveedor.departamento}
              onChange={(e) => {
                setProveedor((state) => {
                  return {
                    ...state,
                    departamento: e.target.value,
                  };
                });
              }}
            >
              <option selected>{proveedor.departamento}</option>
              {response.map((departamento) => {
                return (
                  <option key={departamento.id}>{departamento.nombre}</option>
                );
              })}
            </select>
            <select
              className="form-select"
              aria-label="Default select example"
              value={proveedor.provincia}
              onChange={(e) => {
                setProveedor((state) => {
                  return {
                    ...state,
                    provincia: e.target.value,
                  };
                });
              }}
            >
              <option selected>Provincia</option>
              {!!departamentos.length &&
                departamentos[0].provincias.map((provincia) => (
                  <option key={provincia}>{provincia.nombre}</option>
                ))}
              {/* {provincias.map((provincia) => (
                <option>{provincia.title}</option>
              ))} */}
            </select>
            <select
              className="form-select"
              aria-label="Default select example"
              value={proveedor.distrito}
              onChange={(e) => {
                setProveedor((state) => {
                  return {
                    ...state,
                    distrito: e.target.value,
                  };
                });
              }}
            >
              <option selected>Distrito</option>
              {provincias.length &&
                provincias[0].distritos.map((distrito) => (
                  <option key={distrito}>{distrito}</option>
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
