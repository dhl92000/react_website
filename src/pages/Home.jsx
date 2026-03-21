import Calltoaction from "../components/Calltoaction";
import "./Home.css";
import profile from "../assets/IMG_5774.jpg";
import { Link } from "react-router";

const Home = () => {
  return (
    <main>
      <div className="landing-title">
        <h1>Danny Lee</h1>
        <h1>Real Estate</h1>
      </div>
      <section className="container">
        <div className="container-content1">
          <p className="text-intro">
            Finding the right home in Toronto’s evolving real estate market
            takes expertise and support you can trust. I help buyers, sellers,
            and renters navigate properties throughout the Greater Toronto Area
            with confidence. Whether you’re a first-time buyer searching in
            areas like North York or the downtown core, I’ll work alongside you
            with integrity and care, every step of the way.
            <br />
            <button className="button-cta">
              <p>
                <Link to="/contact" style={{ color: "#688BBC" }}>
                  {" "}
                  Let's work together
                  <span className="arrow"> {"\u2192"}</span>
                </Link>
              </p>
            </button>
          </p>
          <img
            aria-label="business profile headshot"
            className="profile-pic"
            src={profile}
          />
        </div>
      </section>

      <div className="banner">SERVICES</div>
      <section className="container">
        <div className="container-content2">
          <div>
            <p className="text-help">How I Can Help</p>
            <button className="button-cta">
              <p>
                <Link to="/contact" style={{ color: "#688BBC" }}>
                  Book a call
                  <span className="arrow"> {"\u2192"}</span>
                </Link>
              </p>
            </button>
          </div>
          <ul className="service-list">
            <li>Pricing Strategy</li>
            <li>Market Analysis</li>
            <li>Property listing</li>
            <li>Offer Negotiation</li>
            <li>Client Advocacy</li>
          </ul>
          <ul className="service-list">
            <li>Risk Mitigation</li>
            <li>Transaction Management</li>
            <li>Closing Coordination</li>
            <li>Professional Network </li>
            <li style={{ lineHeight: "0" }}>Referrals</li>
          </ul>
        </div>
      </section>

      <div className="banner">RESOURCES</div>
      <section className="container">
        <div className="container-content3">
          <div className="blog-preview">
            <Link to="/resources-1">
              <p>Frequently Asked Questions For Buyers</p>
              <div className="arrow-blog"> {"\u2192"}</div>
            </Link>
          </div>
          <div className="blog-preview">
            <Link to="/resources-2">
              <p>A Step-By-Step Guide To The Home-buying Process</p>
              <div className="arrow-blog"> {"\u2192"}</div>
            </Link>
          </div>
          <div className="blog-preview">
            <Link to="/resources-3">
            <p>Leasing 101: An Introduction To Leasing For Tenants </p>
            <div className="arrow-blog"> {"\u2192"}</div>
            </Link>
          </div>
        </div>
        <button className="button-cta-right">
          <p className="button-cta-right-text">
            <Link to="/resources" style={{ color: "#688BBC" }}>
              Find more
            </Link>
          </p>
        </button>
      </section>
      <Calltoaction />
    </main>
  );
};

export default Home;
