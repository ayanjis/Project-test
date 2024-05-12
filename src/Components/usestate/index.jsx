// import { useState } from "react";
// import './index.css';
// import Button from "../HomePage/BannerHomePage/Common";

// export default function Myform(){
//     const [FullName,setFullName]=useState('')
//     const [ErrorFullName,setErrorFullName]=useState(null)
//     const [Email,setEmail]=useState('')
//     const [ErrorEmail,setErrorEmail]=useState(null)

//     const handleFullNameChange=(event)=>{
//         setFullName(event.target.value)
//     }
    
//     const validerEmail = (Email) => {
//         var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//         return regex.test(Email);
//       }         
//     const handleEmailChange=(event)=>{
//         setEmail(event.target.value)
//         console.log('email',Email)
//     }
       
//     function handleSubmit(event){
//         event.preventDefault()
//         if (FullName.length < 4 || FullName?.length > 10){
//             setErrorFullName(`you are writing ${FullName.length} characters  but Name must have at least 4 characters and 10 as maximum`)
//         }
//         else {
//             setErrorFullName('')
//         }
//         if (!validerEmail(Email)) {
//             setErrorEmail("L'email est invalide.");
//         }
//         else {
//             setErrorFullName('')
//         }
//     }
    
//     return(
//         <form onSubmit={handleSubmit}>
//             <label className="myformLabel">
//                 Full Name*
//                 <input type="text" className="myformInput" placeholder="Your Name" onChange={handleFullNameChange}
//                 style={{
//                     border: `${ErrorFullName?.length > 0   ? "1px solid red" : ErrorFullName?.length === 0 ? "1px solid green" : "none"}`
//                 }}
//                 />
//                 {
//                    ErrorFullName?.length > 0 && <h4>{ErrorFullName}</h4>
//                 }
//             </label>
//             <label className="myformLabel">
//                 Your Email*
//                 <input type="text" className="myformInput" placeholder ='example@yourmail.com' onChange={handleEmailChange} 
//                 style={
//                     {
//                         border: `${ErrorEmail?.length > 0   ? "1px solid red" : ErrorEmail?.length === 0 ? "1px solid green" :"none"}`
//                     }
//                 }
//                 />
//                 {
//                    ErrorEmail?.length > 0 && <h4>{ErrorEmail}</h4>
//                 }
//             </label>
//             <Button className = "emailBtn" text = "Send Message" style = {{color : "#FFFFFF" , backgroundColor : "#274C5B"}} />    

//         </form>
//     )
// }


import { useState } from "react";
import './index.css';
import Button from "../HomePage/BannerHomePage/BannerButton";


export default function Myform(){
    const [FullName,setFullName]=useState('')
    const [ErrorFullName,setErrorFullName]=useState(null)
    const [Email,setEmail]=useState('')
    const [ErrorEmail,setErrorEmail]=useState(null)

    const handleFullNameChange=(event)=>{
        setFullName(event.target.value)
    }
           
    const handleEmailChange=(event)=>{
        setEmail(event.target.value)
    }
    const validerEmail = (Email) => {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(Email);
    }     
    function handleSubmit(event){
        event.preventDefault()
        if (FullName.length < 4 || FullName?.length > 10){
            setErrorFullName(`you are writing ${FullName.length} characters  but Name must have at least 4 characters and 10 as maximum`)
        }
        else {
            setErrorFullName('')
        }
        if (!validerEmail(Email)) {
            setErrorEmail("L'email est invalide.");
        }
        else {
            setErrorEmail('') 
        }
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label className="myformLabel">
                Full Name*
                <input type="text" className="myformInput" placeholder="Your Name" onChange={handleFullNameChange}
                style={{
                    border: `${ErrorFullName?.length > 0   ? "1px solid red" : ErrorFullName?.length === 0 ? "1px solid green" : "none"}`
                }}
                />
                {
                   ErrorFullName?.length > 0 && <h4>{ErrorFullName}</h4>
                }
            </label>
            <label className="myformLabel">
                Your Email*
                <input type="text" className="myformInput" placeholder ='example@yourmail.com' onChange={handleEmailChange} 
                style={
                    {
                        border: `${ErrorEmail?.length > 0   ? "1px solid red" : ErrorEmail?.length === 0 ? "1px solid green" :"none"}`
                    }
                }
                />
                {
                   ErrorEmail?.length > 0 && <h4>{ErrorEmail}</h4>
                }
            </label>
            <Button className = "emailBtn" text = "Send Message" style = {{color : "#FFFFFF" , backgroundColor : "#274C5B"}} />    

        </form>
    )
}



