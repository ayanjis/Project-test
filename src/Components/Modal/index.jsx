import './index.css'
export default function Modal (props) {
    const {children,onClose} = props
    return (
       <>
       <div className='modalBackground' onClick={onClose}></div>
        <div className="modalContent">
            {children}
            <button onClick={onClose} >close</button>
        </div>
        </>
    )
}