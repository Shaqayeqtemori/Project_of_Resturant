import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <i className="fas fa-synagogue"></i>
                    Online Resturant
                </Link>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="text-blue-700 hover:text-gray-600 font-medium">Home</Link>
                    <Link to="/about" className="text-blue-700 hover:text-gray-600 font-medium">About</Link>
                    <div className="relative group">
                        <button className="text-blue-700 hover:text-blue-600 font-medium">Pages</button>
                        <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded hidden group-hover:block z-10">
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Our Team</Link>
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Testimonial</Link>
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100">404 Page</Link>
                        </div>
                    </div>
                    <Link to="/contact" className="text-blue-700 hover:text-gray-600 font-medium">Contact</Link>
                    <Link to="/join" className="ml-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-gray-700 transition">Join Now <i className="fas fa-arrow-right ml-2"></i></Link>
                </nav>
                {/* Mobile Menu Placeholder (optional future) */}
                <div className="md:hidden">
                    {/* You can add mobile menu toggle here */}
                </div>
            </div>
        </header>
    );
}
export default Header;