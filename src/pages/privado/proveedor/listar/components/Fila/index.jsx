import { Ver } from "../Ver";
import { Editar } from "../Editar";
import "./fila.css";

function Fila() {
  return (
    <tr className="registro">
      <th>1</th>

      <td>Ruben Cardens</td>

      <td>20605571710</td>
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
