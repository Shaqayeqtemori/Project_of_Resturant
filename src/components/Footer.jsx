function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 mt-12">
            <div className="container mx-auto px-6 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Quick Link */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Quick Link</h4>
                        <ul className="space-y-2">
                            <li><a className="hover:underline" href="#">About Us</a></li>
                            <li><a className="hover:underline" href="#">Contact Us</a></li>
                            <li><a className="hover:underline" href="#">Privacy Policy</a></li>
                            <li><a className="hover:underline" href="#">Terms & Condition</a></li>
                            <li><a className="hover:underline" href="#">FAQs & Help</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
                        <p className="mb-2"><i className="fas fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fas fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p className="mb-4"><i className="fas fa-envelope mr-2"></i>info@example.com</p>
                        <div className="flex space-x-3">
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Newsletter</h4>
                        <p className="mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Your email"
                                className="w-full py-3 pl-4 pr-32 rounded border-0 text-gray-800"
                            />
                            <button
                                type="button"
                                className="absolute top-1 right-1 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                            >
                                SignUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright Section */}
            <div className="bg-gray-800 py-6 text-sm">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-3 md:mb-0">
                        &copy; <a className="underline" href="#">Your Site Name</a>, All Right Reserved.
                        <br />
                        Designed By <a className="underline" href="https://htmlcodex.com">HTML Codex</a> | 
                        Distributed By <a className="underline" href="https://themewagon.com">ThemeWagon</a>
                    </div>
                    <div className="space-x-4">
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">Cookies</a>
                        <a href="#" className="hover:underline">Help</a>
                        <a href="#" className="hover:underline">FAQs</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;