import { Link } from "react-router";
import "./Header.css";

const Menu = () => {
  return (
    <nav className="menu">
      <ul style={{margin:"12px"}}>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li className="list-contact">
          <Link to="/contact" style={{ color: "#ECECEC" }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
