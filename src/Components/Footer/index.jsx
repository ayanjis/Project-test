import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faPinterest,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons';
import { Logo } from "../Header/Common";
import  { ElementsOption , SocialMediasOption, UtilityOption } from "./Common";
import './index.css'

export default function Footer (){
    const utilityOption = [
        "Utility Pages",
        "Style Guide",
        "404 Not Found",
        "Password Protected",
        "Licences",
        "Changelog"
         ];
    const elementsOption = [
        {title :"Email" , subTitle:"needhelp@Organia.com"},
        {title :"Phone", subTitle:"666 888 888"},
        {title :"Adresse", subTitle :"88 road, borklyn street, USA"}];
    return(
        <>
        <footer>
            <div className="footerMenu">
              {elementsOption.length > 0 &&
                <div className="contactMenu">
                  <h3>Contact Us</h3> 
                  <div className="elements">
                  {elementsOption.map(({title, subTitle}) => (
                   <ElementsOption title={title} subTitle={subTitle}/>
                ))}
                </div>
            </div>
              }
                <div className="socialMenu">
                    <Logo/>
                    <p> Simply dummy text of the printing and typesetting industry.
                     <span>Lorem Ipsum simply dummy text of the printing</span>
                    </p>
                     <div className="socialMedias">
                        <SocialMediasOption icon={<FontAwesomeIcon icon={faInstagram} style={{height : "1.5rem"}}/>}/>
                        <SocialMediasOption icon={<FontAwesomeIcon icon={faFacebook} style={{height : "1.5rem"}}/>}/>
                        <SocialMediasOption icon={<FontAwesomeIcon icon={faTwitter} style={{height : "1.5rem"}}/>}/>
                        <SocialMediasOption icon={<FontAwesomeIcon icon={faPinterest} style={{height : "1.5rem"}}/>}/>
                     </div>
                </div>
                {utilityOption.length > 0 &&(
                <div className="utilityMenu">
                    <h3>Utility Pages</h3>
                    { utilityOption.map((option) => (
                        <UtilityOption value = {option}/>
                    ))}
                </div>
                )}
            </div>
            <div className="footerLine">
                <p>Copyright © <span>Organick</span> | Designed by <span>VictorFlow</span> Templates - Powered by <span>Webflow</span></p>
            </div>
        </footer>
        </>
    );
}