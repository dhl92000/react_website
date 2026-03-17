import "./Calltoaction.css";
import { Link } from "react-router";
const Calltoaction = () => {
  return (
    <article className="cta">
      <div className="cta-text">
        <h3>Ready to start your search?</h3>
        <p>
          Whether you know exactly what you want or just starting to have
          questions, I’m here to help.
        </p>
      </div>
      <button className="button-contact">
        <p>
          <Link to="/contact" style={{ color: "#688BBC" }}>
            Contact
            <span className="arrow"> {"\u2192"}</span>
          </Link>
        </p>
      </button>
    </article>
  );
};

export default Calltoaction;
