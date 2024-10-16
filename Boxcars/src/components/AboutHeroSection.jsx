export const AboutHeroSection = () => {
    return (
      <div className="custom-padding">
        <div className="py-10 px-4">
          {/* Breadcrumb */}
          <p>
            <span className="text-blue-500">Home</span> / About
          </p>
  
          {/* Title */}
          <p className="text-4xl font-dmSans font-bold mt-2">About Us</p>
  
          {/* Hero Content */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between py-16 gap-6 sm:gap-8 lg:gap-12">
            {/* Left Section */}
            <p className="text-3xl sm:text-4xl font-dmSans font-bold sm:w-1/2 animate-slideInLeft">
              We Value Our Clients And
              <br /> Want Them To Have A Nice Experience
            </p>
  
            {/* Right Section */}
            <div className="flex flex-col text-base sm:w-1/2 gap-4 animate-fadeInSlow">
              <p>
                Lorem ipsum dolor sit amet consectetur. Convallis integer enim eget sit urna. Eu duis lectus amet vestibulum varius. Nibh tellus sit sit at lorem facilisis. Nunc vulputate ac interdum aliquet vestibulum in tellus.
              </p>
              <p>
                Sit convallis rhoncus dolor purus amet orci urna. Lobortis vulputate vestibulum consectetur donec ipsum egestas velit laoreet justo. Eu dignissim egestas egestas ipsum. Sit est nunc pellentesque at a aliquam ultrices consequat. Velit duis velit nec amet eget eu morbi. Libero non diam sit viverra dignissim. Aliquam tincidunt in cursus euismod enim.
              </p>
              <p>
                Magna odio sed ornare ultrices. Id lectus mi amet sit at sit arcu mi nisl. Mauris egestas arcu mauris.
              </p>
            </div>
          </div>
  
          {/* Business Image Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white mt-20">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <div className="bg-blue-500 text-white h-full p-6 flex items-center justify-center text-center rounded-md">
                <p className="text-3xl font-bold leading-tight">
                  45<br />Years in<br />Business
                </p>
              </div>
            </div>
  
            {/* Center Column - Main Image */}
            <div className="col-span-1 row-span-2">
              <img
                src="assets/images/man.png"
                alt="Business professional"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
  
            {/* Right Column - Top */}
            <div className="col-span-1 grid gap-4">
              <img
                src="assets/images/dealership.png"
                alt="Showroom with cars"
                className="w-full h-auto rounded-md"
              />
            </div>
  
            {/* Right Column - Bottom */}
            <div className="col-span-1 grid grid-cols-2 gap-4">
              <img
                src="assets/images/dealership-4.png"
                alt="Car on display"
                className="w-full h-full object-cover rounded-md"
              />
              <img
                src="assets/images/dealership-2.png"
                alt="Car being sold"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
  
            {/* Additional Image */}
            <div className="col-span-1 grid grid-cols-1 gap-4">
              <img
                src="assets/images/dealership-3.png"
                alt="Keys handed over"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  