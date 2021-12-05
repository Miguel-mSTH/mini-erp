import { Busca } from "./components/Busca";
import { Tabla } from "./components/Tabla";
import { Nuevo } from "../conponents/Nuevo";
import { useState, useEffect } from "react";
import axios from "axios";
import "./listar.css";

function PageProvLista() {
  // const [proveedores, setProveedor] = useState([]);

  // function getProveedor() {
  //   axios
  //     .get("http://localhost:4000/proveedor")
  //     .then((response) => {
  //       setProveedor(response.data);
  //     })
  //     .catch((e) => {});
  // }

  // useEffect(() => {
  //   getProveedor();
  // }, []);

  // function filtrar(terminoBusqueda) {
  //   let resultadosBusqueda = proveedores.filter((elemento) => {
  //     if (
  //       elemento.nombre
  //         .toString()
  //         .toLowerCase()
  //         .includes(terminoBusqueda.toLowerCase())
  //     ) {
  //       return elemento;
  //     }
  //   });
  //   setProveedor(resultadosBusqueda);
  // }

  return (
    <div>
      <h1>Listar Proveedores</h1>
      <div className="d-flex justify-content-between">
        <Busca />
        <Nuevo />
      </div>
      <Tabla />
    </div>
  );
}

export { PageProvLista };
