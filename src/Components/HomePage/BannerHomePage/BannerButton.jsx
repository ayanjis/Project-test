import './BannerButton.css';
import arrow from '../../../Assets/Icons/HomePage/Arrow.png';

export default function Button (props){
    const {text , style , className , onClick} = props
    return (
       <button type='submit' style={style} className={className} onClick={onClick}>
         <span className="submit">{text}</span>
         <span className="arrow"><img src={arrow} alt="arrow"/></span>
       </button>
  );
}