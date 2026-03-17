import "./App.css";
import { Routes, Route} from "react-router";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from "./components/Header";
import Resources from "./pages/Resources";
import ResourcesRenting from "./pages/ResourcesRenting";
import ResourcesBuyers from "./pages/ResourcesBuyers.jsx";
import ResourcesBuyingProcess from "./pages/ResourcesBuyingProcess.jsx";

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources-1" element={<ResourcesBuyers  />} />
        <Route path="/resources-2" element={<ResourcesBuyingProcess />} />
        <Route path="/resources-3" element={<ResourcesRenting />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
