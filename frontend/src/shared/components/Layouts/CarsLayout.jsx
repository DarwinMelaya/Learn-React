import { Outlet } from "react-router-dom";

const CarsLayout = () => {
  return (
    <div className="cars-main">
      <div>This for Cars Layout</div>
      <Outlet />
      <div>Cars Footer Layout</div>
    </div>
  );
};

export default CarsLayout;
