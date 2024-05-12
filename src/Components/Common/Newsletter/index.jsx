import NewslatteerBg from '../../../Assets/Images/ContactUs/Newsletter.jpg';
import Button from '../../HomePage/BannerHomePage/BannerButton';
import Banner from '../Banner';
import './index.css';

export default function Newsletter () {
    return (
        <Banner bannerImage = {NewslatteerBg} 
               styles = {{ height : "23rem",width: "99rem", borderRadius:"2rem", display: "flex",
               justifyContent: "space-between", alignItems: "center", marginInline: "20rem"}} >
          <h1 className='titleNewlatteer'>Subscribe to<span>our Newsletter</span></h1>
          <label className='labelNewlatteer'>
            <input type="text" placeholder='Your Email Address' className='inputNewslatteer'/>
            <Button className = "emailBtn" text = "Subscribe" style = {{color : "#FFFFFF" , backgroundColor : "#274C5B"}} />
          </label>
        </Banner>

        
    );
}