import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Register = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen mb-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          {/* Tabs */}
          <div className="flex space-x-4 mb-6 font-semibold text-base font-dmSans justify-start">
            <Link to="/signin" className="pb-1">
              Sign in
            </Link>
            <button className="border-b-2 border-blue-500 pb-1">
              Register
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-600">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-gray-600">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                >
                  {/* <Icons.eye className="h-5 w-5" /> */}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-150">
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 text-center text-sm">OR</div>

          {/* Social Login Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="flex items-center justify-center flex-1 py-2 border border-blue-500 text-blue-500 rounded-lg text-sm hover:bg-blue-100 transition duration-150">
              <FaFacebook className="mr-2 h-5 w-5" />
              Sign up with Facebook
            </button>
            <button className="flex items-center justify-center flex-1 py-2 border border-red-500 text-red-500 rounded-lg text-sm hover:bg-red-100 transition duration-150">
              <FcGoogle className="mr-2 h-5 w-5" />
              Sign up with Google
            </button>
          </div>

        </div>
      </div>
      <Footer text={true}/>
    </div>
  );
};
