import Button from "../../../Components/HomePage/BannerHomePage/BannerButton";
import './index.css'
export default function ProductInformation() {
    return (
      <>
      <section className="productInformation">
        <div className="readMore">
            <Button text = "Product Description" className="bntDescription" style = {{color : "#FFFFFF" , backgroundColor : "#274C5B", width:"20rem"}}/>
            <Button text = "Additional Info"className="bntAdditional" style = {{color : "#274C5B" , backgroundColor : "#EFF6F1"}} />
        </div>
        <p className="moreInfoDescrip"> 
           <span>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health,</span>
           <span>ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition.It offers about 8-10% carbs. Simple</span>
            <span>sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</span>
        </p>
      </section>
      </>
    )
}
