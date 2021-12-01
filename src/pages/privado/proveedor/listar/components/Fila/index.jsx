import { Ver } from "../Ver";
import { Editar } from "../Editar";
import "./fila.css";

function Fila(props) {
  const { codigo, nombre, ruc, id } = props;

  return (
    <tr className="registro">
      <th>{codigo}</th>
      <td>{nombre}</td>
      <td>{ruc}</td>
      <td>
        <Ver id={id} />
      </td>
      <td>
        <Editar id={id} />
      </td>
    </tr>
  );
}

export { Fila };
