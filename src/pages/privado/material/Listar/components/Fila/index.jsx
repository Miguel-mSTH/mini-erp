import { Ver } from "../Ver";
import { Editar } from "../Editar";
import "./fila.css";

function Fila() {
  return (
    <tr className="fila">
      <th scope="row">1</th>
      <td>Mouse</td>
      <td>Tecnologia</td>
      <td>0000000001</td>
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
