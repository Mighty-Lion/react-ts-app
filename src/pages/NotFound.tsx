import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1 className="mb-5">Not Found</h1>
      <Link
        className="flex items-center justify-center box-border px-2 w-32 h-8 text-white bg-blue-500 hover:bg-blue-600"
        to="/"
      >
        Go Home
      </Link>
    </>
  );
}

export default NotFound;
