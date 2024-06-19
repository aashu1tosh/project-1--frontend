interface InputFieldProps {
    placeholder?: string;
    type?: string;
    name: string;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, type = "text", name }) => {
    return (
        <div className="group">
            <input type={type} className="input" id={name} />
            <span className="highlight" />
            <span className="bar" />
            <label htmlFor={name}>{placeholder}</label>
        </div>

    )
}

export default InputField