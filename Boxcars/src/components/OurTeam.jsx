import { Link } from "react-router-dom";
import { TeamCards } from "./TeamCards";

export const OurTeam = () => {
  return (
    <div className="flex flex-col  w-full px-4 sm:px-6 lg:px-8 pt-28 gap-12">
      <div className="flex justify-between items-start md:items-center max-md:flex-col">
        <p className="text-4xl font-dmSans font-bold">Our Team</p>
        <Link to='' className="font-medium">
          View All
        </Link>
      </div>
      <div className="flex justify-between items-center max-md:items-start max-md:flex-col gap-4">
            <TeamCards/>
            <TeamCards/>
            <TeamCards/>
            <TeamCards/>
        </div>
    </div>
  );
};
