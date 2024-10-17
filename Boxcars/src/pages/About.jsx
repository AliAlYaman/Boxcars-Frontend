import { AboutAd } from "../components/AboutAd"
import { AboutHeroSection } from "../components/AboutHeroSection"
import { BrowseType } from "../components/BrowseType"
import { FAQ } from "../components/FAQ"
import { Features } from "../components/Features"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { OurTeam } from "../components/OurTeam"
import { Reviews } from "../components/Reviews"

export const About = ()=> {

    const brands = [
        {
          id: 1,
          type: "Audi",
          icon: "assets/icons/audi.png",
        },
        {
          id: 2,
          type: "BMW",
          icon: "assets/icons/bmw.png",
        },
        {
          id: 3,
          type: "Ford",
          icon: "assets/icons/ford.png",
        },
        {
          id: 4,
          type: "Mercedes Benz",
          icon: "assets/icons/mercedes.png",
        },
        {
          id: 5,
          type: "Peugeot",
          icon: "assets/icons/peugot.png",
        },
        {
          id: 6,
          type: "Volkswagen",
          icon: "assets/icons/volkswagen.png",
        },
      ];
    return(<>
    <Navbar/>
    <AboutHeroSection/>
    <Features/>
    <AboutAd/>
    <BrowseType types={brands} text='Explore Our Premium Brands'/>
    <OurTeam/>
    <Reviews/>
    <FAQ/>
    <Footer text={true}/>
    </>)
}


