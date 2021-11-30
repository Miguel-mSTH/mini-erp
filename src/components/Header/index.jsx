import "./header.css";
import { Nav } from "../Nav";

function Header() {
  return (
    <header className="header flex justify-between">
      <Nav />
    </header>
  );
}

export { Header };
