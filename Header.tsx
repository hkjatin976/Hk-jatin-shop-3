import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-700">
          HK Jatin Shop
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/cart" className="hover:text-blue-500">Cart</Link>
        </nav>
      </div>
    </header>
  );
}