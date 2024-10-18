import { Link } from "react-router-dom";

export const CarCard = ({src, title, subtitle, miles, petrol, gear, price}) => {
  return (
    <div className="flex flex-col justify-between items-start bg-white rounded-lg shadow-lg overflow-hidden max-md:w-full mb-20">
      {/* Image Section */}
      <div className="w-full">
        <img
          src={src}
          className="object-cover w-full h-92 md:h-56 lg:h-64"
          alt="Car"
        />
      </div>

      {/* Car Information */}
      <div className="p-4 w-full">
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <p className="text-gray-500 mb-4">{subtitle}</p>

        {/* Features Section */}
        <div className="flex justify-between items-center w-full mb-4 ">
          <div className="flex flex-col items-center space-x-1 gap-1">
            <img src="assets/icons/Miles.png" width={25} alt="Miles Icon" />
            <p className="text-sm text-gray-700">{miles}</p>
          </div>
          <div className="flex flex-col items-center space-x-1 gap-1">
            <img src="assets/icons/Petrol.png" width={25} alt="Miles Icon" />
            <p className="text-sm text-gray-700">{petrol}</p>
          </div>
          <div className="flex flex-col items-center space-x-1 gap-1">
            <img src="assets/icons/Gear.png" width={25} alt="Gear Icon" />
            <p className="text-sm text-gray-700">{gear}</p>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex justify-between items-center w-full">
          <p className="font-semibold text-xl text-gray-900">{price}</p>
          <Link
            to="/car-details"
            state={{ src, title, subtitle, miles, petrol, gear, price }}
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
