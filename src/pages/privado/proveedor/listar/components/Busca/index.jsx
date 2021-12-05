import { useState, useEffect } from "react";
import axios from "axios";
import { Tabla } from "../Tabla";
import "./busca.css";

function Busca(props) {
  // const [busqueda, setBusqueda] = useState("");

  // const handleChange = (e) => {
  //   setBusqueda(e.target.value);
  //   // filtrar(e.target.value);
  // };

  // useEffect(() => {
  //   // getProveedor();
  // }, []);

  return (
    <div className="busca">
      <div className="buscar-proveedor mb-3">
        <form className="form-proveedor d-flex">
          <input
            type="text"
            class="form-control"
            id="busca"
            // value={busqueda}
            placeholder="Buscar"
          />
          <button
            className="btn btn-secondary"
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
