import { image } from '@config/constant/image';

interface ButtonProps {
    name: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    name,
    type = undefined,
    disabled = false,
}) => {
    return (
        <div>
            <button type={type} disabled={disabled}>
                {disabled ? (
                    <img src={image?.loader} id='loader' alt='' />
                ) : (
                    name
                )}
            </button>
        </div>
    );
};

export default Button;
