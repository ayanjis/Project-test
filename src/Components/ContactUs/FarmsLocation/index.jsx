import FarmsLocationBg from '../../../Assets/Images/ContactUs/FarmsLocationBg.jpg';
import Banner from "../../Common/Banner";
import { PointsAboutUs } from '../../HomePage/AboutUs/Common';
import ImgLocation from '../../../Assets/Icons/ContactUs/Location.png';
import './index.css';

export default function FarmsLocation () {
    return (
        <>
        <Banner 
        bannerImage = {FarmsLocationBg}
        styles = {{ height : "51rem", marginInline: "20rem", borderRadius: "3rem",
        display: "flex", flexDirection: "column", justifyContent: "center", 
        alignItems: "end", paddingRight: "4rem"}}>
          <div className="infoFarmsLocation">
            <h3>Location</h3>
            <h1>Our Farms</h1>
            <p>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using.</p>
            <div  className='ContactFarms'>
              <PointsAboutUs title = "New York, USA:"
                           subTitle = "299 Park Avenue New York,New York 10171" 
                           icon = {ImgLocation}/> 
              <PointsAboutUs title = "London, UK:"
                           subTitle = "30 Stamford Street,London SE1 9LQ" 
                           icon = {ImgLocation}/> 
            </div>
          </div>  
        </Banner>
        </>
    );
}