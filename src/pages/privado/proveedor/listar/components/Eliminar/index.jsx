import axios from "axios";

function Eliminar(props) {
  function deleteProveedor() {
    axios
      .delete(`http://localhost:4000/proveedor/${props.id}`)
      .then((response) => {
        alert("El proveedor se elimino correctamente");
      })
      .catch(() => {
        alert("Por favor intentalo nuevamente");
      });
  }
  return (
    <a href="" onClick={deleteProveedor}>
      <img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png" />
    </a>
  );
}

export { Eliminar };
