import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AddCar from "./pages/AddCar";
import Car from "./pages/Car";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CarsLayout from "./shared/components/Layouts/CarsLayout";
import RootLayout from "./shared/components/Layouts/RootLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<CarsLayout />}>
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<Car />} />
          <Route path="/cars/add" element={<AddCar />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
