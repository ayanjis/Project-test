import { Logo, NavOption } from './Common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './index.css'
// import { object } from 'yup';

export default function Header (){
    const {addedItems}=useSelector((state)=>state.cart)

    useEffect(() => {
        console.log("Selected added items from store ", addedItems)
    },[addedItems])
    
    return(
        <>
        <header>
            <Logo/>
            <div className="nav">
                <NavOption text ="Home" href={'/ContactUs'} />
                <NavOption text ="About"/>
                <NavOption text ="Pages"/>
                <NavOption text ="Shop" href={'/Shop'}/>
                <NavOption text ="Projects"/>
                <NavOption text ="News"/>
            </div>
            <div className="searchCard">
                <div className="searchBar">
                    <input type="text" className='searchInput' />
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} size='xl' style={{color: "#ffffff",}}/></button>
                </div>
                <div className="card">
                    <button>
                    <FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#ffffff",}} />
                    </button>
                    <input type="text" className='cardInput'/>
                    <p>Cart ({Object.keys(addedItems).length})</p>
                </div>
            </div>
        </header>
        </>
    )
}