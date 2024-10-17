import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react"; // Assuming you have an icon library like lucide-react

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary text-white sticky top-0 z-50">
      <div className=" px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between py-6">
          <h1 className="font-dmSans text-2xl font-bold">BOXCARS</h1>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 text-base font-semibold">
            <Link to="/">Home</Link>
            <Link to="/listings">Listings</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/accessories">Accessories</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <a href="/signin">Sign in</a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-8">
          <div className="flex flex-col space-y-4 pb-6 px-4 font-semibold bg-gray-900 text-white rounded-md shadow-lg">
            <Link 
              to="/" 
              onClick={toggleMobileMenu} 
              className="py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300">
              Home
            </Link>
            <Link 
              to="/listings" 
              onClick={toggleMobileMenu} 
              className="py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300">
              Listings
            </Link>
            <Link 
              to="/blog" 
              onClick={toggleMobileMenu} 
              className="py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300">
              Blog
            </Link>
            <Link 
              to="/accessories" 
              onClick={toggleMobileMenu} 
              className="py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300">
              Accessories
            </Link>
            <Link 
              to="/shop" 
              onClick={toggleMobileMenu} 
              className="py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300">
              Shop
            </Link>
            <Link 
              to="/services" 
              onClick={toggleMobileMenu} 
              className="py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300">
              Services
            </Link>
            <Link 
              to="/about" 
              onClick={toggleMobileMenu} 
              className="py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300">
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={toggleMobileMenu} 
              className="py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300">
              Contact
            </Link>
            <Link 
              to="/signin" 
              onClick={toggleMobileMenu} 
              className="py-2 px-4 bg-white text-black rounded-lg hover:bg-gray-300 transition-all duration-300">
              Sign in
            </Link>
          </div>
        </div>
        
        )}
      </div>
    </nav>
  );
};
