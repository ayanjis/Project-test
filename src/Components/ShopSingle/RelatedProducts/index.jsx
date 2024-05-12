import ShopCard from '../../../Components/HomePage/Shop/Common'
import { someCards } from '../../../utils/constants'
import './index.css'
export default function RelatedProducts() {
    return (
      <>
        <section className="moreProduct">
            <h2 className="titleMoreProduct">Related Products</h2>
            {someCards.length > 0 &&
            <div className="ShopCards" >
                {someCards.map(({ title ,ImgProducts, subTitle, Price})=> (
                <ShopCard
                title ={title}
                ImgProducts ={ImgProducts}
                subTitle = {subTitle}
                Price = {Price}
                discount ="$20.00"
                />
                ))}
            </div>
            }
        </section>
      </>

    )
}