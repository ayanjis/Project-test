import PageShopBg from '../../../Assets/Images/Shop/PageShopBg.png';
import PageShopImg from '../../../Assets/Images/Shop/PageShopImg.png';
import Banner from '../../../Components/Common/Banner';


export default function ShopSingleBanner () {
    return (
        <>
         <Banner 
            bannerImage = {PageShopImg}
            bannerBackground = {PageShopBg}
            styles = {{ height : "32rem",display:"flex", justifyContent:"center", alignItems:"center" , marginBottom:"14rem"}}>
             <h1 className='titleContactUs'>Shop Single</h1>    
         </Banner>
         
        </>
    );
}