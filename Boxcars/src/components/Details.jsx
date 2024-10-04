import { Link } from "react-router-dom";

export const Details = () =>{
    return ( <> 
    <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 pt-20 max-md:flex-col max-md:gap-6">
        <div className="flex flex-col w-1/2 gap-6 max-md:w-full justify-center">
            <p className="text-4xl font-dmSans font-bold">Online, in-person,
            everywhere</p>
            <p className="text-base font-semibold text-[#050B20]">Choose from thousands of vehicles from multiple brands and buy online with Click &
            Drive, or visit us at one of our dealerships today.</p>
            <Link to='' className="px-7 py-3 text-white font-dmSans w-fit bg-[#050B20] rounded-lg">Get Started</Link>
        </div>
        <img src="assets/images/h21.jpg.png" alt="" width={500} className="max-md:w-full "/>
    </div>
    </>);
}