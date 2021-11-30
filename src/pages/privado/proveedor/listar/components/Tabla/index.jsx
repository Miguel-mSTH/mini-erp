import { Fila } from "../Fila";
import "./tabla.css";

function Tabla() {
  return (
    <div className="resultado">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Proveedor</th>
            <th>Ruc</th>
            <th colspan="2"></th>
          </tr>
        </thead>
        <tbody>
          <Fila />
        </tbody>
      </table>
    </div>
  );
}

export { Tabla };
