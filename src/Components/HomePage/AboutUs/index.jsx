import  { About , PointsAboutUs } from "./Common";
import OrangeBg from '../../../Assets/Images/HomePage/Orange.png';
import Button from "../BannerHomePage/BannerButton";
import './index.css';
import { pointsAboutUs } from "../../../utils/constants";

export default function AboutUs (){
    return (
        <>
        <About styles = {{height : "60rem"}}>
         <div className="OrangeBg"><img src={OrangeBg} alt="iconOrange"/></div>
         <div className="contentAboutUs">
            <h3 className="titleAboutUs">About Us</h3>
            <p className="descripAboutUs"><span>We Believe in Working</span> <span>Accredited Farmers</span></p>
            <p className="textAboutUs"><span>Simply dummy text of the printing and typesetting industry. Lorem had ceased to</span> <span>been the industry's standard dummy text ever since the 1500s, when an unknown</span> printer took a galley.</p>
            <div className="PointsAboutUs">
                {pointsAboutUs.map (({title, subTitle , icon}) => (
                <PointsAboutUs title = {title} subTitle = {subTitle} icon = {icon}/>
                ))}
            </div>
             <Button text = "Shop Now" style = {{color : "#FFFFFF" , backgroundColor : "#274C5B",width:"16rem"}}/>
         </div>   
        </About>
        </>
    );
}