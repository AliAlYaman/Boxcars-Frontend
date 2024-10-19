import { Link } from "react-router-dom";

export const CarOverview = () => {
  const carDetails = {
    body: "Sedan",
    condition: "New",
    miles: "20",
    engine_size: "3.5",
    Petrol: "Petrol",
    door: "4 Doors",
    year: "2023",
    cylinder: "12",
    Gear: "Automatic",
    color: "Black, Blue, White",
    drive_type: "All-Wheel Drive (AWD/4WD)",
    vin: "MCB123818",
  };

  return (
    <div className="custom-padding pt-4 h-auto w-full">
      {/* Title */}
      <p className="font-dmSans text-xl font-medium mb-4">Car Overview</p>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-6 font-dmSans h-full items-start font-medium">
        {/* Car Details Section */}
        <div className="flex flex-col w-full md:w-2/3 h-full justify-between border p-4 rounded-xl border-gray-200 shadow-lg">
          {/* Individual Rows for Car Details */}
          <div className="flex flex-wrap w-full gap-y-4">
            {/* Each Detail Row */}
            {Object.entries(carDetails).map(([key, value]) => (
              <div className="flex flex-wrap w-full md:w-1/2 gap-2" key={key}>
                <div className="flex items-center gap-2 w-1/2">
                  <img src={`assets/icons/${key}.png`} alt={key} width={15} />
                  <p className="text-sm sm:text-base capitalize">{key.replace('_', ' ')}</p>
                </div>
                <div className="flex items-start w-1/2">
                  <p className="text-sm sm:text-base">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dealer Information Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
          {/* Profile Image */}
          <img
            src="assets/images/profile.png"
            alt="Dealer Profile"
            className="w-16 h-16 rounded-full mb-2"
          />

          {/* Dealer Info */}
          <p className="font-semibold text-lg">admin</p>
          <p className="text-gray-500">943 Broadway, Brooklyn</p>

          {/* Contact Buttons */}
          <div className="flex w-full flex-wrap gap-2 justify-around items-center mb-4">
            <button className="flex items-center gap-2 bg-blue-100 text-blue-600 px-3 py-2 rounded-full w-full sm:w-auto">
                <img src="assets/icons/location.png" alt="" width={15}/>
              Get Direction
            </button>
            <button className="flex items-center gap-2 bg-blue-100 text-blue-600 px-3 py-2 rounded-full w-full sm:w-auto">
            <img src="assets/icons/phone.png" alt="" width={15}/>
              +88-123456789
            </button>
          </div>

          {/* Message Dealer Button */}
          <button className="w-full bg-[#405FF2] text-white py-4 rounded-2xl flex justify-center items-center mb-2">
            Message Dealer
            <i className="fas fa-arrow-right ml-2"></i>
          </button>

          {/* Chat via Whatsapp Button */}
          <button className="w-full border border-[#60C961] text-[#60C961] py-4 rounded-2xl  flex justify-center items-center mb-2">
            Chat Via Whatsapp
            <i className="fas fa-arrow-right ml-2"></i>
          </button>

          {/* View All Stock Link */}
          <Link to="#" className="text-blue-600 flex items-center gap-1 mt-2">
            View All stock at this dealer
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
