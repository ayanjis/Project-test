import OfferBanner1 from '../../../Assets/Images/HomePage/CardImg1.jpg'
import OfferBanner2 from '../../../Assets/Images/HomePage/CardImg2.jpg'
import CardOfferBanner from "../OfferBanner/CardOfferBanner";

export default function OfferBanner () {
    return(
        <>
        <div className="offreBanner">
          <CardOfferBanner
          title = "Natural!!" 
          subTitle ="Get Garden Fresh Fruits" 
          cardImg = {OfferBanner1} styles = {{color: "#FFFFFF"}} />
          <CardOfferBanner 
          title = "Offer!!" classNameTitle = "cardTitle"
          subTitle ="Get 10% off on Vegetables" classNamesubtitle = "cardSubtitle"
          cardImg = {OfferBanner2} />
        </div>
        </>
    )
} 