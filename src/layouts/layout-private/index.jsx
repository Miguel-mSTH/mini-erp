import { Header } from  "../../components/Header";
import { Nav } from  "../../components/Nav";
import { Main } from  "../../components/Main";
import { Footer } from  "../../components/Footer";

import "./layout-private.css";

function LayoutPrivate(){
    return(
        <div className="layout-private">
            <Header />
            <Nav />
            <Main />
            <Footer />
        </div>
    );
}

export { LayoutPrivate }