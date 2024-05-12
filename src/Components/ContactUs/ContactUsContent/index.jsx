import ImgContent from '../../../Assets/Images/ContactUs/ContactUsImg1.jpg'
import { PointsAboutUs } from '../../HomePage/AboutUs/Common';
import { SocialMediasOption } from '../../Footer/Common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pointsContactUs, socialMedias } from '../../../utils/constants';
import './index.css'


export default function Content (){
    return (
        <>
        <article>
            <div className="ImgContent">
                <img src={ImgContent} alt="ImgContent"/>
            </div>
            <div className="textContent">
                <h2 className='titleTextContent'>We'd love to talk about how we<span> can work together.</span></h2>
                <p className='descripTextContent'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                 <span> been the industry's standard dummy text ever since the 1500s, when an unknown</span> 
                 <span>printer took a galley.</span></p>
                <div className='pointsContactUs'>
                {pointsContactUs.map(({ title ,subtitle, icon})=> (
                <PointsAboutUs title = {title}
                               subTitle = {subtitle}
                               icon = {icon}
                               style = {{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}/>
                ))}
                </div>             
                <div className="socialMedias">
                {socialMedias.map(({icon})=> (
                <SocialMediasOption icon ={<FontAwesomeIcon icon = {icon} style={{height : "1.5rem"}}/>}/>
                ))}
                </div>          
            </div>
        </article>
        </>
    );
}