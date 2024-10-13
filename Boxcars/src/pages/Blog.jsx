import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ShopList } from "../components/ShopList";

export const Blog = () => {
    return(<div className="bg-primary">
    <Navbar/>
    <ShopList/>
    <Footer text= {true}/>
    </div>);
}