import { Link } from "react-router-dom";

export const Details = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full px-4 sm:px-6 lg:px-8 pt-20 gap-6">
      {/* Text Section */}
      <div className="flex flex-col w-full lg:w-1/2 gap-6 justify-center text-center lg:text-left">
        <p className="text-3xl lg:text-4xl font-dmSans font-bold">
          Online, in-person, everywhere
        </p>
        <p className="text-base font-semibold text-[#050B20]">
          Choose from thousands of vehicles from multiple brands and buy online
          with Click & Drive, or visit us at one of our dealerships today.
        </p>
        <Link
          to=""
          className="px-7 py-3 text-white font-dmSans w-fit bg-[#050B20] rounded-lg mx-auto lg:mx-0"
        >
          Get Started
        </Link>
      </div>

      {/* Image Section */}
      <img
        src="assets/images/h21.jpg.png"
        alt="Car Display"
        className="w-full lg:w-1/2  object-cover"
      />
    </div>
  );
};
