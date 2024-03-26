import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/">
        <button>MAIN</button>
      </Link>
      <Link to="/about">
        <button>ABOUT</button>
      </Link>
      <Link to="/titanes">
        <button>TITANES</button>
      </Link>
      <Link to="/contacto">
        <button>CONTACTO</button>
      </Link>
      <Link to="/informacion">
        <button>INFORMACION</button>
      </Link>
    </div>
  );
};

export default Header;
