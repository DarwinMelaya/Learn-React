import { Link, Outlet } from "react-router-dom";
import Footer from "../Partials/Footer";
import Header from "../Partials/Header";

const RootLayout = () => {
  return (
    <div className="root-main">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cars">Cars</Link>

      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
