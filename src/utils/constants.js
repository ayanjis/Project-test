import {faFacebook,faPinterest,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons';
import emailImg from '../Assets/Icons/ContactUs/Email.png'
import PhoneImg from '../Assets/Icons/ContactUs/Phone.png'
import BroccoliImg from '../Assets/Images/HomePage/Product.png';
import BananaImg from '../Assets/Images/HomePage/Banana.png';
import WhiteNutsImg from '../Assets/Images/HomePage/WhiteNuts.png';
import TomatoImg from '../Assets/Images/HomePage/Tomato.png';
import MungBeanImg from '../Assets/Images/HomePage/MungBean.png';
import BrownHazelnutImg from '../Assets/Images/HomePage/BrownHazelnut.png';
import EggsImg from '../Assets/Images/HomePage/Eggs.png';
import ZelcoRuskImg from '../Assets/Images/HomePage/ZelcoRusk.png';
import OrganicIcon from '../Assets/Icons/HomePage/OrganicFoodsOnly.png';
import QualityIcon from '../Assets/Icons/HomePage/QualityStandards.png';


export const pointsContactUs = [
    {title:"Message" ,subtitle:"support@saasflow.com" ,icon:emailImg},
    {title:"Contact Us" ,subtitle:"+01 123 456 789" ,icon:PhoneImg},
]
export const socialMedias = [
    {icon : faInstagram },
    {icon : faFacebook },
    {icon : faTwitter },
    {icon : faPinterest },
]


export const shopCard = [
    {id:"1" , quantity:0, isAdd:false ,title :"Vegetable" ,ImgProducts : BroccoliImg ,subTitle:"Calabrese Broccoli" ,Price :"$13.00"},
    {id:"2" , quantity:0, isAdd:false ,title :"Fresh" ,ImgProducts : BananaImg ,subTitle:"Fresh Banana Fruites" ,Price :"$14.00"},
    {id:"3" , quantity:0, isAdd:false ,title :"Millets" ,ImgProducts : WhiteNutsImg ,subTitle:"White Nuts" ,Price :"$15.00"},
    {id:"4" , quantity:0, isAdd:false ,title :"Vegetable" ,ImgProducts : TomatoImg ,subTitle:"Vegan Red Tomato" ,Price :"$17.00"},
    {id:"5" , quantity:0, isAdd:false ,title :"Health" ,ImgProducts : MungBeanImg ,subTitle:"Mung Bean" ,Price :"$11.00"},
    {id:"6" , quantity:0, isAdd:false ,title :"Nuts" ,ImgProducts : BrownHazelnutImg ,subTitle:"Brown Hazelnut" ,Price :"$12.00"},
    {id:"7" , quantity:0, isAdd:false ,title :"Fresh" ,ImgProducts : EggsImg ,subTitle:"Eggs" ,Price :"$17.00"},
    {id:"8" , quantity:0, isAdd:false ,title :"Fresh" ,ImgProducts : ZelcoRuskImg ,subTitle:"Zelco Suji Elaichi Rusk" ,Price :"$15.00"}];



export const someCards = [
    {id:"1" ,title :"Vegetable" ,ImgProducts : BroccoliImg ,subTitle:"Calabrese Broccoli" ,Price :"$13.00"},
    {id:"2" ,title :"Fresh" ,ImgProducts : BananaImg ,subTitle:"Fresh Banana Fruites" ,Price :"$14.00"},
    {id:"3" ,title :"Millets" ,ImgProducts : WhiteNutsImg ,subTitle:"White Nuts" ,Price :"$15.00"},
    {id:"4" ,title :"Vegetable" ,ImgProducts : TomatoImg ,subTitle:"Vegan Red Tomato" ,Price :"$17.00"}]; 
    
    
export const pointsAboutUs = [
    {title : "Organic Foods Only" , subTitle : "Simply dummy text of the printing and typesetting industry. Lorem Ipsum", icon : QualityIcon},
    {title : "Quality Standards" , subTitle : "Simply dummy text of the printing and typesetting industry. Lorem Ipsum", icon : OrganicIcon}];    
