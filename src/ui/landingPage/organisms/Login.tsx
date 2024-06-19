import { image } from "@config/constant/image"
import Button from "@ui/common/atoms/Button"
import InputField from "@ui/common/atoms/InputField"

const Login = () => {
    return (
        <div className='login'>
            <h2>Welcome to</h2>
            <img src={image?.logo} alt="logo" />
            <h2>Enter your credentials</h2>

            <form action="">
                <InputField
                    placeholder="Email"
                    name="email"
                />

                <InputField
                    placeholder="Password"
                    name="password"
                    type="password"
                />

                <Button name="Login" type="submit" />
            </form>
        </div>
    )
}

export default Login