import { Link } from "react-router-dom";

export const BrowseType = ({ types, text }) => {
    return (
        <>
            <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 my-20 gap-12">
                <div className="flex justify-between w-full items-center">
                    <p className="text-2xl font-bold font-dmSans">{text}</p>
                    <Link to='' className="font-semibold">View All</Link>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full gap-6">
                    {types.map((type) => {
                        return (
                            <Link to='' className="w-full sm:w-auto flex-1" key={type.id}>
                                <div className="flex flex-col py-8 sm:py-12 w-full justify-around items-center border-[#E9E9E9] border rounded-2xl gap-3">
                                    <img src={type.icon} alt={type.type} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                                    <p className="text-center text-base sm:text-lg font-medium">{type.type}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
