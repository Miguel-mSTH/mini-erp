import { Busca } from "../components/Busca";
import { Tablamaterial } from "../components/Tablamaterial";
import { Filamaterial } from "../components/Filamaterial";
import { Agregamaterial } from "../components/Agregarmaterial";
import { Tablapeticion } from "../components/Tablapeticion";
import { Filapeticion } from "../components/Filapeticion";
import { Enviarpeticion } from "../components/Enviarpeticion";
import "./nuevo.css";

function PagePeticionNuevo() {
  return (
    <div className="nuevo">
      <Busca />
      <Tablamaterial>
        <Filamaterial />
      </Tablamaterial>
      <Agregamaterial />
      <Tablapeticion>
        <Filapeticion />
      </Tablapeticion>
      <Enviarpeticion />
    </div>
  );
}

export { PagePeticionNuevo };
