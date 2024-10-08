import { useState } from "react";
import { ChevronDown, Sliders } from "lucide-react";

export const SearchListings = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="bg-navy-900  py-20 flex justify-center">
      <div className="bg-white rounded-lg md:rounded-full flex flex-col md:flex-row items-stretch md:items-center p-2 w-full max-w-5xl space-y-2 md:space-y-0 md:space-x-2">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row items-center gap-2 md:gap-4">
          <Select label="Condition" options={["New", "Used"]} isOpen={openDropdown === "Condition"} onToggle={() => handleToggle("Condition")} />
          <Select label="Any Makes" options={["Toyota", "Honda", "Ford"]} isOpen={openDropdown === "Any Makes"} onToggle={() => handleToggle("Any Makes")} />
          <Select label="Models" options={["Model X", "Model Y", "Model Z"]} isOpen={openDropdown === "Models"} onToggle={() => handleToggle("Models")} />
          <Select label="Prices" options={["$0 - $10,000", "$10,000 - $20,000", "$20,000+"]} isOpen={openDropdown === "Prices"} onToggle={() => handleToggle("Prices")} />
        </div>
        <div className="flex items-center space-x-2 justify-between md:justify-start">
          <button className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors duration-200 flex-grow md:flex-grow-0">
            <Sliders className="w-4 h-4" />
            <span className="hidden sm:inline">More Filters</span>
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 flex-grow md:flex-grow-0">
            Find Listing
          </button>
        </div>
      </div>
    </div>
  );
};

const Select = ({ label, options, isOpen, onToggle }) => {
  const [selectedOption, setSelectedOption] = useState(label);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onToggle();
  };

  return (
    <div className="relative w-full font-dmSans">
      <button
        onClick={onToggle}
        className="flex items-center justify-between text-gray-600 hover:text-gray-800 px-3 py-2  transition-colors duration-200 w-full  bg-white"
      >
        <span className="truncate">{selectedOption}</span>
        <img src="assets/icons/Border.png" className="" />
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-full max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};