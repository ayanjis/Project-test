import bannerBackground1 from "../../../Assets/Images/HomePage/BannerBackground1.png";
import bannerImage1 from "../../../Assets/Images/HomePage/BannerImage1.png";
import Banner from "../../Common/Banner";
import './index.css';
import Button from "./BannerButton";


export default function BannerHomePage () {
    return (
        <>
          <Banner 
            bannerBackground = {bannerBackground1} 
            bannerImage = {bannerImage1}
            styles = {{padding : "15rem 18rem", height : "80rem",}}>
            <h3>100% Natural food</h3>
            <h2>Choose the best <span>healthier way</span> <span>of life</span></h2>
            <Button text = "Explore Now!!" style = {{color : "#274C5B" , backgroundColor : "#EFD372",width:"17rem"}}/>
          </Banner>
        </>
    );
}