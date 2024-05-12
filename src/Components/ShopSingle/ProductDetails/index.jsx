import { useParams } from "react-router-dom";
import { shopCard } from "../../../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleAddItems } from "../../../data/slices/cart";
import Rating from '../../../Assets/Icons/HomePage/Star.png';
import Button from "../../../Components/HomePage/BannerHomePage/BannerButton";
import './index.css';

export default function ProductsDetails() {
    const { id } = useParams();
    const item = shopCard?.find((el) => el.id === id);
    const [quantity,setquantity] = useState(1)
    const [isShowed,setIsShowed] = useState(false)  
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setquantity(event.target.value)
    }
    const handleAddToCart = (type) => {
        console.log(type,"Cart",item.id, "Quantity",quantity)
        setIsShowed(!isShowed)
        dispatch(handleAddItems({productId:id,type,quantity}))
    }
    useEffect(()=> {
        console.log( "Quantity",quantity)
    },[quantity])

    return (
      <>
        <section className="productDetails">
            <div className="productImg">
                <h4 className="categoryProduct">{item?.title}</h4>
                <img src={item?.ImgProducts} alt="ImgProducts" className="ImgProduct" />
            </div>
            <div className="productInfo">
                <h2 className="productName">{item?.subTitle}</h2>
                <img src={Rating} alt="rating" className="rating"/>
                <p className="priceInformation"><span className="discount">20.00$</span> <span className="price">{item?.Price}</span></p>
                <p className="descriptionProduct"> 
                    <span>Simply dummy text of the printing and typesetting industry. Lorem had</span> 
                    <span>ceased to been the industry's standard dummy text ever since the 1500s,</span>
                    <span>when an unknown printer took a galley.</span>
                </p>
                <div className="quantityInformation">
                   <h5 className="titleQuantityInformation">Quantity :</h5>
                   <input className="productNumber" defaultValue={quantity} onChange={handleChange}/>
                   <Button onClick = {() => handleAddToCart (isShowed?"Remove":"Add")} text = {`${isShowed ? "Remove From Cart" : "Add To Cart"}`} style = {{color : "#FFFFFF" , backgroundColor : "#274C5B"}}/>
                </div>
            </div>
        </section>
      </>
    );
}
