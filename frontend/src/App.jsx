import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AddCar from "./pages/AddCar";
import Car from "./pages/Car";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import RootLayout from "./shared/components/Layouts/RootLayout";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<Car />} />
        <Route path="/cars/add" element={<AddCar />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
