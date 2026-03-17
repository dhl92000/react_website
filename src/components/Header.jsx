import "./Header.css";
import { Link } from "react-router";
import classNames from "classnames";
import Navigation from "./Navigation";
import useScrollDirection from "./useScrollDirection";

const Header = () => {
  // "down" or "up"
  const direction = useScrollDirection();

  // set CSS to header-hidden or show
  let headerClass = classNames("header", {
    hidden: direction == "down",
    show: direction == "up",
  });

  // if fontColour ? 
  return (
    <header className={headerClass}>
      <div className="logo">
        {" "}
        <Link to="/"

        >Danny Lee</Link>
      </div>
      <Navigation/>
    </header>
  );
};

export default Header;
