import Footer from "../Partials/Footer";
import Header from "../Partials/Header";

const RootLayout = ({ children }) => {
  return (
    <div className="root-main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
