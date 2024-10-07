export const Footer = () => {
    return (
      <footer className="bg-white py-10">
        <div className="px-8 sm:px-10 lg:px-12">
          {/* Subscription Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center max-md:items-start">
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-semibold">Join BoxCar</h2>
              <p className="text-gray-500">
                Receive pricing updates, shopping tips & more!
              </p>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row w-full max-w-md items-center">
  <input
    type="email"
    placeholder="Your email address"
    className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none outline-none"
  />
  <button className="bg-black px-4 py-3 w-full sm:w-1/4 text-white text-xs rounded-b-md sm:rounded-r-md sm:rounded-b-none">
    Sign Up
  </button>
</div>

          </div>
  
          {/* Divider */}
          <div className="my-8 border-t border-gray-300" />
  
          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-700 text-sm text-center md:text-left">
  <div>
    <h3 className="text-lg font-semibold mb-4">Company</h3>
    <ul className="space-y-2">
      <li>About Us</li>
      <li>Blog</li>
      <li>Services</li>
      <li>FAQs</li>
      <li>Terms</li>
      <li>Contact Us</li>
    </ul>
  </div>
  <div>
    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
    <ul className="space-y-2">
      <li>Get in Touch</li>
      <li>Help center</li>
      <li>Live chat</li>
      <li>How it works</li>
    </ul>
  </div>
  <div>
    <h3 className="text-lg font-semibold mb-4">Our Brands</h3>
    <ul className="space-y-2">
      <li>Toyota</li>
      <li>Porsche</li>
      <li>Audi</li>
      <li>BMW</li>
      <li>Ford</li>
      <li>Nissan</li>
      <li>Peugeot</li>
      <li>Volkswagen</li>
    </ul>
  </div>
  <div>
    <h3 className="text-lg font-semibold mb-4">Vehicles Type</h3>
    <ul className="space-y-2">
      <li>Sedan</li>
      <li>Hatchback</li>
      <li>SUV</li>
      <li>Hybrid</li>
      <li>Electric</li>
      <li>Coupe</li>
      <li>Truck</li>
      <li>Convertible</li>
    </ul>
  </div>
</div>

          {/* Sale Hours & Social Links */}
          <div className="flex flex-col md:flex-row justify-between mt-10 text-gray-700 text-sm">
            <div className="space-y-2 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Sale Hours</h3>
              <p>Monday - Friday: 09:00AM – 09:00 PM</p>
              <p>Saturday: 09:00AM – 07:00PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="flex items-center space-x-4">
              <h3 className="text-lg font-semibold">Connect With Us</h3>
              <div className="flex space-x-4 text-xl text-gray-500">
                {/* Replace with icons as needed */}
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-10 border-t border-gray-300 pt-6 text-gray-500 text-xs flex flex-col md:flex-row justify-between items-center">
  <p className="mb-4 md:mb-0">© 2024 example.com. All rights reserved.</p>
  <div className="flex space-x-4">
    <a href="#">Terms & Conditions</a>
    <span>•</span>
    <a href="#">Privacy Notice</a>
  </div>
</div>
</div>
      </footer>
    );
  };
  