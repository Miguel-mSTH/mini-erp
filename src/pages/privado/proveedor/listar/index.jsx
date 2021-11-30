import { Busca } from "./components/Busca";
import { Tabla } from "./components/Tabla";
import "./listar.css";

function PageProvLista() {
  //const { children } = props;
  return (
    <div>
      <h1>Listar Proveedores</h1>
      <Busca />
      <Tabla />
    </div>
  );
}

export { PageProvLista };
