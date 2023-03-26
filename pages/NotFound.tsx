import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1 className="mb-5">Not Found</h1>
      <Link to="/">Go Home</Link>
    </>
  );
}

export default NotFound;
