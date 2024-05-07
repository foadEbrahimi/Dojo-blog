import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That Page Can't Be Found</p>
      <Link to="/">Back To HomePage...</Link>
    </div>
  );
};

export default NotFound;
