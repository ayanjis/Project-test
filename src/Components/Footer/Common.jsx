export function ElementsOption({title , subTitle}){
    return <div className="element">
              <h4>{title}</h4>
              <h6>{subTitle}</h6>
            </div>
}

export function SocialMediasOption({icon}){
    return <div className="socialMediasIcons" style={{color:"#274C5B"}}>{icon}</div>
}

export function UtilityOption({value}){
    return <h5>{value}</h5>
}


