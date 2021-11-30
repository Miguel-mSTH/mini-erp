import { Ver } from "../Ver";
import { Editar } from "../Editar";
import "./fila.css";

function Fila(props) {
  const { codigo, nombre, ruc } = props;

  return (
    <tr className="registro">
      <th>{codigo}</th>
      <td>{nombre}</td>
      <td>{ruc}</td>
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
