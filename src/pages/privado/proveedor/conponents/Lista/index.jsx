import { NavLink } from "react-router-dom";
import "./lista.css";

function Lista() {
  return (
    <NavLink to="/privado/proveedor/listar">
      <img src="https://img.icons8.com/fluency/48/000000/todo-list.png" />
    </NavLink>
  );
}

export { Lista };
