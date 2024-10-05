import { Link } from "react-router-dom";
import { ReviewCards } from "./ReviewCard";

export const Reviews = () => {
    return(
    <div className="flex flex-col  w-full px-4 sm:px-6 lg:px-8 pt-28 gap-12 ">
        <div className="flex justify-between items-start md:items-center max-md:flex-col">
        <p className="text-4xl font-dmSans font-bold">Specials</p>
        <p className="font-medium">
        Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
          </p>
        </div>
        <div className="flex justify-center items-center gap-3 max-md:flex-col max-md:gap-0">
            <ReviewCards/>
            <ReviewCards/>
            <ReviewCards/>
            <ReviewCards/>
        </div>
    </div>);
}