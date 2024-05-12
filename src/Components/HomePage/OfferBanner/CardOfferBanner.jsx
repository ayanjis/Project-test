import './index.css'

export default function CardOfferBanner (props) {
    const {title , subTitle , cardImg , styles, classNameTitle , classNamesubtitle } = props;
    const style = {
        backgroundImage : `url(${cardImg})`,
        backgroundRepeat : "no-repeat",
        backgroundSize : "contain",
        ...styles
    }
    return (
        <div className="cardBanner" style={style}>
            <div className="cardimg">
              <h3 className={classNameTitle}>{title}</h3>
              <h2 className={classNamesubtitle}>{subTitle}</h2>
            </div>
        </div>
    );
}