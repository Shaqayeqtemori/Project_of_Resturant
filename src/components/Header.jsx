import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="shadow-md bg-orange-700">
            <div className="container  mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
                    <i className="fas fa-utensils"></i>
                    Online Resturant
                </Link>
                <nav className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="text-white hover:text-orange-400 font-medium">Home</Link>
                    <Link to="/about" className="text-white hover:text-orange-400 font-medium">About</Link>
                    <Link to="/contact" className="text-white hover:text-orange-400 font-medium">Contact</Link>
                    <Link to="#" className="ml-4 px-5 py-2 bg-orange-600 text-white rounded hover:bg-white hover:text-orange-700 transition">Join Now <i className="fas fa-arrow-right ml-2"></i></Link>
                </nav>
            </div>
        </header>
    );
}
export default Header;