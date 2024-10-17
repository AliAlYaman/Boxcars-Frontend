import { AboutAd } from "../components/AboutAd"
import { AboutHeroSection } from "../components/AboutHeroSection"
import { Features } from "../components/Features"
import { Navbar } from "../components/Navbar"

export const About = ()=> {
    return(<>
    <Navbar/>
    <AboutHeroSection/>
    <Features/>
    <AboutAd/>
    </>)
}