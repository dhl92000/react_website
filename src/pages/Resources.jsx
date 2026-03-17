import { Link } from "react-router";

const Resources = () => {
  return (
    <div className="subpage">
      <section className="subpage-intro">
        <h1>Resources</h1>
        <h4>
          A collection of frequently asked clients by my clients, gathered for
          you.
        </h4>
      </section>

      <div style={{padding:"none"}}>
        <ol className="subpage-resources-list">
          <li>
            <Link to="/resources-1" className="subpage-resources-list-item">
              <span>1</span>Frequently Asked Questions For Buyers
            </Link>
          </li>
          <li>
            <Link to="/resources-2" className="subpage-resources-list-item">
              <span>2</span>A Step-By-Step Guide To The Homebuying Process
            </Link>
          </li>
          <li>
            <Link to="/resources-3" className="subpage-resources-list-item">
              <span>3</span>
              Leasing 101: An Introduction To Leasing For Tenants
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Resources;
