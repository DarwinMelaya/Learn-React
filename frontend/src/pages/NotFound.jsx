import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      This url not found <Link to="/">Go back home </Link>
    </div>
  );
};

export default NotFound;
