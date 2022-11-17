import { Link } from "react-router-dom";

export const Error403 = () => {
  return (
    <div>
      <h1>403 Forbidden</h1>
      <Link to="/">RETURN TO THE MAIN PAGE</Link>
    </div>
  );
};