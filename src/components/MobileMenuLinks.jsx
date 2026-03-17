import classNames from "classnames";
import { Link } from "react-router";

const MobileMenuLinks = ({ open, setMobileMenuOpen }) => {
  let displayMobileLinks = classNames("mobile-nav-wrapper", {
    open: open,
  });

  return (
    <nav className={displayMobileLinks} aria-label="mobile navigation">
      <ul className="mobile-list" style={{ listStyle: "none" }}>
        <li
          onClick={() => {
            setMobileMenuOpen(!open);
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li
          onClick={() => {
            setMobileMenuOpen(!open);
          }}
        >
          <Link to="/resources" style={{ textDecoration: "none" }}>
            Resources
          </Link>
        </li>
        <li
          onClick={() => {
            setMobileMenuOpen(!open);
          }}
        >
          <Link to="/contact" style={{ textDecoration: "none" }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenuLinks;
