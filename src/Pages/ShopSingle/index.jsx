import Newsletter from '../../Components/Common/Newsletter';
import ProductsDetails from '../../Components/ShopSingle/ProductDetails';
import ProductInformation from '../../Components/ShopSingle/ProductInformation';
import RelatedProducts from '../../Components/ShopSingle/RelatedProducts';
import ShopSingleBanner from '../../Components/ShopSingle/ShopSingleBanner';



export default function ShopSingle () {
    return (
        <>
         <ShopSingleBanner/>
         <ProductsDetails/>
         <ProductInformation/>
         <RelatedProducts/>
         <Newsletter/>
        </>
    );
}