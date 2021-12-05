import { Ver } from "../Ver";
import { Editar } from "../Editar";
import { Eliminar } from "../Eliminar";
import "./fila.css";

function Fila(props) {
  const { codigo, nombre, ruc, id } = props;

  return (
    <tr className="registro">
      <th>{codigo}</th>
      <td>{nombre}</td>
      <td>{ruc}</td>
      <td className="text-center">
        <Ver id={id} />
      </td>
      <td className="text-center">
        <Editar id={id} />
      </td>
      <td className="text-center">
        <Eliminar id={id} />
      </td>
    </tr>
  );
}

export { Fila };
