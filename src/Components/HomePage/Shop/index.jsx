import ShopCard from "./Common";
import './index.css'
import { NavLink } from "react-router-dom";
import { shopCard } from "../../../utils/constants";

export default function Shop (){
   
    return (
        <>
         <div className="Shop">
            <h3>Categories </h3>
            <h1>Our Products</h1>
            {shopCard.length > 0 &&
            <div className="ShopCards" >
              {shopCard.map(({ title ,ImgProducts, subTitle, Price, id })=> (
            <NavLink to ={`/Shop/${id}`} style = {{textDecorationLine : "none"}}>
              <ShopCard
              id = {id}
              title ={title}
              ImgProducts ={ImgProducts}
              subTitle = {subTitle}
              Price = {Price}
              discount ="$20.00"
              />
            </NavLink>
              ))}
            
            </div>
            }
         </div>
        </>
    );
}