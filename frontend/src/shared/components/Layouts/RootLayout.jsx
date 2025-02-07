import { Link } from "react-router-dom";
import Footer from "../Partials/Footer";
import Header from "../Partials/Header";

const RootLayout = ({ children }) => {
  return (
    <div className="root-main">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cars">Cars</Link>

      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
