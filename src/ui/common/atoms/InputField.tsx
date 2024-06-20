import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface InputFieldProps {
    placeholder?: string;
    type?: string;
    name: string;
    readOnly?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
    placeholder,
    type = "text",
    name,
    readOnly = false,
}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const toggleField = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="input-wrapper">
            <input
                id={name}
                type={
                    type && type === "password"
                        ? showPassword
                            ? "text"
                            : "password"
                        : "text"
                }
                readOnly={readOnly}
                placeholder={placeholder}
                //   {...register(name, options)}
            />
            {type === "password" && (
                <span className="icon" onClick={toggleField}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
            )}
        </div>
    );
};

export default InputField;
