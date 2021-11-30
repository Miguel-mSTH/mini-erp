import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Nuevo } from "./pages/privado/material/Nuevo";
import { Editar } from "./pages/privado/material/Editar";
// import { PageMatEditar } from "../src/pages/privado/material/Editar";
import { Ver } from "./pages/privado/material/Ver";
import { Listar } from "./pages/privado/material/Listar";
import { PageProvNuevo } from "./pages/privado/proveedor/nuevo";
import { PageProvEditar } from "./pages/privado/proveedor/editar";
import { PageProvVer } from "./pages/privado/proveedor/ver";
import { PageProvLista } from "./pages/privado/proveedor/listar";
import { PagePeticionNuevo } from "./pages/privado/peticionoferta/Nuevo";

// import { LayoutPrivate } from "../src/layouts/layout-public";

import { Header } from "./components/Header";
//import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

import "./app.css";

function App() {
  return (
    <div className="app">
      <Router>
        {/* <LayoutPrivate> */}
        <Header />
        <Main>
          <Switch>
            <Route path="/privado/material/Nuevo">
              <Nuevo />
            </Route>
            <Route path="/privado/material/Editar/:id">
              <Editar />
            </Route>
            <Route path="/privado/material/Ver/:id">
              <Ver />
            </Route>
            <Route path="/privado/material/Listar">
              <Listar />
            </Route>
            <Route path="/privado/proveedor/Nuevo">
              <PageProvNuevo />
            </Route>
            <Route path="/privado/proveedor/Editar/:id">
              <PageProvEditar />
            </Route>
            <Route path="/privado/proveedor/Ver/:id">
              <PageProvVer />
            </Route>
            <Route path="/privado/proveedor/Listar">
              <PageProvLista />
            </Route>

            <Route path="/privado/peticionoferta/Nuevo">
              <PagePeticionNuevo />
            </Route>
          </Switch>
        </Main>
        <Footer />
        {/* </LayoutPrivate> */}
      </Router>
    </div>
  );
}

//export default App;

export { App };
