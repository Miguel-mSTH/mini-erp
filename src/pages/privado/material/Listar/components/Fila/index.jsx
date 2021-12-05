import { Ver } from "../Ver";
import { Editar } from "../Editar";
import "./fila.css";

function Fila(props) {
  const { codigo, sku, nombre, grupo, id } = props;
  return (
    <tr className="fila">
      <th scope="row">{id}</th>
      <td>{nombre}</td>
      <td>{grupo}</td>
      <td>{sku}</td>
      <td>
        <Ver />
      </td>
      <td>
        <Editar />
      </td>
    </tr>
  );
}

export { Fila };
