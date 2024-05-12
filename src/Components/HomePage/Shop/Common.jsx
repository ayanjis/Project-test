import './Common.css';
import Rating from '../../../Assets/Icons/HomePage/Star.png';

export default function ShopCard (Products){
    const { title , subTitle , ImgProducts , Price , discount , id } =  Products;   
    return (
        <div className="ShopCard" key={id}>
         <div className="title">{title}</div>
         <img src={ImgProducts} alt="ImgProducts" className='ImgProducts' key={id}/>
         <h3 className='ProductName'>{subTitle}</h3>
         <p><span className='discount'>{discount}</span> <span className='Price'>{Price}</span><img src={Rating} alt="Rating"/><span></span></p>
        </div>
     ); 
}