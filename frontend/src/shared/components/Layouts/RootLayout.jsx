import Footer from "../Partials/Footer";
import Header from "../Partials/Header";
import { Link } from "react-router-dom";

const RootLayout = ({ children }) => {
  return (
    <div className="root-main">
      <Link to="/">Go to Home</Link>
      <Link to="/about">Go to About</Link>

      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
