import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-blue-800 py-6 px-4">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">BlockTube</Link>
        </span>
        <span className="flex space-x-4">
          <Link to="/sign-in" className="bg-white text-blue-600 px-4 py-2 font-bold hover:bg-gray-100 rounded">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
