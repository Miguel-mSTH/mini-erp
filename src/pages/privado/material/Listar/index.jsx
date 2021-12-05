import { Busca } from "./components/Busca";
import { Tabla } from "./components/Tabla";
import { Nuevo } from "../conponents/Nuevo";
import "./listar.css";

function Listar() {
  return (
    <div className="listar">
      <h1>Materiales</h1>
      <div className="d-flex justify-content-between">
        <Busca />
        <Nuevo />
      </div>
      <Tabla />
    </div>
  );
}

export { Listar };
