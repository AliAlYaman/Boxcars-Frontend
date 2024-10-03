import { useState } from "react";
import { Link } from "react-router-dom";

export const Explore = () => {
    const [activeTab, setActiveTab] = useState("recent")

  return (
    <>
      <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 pt-20 gap-12">
        <div className="flex justify-between w-full">
          <p className="text-2xl font-bold font-dmSans">Explore All Vehicles</p>
          <Link to="" className="font-semibold">
            View All
          </Link>
        </div>
        <div className="flex justify-start items-center gap-8 font-semibold ">
            <Link onClick={() => setActiveTab('recent')}
             className={`pb-1  ${
                activeTab === "recent" ? "border-b-2 border-blue-500" : ""
              }`}>Recent Cars</Link>
            <Link onClick={() => setActiveTab('featured')}
             className={`pb-1 ${
                activeTab === "featured" ? "border-b-2 border-blue-500" : ""
              }`}>Featured Cars</Link>
            <Link onClick={() => setActiveTab('popular')}
             className={`pb-1 ${
                activeTab === "popular" ? "border-b-2 border-blue-500" : ""
              }`}>Popular Cars</Link>
        </div>
        <div className="flex justify-around items-center w-full h-full gap-6">
        </div>
      </div>
    </>
  );
};
