import "./editar.css";

function Editar(props) {
  return (
    <a href={`Editar/${props.id}`}>
      <img src="https://img.icons8.com/ios-glyphs/30/000000/edit.png" />
    </a>
  );
}

export { Editar };
