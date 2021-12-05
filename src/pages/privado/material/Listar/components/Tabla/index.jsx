import { useState, useEffect } from "react";
import { Fila } from "../Fila";
import axios from "axios";

import "./tabla.css";

function Tabla() {
  const [materiales, setMaterial] = useState([]);

  function getMaterial() {
    axios
      .get("http://localhost:4000/materiales")
      .then((response) => {
        setMaterial(response.data);
      })
      .catch((e) => {});
  }

  useEffect(() => {
    getMaterial();
  }, []);

  return (
    <div className="resultado">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Material</th>
            <th scope="col">Grupo Articulo</th>
            <th scope="col">SKU</th>
            <th scope="col" colspan="2"></th>
          </tr>
        </thead>
        <tbody>
          {materiales.map((material) => (
            <Fila
              codigo={material.codigo}
              sku={material.sku}
              nombre={material.nombre}
              grupo={material.grupo}
              id={material.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Tabla };
