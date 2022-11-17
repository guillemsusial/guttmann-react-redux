import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/">RETURN TO THE MAIN PAGE</Link>
    </div>
  );
};