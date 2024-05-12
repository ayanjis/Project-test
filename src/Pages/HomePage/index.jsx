import BannerHomePage from "../../Components/HomePage/BannerHomePage";
import OfferBanner from "../../Components/HomePage/OfferBanner";
import AboutUs from "../../Components/HomePage/AboutUs";
import Shop from "../../Components/HomePage/Shop";



export default function HomePage(){
    return (
      <>
        <BannerHomePage/>
        <OfferBanner/>
        <AboutUs/>
        <Shop/>
      </>
    );
}