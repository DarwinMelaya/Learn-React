import { Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import RootLayout from "./shared/components/Layouts/RootLayout";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={null} />
      </Routes>
    </RootLayout>
  );
};

export default App;
