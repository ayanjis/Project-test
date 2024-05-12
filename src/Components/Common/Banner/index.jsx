import './index.css'

export default function Banner(props){
    const  { bannerBackground , bannerImage , styles , children } = props;
    const style = {
        backgroundImage : `url(${bannerBackground}),url(${bannerImage})`,
        backgroundSize : "contain",
        backgroundRepeat : "no-repeat",
        ...styles,
    };
    return (
        <div className="banner" style={style}>
            {children}
        </div>
    );
}