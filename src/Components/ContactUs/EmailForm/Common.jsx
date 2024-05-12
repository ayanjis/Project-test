export default function InputForm ({ title, type, placeholder, value ,onChange, style,message}) {
    return (
        <>
        <label className="LabelInput">
            <span className="titleInput">{title}</span>
            <input type={type} placeholder = {placeholder} value={value} onChange={onChange}
             style={style} />
        </label>
        </>
    );
}