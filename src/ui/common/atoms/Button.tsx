interface ButtonProps {
    name: string;
    type: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<ButtonProps> = ({ name, type = "submit" }) => {
    return (
        <div>
            <button type={type}>{name}</button>
        </div>
    );
};

export default Button;
