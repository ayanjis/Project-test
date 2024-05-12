import './index.css'

export function About (props){
    const {children , styles} = props
    const style = {
        backgroundColor:"#F9F8F8",
        ...styles
    }
    return <div className="AboutUs" style={style}>
        {children}
    </div>
}

export function PointsAboutUs (Characteristics) {
    const {icon , title , subTitle , style} = Characteristics;
    return  (
           <div className="pointAboutUs" style={style}>
               <div className="icon"><img src= {icon} alt="icon" /></div>
               <div className="description">
                  <h4 className="title">{title}</h4>
                  <p className="text">{subTitle}</p>
               </div>
            </div>
            )
}