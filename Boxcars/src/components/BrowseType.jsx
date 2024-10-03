import { Link } from "react-router-dom";

export const BrowseType = () => {
    const types = [
        {   
            id:1,
            type : 'SUV',
            icon: 'assets/icons/Suv.png'
        },
        {
            id:2,
            type : 'Sedan',
            icon: 'assets/icons/Sedan.png'
        },
        {
            id:3,
            type : 'Hetchback',
            icon: 'assets/icons/Hetchback.png'
        },
        {
            id:4,
            type : 'Coupe',
            icon: 'assets/icons/Coupe.png'
        },
        {
            id:5,
            type : 'Hybrid',
            icon: 'assets/icons/Hybrid.png'
        },
        {
            id:6,
            type : 'Convertible',
            icon: 'assets/icons/Convertible.png'
        },
    ];
    return (<>
    <div className="flex flex-col w-full px-4 sm:px-6 lg:px-8 my-20 gap-12">
        <div className="flex justify-between w-full">
            <p className="text-2xl font-bold font-dmSans">Browse by Type</p>
            <Link to='' className="font-semibold">View All</Link>
        </div>
        <div className="flex justify-around items-center w-full h-full gap-6 max-md:flex-wrap">
        {types.map((type) => {
            return(
            <Link to='' className="w-full" key={type.id}>
                <div className="flex flex-col py-12 w-full justify-around items-center border-[#E9E9E9] border rounded-2xl gap-3">
                <img src={type.icon}/>
                <p>{type.type}</p>
            </div>
            </Link>
            );
        })}
        </div>
    </div>
    </>);
}