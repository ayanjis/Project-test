import Banner from "../../Components/Common/Banner";
import NotFoundBg from '../../Assets/Images/NotFound/NotFoundBg.png'
import NotFoundImg from '../../Assets/Images/NotFound/NotFoundImg.png'
import Button from "../../Components/HomePage/BannerHomePage/BannerButton";
import './index.css'

export default function NotFound (){
    return (
        <>
        <Banner bannerBackground = {NotFoundBg}  bannerImage = {NotFoundImg}
        styles = {{ height : "75rem", display: "flex", justifyContent: "end", alignItems: "center"}}>
            <div className="contentNotFound">
               <h1 className="titleNotFound">404</h1>
               <h1 className="subtitleNotFound">Page not found</h1>
               <p className="textNotFound">The page you are looking for doesn't exist or has been moved</p>
               <Button text = "Go to Homepage" className = "returnButton"/>
            </div>
        </Banner>
        </>
    )
}