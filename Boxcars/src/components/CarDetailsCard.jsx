export const CarDetailsCard = ({
    src,
    title,
    subtitle,
    miles,
    petrol,
    gear,
    price,
  }) => {
    return (
      <div className="custom-padding">
        <div className="pt-8 sm:pt-12 lg:pt-16">
          {/* Breadcrumb and Title */}
          <p className="font-dmSans sm:text-left mb-4 sm:mb-6">
            <span className="text-blue-500">Home/Listing</span>/{title}
          </p>
          <p className="mb-3 text-2xl sm:text-3xl lg:text-4xl font-dmSans font-bold">
            {title}
          </p>
  
          {/* Subtitle and Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <p className="text-sm sm:text-base mb-4 sm:mb-0">{subtitle}</p>
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <p className="font-dmSans text-sm sm:text-base">Share</p>
                <div className="flex justify-center items-center px-2 py-2 rounded-full border border-gray-300">
                  <img src="assets/icons/share.png" alt="Share" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-dmSans text-sm sm:text-base">Save</p>
                <div className="flex justify-center items-center px-2 py-2 rounded-full border border-gray-300">
                  <img src="assets/icons/save.png" alt="Save" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-dmSans text-sm sm:text-base">Compare</p>
                <div className="flex justify-center items-center px-2 py-2 rounded-full border border-gray-300">
                  <img src="assets/icons/vin.png" alt="Compare" />
                </div>
              </div>
            </div>
          </div>
  
          {/* Car Details Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2">
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-0">
              <div className="flex gap-2 items-center px-4 sm:px-6 py-1 rounded-full bg-[#E9F2FF]">
                <img src="assets/icons/miles.png" alt="Miles" />
                <p className="text-sm sm:text-base">{miles}</p>
              </div>
              <div className="flex gap-2 items-center px-4 sm:px-6 py-1 rounded-full bg-[#E9F2FF]">
                <img src="assets/icons/year.png" alt="Calendar" width={18} />
                <p className="text-sm sm:text-base">{miles}</p>
              </div>
              <div className="flex gap-2 items-center px-4 sm:px-6 py-1 rounded-full bg-[#E9F2FF]">
                <img src="assets/icons/Gear.png" alt="Gear" />
                <p className="text-sm sm:text-base">{gear}</p>
              </div>
              <div className="flex gap-2 items-center px-4 sm:px-6 py-1 rounded-full bg-[#E9F2FF]">
                <img src="assets/icons/Petrol.png" alt="Petrol" />
                <p className="text-sm sm:text-base">{petrol}</p>
              </div>
            </div>
            <p className="font-dmSans font-bold text-xl sm:text-2xl">{price}</p>
          </div>
  
          {/* Image Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            {/* Main large image */}
            <div className="relative col-span-1">
              <img
                src="assets/images/c-class.jpg"
                alt="Main Car"
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white text-sm px-2 py-1 rounded-full">
                Great Price
              </div>
              <div className="flex gap-2 items-center absolute bottom-4 left-4 bg-white text-gray-700 text-sm px-3 py-2 rounded-full">
                <img src="assets/icons/video.png" alt="Video" />
                <p className="font-dmSans">Video</p>
              </div>
            </div>
  
            {/* Small images section */}
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <img
                src="assets/images/c-class.jpg"
                alt="Car 1"
                className="object-cover w-full h-full rounded-lg"
              />
              <img
                src="assets/images/c-class.jpg"
                alt="Car 2"
                className="object-cover w-full h-full rounded-lg"
              />
              <img
                src="assets/images/c-class.jpg"
                alt="Car 3"
                className="object-cover w-full h-full rounded-lg"
              />
              <img
                src="assets/images/c-class.jpg"
                alt="Car 4"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  