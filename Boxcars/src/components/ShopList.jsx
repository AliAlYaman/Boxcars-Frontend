import { useEffect, useState } from "react";
import { StarIcon } from "lucide-react";

const products = [
  { id: 1, name: "Front and Rear Rotors R1", price: 699, rating: 5, image: "assets/images/Defender.png" },
  { id: 2, name: "Michelin Pilot Sport 4S", price: 699, rating: 5, image: "assets/images/Front-Rear-Brake.png" },
  { id: 3, name: "Red Tow Hook", price: 89.9, rating: 4, image: "assets/images/Rear-Mirror.png" },
  { id: 4, name: "Sport Steering Wheel", price: 299, rating: 5, image: "assets/images/Steering-Wheel.png" },
  { id: 5, name: "Red Fiber PVC Rear Seat", price: 299, rating: 4, image: "assets/images/PVC.png" },
  { id: 6, name: "Safety Helmet", price: 89, rating: 5, image: "assets/images/Safety-Helmet.png" },
  { id: 7, name: "Alternator", price: 149, rating: 4, image: "assets/images/Electric-Motor.png" },
  { id: 8, name: "Clutch Kit", price: 599, rating: 5, image: "assets/images/Steering-Wheel.png" },
  { id: 9, name: "Brake Caliper", price: 349, rating: 5, image: "assets/images/Front-Rear-Brake.png" },
  { id: 10, name: "Front and Rear Rotors R1", price: 699, rating: 5, image: "assets/images/Defender.png" },
  { id: 11, name: "Michelin Pilot Sport 4S", price: 699, rating: 5, image: "assets/images/Front-Rear-Brake.png" },
  { id: 12, name: "Red Tow Hook", price: 89.9, rating: 4, image: "assets/images/Rear-Mirror.png" },
  { id: 13, name: "Sport Steering Wheel", price: 299, rating: 5, image: "assets/images/Steering-Wheel.png" },
  { id: 14, name: "Red Fiber PVC Rear Seat", price: 299, rating: 4, image: "assets/images/PVC.png" },
  { id: 15, name: "Safety Helmet", price: 89, rating: 5, image: "assets/images/Safety-Helmet.png" },
  { id: 16, name: "Alternator", price: 149, rating: 4, image: "assets/images/Electric-Motor.png" },
  { id: 17, name: "Clutch Kit", price: 599, rating: 5, image: "assets/images/Steering-Wheel.png" },
  { id: 18, name: "Brake Caliper", price: 349, rating: 5, image: "assets/images/Front-Rear-Brake.png" },
];


const categories = [
    { name: "All Categories", count: 65 },
    { name: "Interior", count: 25 },
    { name: "Exterior", count: 15 },
    { name: "Engine", count: 10 },
    { name: "Wheels", count: 8 },
    { name: "Other", count: 7 },
  ];
  
  export const ShopList = () => {
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sortOption, setSortOption] = useState("price");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
  
    const handleSortChange = (e) => {
      setSortOption(e.target.value);
    };
  
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOption === "price") return a.price - b.price;
      if (sortOption === "rating") return b.rating - a.rating;
      return 0;
    });
  
    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  
    // Get current page products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const paginate = (pageNumber) => {
      if (pageNumber > 0 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
      }
    };
  
    // Pagination Logic for displaying buttons
    const renderPagination = () => {
      const paginationItems = [];
      if (currentPage > 1) {
        paginationItems.push(
          <button key="prev" onClick={() => paginate(currentPage - 1)} className="px-3 py-1 rounded-full bg-gray-200 text-gray-700">
            <img src="assets/icons/back.png" alt="" width={10}/>
          </button>
        );
      }
  
      // Display previous page number if not on the first page
      if (currentPage > 1) {
        paginationItems.push(
          <button key={currentPage - 1} onClick={() => paginate(currentPage - 1)} className="px-3 py-1 rounded-full bg-gray-200 text-gray-700">
            {currentPage - 1}
          </button>
        );
      }
  
      // Current page number
      paginationItems.push(
        <button key={currentPage} className="px-3 py-1 rounded-full bg-primary text-white">
          {currentPage}
        </button>
      );
  
      // Display next page number if not on the last page
      if (currentPage < totalPages) {
        paginationItems.push(
          <button key={currentPage + 1} onClick={() => paginate(currentPage + 1)} className="px-3 py-1 rounded-full bg-gray-200 text-gray-700">
            {currentPage + 1}
          </button>
        );
      }
  
      // Display forward arrow if there are more pages ahead
      if (currentPage < totalPages) {
        paginationItems.push(
          <button key="next" onClick={() => paginate(currentPage + 1)} className="px-3 py-1 rounded-full bg-gray-200 text-gray-700">
            <img src="assets/icons/next.png" width={10}/>
          </button>
        );
      }
  
      return paginationItems;
    };
    

    return (
      <div className="bg-white px-4 sm:px-8 lg:px-12 pt-10 pb-28">
        <div>
          <p className="font-dmSans text-center sm:text-left mb-4 sm:mb-6">
            <span className="text-blue-500">Home</span>/Listing
          </p>
          <p className="mb-8 text-2xl sm:text-3xl lg:text-4xl font-dmSans font-bold">Listings</p>
        </div>
  
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
          <p className="font-dmSans font-medium">Showing page {currentPage} of {totalPages}</p>
          <div className="flex items-center space-x-2">
            <label htmlFor="sort" className="font-semibold">Sort by:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="border border-gray-300 rounded p-1"
            >
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/4 bg-white border border-gray-300 p-8 h-fit">
            <div className="mb-8">
              <h2 className="font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name} className="flex justify-between items-center">
                    <span>{category.name}</span>
                    <span className="text-gray-500">({category.count})</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-4">Price Range</h2>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-input"
              />
              <div className="flex justify-between mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </aside>
          <section className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <div key={product.id} className="border rounded-lg p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="font-semibold">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-lg font-bold mb-2">${product.price}</p>
                  <button className="w-full bg-white border border-[#405FF2] text-[#405FF2] py-2 rounded">
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
  
        <div className="flex justify-center mt-4 space-x-4 flex-wrap">
          {renderPagination()}
        </div>
      </div>
    );
  };