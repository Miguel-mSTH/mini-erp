import { useEffect, useState } from "react";
import axios from "axios";

import { Fila } from "../Fila";
import "./tabla.css";

function Tabla(props) {
  const [proveedores, setProveedor] = useState([]);

  function getProveedor() {
    axios
      .get("http://localhost:4000/proveedor")
      .then((response) => {
        setProveedor(response.data);
      })
      .catch((e) => {});
  }

  useEffect(() => {
    getProveedor();
  }, []);
  return (
    <div className="resultado">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Proveedor</th>
            <th>Ruc</th>
            <th colspan="3"></th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor) => (
            <Fila
              key={proveedor.id}
              codigo={proveedor.codigo}
              nombre={proveedor.nombre}
              ruc={proveedor.ruc}
              id={proveedor.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Tabla };
