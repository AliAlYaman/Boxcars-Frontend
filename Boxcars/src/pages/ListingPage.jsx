import { Footer } from "../components/Footer";
import { Listings } from "../components/Listing";
import { Navbar } from "../components/Navbar";
import { SearchListings } from "../components/SearchListings";

export const ListingPage = () => {
    return(<div className="bg-primary">
        <Navbar/>
        <SearchListings/>
        <Listings/>
        <Footer text={true}/>
    </div>);
}