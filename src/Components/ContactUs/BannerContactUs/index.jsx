import ContactUsBg1 from '../../../Assets/Images/ContactUs/ContactUsBg1.png';
import ContactUsBg2 from '../../../Assets/Images/ContactUs/ContactUsBg2.png';
import Banner from '../../Common/Banner';
import './index.css';


export function BannerContactUs (){
    return (
        <Banner 
      bannerImage = {ContactUsBg1}
      bannerBackground = {ContactUsBg2}
      styles = {{ height : "32rem",display:"flex", justifyContent:"center", alignItems:"center" , marginBottom:"14rem"}}>
      <h1 className='titleContactUs'>Contact Us</h1>
      </Banner>
    );
}