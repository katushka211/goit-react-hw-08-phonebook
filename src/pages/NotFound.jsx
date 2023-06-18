import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <p className="not-found-text">Page not found</p>
      <Link className="link-details" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
