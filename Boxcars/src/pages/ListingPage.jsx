import { Navbar } from "../components/Navbar";
import { SearchListings } from "../components/SearchListings";

export const ListingPage = () => {
    return(<div className="bg-primary ">
        <Navbar/>
        <SearchListings/>
    </div>);
}