import Newslatteer from '../../Components/Common/Newsletter/index.jsx';
import { BannerContactUs } from '../../Components/ContactUs/BannerContactUs/index.jsx';
import Content from '../../Components/ContactUs/ContactUsContent/index.jsx';
import EmailForm from '../../Components/ContactUs/EmailForm/index.jsx';
import FarmsLocation from '../../Components/ContactUs/FarmsLocation/index.jsx';

export default function ContactUs (){
    return (
      <>
      <BannerContactUs/>
      <Content/>
      <FarmsLocation/>
      <EmailForm/>
      <Newslatteer/>
      </>
    );
}