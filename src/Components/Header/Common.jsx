import logoHeader from '../../Assets/Icons/LogoHeader.png';
import './Common.css'
import {NavLink} from 'react-router-dom'

export function NavOption({text, href }){
    return <NavLink to = {href}> {text} </NavLink>
}

export function Logo(){
    return(
        <div className="logo">
          <img src={logoHeader} alt="LogoHeaderIcon"/>
          <h1>Organick</h1>
        </div>
    );
}