import { Fila } from "../Fila";
import "./tabla.css";

function Tabla() {
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
          <Fila />
        </tbody>
      </table>
    </div>
  );
}

export { Tabla };
