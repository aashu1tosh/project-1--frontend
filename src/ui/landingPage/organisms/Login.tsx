import { image } from "@config/constant/image";
import { loginPageLabel } from "@data/localization/landingPage/login";
import { useLanguage } from "@hooks/useLang";
import Button from "@ui/common/atoms/Button";
import InputField from "@ui/common/atoms/InputField";
import { Link } from "react-router-dom";

const Login = () => {
    const { language } = useLanguage();
    return (
        <div className="login">
            <h2>{loginPageLabel?.welcomeTo[language]}</h2>
            <Link to="/">
                <img src={image?.logo} alt="logo" />
            </Link>
            <h2>{loginPageLabel?.enterCredentials[language]}</h2>

            <form action="">
                <InputField placeholder="Email" name="email" />

                <InputField
                    placeholder="Password"
                    name="password"
                    type="password"
                />

                <Button name={loginPageLabel?.login[language]} type="submit" />
            </form>

            <p>
                <span className="site-color">
                    {loginPageLabel?.forgotPassword[language]}
                </span>
            </p>
            <p>{loginPageLabel?.registerNow[language]}</p>
        </div>
    );
};

export default Login;
